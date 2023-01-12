<template>
  <div>
    <Slider :s_images="s_images" :pcode="product.pcode" />
    <v-row style="margin-top: -50px">
      <v-col cols="12">
        <div style="position: relative" class="d-flex justify-center">
          <v-card
            elevation="4"
            style="width: 80px; height: 80px; position: absolute; top: -10%"
          >
            <v-card-text class="pa-3">
              <v-img :src="require('~/assets/images/uae.png')" />
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" style="margin-top: 100px">
      <v-col cols="12" class="text-center">
        <strong class="text-h5">مصابح علی توصیل شکل هلال</strong>
        <v-divider></v-divider>
        <div>
          <div class="d-flex justify-center">
            <div class="d-flex text-h5">
              <div>توصیل مجانی</div>
              &nbsp;
              <v-img
                :src="require('~/assets/images/oredoh.png')"
                width="60"
              ></v-img>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex justify-center">
            <div class="d-flex text-h6">
              <div>الدفع عند الاستعلام</div>
              &nbsp;
              <v-img
                :src="require('~/assets/images/us.png')"
                width="30"
              ></v-img>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="justify-content-center pa-0">
        <div>مصابح علی توصیل شکل هلال</div>
        <div class="d-flex">
          توصیل مجانی
          <div>
            <v-img
              :src="require('~/assets/images/us.png')"
              style="width: 40px"
            ></v-img>
          </div>
        </div>
        <div>الدفع عند الاستعلام</div>
      </v-col>
    </v-row>
    <v-row class="blue mx-1 mb-10" style="font-size: 12px">
      <v-col cols="3" class="d-flex">
        <div>
          <div class="text-center">الزوار الان</div>
          <div class="d-flex">
            <div>
              <v-img :src="require('~/assets/images/change.png')" width="18" />
            </div>
            <div>
              <v-badge
                class="mx-2"
                color="green"
                dot
                style="margin-top: -2px"
                offset-y="0"
              ></v-badge>
              <span>96</span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" style="position: relative" class="pa-0">
        <div
          style="height: 100px; position: absolute; width: 100%"
          class="purple"
        >
          some text
        </div>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <div>
          <div class="text-center">الطلبات المقدمه</div>
          <div class="d-flex">
            <div>
              <v-img :src="require('~/assets/images/change.png')" width="18" />
            </div>
            <div>
              <v-badge
                class="mx-2"
                color="yellow"
                dot
                style="margin-top: -2px"
                offset-y="0"
              ></v-badge>
              <span>1165</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center text-h4 yellow py-1">احصل علی العرض</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="direction: rtl">
        <v-form class="px-6">
          <label for="">الاسم</label>
          <v-text-field outlined dense></v-text-field>
        </v-form>
      </v-col>
    </v-row>
    <Slider :s_images="l_images" :pcode="product.pcode" />
  </div>
</template>

<script>
import Slider from "~/components/landing_page/Slider.vue";
export default {
  components: { Slider },
  layout: "empty",
  data() {
    return {
      loading: true,
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
      baseUrl: process.env.baseUrl,
    };
  },
  head() {
    return {
      title: this.product.title_en,
    };
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
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async asyncData({ params }) {
    const slug = params.slug;
    console.log(slug);
    return { slug };
  },
  created() {
    this.show();
    this.emirates = city_data;
  },
};
</script>

<style>
</style>