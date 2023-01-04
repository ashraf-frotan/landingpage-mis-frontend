<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{
          title: 'Users',
          icon: 'mdi-account-multiple',
          url: 'users',
        }"
      />
      <ActionsCard
        @openAddDialog="openDialog('add')"
        @openEditDialog="openDialog('edit')"
        @searchContent="singleSearch($event)"
        @openFilterDialog="openFilterDialog()"
        @deleteRecord="destroy"
        @resetDatatable="index"
      />
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="users"
            item-key="id"
            v-model="selected"
            show-select
            :single-select="single_select"
            :search="single_search"
          >
            <template v-slot:item.image="{ item }">
              <a
                :href="`${baseUrl}assets/images/profiles/${item.image}`"
                target="_blank"
              >
                <v-img
                  :src="`${baseUrl}assets/images/profiles/${item.image}`"
                  width="60"
                />
              </a>
            </template>
            <template v-slot:top>
              <v-switch color="primary" v-model="single_select" dense>
              </v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- START FILTER DIALOG -->
    <v-dialog v-model="filter_dialog" max-width="400">
      <v-card class="pa-4">
        <v-card-title> <h3>Filter User</h3> </v-card-title>
        <v-card-text>
          <v-text-field
            label="ID"
            placeholder="Enter user id here"
            rounded
            outlined
            dense
            v-model="user.id"
          ></v-text-field>
          <v-text-field
            label="Name"
            placeholder="Enter user name here"
            rounded
            outlined
            dense
            v-model="user.name"
          ></v-text-field>
          <v-text-field
            label="Email"
            placeholder="Enter user email here"
            rounded
            outlined
            dense
            type="email"
            v-model="user.email"
          ></v-text-field>
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
    <Dialog @closeAddDialog="index" ref="add_dialog" />
  </v-row>
</template>
<script>
import Dialog from "~/components/users/Dialog.vue";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
      filter_dialog: false,
      loader: true,
      single_search: "",
      single_select: false,
      users: [],
      user: { id: "", name: "", email: "" },
      selected: [],
      headers: [
        { value: "id", text: "ID" },
        { value: "name", text: "Name" },
        { value: "email", text: "Email" },
        { value: "image", text: "Profile" },
      ],
    };
  },
  methods: {
    index() {
      this.loader = true;
      this.$axios
        .get("user")
        .then((response) => {
          this.users = response.data;
          this.loader = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openDialog(type) {
      if (type == "add") {
        this.$refs.add_dialog.openDialog(null);
      } else {
        if (this.selected.length == 1) {
          this.user = JSON.parse(JSON.stringify(this.selected[0]));
          this.$refs.add_dialog.openDialog(this.user);
        } else {
          this.$toastr.i({
            title: "Info!",
            msg: "Please select one record",
            timeout: 3000,
            progressbar: true,
          });
        }
      }
    },
    destroy() {
      if (this.selected.length >= 1) {
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
              .delete("user/1", { params: arr_delete })
              .then((response) => {
                this.users = this.users.filter((user) => {
                  return !arr_delete.includes(user.id);
                });
                this.$toastr.i({
                  title: "Info!",
                  msg: "Deleted successfully.",
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
          msg: "Please select at least one record",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    singleSearch(value) {
      this.single_search = value;
    },
    openFilterDialog() {
      this.filter_dialog = true;
    },
    submitFilter() {
      this.loader = true;
      this.$axios
        .get("filter_user", { params: this.user })
        .then((response) => {
          this.users = response.data;
          this.filter_dialog = false;
          this.loader = false;
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