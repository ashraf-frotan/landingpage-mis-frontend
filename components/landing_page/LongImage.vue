<template>
  <v-row>
    <v-col cols="12" md="12" class="pa-0">
      <template v-for="(image, i) in l_images">
        <v-img :src="image.name" width="100%" :key="i" alt="" />
      </template>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: ["l_images","pcode"],
};
</script>