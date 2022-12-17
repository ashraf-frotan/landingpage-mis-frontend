<template>
  <div>
    <Logo />
    <Slider />
    <template>
      <v-row class="white--text theme" align="center">
        <v-col cols="6"> 
          <div class="text-h6">299 AED <v-chip x-small color="white" class="primary--text pa-1"> <v-icon color="primary" x-small>mdi-flash</v-icon> <span style="font-weight: bolder;">9%</span></v-chip></div>
          <div class="text-caption text-decoration-line-through" style="margin-top:-8px;">329 AED</div>
        </v-col>
        <v-col cols="6" class="d-flex justify-end"> 1710 Sold </v-col>
      </v-row>
    </template>
    <template>
      <v-row align="center" justify="center">
        <v-col cols="12" align="center" justify="center"
          ><div>test</div>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="d-flex justify-center">
          <div>
            <v-rating
              color="warning"
              readonly
              half-increments
              length="5"
              :value="4.5"
            ></v-rating>

            test
          </div>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import Slider from "~/components/landing_page/Slider.vue";
import Logo from "~/components/landing_page/Logo.vue";
export default {
  components: {
    Slider,
    Logo,
  },
  layout: "landing",
  data(){
    return { 
    }
  },
  async asyncData({ params }) {
      const slug = params.slug
      return { slug }
    },
    created() {
      console.log(this.slug);
    }
};
</script>

<style>
.row {
  margin: 0 !important;
}
.theme{
  background-color: #b5201e;
}
</style>