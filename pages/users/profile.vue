<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title> User Profile </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4" sm="4">
              <v-card>
                <v-img
                  :src="`${baseUrl}assets/images/profiles/${$auth.user.image}`"
                  width="300"
                  class="grey darken-4"
                ></v-img>
                <v-card-text class="text-caption black--text">
                  <div>Name: {{ $auth.user.name }}</div>
                  <div>Email: {{ $auth.user.email }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      baseUrl: process.env.baseUrl,
    };
  },
};
</script>