<template>
  <v-row>
    <v-col cols="12" md="12" class="pa-0">
      <div v-for="(image, i) in l_images" :key="i">
          <v-img :src="`${baseUrl}assets/images/products/${pcode}${image.name}`" width="100%"  alt="" />
        </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ["l_images","pcode"],
  data(){
    return {
      baseUrl:process.env.baseUrl
    }
  }
};
</script>