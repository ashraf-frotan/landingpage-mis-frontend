<template>
  <div>
    <Logo />
    <Slider />
    <template>
      <v-row class="white--text theme" align="center">
        <v-col cols="6" class="py-2">
          <div class="text-h6">
            299 AED
            <v-chip x-small color="white" class="primary--text pa-1">
              <v-icon color="primary" x-small>mdi-flash</v-icon>
              <span style="font-weight: bolder">9%</span></v-chip
            >
          </div>
          <div
            class="text-caption text-decoration-line-through"
            style="margin-top: -8px"
          >
            329 AED
          </div>
        </v-col>
        <v-col cols="6" class="d-flex justify-end"> 1710 Sold </v-col>
      </v-row>
    </template>
    <template>
      <v-row align="center">
        <v-col cols="12" align="center" justify="center"
          ><h3 class="mt-3 font-size-16 font-weight-500">كاميرا المراقبة بالصوت والصورة 1080</h3>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" class="d-flex justify-center">
          <div class="d-flex" style="font-size: 12px">
            <v-rating
              color="warning"
              readonly
              half-increments
              length="5"
              :value="4.8"
            ></v-rating>
            &nbsp; &nbsp;
            <span style="margin-top: 3px">
              4.8 &nbsp; | &nbsp; 327 Reviews
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="px-2">
          <div
            class="mx-2 pa-2"
            style="background-color: #efeff4; font-size: 14px"
          >
            <v-icon>mdi-airplane</v-icon> Ships with 24 hours, delivered within
            1-3 working days
          </div>
        </v-col>
      </v-row>
      <v-row style="">
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/money.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-16 mt-1">CASH ON DELIVERY</div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/shipping.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-16 mt-1">FREE SHIPPING</div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/change.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-16 mt-1">7 DAY FREE CHANGE</div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/service.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-16 mt-1">7X24 SERVICES</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="pa-0">
          <v-tabs fixed-tabs>
            <v-tab class="text-capitalize"> Overview </v-tab>
            <v-tab class="text-capitalize"> Reviews </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="pa-0">
          <template v-for="(image, i) in images">
            <v-img :src="image" width="100%" :key="i" alt="" />
          </template>
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
  data() {
    return {
      images: [
        require("~/assets/images/S1/1.jpg"),
        require("~/assets/images/S1/2.jpg"),
        require("~/assets/images/S1/3.jpg"),
        require("~/assets/images/S1/4.jpg"),
      ],
    };
  },
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
  created() {
    console.log(this.slug);
  },
};
</script>

<style>
.row {
  margin: 0 !important;
}
.theme {
  background-color: #b5201e;
}

.v-rating .v-icon {
  padding: 0 !important;
}

.v-icon.v-icon {
  font-size: 16px;
}

.font-size-16 {
  font-size: 16px !important;
}

.font-weight-500{
  font-weight: 500;
}

*{
  font-family:  Tahoma,Verdana,Segoe,sans-serif;;
}
</style>