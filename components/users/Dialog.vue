<template>
  <v-dialog v-model="dialog" max-width="750">
    <v-card>
      <v-form @submit.prevent="submit" ref="form" v-model="valid" lazy-validation>
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
                :rules="nameRules"
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
                :rules="emailRules"
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
                :rules="passwordRules"
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
                v-model="user.password_confirmation"
                :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
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
          <v-btn class="text-capitalize" small @click="closeDialog"
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
      valid: true,
      dialog: false,
      dialog_type: "add",
      show_password: false,
      show_confirmation_passowrd: false,
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        image: null,
      },
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 3) || "Name must be more than 3 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be more than 6 characters"
      ],
      confirmPasswordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    async submit() {
      if(this.$refs.form.validate()){
        let data = new FormData();
      data.append("name", this.user.name);
      data.append("email", this.user.email);
      data.append("password", this.user.password);
      data.append("password_confirmation", this.user.password_confirmation);
      if (this.user.image != null) {
        data.append("image", this.user.image);
      }
      let url="";
      if (this.dialog_type == "add") {
        url="user";
      } else {
        url=`user/${this.user.id}`;
        data.append("_method", "put");
      }
      await this.$axios
        .post(url, data, {
          header: { "Content-Type": "mulipart/form-data" },
        })
        .then((response) => {
          if(url=="user"){
            this.$toastr.s({
              title:'Success!',
              msg:'User inserted successfully!',
              timeout:3000,
              progressbar:true
            });
          }else{
            this.$toastr.s({
              title:'Success!',
              msg:'User Update successfully!',
              timeout:3000,
              progressbar:true
            });
          }
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
          password_confirmation: "",
          image: null,
        };
        this.dialog_type = "add";
      }
      this.dialog = true;
    },
    closeDialog(){
      this.dialog=false;
      this.$refs.form.resetValidation();
    }
  },
  computed:{
    passwordConfirmationRule() {
      return () =>
        this.user.password === this.user.password_confirmation || "Password must match";
    }
  }
};
</script>

<style>
</style>