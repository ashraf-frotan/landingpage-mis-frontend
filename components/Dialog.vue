<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
      style="margin: 0; padding: 0"
    >
      <v-card>
        <v-toolbar dark color="primary" elevation="0">
          <v-btn icon dark @click="$emit('closeShowDialog')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Product Information</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="$emit('closeShowDialog')"
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
                    <span class="black--text">PCode:</span> TK55
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Title Arabic:</span> ar title
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Title Enlish:</span> en title
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Note Ar:</span> Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Doloremque dicta
                    voluptate officia nostrum accusantium! Incidunt, quod
                    assumenda? Eveniet porro dolorem tenetur itaque, doloribus
                    ex, recusandae voluptatum similique asperiores accusantium
                    aliquam?
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Note En:</span> Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Harum totam alias
                    fuga maiores nulla, incidunt in sed deleniti enim pariatur
                    sit sapiente repudiandae consequuntur eum velit repellendus
                    autem neque. Perspiciatis?
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Message Ar:</span> Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Harum totam
                    alias fuga maiores nulla, incidunt in sed deleniti enim
                    pariatur sit sapiente repudiandae consequuntur eum velit
                    repellendus autem neque. Perspiciatis?
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Message En:</span> Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Harum totam
                    alias fuga maiores nulla, incidunt in sed deleniti enim
                    pariatur sit sapiente repudiandae consequuntur eum velit
                    repellendus autem neque. Perspiciatis?
                  </div>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="pa-2">
                    <span class="black--text">Collection Codes:</span> AK1, AK2,
                    AK4, AK5
                  </div>
                  <v-divider></v-divider>
                  <div class="pa-2">
                    <span class="black--text">Sale Type:</span> Simple
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
                          <tr v-for="price in prices" :key="price.quantity">
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
                              <img src="~/assets/images/uae.png" width="50" />
                            </div>
                            <p class="ma-0 text-center" style="font-size: 10px">
                              {{ "UAE" }}
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
                              <img src="~/assets/images/uae.png" width="50" />
                            </div>
                            <p class="ma-0 text-center" style="font-size: 10px">
                              {{ "Teebalhoor" }}
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
                              <img src="~/assets/images/uae.png" width="50" />
                            </div>
                            <p class="ma-0 text-center" style="font-size: 10px">
                              {{ "Long" }}
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
                  <div>
                    <img
                      src="~/assets/images/profile.jpg"
                      width="200"
                      class="ml-1"
                    />
                    <img
                      src="~/assets/images/profile.jpg"
                      width="200"
                      class="ml-1"
                    />
                    <img
                      src="~/assets/images/profile.jpg"
                      width="200"
                      class="ml-1"
                    />
                  </div>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="12">
                  <div class="black--text">Long Images:</div>
                  <div>
                    <img
                      src="~/assets/images/profile.jpg"
                      width="200"
                      class="ml-1"
                    />
                    <img
                      src="~/assets/images/profile.jpg"
                      width="200"
                      class="ml-1"
                    />
                    <img
                      src="~/assets/images/profile.jpg"
                      width="200"
                      class="ml-1"
                    />
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
  props: ["slug"],
  data() {
    return {
      dialog: true,
      product: null,
      prices: [
        {
          quantity: 1,
          price: 149,
          old_price: 259,
        },
        {
          quantity: 2,
          price: 149,
          old_price: 259,
        },
        {
          quantity: 3,
          price: 149,
          old_price: 259,
        },
      ],
    };
  },
  methods: {
    show() {
      this.$axios
        .get(`product/${this.slug}`)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.show();
  },
};
</script>
