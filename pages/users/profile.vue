<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title> User Profile </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="5" sm="5">
              <v-card>
                <v-img
                  :src="require('~/assets/images/profile.jpg')"
                  width="100%"
                  class="grey darken-4"
                ></v-img>
                <v-card-title class="text-caption black--text">
                  <div>Name: Ashraf Frotan</div>
                  <div>Email: ashraffrotan36@gmail.com</div>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {};
</script>