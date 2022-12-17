<template>
  <div>
    <Logo />
    <Slider />
    <template>
      <v-row class="white--text theme" align="center">
        <v-col cols="6" class="py-2"> 
          <div class="text-h6">299 AED <v-chip x-small color="white" class="primary--text pa-1"> <v-icon color="primary" x-small>mdi-flash</v-icon> <span style="font-weight: bolder;">9%</span></v-chip></div>
          <div class="text-caption text-decoration-line-through" style="margin-top:-8px;">329 AED</div>
        </v-col>
        <v-col cols="6" class="d-flex justify-end"> 1710 Sold </v-col>
      </v-row>
    </template>
    <template>
      <v-row align="center">
        <v-col cols="12" align="center" justify="center"
          ><h3 class="mt-3">كاميرا المراقبة بالصوت والصورة 1080 </h3>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="d-flex justify-center">
          <div class="d-flex" style="font-size:12px;">
            <v-rating
              color="warning"
              readonly
              half-increments
              length="5"
              :value="4.8"
            ></v-rating> &nbsp; &nbsp;
            <span style="margin-top:3px" class="font-weight-bold">
              4.8 &nbsp;  | &nbsp;
            327 Reviews
            </span>
            
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="px-2">
          <div class="mx-2 pa-2" style="background-color: #efeff4;">here is some text in here</div>
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

.v-rating .v-icon{
  padding:0 !important;
}

.v-icon.v-icon {
  font-size:16px;
}
</style>