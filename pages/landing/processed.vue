<template>
  <v-row style="height: 100vh; background-color: #f8f7f7" align="center">
    <v-col cols="12">
      <v-row align="center">
        <v-col cols="12" class="text-center">
          <p class="text-h2">Thank You!</p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="d-flex justify-center">
          <div>
            <v-img :src="require('~/assets/images/oredoh.png')" width="100" />
          </div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="text-center">
          <p>Our representative will Contact you with in hours</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "empty",
};
</script>

<style>
</style>