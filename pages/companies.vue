<template>
  <v-row>
    <v-col cols="12">
      <TitleCard :title_info="title_info" />
      <ActionsCard
        @searchContent="singleSearch($event)"
        @openAddModal="openAddModal()"
      />
      <v-card>
        <v-card-text>
          <v-data-table
            :items="companies"
            :headers="headers"
            show-select
            :single-select="single_select"
            item-key="id"
            v-model="selected"
            dense
            :search="single_search"
          >
            <template v-slot:top>
              <v-switch label="Single Select"></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog v-model="add_dialog" max-width="400">
      <v-card class="pa-4">
        <v-form class="mt-4" @submit.prevent="store">
          <v-card-title> <h3>Create New Company</h3> </v-card-title>
          <v-card-text>
            <v-text-field
              label="Name"
              placeholder="Enter company name here"
              rounded
              outlined
              dense
              v-model="company.name"
            ></v-text-field>
            <v-select
              :items="countries"
              label="Select country"
              rounded
              dense
              outlined
              v-model="company.country_id"
            >
            </v-select>
            <v-file-input
              label="Please select logo"
              rounded
              outlined
              dense
              show-size=""
              small-chips
              ref="logo"
            >
            </v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="text-capitalize" small>Cancel</v-btn>
            <v-btn color="primary" class="text-capitalize" small type="submit"
              >Save</v-btn
            >
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
  components: {
    TitleCard,
    ActionsCard,
  },
  data() {
    return {
      add_dialog: false,
      selected: [],
      single_select: false,
      single_search: "",
      countries: ["af", "js"],
      title_info: { title: "Companies", icon: "mdi-domain", url: "companies" },
      companies: [],
      company: { name: "tst", country_id: "test", logo: "test" },
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Logo", value: "logo" },
        { text: "Country", value: "country_id" },
      ],
    };
  },
  methods: {
    index() {
      this.$axios
        .get("company")
        .then((response) => {
          this.companies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    store() {
      this.company.logo = this.$refs.logo.files[0];
      console.log(this.company.logo);
      this.$axios
        .post("company", this.company, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    singleSearch(data) {
      this.single_search = data;
    },
    openAddModal() {
      this.add_dialog = true;
      // this.getCountries();
    },

    getCountries() {
      this.$axios
        .get("country")
        .then((response) => {
          this.countries = response.data.map((e) => e.name);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.index();
  },
};
</script>

<style>
</style>