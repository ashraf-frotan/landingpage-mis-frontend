<template>
  <div>
    <div id="loading" v-if="loading">

    </div>
    <Logo />
    <Slider :s_images="s_images" />
    <template>
      <v-row class="white--text theme" align="center">
        <v-col cols="6" class="py-2">
          <div>
            <span style="font-size: 22px" class="font-weight-bold"
              >{{ one_price }} AED</span
            >
            <v-chip x-small color="white" class="primary--text pa-1">
              <v-icon color="primary" x-small>mdi-flash</v-icon>
              <span style="font-weight: bolder">50%</span></v-chip
            >
          </div>
          <div
            class="text-caption text-decoration-line-through"
            style="margin-top: -6px"
          >
            {{ old_price }} AED
          </div>
        </v-col>
        <v-col cols="6" class="d-flex justify-end font-size-12">
          1710 Sold
        </v-col>
      </v-row>
    </template>
    <template>
      <v-row align="center">
        <v-col cols="12" align="center" justify="center"
          ><h3 class="mt-3 font-size-16 font-weight-500">
            {{ product.title_en }}
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
            <span style="margin-top: 2px">
              4.8 &nbsp; | &nbsp; 327 Reviews
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="px-2 font-size-12">
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
      <v-row align="center" class="text-center mt-2">
        <v-col
          cols="6"
          md="6"
          class="pa-0"
          style="border-bottom: 5px solid #b5201e"
          id="tab1"
        >
          <p>Overview</p>
        </v-col>
        <v-col cols="6" md="6" class="pa-0 primary--text" id="tab2">
          <a href="#reviews" class="text-decoration-none"><p>Reviews</p></a>
        </v-col>
      </v-row>
      <LongImage :l_images="l_images" />
      <v-row id="reviews">
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
            <div>Super seller.</div>
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
            <div>High quality made.</div>
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
      <div style="position: relative">
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
              <div>Everything allright!</div>
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
        <v-row class="feedback-more">
          <v-col>
            <div class="d-flex justify-center font-size-14 pt-3">
              SEE ALL 327 REVIEWS
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="mt-10">
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <div class="font-size-16">CONTACT US</div>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="8" offset="2" class="py-0">
            <div class="py-4">
              <v-icon>mdi-mail</v-icon> {{ template.email }}
            </div>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="8" offset="2" class="py-0">
            <div class="py-4">
              <v-icon>mdi-phone</v-icon> {{ template.phone }}
            </div>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="8" offset="2" class="py-0">
            <div class="py-4"><v-icon>mdi-whatsapp</v-icon> WhatsApp</div>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row align="center" class="mb-16">
          <v-col cols="8" offset="2" class="py-0">
            <div class="d-flex justify-center py-4">Privacy Policy</div>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </div>
      <v-bottom-navigation
        fixed
        color="white"
        horizontal
        style="margin: auto; right: 0; bottom: 0; left: 0; cursor: pointer"
        max-width="760"
      >
        <v-row align="center">
          <v-col
            cols="3"
            md="3"
            sm="3"
            xs="3"
            class="d-flex justify-center"
            @click="sheet = true"
          >
            <v-icon large>mdi-headset</v-icon>
          </v-col>
          <v-col
            cols="9"
            md="9"
            sm="9"
            xs="9"
            class="theme d-flex justify-center"
            @click="dialog = true"
          >
            <div>
              <v-icon large color="white">mdi-shopping</v-icon>
              <span style="font-size: 20px">BUY NOW</span>
            </div>
          </v-col>
        </v-row>
      </v-bottom-navigation>
    </template>
    <v-bottom-sheet v-model="sheet" inset width="760px">
      <v-sheet class="text-center" height="300px" style="font-size: 12px">
        <v-row>
          <v-col cols="12" class="d-flex justify-space-between">
            <div class="font-size-18 font-weight-700">Contact Us</div>
            <v-icon @click="sheet = false">mdi-close</v-icon>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <div class="d-flex justify-center">
              <div class="mt-3 font-weight-bold">00971 &nbsp;</div>
              <input
                type="text"
                class="custom-input"
                placeholder="Phone Number"
              />
            </div>
            <div class="ma-2">
              <input type="text" class="custom-input" placeholder="Email" />
            </div>
            <div class="ma-2">
              <textarea
                type="text"
                class="custom-input"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div class="pa-2">
              <v-btn class="theme text-capitalize white--text py-6" block
                >Send</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-bottom-sheet>
    <!-- Start Dialog -->
    <v-dialog
      v-model="dialog"
      max-width="500"
      transition="dialog-bottom-transition"
      class="rounded"
      overlay-color="blue"
    >
      <v-card>
        <v-card-title
          class="theme d-flex justify-space-between font-size-16 white--text"
        >
          <div></div>
          <div>Buy Now</div>
          <div>
            <v-icon color="white" @click="dialog = false">mdi-close</v-icon>
          </div>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="8">
              <div class="d-flex justify-end">
                <v-chip x-small class="theme white--text pa-1">
                  OFF 50%
                </v-chip>
              </div>
              <div class="mt-5">
                <v-row>
                  <v-col cols="6">
                    <span
                      style="font-size: 20px"
                      class="text-decoration-line-through"
                      >{{ old_price }} AED</span
                    >
                  </v-col>
                  <v-col cols="6" class="pa-0">
                    <span style="font-size: 2rem" class="black--text">
                      {{ one_price }} AED</span
                    >
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="4">
              <v-img :src="d_image" width="120" alt="" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-form>
                <v-text-field
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                  placeholder="Name"
                ></v-text-field>
                <v-select
                  :items="prices"
                  item-text="text"
                  item-value="value"
                  prepend-inner-icon="mdi-scale-balance"
                  outlined
                  dense
                  placeholder="Pieces"
                ></v-select>
                <v-text-field
                  outlined
                  dense
                  prepend-inner-icon="mdi-phone"
                  placeholder="Phone Number"
                ></v-text-field>
                <v-select
                  :items="emirates"
                  item-text="name"
                  item-value="name"
                  prepend-inner-icon="mdi-map-marker-radius"
                  outlined
                  dense
                  @change="getCities($event)"
                  placeholder="Select Emirate"
                ></v-select>
                <v-select
                  :items="cities"
                  item-text="name"
                  item-value="name"
                  prepend-inner-icon="mdi-map-marker-radius"
                  outlined
                  dense
                  v-if="show_city_select"
                  placeholder="Select City"
                ></v-select>
                <v-text-field
                  outlined
                  dense
                  prepend-inner-icon="mdi-map-marker-radius"
                  placeholder="Address"
                ></v-text-field>
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
import LongImage from "~/components/landing_page/LongImage.vue";
import Logo from "~/components/landing_page/Logo.vue";
export default {
  components: {
    Slider,
    LongImage,
    Logo,
  },
  layout: "landing",
  data() {
    return {
      loading:true,
      dialog: false,
      sheet: false,
      cities: [],
      emirate: null,
      show_city_select: false,
      product: {},
      l_images: [],
      s_images: [],
      prices: [],
      d_image: "",
      one_price: null,
      old_price: null,
      template: {
        phone: "",
        email: "",
      },
    };
  },
  head(){
    return {
      title: this.product.title_en
    }
  },
  methods: {
    getCities($event) {
      let emirate = this.emirates.find((e) => e.name === $event);
      this.cities = emirate.subcities;
      this.show_city_select = true;
    },
    async show() {
      await this.$axios
        .get(`product/${this.slug}`)
        .then((response) => {
          this.product = response.data;
          this.template = this.product.template;
          this.one_price = response.data.selling_prices[0].price;
          this.old_price = response.data.selling_prices[0].old_price;
          let prices = response.data.selling_prices;
          let images = response.data.product_images;
          this.s_images = images.filter((el) => el.type == 0);
          this.l_images = images.filter((el) => el.type == 1);
          this.d_image = this.s_images[0].name;
          if (this.product.sale_type == 0) {
            for (let i = 0; i < prices.length; i++) {
              this.prices.push({
                value: prices[i].price,
                text: `${prices[i].quantity} piece ${prices[i].price} dirhams`,
              });
            }
          } else {
            this.prices.push({
              value: prices[i].price,
              text: `(${prices[i].quantity} + ${prices[i].quantity}) free  piece ${prices[i].price} dirhams`,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
  async created() {
    this.show();
    this.emirates = city_data;
  },
  mounted(){
      this.loading=false;
  }
};
</script>

<style scoped>
.row {
  margin: 0 !important;
}
.theme {
  background-color: #b5201e !important;
}

/* .v-icon.v-icon {
  font-size: 16px !important;
} */

.font-size-16 {
  font-size: 16px !important;
}
.font-size-14 {
  font-size: 14px !important;
}

.font-size-12 {
  font-size: 12px !important;
}
.font-size-18 {
  font-size: 18px;
}

.font-weight-500 {
  font-weight: 500;
}

.font-weight-700 {
  font-weight: 700;
}

.v-dialog {
  border-radius: 0 !important;
  margin: 12px !important;
}
.v-card {
  border-radius: 0 !important;
}

* {
  font-family: Tahoma, Verdana, Segoe, sans-serif;
}
.v-input__icon--prepend-inner .v-icon {
  font-size: 28px !important;
}
.v-bottom-sheet {
  margin: 0 !important;
}

.custom-input {
  background-color: #efefef;
  padding: 10px 8px;
  outline: 0;
  width: 100%;
}

#tab2:hover {
  border: 1px solid lightgray;
}
#tab1,
#tab2 {
  cursor: pointer;
  padding-top: 8px !important;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.feedback-more {
  color: #000;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 30px;
  padding-top: 20px;
  line-height: 50px;
  background: -webkit-linear-gradientrgba(
    0,
    255,
    255,
    255,
    1,
    hsla(0, 0%, 100%, 0.9),
    hsla(0, 0%, 100%, 0)
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(0),
    color-stop(#fff),
    color-stop(hsla(0, 0%, 100%, 0.9)),
    to(hsla(0, 0%, 100%, 0))
  );
  background: linear-gradient(
    0,
    #fff,
    hsla(0, 0%, 100%, 0.9),
    hsla(0, 0%, 100%, 0)
  );
}

#loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #f7f7fa;
    background-image: linear-gradient(90deg, #f7f7fa, #e2e5f1, #f7f7fa);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    -webkit-animation: loadingAnimation 1.5s infinite;
    animation: loadingAnimation 1.5s infinite;
    z-index: 9999999;
}

@-webkit-keyframes loadingAnimation {
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
}

@keyframes loadingAnimation {
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
}
</style>
<style>
.v-rating .v-icon {
  padding: 0 !important;
}
.mdi-star,
.mdi-star-half-full {
  font-size: 16px !important;
}
</style>