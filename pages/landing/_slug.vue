<template>
  <div>
    <Logo />
    <Slider />
    <template>
      <v-row class="white--text primary" align="center">
        <v-col cols="6"> <span class="text-body-2">test</span>
        </v-col>
        <v-col cols="6" class="d-flex justify-end"> test </v-col>
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
</style>