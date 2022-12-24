 <template>
  <v-carousel
    cycle
    show-arrows
    hide-delimiter-background
    height="100%"
    :interval="6000"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img :src="slide"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        require("~/assets/images/S1/1.jpg"),
        require("~/assets/images/S1/2.jpg"),
        require("~/assets/images/S1/3.jpg"),
        require("~/assets/images/S1/4.jpg"),
      ],
    };
  },
};
</script>
<style  scoped>
.v-carousel__controls__item {
  padding: 0 !important;
  margin: 0 !important;
}
</style>