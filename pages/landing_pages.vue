<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{
          title: 'Landing Pages',
          icon: 'mdi-image-album',
          url: 'landing_pages',
        }"
      />
      <ActionsCard @openAddDialog="openAddDialog" />
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          deserunt ratione? Incidunt, id, nemo nulla voluptas cupiditate omnis
          maiores quam architecto minima, deserunt placeat possimus! Ipsa
          deserunt id illo facilis?
        </v-card-text>
      </v-card>
    </v-col>
    <v-dialog
      v-model="add_dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="add_dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Create New Landing Page</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="add_dialog = false"> Save </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card>
        <v-card>
          <v-stepper v-model="e1" vertical>
            <v-stepper-step :complete="e1 > 1" step="1">
              Genral Information
              <small>Please select the general info about product</small>
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-card class="ma-2 mb-4" elevation="0">
                <!-- START COUNTRY SECTION -->
                <v-card>
                  <v-card-text>
                    <v-row
                      ><v-col cols="12"><h3>Country</h3></v-col></v-row
                    >
                    <v-row>
                      <v-col cols="12" class="d-flex">
                        <v-card
                          elevation="1"
                          class="px-5 py-3 ml-2"
                          max-width="80"
                          link
                        >
                          <img
                            src="~/assets/images/uae.png"
                            width="40"
                            alt=""
                          />
                          <p class="ma-0 text-center" style="font-size: 10px">
                            UAE
                          </p>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <!-- END COUNTRY SECTION -->
                <!-- START COMPANY SECTION -->
                <v-card class="mt-4">
                  <v-card-text>
                    <v-row
                      ><v-col cols="12"><h3>Company</h3></v-col></v-row
                    >
                    <v-row justify="center">
                      <v-col cols="12" class="d-flex">
                        <v-card elevation="1" class="d-flex ml-2 pa-3" link>
                          <v-row align="center" class="py-2 px-4">
                            <img
                              src="~/assets/images/uae.png"
                              width="30"
                              alt=""
                            />
                            <span class="ml-2">Teebalhoor</span>
                          </v-row>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <!-- END TEMPLATE SECTION -->
                <!-- START LANDING PAGE TYPE-->
                <v-card class="mt-3" elevation="1">
                  <v-card-text>
                    <v-row align="center">
                      <v-col cols="12" md="3" sm="12" xs="12">
                        <h3>Landing page type</h3>
                      </v-col>
                      <v-col
                        cols="12"
                        md="9"
                        sm="12"
                        xs="12"
                        class="d-flex justify-end"
                      >
                        <v-btn
                          color="primary"
                          outlined
                          class="text-capitalize mr-1"
                        >
                          Lead
                        </v-btn>
                        <v-btn color="primary" outlined class="text-capitalize">
                          Quick Buy
                        </v-btn>
                        <v-btn
                          color="primary"
                          outlined
                          class="text-capitalize ml-1"
                        >
                          Whatsapp
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <!-- END LANDING PAGE TYPE -->
                <!-- START TEMPLATE SECTION -->
                <v-card class="mt-3">
                  <v-card-text>
                    <v-row
                      ><v-col cols="12"><h3>Template</h3></v-col></v-row
                    >
                    <v-row>
                      <v-col cols="12" class="d-flex">
                        <v-card elevation="1" class="ml-2" width="200" link>
                          <img
                            src="~/assets/images/profile.jpg"
                            width="200"
                            alt=""
                          />
                          <p class="text-center my-3" style="font-size: 10px">
                            UAE
                          </p>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <!-- END TEMPLATE SECTION -->
                <v-row class="mb-4">
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <v-card elevation="1" class="mt-3">
                      <v-card-text>
                        <v-row align="center">
                          <v-col cols="12" md="3" sm="12" xs="12">
                            <h3>Language</h3>
                          </v-col>
                          <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            xs="12"
                            class="d-flex justify-end text-center"
                          >
                            <v-btn
                              outlined
                              color="primary"
                              class="text-capitalize"
                            >
                              <img
                                src="~/assets/images/us.png"
                                width="25"
                                class="mr-2"
                                alt=""
                              />
                              English
                            </v-btn>
                            <v-btn
                              color="primary"
                              outlined
                              class="text-capitalize mx-1"
                            >
                              <img
                                src="~/assets/images/uae.png"
                                width="25"
                                class="mr-2"
                                alt=""
                              />
                              Arabic
                            </v-btn>
                            <v-btn
                              color="primary"
                              outlined
                              class="text-capitalize"
                            >
                              <img
                                src="~/assets/images/both-lang.png"
                                width="25"
                                class="mr-2"
                                alt=""
                              />
                              Both
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <v-card class="mt-3" elevation="1">
                      <v-card-text>
                        <v-row align="center">
                          <v-col cols="12" md="3" sm="12" xs="12">
                            <h3>Product Type</h3>
                          </v-col>
                          <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            xs="12"
                            class="d-flex justify-end"
                          >
                            <v-btn
                              color="primary"
                              outlined
                              class="text-capitalize mr-1"
                            >
                              Piece
                            </v-btn>
                            <v-btn
                              color="primary"
                              outlined
                              class="text-capitalize"
                            >
                              Collection
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-btn color="primary" @click="e1 = 2" small> Continue </v-btn>
                <v-btn small> Cancel </v-btn>
              </v-card>
            </v-stepper-content>
            <v-stepper-step :complete="e1 > 2" step="2">
              Product Details
              <small>Fill all the required informations about product</small>
            </v-stepper-step>
            <v-stepper-content step="2">
              <v-card elevation="0" class="ma-2">
                <v-card elevation="1">
                  <v-card-text>
                    <div class="mb-1 subtitle-1">Product Code</div>
                    <v-select
                      :items="products"
                      dense
                      hide-details=""
                      rounded
                      outlined
                      label="Product"
                      placeholder="Please select product"
                    ></v-select>
                  </v-card-text>
                </v-card>
                <v-row class="mt-3">
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <v-card elevation="1">
                      <v-card-text>
                        <div class="mb-1 subtitle-1">Product Title (AR)</div>
                        <v-text-field
                          rounded
                          outlined
                          dense
                          hide-details=""
                          placeholder="Product name in Arabic"
                        ></v-text-field>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6" sm="6" xs="12">
                    <v-card elevation="1">
                      <v-card-text>
                        <div class="mb-1 subtitle-1">Product Title (EN)</div>
                        <v-text-field
                          rounded
                          outlined
                          dense
                          hide-details=""
                          placeholder="Product name in English"
                        ></v-text-field>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-card elevation="1" class="mt-3">
                  <v-card-text>
                    <div class="mb-1 subtitle-1">Product Note(AR)</div>
                    <v-textarea
                      outlined
                      dense
                      hide-details=""
                      placeholder="Note here.."
                      rows="3"
                    ></v-textarea>
                  </v-card-text>
                </v-card>
                <v-card elevation="1" class="mt-3">
                  <v-card-text>
                    <div class="mb-1 subtitle-1">Product Note(EN)</div>
                    <v-textarea
                      outlined
                      dense
                      hide-details=""
                      placeholder="Note here.."
                      rows="3"
                    ></v-textarea>
                  </v-card-text>
                </v-card>
                <v-btn color="primary" @click="e1 = 3" small> Continue </v-btn>
                <v-btn @click="e1 = 1" small> Back </v-btn>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="e1 > 3" step="3">
              Select an ad format and name ad unit
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card class="ma-2" elevation="0">
                <v-card elevation="1" class="mt-3">
                  <v-card-text>
                    <div class="mb-1 subtitle-1">Product Colletion Items</div>
                    <v-text-field
                      outlined
                      dense
                      rounded
                      hide-details=""
                      placeholder="Items here.."
                      append-icon="mdi-plus"
                      rows="3"
                    ></v-text-field>
                    <v-card elevation="0">
                      <v-card-text>
                        <v-sheet
                          class="d-inline-flex py-1 px-2 rounded"
                          elevation="1"
                        >
                          TK58
                          <v-btn icon x-small>
                            <v-icon small class="ml-1" color="primary"
                              >mdi-close</v-icon
                            >
                          </v-btn>
                        </v-sheet>
                        <v-sheet
                          class="d-inline-flex py-1 px-2 rounded"
                          elevation="1"
                        >
                          BM16
                          <v-btn icon x-small>
                            <v-icon small class="ml-1" color="primary"
                              >mdi-close</v-icon
                            >
                          </v-btn>
                        </v-sheet>
                      </v-card-text>
                    </v-card>
                  </v-card-text>
                </v-card>
                <v-card elevation="1" class="mt-3">
                  <v-card-text>
                    <div class="mb-1 subtitle-1">Product Colletion Items</div>
                    <v-row align="center">
                      <v-col cols="12" md="3">
                        <v-text-field
                          dense
                          rounded
                          outlined
                          hide-details=""
                          placeholder="No"
                          label="Quantity"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          dense
                          rounded
                          outlined
                          hide-details=""
                          placeholder="price"
                          label="Price"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          dense
                          rounded
                          outlined
                          hide-details=""
                          placeholder="Old price"
                          label="Old Price"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="2">
                        <v-btn icon small color="primary" outlined>
                          <v-icon color="primary">mdi-plus</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-card>
              <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>
              <v-btn text> Cancel </v-btn>
            </v-stepper-content>

            <v-stepper-step step="4"> View setup instructions </v-stepper-step>
            <v-stepper-content step="4">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>
              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      add_dialog: true,
      countries: [],
      companies: [],
      page_types: [],
      templates: [],
      country_id: [],
      e1: 1,
      data: {},
      products: ["TM1", "TK58"],
    };
  },
  methods: {
    getInfo() {
      this.$axios
        .get("get_info")
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openAddDialog() {
      this.countries = this.data.countries;
      this.add_dialog = true;
    },
  },
  created() {
    this.getInfo();
  },
};
</script>
