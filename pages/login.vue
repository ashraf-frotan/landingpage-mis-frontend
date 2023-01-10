<template>
  <v-row align="center" style="height: 100vh">
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="pa-4" style="width: 460px" elevation="3">
        <v-card-title>
          <h2>Welcome</h2>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <span> Sign in to your account</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-form @submit.prevent="login" ref="login_form">
                <v-text-field
                  outlined
                  rounded
                  dense
                  placeholder="Enter email here"
                  type="email"
                  prepend-inner-icon="mdi-account"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  outlined
                  rounded
                  dense
                  placeholder="Enter password here"
                  prepend-inner-icon="mdi-lock"
                  :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show_password = !show_password"
                  :type="show_password ? 'text' : 'password'"
                  v-model="password"
                  :rules="passwordRules"
                ></v-text-field>
                <p class="error--text pl-4" :class="show_error || 'v-hidden'">
                  Invalid username or password
                </p>
                <v-row>
                  <v-col cols="6"
                    ><v-checkbox
                      label="Remember me"
                      hide-details=""
                      class="ma-0"
                      dense
                    ></v-checkbox
                  ></v-col>
                  <v-col cols="6" class="d-flex justify-end"
                    ><a href="" class="text-decoration-none mt-1"
                      >Forget Password</a
                    ></v-col
                  >
                </v-row>
                <v-btn
                  type="submit"
                  color="primary"
                  block
                  rounded
                  class="mt-6 text-capitalize"
                >
                  <v-icon small>mdi-lock-open</v-icon> &nbsp; Sign In
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {
      show_password: false,
      show_error: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must be more than 6 characters",
      ],
    };
  },
  watch: {
    email() {
      this.show_error = false;
    },
    password() {
      this.show_error = false;
    },
  },
  methods: {
    async login() {
      if (this.$refs.login_form.validate()) {
        await this.$auth
          .loginWith("laravelSanctum", {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            this.show_error = true;
          });
      }
    },
  },
};
</script>

<style scoped>
.v-hidden {
  visibility: hidden;
}
</style>