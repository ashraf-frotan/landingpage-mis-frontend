<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{
          title: 'Page types',
          icon: 'mdi-image-album',
          url: 'page_types',
        }"
      />
      <ActionsCard
        @openAddDialog="openAddDialog"
        @openEditDialog="edit"
        @deleteRecord="destroy"
        @openFilterDialog="openFilterDialog"
        @resetDatatable="resetDatatable"
      />
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="page_types"
            show-select
            v-model="selected"
            :single-select="single_select"
            item-key="id"
            dense
            :search="single_search"
          >
            <template v-slot:item.company_id="{ item }">
              {{ item.company.name }}
            </template>
            <template v-slot:top>
              <v-switch
                v-model="single_select"
                label="Single select"
              ></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- START ADD DIALOG -->
    <v-dialog v-model="add_dialog" width="400">
      <v-card>
        <v-form class="pa-4" @submit.prevent="store()" ref="add_form">
          <v-card-title>Create new page type</v-card-title>
          <v-card-text>
            <v-text-field
              :rules="nameRules"
              lable="Name"
              placeholder="Enter name here"
              v-model="page_type.name"
              dense
              outlined
              rounded
            ></v-text-field>
            <v-select
              v-model="page_type.company_id"
              :items="companies"
              item-text="name"
              item-value="id"
              rounded
              outlined
              dense
              label="Company"
              placeholder="Please select company"
              class="mt-2"
              :rules="[(v) => !!v || 'Company is required']"
            ></v-select>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small class="text-capitalize" @click="closeAddDialog()"
              >Cancel</v-btn
            >
            <v-btn small color="primary" type="submit" class="text-capitalize"
              >Save</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END ADD DIALOG -->
    <!-- START EDIT DIALOG -->
    <v-dialog v-model="edit_dialog" width="400">
      <v-card>
        <v-form class="pa-4" @submit.prevent="update()" ref="edit_form">
          <v-card-title>Edit page type</v-card-title>
          <v-card-text>
            <v-text-field
              :rules="nameRules"
              lable="Name"
              placeholder="Enter name here"
              v-model="page_type.name"
              dense
              outlined
              rounded
            ></v-text-field>
            <v-select
              v-model="page_type.company_id"
              :items="companies"
              item-text="name"
              item-value="id"
              rounded
              outlined
              dense
              label="Company"
              placeholder="Please select company"
              class="mt-2"
              :rules="[(v) => !!v || 'Company is required']"
            ></v-select>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small class="text-capitalize" @click="edit_dialog = false"
              >Cancel</v-btn
            >
            <v-btn small color="primary" type="submit" class="text-capitalize"
              >Update</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END EDIT DIALOG -->
    <!-- START FILTER DIALOG -->
    <v-dialog v-model="filter_dialog" width="400">
      <v-card>
        <v-form class="pa-4" @submit.prevent="filter()" ref="filter_form">
          <v-card-title>Filter page type</v-card-title>
          <v-card-text>
            <v-text-field
              lable="ID"
              placeholder="Enter id here"
              v-model="page_type.id"
              dense
              outlined
              rounded
            ></v-text-field>
            <v-text-field
              lable="Name"
              placeholder="Enter name here"
              v-model="page_type.name"
              dense
              outlined
              rounded
            ></v-text-field>
            <v-select
              v-model="page_type.company_id"
              :items="companies"
              item-text="name"
              item-value="id"
              rounded
              outlined
              dense
              label="Company"
              placeholder="Please select company"
              class="mt-2"
              :rules="[(v) => !!v || 'Company is required']"
            ></v-select>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn small class="text-capitalize" @click="filter_dialog = false"
              >Cancel</v-btn
            >
            <v-btn small color="primary" type="submit" class="text-capitalize"
              >Filter</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <!-- END FILTER DIALOG -->
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      single_select: false,
      single_search: "",
      add_dialog: false,
      edit_dialog: false,
      filter_dialog: false,
      selected: [],
      companies: [],
      page_type: { id: null, name: "", company_id: null },
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Company", value: "company_id" },
      ],
      page_types: [],
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
        .get("page_type")
        .then((response) => {
          this.page_types = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    store() {
      if (this.$refs.add_form.validate()) {
        this.$axios
          .post("page_type", this.page_type)
          .then((response) => {
            this.page_types.push(response.data);
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
    edit() {
      if (this.selected.length == 1) {
        this.getCompanies();
        this.page_type = JSON.parse(JSON.stringify(this.selected[0]));
        this.edit_dialog = true;
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select a record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    update() {
      if (this.$refs.edit_form.validate()) {
        this.$axios
          .put(`page_type/${this.page_type.id}`, this.page_type)
          .then((response) => {
            this.index();
            this.edit_dialog = false;
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
      }
    },
    destroy() {
      if (!this.selected.length < 1) {
        let arr_delete = this.selected.map((e) => e.id);
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
              .delete("page_type/1", { params: arr_delete })
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
    filter() {
      this.$axios
        .get("filter_page_type", { params: this.page_type })
        .then((response) => {
          this.page_types = response.data;
          this.filter_dialog = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCompanies() {
      this.$axios
        .get("company")
        .then((response) => {
          this.companies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openAddDialog() {
      this.add_dialog = true;
      this.page_type = {};
      this.getCompanies();
    },
    closeAddDialog() {
      this.add_dialog = false;
      this.$refs.add_form.reset();
    },
    openFilterDialog() {
      this.getCompanies();
      this.page_type = {};
      this.filter_dialog = true;
    },
    resetDatatable() {
      this.index();
    },
  },
  created() {
    this.index();
  },
};
</script>
<style></style>