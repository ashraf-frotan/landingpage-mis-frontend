<template>
  <v-row>
    <v-dialog
      v-model="show_dialog"
      fullscreen
      transition="dialog-bottom-transition"
      style="margin: 0; padding: 0"
    >
      <v-card>
        <v-toolbar dark color="primary" elevation="0">
          <v-btn icon dark @click="show_dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Product Information</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="show_dialog = false"
              class="text-capitalize"
            >
              Close
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div>
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" sm="12" xs="12" class="text--black">
                  <div class="pa-2">
                    <span class="black--text">PCode:</span> {{ product.pcode }}
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Title Arabic:</span>
                    {{ product.title_ar }}
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Title Enlish:</span>
                    {{ product.title_en }}
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Note Ar:</span>
                    {{ product.desc_ar }}
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Note En:</span>
                    {{ product.desc_en }}
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Message Ar:</span>
                    {{ product.message_ar }}
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Message En:</span>
                    {{ product.message_en }}
                  </div>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="pa-2">
                    <span class="black--text">Collection Codes:</span>
                    <span v-for="product in sub_products" :key="product.id"
                      >{{ product.pcode }},
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Sale Type:</span>
                    <span v-if="product.sale_type == 0"> Simple </span>
                    <span v-else> Buy 1 get 1 free </span>
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Prices:</span> <br />
                    <v-simple-table dense>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Qunatity</th>
                            <th class="text-left">Price</th>
                            <th class="text-left">Old Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="price in selling_prices"
                            :key="price.quantity"
                          >
                            <td class="text-left">{{ price.quantity }}</td>
                            <td class="text-left">{{ price.price }}</td>
                            <td class="text-left">{{ price.old_price }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                  <v-divider class="mt-3"></v-divider>
                  <div class="pa-2">
                    <span class="black--text">General Info:</span> <br />
                    <div class="d-flex mt-2">
                      <v-card
                        elevation="1"
                        class="px-5 py-3 ml-2 country-card"
                        width="120"
                      >
                        <v-row>
                          <v-col>
                            <div class="text-center font-weight-bold">
                              Country
                            </div>
                            <v-divider></v-divider>
                            <div class="d-flex justify-center my-3">
                              <v-img :src="country.flag" width="50" />
                            </div>
                            <p class="ma-0 text-center" style="font-size: 10px">
                              {{ country.name }}
                            </p>
                          </v-col>
                        </v-row>
                      </v-card>
                      <v-card
                        elevation="1"
                        class="px-5 py-3 ml-2 country-card"
                        width="120"
                      >
                        <v-row>
                          <v-col>
                            <div class="text-center font-weight-bold">
                              Company
                            </div>
                            <v-divider></v-divider>
                            <div class="d-flex justify-center my-3">
                              <v-img :src="company.logo" width="50" />
                            </div>
                            <p class="ma-0 text-center" style="font-size: 10px">
                              {{ company.name }}
                            </p>
                          </v-col>
                        </v-row>
                      </v-card>
                      <v-card
                        elevation="1"
                        class="px-5 py-3 ml-2 country-card"
                        width="120"
                      >
                        <v-row>
                          <v-col>
                            <div class="text-center font-weight-bold">
                              Template
                            </div>
                            <v-divider></v-divider>
                            <div class="d-flex justify-center my-3">
                              <v-img :src="template.image" width="50" />
                            </div>
                            <p class="ma-0 text-center" style="font-size: 10px">
                              {{ template.name }}
                            </p>
                          </v-col>
                        </v-row>
                      </v-card>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <div class="black--text">Slider Images:</div>
                  <div class="d-flex">
                    <div
                      style="width: 160px"
                      class="ml-2"
                      v-for="image in s_images"
                      :key="image.id"
                    >
                      <v-img
                        :src="`${baseUrl}assets/images/products/${product.pcode}${image.name}`"
                        width="160"
                      />
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <div class="black--text">Long Images:</div>
                  <div class="d-flex">
                    <div
                      style="width: 160px"
                      class="ml-2"
                      v-for="image in l_images"
                      :key="image.id"
                    >
                      <NuxtLink
                        :to="`${baseUrl}assets/images/products/${product.pcode}${image.name}`"
                        ><v-img
                          :src="`${baseUrl}assets/images/products/${product.pcode}${image.name}`"
                          width="160"
                      /></NuxtLink>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      show_dialog: false,
      product: {
        pcode: "",
        title_ar: "",
        titel_en: "",
        desc_ar: "",
        desc_en: "",
        message_ar: "",
        message_en: "",
      },
      selling_prices: [],
      sub_products: [],
      template: { name: "", image: "" },
      company: { name: "", logo: "" },
      country: { name: "", flag: "" },
      s_images: [],
      l_images: [],
      baseUrl: process.env.baseUrl,
    };
  },
  methods: {
    openShowDialog(slug) {
      this.$axios
        .get(`product/${slug}`)
        .then((response) => {
          this.product = response.data;
          this.selling_prices = this.product.selling_prices;
          this.sub_products = this.product.sub_products;
          this.template = this.product.template;
          this.company = this.template.company;
          this.country = this.company.country;
          let images = this.product.product_images;
          this.s_images = images.filter((e) => e.type == 0);
          this.l_images = images.filter((e) => e.type == 1);
          this.show_dialog = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
