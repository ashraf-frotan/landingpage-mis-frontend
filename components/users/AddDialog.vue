<template>
  <v-dialog v-model="add_dialog" max-width="750">
    <v-card>
      <v-card-title>
        <v-icon>mdi-account-plus</v-icon> &nbsp; Create New User
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <v-text-field
              placeholder="Enter username here"
              label="Username"
              dense
              rounded
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-text-field
              placeholder="Enter email here"
              label="Email"
              type="email"
              dense
              rounded
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" sm="12">
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
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="12">
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
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn class="text-capitalize" small>Cancel</v-btn>
        <v-btn class="text-capitalize primary" small>Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      add_dialog: true,
      show_password: false,
      show_confirmation_passowrd: false,
    };
  },
};
</script>

<style>
</style>