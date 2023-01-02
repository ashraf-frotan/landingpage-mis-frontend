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
                placeholder="Select Country"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
              <v-select
                dense
                :items="companies"
                item-text="name"
                item-value="id"
                @change="getTemplates($event)"
                placeholder="Select Company"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
              <v-select
                dense
                :items="templates"
                item-text="name"
                item-value="id"
                placeholder="Select Template"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" sm="6">
              <v-select
                dense
                :items="sale_types"
                item-text="text"
                item-value="type"
                placeholder="Select Sale Type"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-select
                dense
                :items="product_types"
                item-text="text"
                item-value="type"
                placeholder="Select Product Type"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                v-model="landing_info.pcode"
                dense
                placeholder="Insert Pcode"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                v-model="landing_info.title"
                dense
                placeholder="Insert Product Title"
              ></v-text-field>
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
      sale_types: [
        { type: 0, text: "Simple" },
        { type: 1, text: "Buy 1 get 1 free" },
      ],
      product_types: [
        { type: 0, text: "Piece" },
        { type: 1, text: "Collection" },
      ],
      landing_info: {
        country_id: "",
        company_id: "",
        template_id: "",
        pcode: "",
        title: "",
        sale_type: null,
        is_collection: null,
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