<template>
  <div>
    <v-dialog v-model="filter_dialog" max-width="700">
      <v-card>
        <v-form @submit="filter" ref="filter_form">
          <v-card-title> Filter Products </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4" sm="4" xs="4"
                ><v-select
                  dense
                  :items="countries"
                  item-text="name"
                  item-value="id"
                  v-model="landing_info.country_id"
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
                  v-model="landing_info.company_id"
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
                  v-model="landing_info.template_id"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" sm="6">
                <v-select
                  dense
                  :items="sale_types"
                  item-text="text"
                  item-value="sale_type"
                  placeholder="Select Sale Type"
                  v-model="landing_info.sale_type"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-select
                  dense
                  :items="product_types"
                  item-text="text"
                  item-value="is_collection"
                  placeholder="Select Product Type"
                  v-model="landing_info.is_collection"
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
            <v-btn small class="text-capitalize" @click="closeFilterDialog">
              Cancel
            </v-btn>
            <v-btn small class="text-capitalize primary" @click="filter"> Filter </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter_dialog: false,
      data: {},
      countries: [{id:'',name:'Select country'}],
      companies: [{id:'',name:'Select company'}],
      templates: [{id:'',name:'Select template'}],
      sale_types: [
        { sale_type: "", text: "Sale type" },
        { sale_type: 0, text: "Simple" },
        { sale_type: 1, text: "Buy 1 get 1 free" },
      ],
      product_types: [
        { is_collection: "", text: "Product type" },
        { is_collection: 0, text: "Piece" },
        { is_collection: 1, text: "Collection" },
      ],
      landing_info: {
        country_id: "",
        company_id: "",
        template_id: "",
        pcode: "",
        title: "",
        sale_type: "",
        is_collection:"",
      },
    };
  },
  methods: {
    getInfo() {
      this.$axios
        .get("get_info")
        .then((response) => {
          this.data = response.data;
          this.countries.push(...this.data.countries);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCompanies(id) {
      this.companies=[{id:'',name:'Select company'}];
      this.landing_info.country_id = id;
      let filtered_companies = this.data.companies.filter((el) => {
        return el.country_id == id;
      });
      this.companies.push(...filtered_companies);
      this.templates = [];
    },
    getTemplates(id) {
      this.templates=[{id:'',name:'Select company'}];
      this.landing_info.company_id = id;
      let filtered_templates = this.data.templates.filter((el) => {
        return el.id == id;
      });
      this.templates.push(...filtered_templates)
    },
    openFilterDialog() {
      this.filter_dialog = true;
    },
    closeFilterDialog() {
      this.$refs.filter_form.reset();
      this.filter_dialog = false;
    },
    filter() {
      console.log(this.landing_info);
      // this.$emit('closeFilterDialog',this.landing_info);
      // this.$refs.filter_form.reset();
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<style>
</style>