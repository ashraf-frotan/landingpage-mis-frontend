<template>
  <div>
    <v-dialog v-model="filter_dialog" max-width="700">
      <v-card>
        <v-card-title> Filter Products </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4" sm="4" xs="4"
              ><v-select
                dense
                :items="countries"
                item-text="name"
                item-value="id"
                @change="getCompanies($event)"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
              <v-select
                dense
                :items="companies"
                item-text="name"
                item-value="id"
                @change="getTemplates($event)"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
              <v-select
                dense
                :items="templates"
                item-text="name"
                item-value="id"
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small class="text-capitalize"> Cancel </v-btn>
          <v-btn small class="text-capitalize"> Filter </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter_dialog: true,
      data: {},
      countries: [],
      companies: [],
      templates: [],
      landing_info: {
        country_id: "",
        company_id: "",
        template_id: "",
        pcode: "",
        title: "",
        sale_type: "",
        page_type: "",
      },
    };
  },
  methods: {
    getInfo() {
      this.$axios
        .get("get_info")
        .then((response) => {
          this.data = response.data;
          this.countries = this.data.countries;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCompanies(id) {
      this.landing_info.country_id = id;
      console.log(id);
      this.companies = this.data.companies.filter((el) => {
        return el.country_id == id;
      });
      this.templates = [];
    },
    getTemplates(id) {
      this.landing_info.company_id = id;
      this.templates = this.data.templates.filter((el) => {
        return el.id == id;
      });
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style>
</style>