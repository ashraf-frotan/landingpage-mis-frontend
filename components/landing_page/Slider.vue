 <template>
  <v-carousel
    cycle
    show-arrows
    hide-delimiter-background
    height="100%"
    :interval="6000"
  >
    <v-carousel-item v-for="(slide, i) in s_images" :key="i">
      <v-img :src="`${baseUrl}assets/images/products/${pcode}${slide.name}`"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: ["s_images","pcode"],
  data(){
    return {
      baseUrl:process.env.baseUrl
    }
  }
};
</script>
<style  scoped>
.v-carousel__controls__item {
  padding: 0 !important;
  margin: 0 !important;
}
</style>