<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{ title: 'Countries', icon: 'mdi-flag', url: 'countries' }"
      />
      <ActionsCard
        @openAddDialog="openDialog"
        @openEditDialog="edit"
        @deleteRecord="destroy"
        @searchContent="singleSearch($event)"
        @openFilterDialog="search_dialog = true"
        @resetDatatable="index"
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
            :single-select="single_select"
            :search="single_search"
          >
            <template v-slot:top>
              <v-switch
                label="Single Select"
                v-model="single_select"
              ></v-switch>
            </template>
            <template v-slot:item.flag="{ item }">
              <a
                :href="`${baseUrl}assets/images/flag/${item.flag}`"
                target="_blank"
              >
                <v-img
                  :src="`${baseUrl}assets/images/flag/${item.flag}`"
                  width="25"
                />
              </a>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>
          <div v-if="form_action == 'add'">Create New Country</div>
          <div v-else>Edit Country</div>
        </v-card-title>
        <v-form
          @submit.prevent="submit"
          ref="form"
          v-model.lazy="valid"
          lazy-validation
        >
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
            <v-file-input
              label="Flag"
              placeholder="Select flag"
              dense
              rounded
              outlined
              required
              @change="uploadFile"
            >
            </v-file-input>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small @click="closeDialog">Close</v-btn>
            <v-btn color="primary" small type="submit">
              <span v-if="form_action == 'add'">Save</span>
              <span v-else>Update</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- Search dialog -->
    <v-dialog v-model="search_dialog" max-width="400">
      <v-card>
        <v-card-title>
          <div>Search</div>
        </v-card-title>
        <v-form @submit.prevent="submitFilter">
          <v-card-text class="px-9">
            <v-divider></v-divider>
            <v-text-field
              label="Country ID"
              placeholder="Enter country id .."
              dense
              rounded
              outlined
              required
              class="mt-4"
              v-model="country.id"
            ></v-text-field>
            <v-text-field
              label="Country name"
              placeholder="Enter country name here .."
              dense
              rounded
              outlined
              required
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
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small @click="search_dialog = false">Close</v-btn>
            <v-btn color="primary" small type="submit"> Search </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
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
      title: "Country",
    };
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
      loader: false,
      single_search: "",
      search: {
        id: "",
        code: "",
        name: "",
        phonecode: "",
      },
      valid: true,
      dialog: false,
      selected: [],
      single_select: false,
      countries: [],
      form_action: "add",
      search_dialog: false,
      headers: [
        { text: "ID", value: "id" },
        { text: "Country Code", value: "code" },
        { text: "Name", value: "name" },
        { text: "Phone Code", value: "phonecode" },
        { text: "Flag", value: "flag" },
      ],
      country: {
        id: "",
        name: "",
        code: "",
        phonecode: "",
        flag: "",
      },
      nameRules: [
        (v) => !!v || "This field is required",
        (v) =>
          (v && v.length > 2) || "This field must be at least 3 characters",
      ],
    };
  },
  methods: {
    async index() {
      this.loader = true;
      await this.$axios
        .get("country")
        .then((response) => {
          this.countries = response.data;
          this.loader = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async submit() {
      if (this.$refs.form.validate()) {
        let data = new FormData();
        data.append("name", this.country.name);
        data.append("code", this.country.code);
        data.append("phonecode", this.country.phonecode);
        data.append("flag", this.country.flag);
        if (this.form_action == "add") {
          await this.$axios
            .post("country", data, {
              header: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              this.$refs.form.reset();
              this.countries.push(response.data);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          data.append("_method", "put");
          await this.$axios
            .post(`country/${this.country.id}`, data, {
              header: {
                "Content-type": "multipart/form-data",
              },
            })
            .then((response) => {
              this.$refs.form.reset();
              this.index();
            })
            .catch((e) => {
              console.log(e);
            });
        }
        this.$toastr.s({
          title: "Success!",
          msg: "Operation done successfully!",
          timeout: 3000,
          progressbar: true,
        });
        this.closeDialog();
        this.$refs.form.resetValidation();
      }
    },
    edit() {
      this.form_action = "edit";
      if (this.selected.length == 1) {
        this.country = JSON.parse(JSON.stringify(this.selected[0]));
        this.dialog = true;
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
              .delete(`country/1`, { params: arr_delete })
              .then((response) => {
                this.$toastr.s({
                  title: "Success!",
                  msg: "Records deleted successfully!.",
                  timeout: 2000,
                  progressbar: true,
                });
                this.countries = this.countries.filter((country) => {
                  return !arr_delete.includes(country.id);
                });
              })
              .catch((e) => {
                console.log(e);
              });
          }
        });
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select one record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    singleSearch(data) {
      this.single_search = data;
    },
    uploadFile(file) {
      this.country.flag = file;
    },
    submitFilter() {
      this.$axios
        .get("filter_country", { params: this.country })
        .then((response) => {
          this.countries = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.search_dialog = false;
      this.country = {};
    },
    openDialog() {
      this.dialog = true;
      this.form_action = "add";
    },
    closeDialog() {
      this.dialog = false;
      this.country = {};
      this.$refs.form.reset();
    },
  },
  created() {
    this.index();
  },
};
</script>
