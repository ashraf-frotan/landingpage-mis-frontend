<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <div>مصابح علی توصیل شکل هلال</div>
        <div>
          <div class="d-flex justify-space-around">
            <div style="width: 100px">
              توصیل مجانی
              <v-img :src="require('~/assets/images/oredoh.png')"></v-img>
            </div>
          </div>
        </div>
        <div>الدفع عند الاستعلام</div>
      </v-col>
      <v-col cols="12" class="justify-content-center pa-0">
        <div>مصابح علی توصیل شکل هلال</div>
        <div class="d-flex">
          توصیل مجانی
          <div>
            <v-img
              :src="require('~/assets/images/oredoh.png')"
              style="width: 40px"
            ></v-img>
          </div>
        </div>
        <div>الدفع عند الاستعلام</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "empty",
};
</script>

<style>
</style>