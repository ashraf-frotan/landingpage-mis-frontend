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
            <template v-slot:item.logo="{ item }">
              <v-img width="60" :src="item.logo" />
            </template>
            <template v-slot:item.country_id="{ item }">
              <span>{{item.country.name}}</span>
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
              item-text="name"
              item-value="id"
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
              @change="uploadFile"
            >
            </v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="text-capitalize" small @click="add_dialog=false">Cancel</v-btn>
            <v-btn color="primary" class="text-capitalize" small type="submit"
              >Save</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="edit_dialog" max-width="400">
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
              item-text="name"
              item-value="id"
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
              @change="uploadFile"
            >
            </v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="text-capitalize" small @click="add_dialog=false">Cancel</v-btn>
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
      edit_dialog: true,
      selected: [],
      single_select: false,
      single_search: "",
      countries: [],
      title_info: { title: "Companies", icon: "mdi-domain", url: "companies" },
      companies: [],
      company: { name: "", country_id: "", logo: "" },
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
      let data=new FormData();
      data.append('name',this.company.name);
      data.append('logo',this.company.logo);
      data.append('country_id',this.company.country_id);
      this.$axios
        .post("company", data, {
          header: {
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
      this.getCountries();
    },

    getCountries() {
      this.$axios
        .get("country")
        .then((response) => {
          this.countries=response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadFile(file){
      this.company.logo=file;
    }
  },
  created() {
    this.index();
  },
};
</script>

<style>
</style>