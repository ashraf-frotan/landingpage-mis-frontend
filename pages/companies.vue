<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{
          title: 'Companies',
          icon: 'mdi-domain',
          url: 'companies',
        }"
      />
      <ActionsCard
        @searchContent="singleSearch($event)"
        @openAddDialog="openAddDialog()"
        @openEditDialog="edit()"
        @resetDatatable="index"
        @deleteRecord="destroy()"
        @openFilterDialog="openFilterDialog()"
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
              <v-switch
                label="Single Select"
                v-model="single_select"
              ></v-switch>
            </template>
            <template v-slot:item.logo="{ item }">
              <a
                :href="`${baseUrl}assets/images/logo/${item.logo}`"
                target="_blank"
              >
                <v-img
                  width="60"
                  class="rounded"
                  :src="`${baseUrl}assets/images/logo/${item.logo}`"
                />
              </a>
            </template>
            <template v-slot:item.country_id="{ item }">
              <span>{{ item.country.name }}</span>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- START ADD DIALOG -->
    <v-dialog v-model="add_dialog" max-width="400">
      <v-card class="pa-4">
        <v-form
          class="mt-4"
          @submit.prevent="store"
          lazy-validation
          v-model="valid"
          ref="add_form"
        >
          <v-card-title> <h3>Create New Company</h3> </v-card-title>
          <v-card-text>
            <v-text-field
              label="Name"
              placeholder="Enter company name here"
              rounded
              outlined
              dense
              v-model="company.name"
              :rules="nameRules"
            ></v-text-field>
            <v-text-field
              label="Domain"
              placeholder="Enter domain name here"
              rounded
              outlined
              dense
              v-model="company.domain"
              :rules="nameRules"
            ></v-text-field>
            <v-select
              :items="countries"
              item-text="name"
              item-value="id"
              label="Select country"
              rounded
              dense
              outlined
              :rules="[(v) => !!v || 'Item is required']"
              v-model="company.country_id"
            >
            </v-select>
            <v-file-input
              label="Logo"
              placeholder="Please select logo"
              rounded
              outlined
              dense
              show-size=""
              small-chips
              @change="uploadFile"
              accept="image/*"
              required
              :rules="fileRules"
            >
            </v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="text-capitalize" small @click="closeAddDialog"
              >Cancel</v-btn
            >
            <v-btn color="primary" class="text-capitalize" small type="submit"
              >Save</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END ADD DIALOG -->

    <!-- START EDIT DIALOG -->
    <v-dialog v-model="edit_dialog" max-width="400">
      <v-card class="pa-4">
        <v-form
          class="mt-4"
          @submit.prevent="update"
          lazy-validation
          ref="edit_form"
          v-model="valid"
        >
          <v-card-title> <h3>Edit Company</h3> </v-card-title>
          <v-card-text>
            <v-text-field
              label="Name"
              placeholder="Enter company name here"
              rounded
              outlined
              dense
              v-model="company.name"
              :rules="nameRules"
            ></v-text-field>
            <v-text-field
              label="Domain"
              placeholder="Enter domain name here"
              rounded
              outlined
              dense
              v-model="company.domain"
              :rules="nameRules"
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
              label="Logo"
              placeholder="Please select logo"
              accept="image/*"
              rounded
              outlined
              dense
              @change="uploadFile"
            >
            </v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="text-capitalize" small @click="closeEditDialog"
              >Cancel</v-btn
            >
            <v-btn color="primary" class="text-capitalize" small type="submit"
              >Update</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END EDIT DIALOG -->
    <!-- START FILTER DIALOG -->
    <v-dialog v-model="filter_dialog" max-width="400">
      <v-card class="pa-4">
        <v-card-title> <h3>Filter Company</h3> </v-card-title>
        <v-card-text>
          <v-text-field
            label="ID"
            placeholder="Enter company id here"
            rounded
            outlined
            dense
            v-model="company.id"
          ></v-text-field>
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
            :rules="[(v) => !!v || 'Country is required']"
            v-model="company.country_id"
          >
          </v-select>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn class="text-capitalize" small @click="filter_dialog = false"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            class="text-capitalize"
            small
            @click="submitFilter()"
            >Filter</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- END FILTER DIALOG -->
    <!-- Start Loader  -->
    <v-dialog v-model="loader" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- End Loader  -->
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: "Companies",
    };
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
      loader: false,
      add_dialog: false,
      edit_dialog: false,
      filter_dialog: false,
      selected: [],
      valid: false,
      single_select: false,
      single_search: "",
      countries: [],
      companies: [],
      company: { name: "", domain: "", country_id: null, logo: "" },
      edit_company: { name: "", country_id: null, logo: "" },
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Domain", value: "domain" },
        { text: "Logo", value: "logo" },
        { text: "Country", value: "country_id" },
      ],
      nameRules: [
        (v) => !!v || "This field is required",
        (v) =>
          (v && v.length > 2) || "This field must be at least 3 characters",
      ],
      fileRules: [
        (v) => !!v || "File is required",
        (v) => (v && v.size > 0) || "File is required",
      ],
    };
  },
  methods: {
    async index() {
      this.loader = true;
      await this.$axios
        .get("company")
        .then((response) => {
          this.companies = response.data;
          this.loader = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    store() {
      if (this.$refs.add_form.validate()) {
        let data = new FormData();
        data.append("name", this.company.name);
        data.append("domain", this.company.domain);
        data.append("logo", this.company.logo);
        data.append("country_id", this.company.country_id);
        this.$axios
          .post("company", data, {
            header: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.companies.push(response.data);
            this.closeAddDialog();
            this.$toastr.s({
              title: "Success!",
              msg: "Record inserted successfully.",
              timeout: 3000,
              progressbar: true,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async update() {
      this.$refs.edit_form.validate();
      let data = new FormData();
      data.append("name", this.company.name);
      data.append("domain", this.company.domain);
      data.append("country_id", this.company.country_id);
      data.append("logo", this.company.logo);
      data.append("_method", "put");
      await this.$axios
        .post(`company/${this.company.id}`, data, {
          header: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.index();
          this.selected = [];
          this.closeEditDialog();
          this.$toastr.s({
            title: "Success!",
            msg: "Record updated successfully.",
            timeout: 3000,
            progressbar: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    singleSearch(data) {
      this.single_search = data;
    },
    openAddDialog() {
      this.add_dialog = true;
      this.getCountries();
    },
    edit() {
      if (this.selected.length == 1) {
        this.getCountries();
        this.edit_dialog = true;
        this.company = JSON.parse(JSON.stringify(this.selected[0]));
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select one record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    destroy() {
      let arr_delete = this.selected.map((e) => e.id);
      if (!this.selected.length < 1) {
        this.$swal({
          icon: "info",
          title: "Are you sure to delete?",
          confirmButtonText: "Yes",
          showCancelButton: true,
          confirmButtonColor: "#1976d2",
          cancelButtonColor: "red",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$axios
              .delete("company/1", { params: arr_delete })
              .then((response) => {
                this.index();
                this.$toastr.s({
                  title: "Success!",
                  msg: "Record deleted successfully.",
                  timeout: 3000,
                  progressbar: true,
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select at least one record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    getCountries() {
      this.$axios
        .get("country")
        .then((response) => {
          this.countries = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadFile(file) {
      this.company.logo = file;
    },
    closeAddDialog() {
      this.$refs.add_form.reset();
      this.add_dialog = false;
    },
    closeEditDialog() {
      this.$refs.edit_form.reset();
      this.edit_dialog = false;
    },
    submitFilter() {
      this.$axios
        .get("filter_company", { params: this.company })
        .then((response) => {
          this.companies = response.data;
          this.filter_dialog = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openFilterDialog() {
      this.filter_dialog = true;
      this.getCountries();
    },
  },
  created() {
    this.index();
  },
};
</script>
