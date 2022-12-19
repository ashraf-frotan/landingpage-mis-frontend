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
          ><h3 class="mt-3 font-size-16 font-weight-500">
            كاميرا المراقبة بالصوت والصورة 1080
          </h3>
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
        <v-col cols="12" class="px-2 font-size-14">
          <div class="mx-2 pa-2" style="background-color: #efeff4">
            <v-icon>mdi-airplane</v-icon> Ships with 24 hours, delivered within
            1-3 working days
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/money.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-12 mt-1">CASH ON DELIVERY</div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/shipping.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-12 mt-1">FREE SHIPPING</div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/change.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-12 mt-1">7 DAY FREE CHANGE</div>
        </v-col>
        <v-col cols="3">
          <div class="d-flex justify-center">
            <img src="~/assets/images/service.png" width="40" alt="" />
          </div>
          <div class="text-center font-size-12 mt-1">7X24 SERVICES</div>
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
      <v-row>
        <v-col cols="12">
          <div style="font-size: 20px" class="black--text font-weight-medium">
            327 Customer Reviews
          </div>
          <div class="d-flex" style="font-size: 12px">
            <v-rating
              color="warning"
              readonly
              half-increments
              length="5"
              :value="4.8"
            ></v-rating>
            &nbsp; &nbsp;
            <span style="margin-top: 3px"> 4.8 </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>I's perfect for me</div>
          </v-sheet>
        </v-col>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>safe and sound. Good</div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>Super seller. I highly recommend</div>
          </v-sheet>
        </v-col>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>حلووووه مررررههه</div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="5"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 5 </span>
            </div>
            <div>recommend to buy!</div>
          </v-sheet>
        </v-col>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>Good seller.</div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>High quality made. satisfied order.</div>
          </v-sheet>
        </v-col>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>نفس الصوره</div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="5"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 5 </span>
            </div>
            <div>Everything allright! Fast delivery!</div>
          </v-sheet>
        </v-col>
        <v-col cols="6" md="6" sm="6" xs="6">
          <v-sheet
            color="white"
            elevation="1"
            class="px-4 py-3 font-size-12"
            rounded
            width="100%"
          >
            <div class="d-flex">
              <v-rating
                color="warning"
                readonly
                half-increments
                length="5"
                :value="4.8"
              ></v-rating>
              &nbsp; &nbsp;
              <span style="margin-top: 2px"> 4.8 </span>
            </div>
            <div>it is safe and sound.</div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-bottom-navigation
        fixed
        color="white"
        horizontal
        style="margin: auto; right: 0; bottom: 0; left: 0; cursor: pointer"
        max-width="760"
      >
        <v-row align="center">
          <v-col cols="3" md="3" sm="3" xs="3" class="d-flex justify-center">
            <v-icon large>mdi-headset</v-icon>
          </v-col>
          <v-col
            cols="9"
            md="9"
            sm="9"
            xs="9"
            class="theme d-flex justify-center"
          >
            <div>
              <v-icon large color="white">mdi-shopping</v-icon>
              <span style="font-size: 20px">BUY NOW</span>
            </div>
          </v-col>
        </v-row>
      </v-bottom-navigation>
    </template>
    <!-- Start Dialog -->
    <v-dialog
      v-model="dialog"
      max-width="500"
      transition="dialog-bottom-transition"
      class="rounded"
    >
      <v-card>
        <v-card-title
          class="theme d-flex justify-space-between font-size-16 white--text"
        >
          <div></div>
          <div>Buy Now</div>
          <div><v-icon color="white">mdi-close</v-icon></div>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-form>
                <v-text-field outlined dense prepend-inner-icon="mdi-account" placeholder="Name"></v-text-field>
                <v-select :items="prices" item-text="text" item-value="value" prepend-inner-icon="mdi-scale-balance" outlined dense></v-select>
                <v-text-field outlined dense prepend-inner-icon="mdi-phone" placeholder="Phone Number"></v-text-field>
                <v-select :items="prices" item-text="text" item-value="value" prepend-inner-icon="mdi-map-marker-radius" outlined dense></v-select>
                <v-select :items="prices" item-text="text" item-value="value" prepend-inner-icon="mdi-map-marker-radius" outlined dense></v-select>
                <v-text-field outlined dense prepend-inner-icon="mdi-map-marker-radius" placeholder="Address"></v-text-field>
                <v-btn
                  class="theme white--text"
                  style="font-size: 24px"
                  block
                  height="60"
                  >BUY NOW</v-btn
                >
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- End Dialog -->
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
      dialog: true,
      images: [
        require("~/assets/images/S1/1.jpg"),
        require("~/assets/images/S1/2.jpg"),
        require("~/assets/images/S1/3.jpg"),
        require("~/assets/images/S1/4.jpg"),
      ],
      prices:[
        {value:149,text:'1 piece 149 dirhams'},
        {value:259,text:'3 piece 259 dirhams'},
        {value:369,text:'3 piece 369 dirhams'},
      ]
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
  background-color: #b5201e !important;
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
.font-size-14 {
  font-size: 14px !important;
}

.font-size-12 {
  font-size: 12px !important;
}
.font-weight-500 {
  font-weight: 500;
}

.v-dialog {
  border-radius: 0 !important;
}
.v-card {
  border-radius: 0 !important;
}

* {
  font-family: Tahoma, Verdana, Segoe, sans-serif;
}
.v-input__icon--prepend-inner .v-icon{
  font-size: 28px !important;
}



</style>