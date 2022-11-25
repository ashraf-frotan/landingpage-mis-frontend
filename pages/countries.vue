<template>
  <v-row>
    <v-col cols="12">
      <TitleCard :title_info="title_info" />
      <ActionsCard
        @openAddModal="openModal"
        @openEditModal="edit"
        @deleteRecord="destroy"
      />
      <v-card elevation="4">
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="countries"
            dense
            item-key="id"
            v-model="selected"
            show-select
            :single-select="singleSelect"
          >
            <template v-slot:top>
              <v-switch label="Single Select" v-model="singleSelect"></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>
          {{ modal_title }}
        </v-card-title>
        <v-form @submit.prevent="store" ref="form" v-model="valid">
          <v-card-text class="px-9">
            <v-divider></v-divider>
            <v-text-field
              label="Country name"
              placeholder="Enter country name here .."
              :rules="nameRules"
              dense
              rounded
              outlined
              required
              class="mt-4"
              v-model="country.name"
            >
            </v-text-field>
            <v-text-field
              label="Country code"
              placeholder="Enter country code here .."
              dense
              rounded
              outlined
              required
              v-model="country.code"
              :rules="nameRules"
            >
            </v-text-field>
            <v-text-field
              label="Phone code"
              placeholder="Enter phone code here .."
              dense
              rounded
              outlined
              required
              v-model="country.phonecode"
              :rules="nameRules"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small @click="dialog = false">Close</v-btn>
            <v-btn color="primary" small type="submit">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import TitleCard from "~/components/TitleCard.vue";
import ActionsCard from "~/components/ActionsCard.vue";
export default {
  name: "countries",
  components: {
    TitleCard,
    ActionsCard,
  },
  data() {
    return {
      modal_title: "Create Country",
      valid: false,
      dialog: false,
      title_info: { title: "Countries", icon: "mdi-flag", url: "countries" },
      selected: [],
      singleSelect: false,
      countries: [],
      country: null,
      headers: [
        { text: "ID", value: "id" },
        { text: "Country Code", value: "code" },
        { text: "Name", value: "name" },
        { text: "Phone Code", value: "phonecode" },
      ],
      country: {
        id: "",
        name: "",
        code: "",
        phonecode: "",
      },
      nameRules: [
        (v) => !!v || "This field is required",
        (v) =>
          (v && v.length > 2) || "This field must be at least 3 characters",
      ],
    };
  },
  methods: {
    index() {
      this.$axios
        .get("country")
        .then((response) => {
          this.countries = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    store() {
      if (this.$refs.form.validate()) {
        this.$axios
          .post("country", this.country)
          .then((response) => {
            this.countries.push(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
        this.dialog = false;
      }
    },
    edit() {
      this.modal_title = "Edit Country";
      if (this.selected.length > 1) {
      } else {
        this.country = this.countries.filter(
          (country) => country.id == this.selected[0].id
        );
        this.country = this.country[0];
        this.dialog = true;
      }
    },
    destroy() {
      console.log("delete dd");
    },
    openModal() {
      this.dialog = true;
      this.modal_title = "Create Country";
    },
  },
  created() {
    console.log(this.modal_title);
    this.index();
  },
};
</script>
