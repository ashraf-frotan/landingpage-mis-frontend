<template>
  <v-dialog v-model="dialog" max-width="750">
    <v-card>
      <v-form @submit.prevent="submit" ref="form">
        <v-card-title>
          <span v-if="dialog_type == 'add'"> Create New User</span>
          <span v-else> Edit User</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                placeholder="Enter username here"
                label="Username"
                dense
                rounded
                outlined
                hide-details="auto"
                v-model="user.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                placeholder="Enter email here"
                label="Email"
                type="email"
                dense
                rounded
                outlined
                hide-details="auto"
                v-model="user.email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                placeholder="Enter password here"
                label="Password"
                :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show_password ? 'text' : 'password'"
                @click:append="show_password = !show_password"
                dense
                rounded
                outlined
                hide-details="auto"
                v-model="user.password"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="6">
              <v-text-field
                placeholder="Enter confirmation password here"
                label="Confirmation Password"
                :append-icon="
                  show_confirmation_passowrd ? 'mdi-eye' : 'mdi-eye-off'
                "
                :type="show_confirmation_passowrd ? 'text' : 'password'"
                @click:append="
                  show_confirmation_passowrd = !show_confirmation_passowrd
                "
                dense
                rounded
                outlined
                hide-details="auto"
                v-model="user.confirmation_password"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-file-input
                accept="image/*"
                label="Profile Image"
                prepend-inner-icon="mdi-paperclip"
                prepend-icon=""
                dense
                rounded
                outlined
                hide-details="auto"
                @change="fileUpload"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn class="text-capitalize" small @click="dialog = false"
            >Cancel</v-btn
          >
          <v-btn class="text-capitalize primary" type="submit" small>
            <span v-if="dialog_type == 'add'">Save</span>
            <span v-else>Update</span>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      dialog: false,
      dialog_type: "add",
      show_password: false,
      show_confirmation_passowrd: false,
      user: {
        name: "",
        email: "",
        password: "",
        confirmation_password: "",
        image: null,
      },
    };
  },
  methods: {
    async submit() {
      let data = new FormData();
      data.append("name", this.user.name);
      data.append("email", this.user.email);
      data.append("password", this.user.password);
      data.append("confirm_password", this.user.confirmation_password);
      if (this.user.image != null) {
        data.append("image", this.user.image);
      }
      if (this.dialog_type == "add") {
        await this.$axios
          .post("user", data, {
            header: { "Content-Type": "mulipart/form-data" },
          })
          .then((response) => {
            this.dialog = false;
            this.$refs.form.reset();
            this.$emit("closeAddDialog");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        data.append("_method", "put");
        await this.$axios
          .post(`user/${this.user.id}`, data, {
            header: { "Content-Type": "mulipart/form-data" },
          })
          .then((response) => {
            this.dialog = false;
            this.$refs.form.reset();
            this.$emit("closeAddDialog");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fileUpload(file) {
      this.user.image = file;
    },
    openDialog(user) {
      if (user != null) {
        this.user = user;
        this.dialog_type = "edit";
      } else {
        this.user = {
          name: "",
          email: "",
          password: "",
          confirmation_password: "",
          image: null,
        };
        this.dialog_type = "add";
      }
      this.dialog = true;
    },
  },
};
</script>

<style>
</style>