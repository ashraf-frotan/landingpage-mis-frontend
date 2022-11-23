<template>
  <v-row>
    <v-col cols="12">
      <TitleCard :title_info="title_info" />
      <ActionsCard
        @openAddModal="add_dialog = true"
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
    <v-dialog v-model="add_dialog" max-width="400">
      <v-card>
        <v-card-title>Create Country</v-card-title>
        <v-form @submit.prevent="store" ref="add_form" v-model="valid">
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
              v-model="form_data.name"
            >
            </v-text-field>
            <v-text-field
              label="Country code"
              placeholder="Enter country code here .."
              dense
              rounded
              outlined
              required
              v-model="form_data.code"
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
              v-model="form_data.phonecode"
              :rules="nameRules"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small @click="add_dialog = false">Close</v-btn>
            <v-btn color="primary" small type="submit">Save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from "@nuxtjs/axios";
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
      valid: false,
      add_dialog: false,
      title_info: { title: "Countries", icon: "mdi-flag", url: "countries" },
      selected: [],
      singleSelect: false,
      countries: [
        { id: 1, code: "AFG", name: "Afghanistan", phonecode: "+93" },
        { id: 2, code: "AFG", name: "Afghanistan", phonecode: "+93" },
        { id: 3, code: "AFG", name: "Afghanistan", phonecode: "+93" },
        { id: 4, code: "AFG", name: "Afghanistan", phonecode: "+93" },
        { id: 5, code: "AFG", name: "Afghanistan", phonecode: "+93" },
      ],
      headers: [
        { text: "ID", value: "id" },
        { text: "Country Code", value: "code" },
        { text: "Name", value: "name" },
        { text: "Phone Code", value: "phonecode" },
      ],
      form_data: {
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
    index() {},
    store() {
      if (this.$refs.add_form.validate()) {
        this.form_data.id = 12;
        console.log(this.form_data);
        this.countries.push(this.form_data);
        this.add_dialog = false;
      }
    },
    edit() {
      if (this.selected.length > 1) {
        console.log("please select one");
      }
    },
    destroy() {
      console.log("delete dd");
    },
  },
  created() {
    console.log("created");
  },
};
</script>
