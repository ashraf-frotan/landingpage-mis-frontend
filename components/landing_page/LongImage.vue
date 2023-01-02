<template>
  <v-row>
    <v-col cols="12" md="12" class="pa-0">
      <template v-for="(image, i) in l_images">
        <div  :key="i">
          <v-img :src="`${baseUrl}assets/images/products/${pcode}${image.name}`" width="100%"  alt="" />
        </div>
      </template>
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