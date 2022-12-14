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
          <v-form @submit.prevent="store">
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
                        ><v-col cols="12"
                          ><h4 class="ma-0 black--text">Country</h4></v-col
                        ></v-row
                      >
                      <v-row>
                        <v-col cols="12" class="d-flex">
                          <v-card
                            elevation="1"
                            class="px-5 py-3 ml-2"
                            width="100"
                            link
                            v-for="country in countries"
                            :key="country.id"
                            @click="getCompanies(country.id)"
                          >
                            <v-row>
                              <v-col>
                                <div class="d-flex justify-center mb-3">
                                  <v-img
                                    :src="country.flag"
                                    width="40"
                                    alt=""
                                  />
                                </div>
                                <p
                                  class="ma-0 text-center"
                                  style="font-size: 10px"
                                >
                                  {{ country.name }}
                                </p>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                  <!-- END COUNTRY SECTION -->
                  <!-- START COMPANY SECTION -->
                  <v-card class="mt-4" min-height="125px">
                    <v-card-text>
                      <v-row
                        ><v-col cols="12"
                          ><h4 class="ma-0 black--text">Company</h4></v-col
                        ></v-row
                      >
                      <v-row justify="center">
                        <v-col cols="12" class="d-flex">
                          <v-card
                            elevation="1"
                            class="d-flex ml-2 pa-3"
                            link
                            v-for="company in companies"
                            :key="company.id"
                            @click="getTemplates(company.id)"
                          >
                            <v-row align="center" class="py-2 px-4">
                              <v-img :src="company.logo" width="30" alt="" />
                              <span class="ml-2">{{ company.name }}</span>
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
                          <h4 class="ma-0 black--text">Landing page type</h4>
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
                            @click="landing_info.page_type = 0"
                          >
                            Lead
                          </v-btn>
                          <v-btn
                            color="primary"
                            outlined
                            class="text-capitalize"
                            @click="landing_info.page_type = 1"
                          >
                            Quick Buy
                          </v-btn>
                          <v-btn
                            color="primary"
                            outlined
                            class="text-capitalize ml-1"
                            @click="landing_info.page_type = 2"
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
                        ><v-col cols="12"
                          ><h4 class="ma-0 black--text">Template</h4></v-col
                        ></v-row
                      >
                      <v-row>
                        <v-col cols="12" class="d-flex">
                          <v-card
                            elevation="1"
                            class="ml-2"
                            width="200"
                            link
                            v-for="template in templates"
                            :key="template.id"
                            @click="landing_info.template_id = template.id"
                          >
                            <v-img :src="template.image" width="200" alt="" />
                            <p class="text-center my-3">
                              {{ template.name }}
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
                              <h4 class="ma-0 black--text">Language</h4>
                            </v-col>
                            <v-col
                              cols="12"
                              md="9"
                              sm="12"
                              xs="12"
                              class="
                                d-flex
                                flex-wrap
                                justify-center justify-md-end
                              "
                            >
                              <v-btn
                                color="primary"
                                outlined
                                class="text-capitalize mt-2 mt-md-0 mt-sm-0"
                                @click="landing_info.page_language = 0"
                              >
                                <img
                                  src="~/assets/images/both-lang.png"
                                  width="25"
                                  class="mr-2"
                                  alt=""
                                />
                                Both
                              </v-btn>
                              <v-btn
                                color="primary"
                                outlined
                                class="text-capitalize mx-1"
                                @click="landing_info.page_language = 1"
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
                                outlined
                                color="primary"
                                class="text-capitalize"
                                @click="landing_info.page_language = 2"
                              >
                                <img
                                  src="~/assets/images/us.png"
                                  width="25"
                                  class="mr-2"
                                  alt=""
                                />
                                English
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
                              <h4 class="ma-0 black--text">Product Type</h4>
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
                                @click="collectionType(false)"
                              >
                                Piece
                              </v-btn>
                              <v-btn
                                color="primary"
                                outlined
                                class="text-capitalize"
                                @click="collectionType(true)"
                              >
                                Collection
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-btn color="primary" @click="e1 = 2" small>
                    Continue
                  </v-btn>
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
                      <h4 class="mb-3 black--text">Product Code</h4>
                      <v-text-field
                        dense
                        hide-details=""
                        rounded
                        outlined
                        label="Product"
                        placeholder="Please enter product name here"
                        v-model="landing_info.pcode"
                      ></v-text-field>
                    </v-card-text>
                  </v-card>
                  <v-card
                    elevation="1"
                    class="mt-3"
                    v-if="landing_info.is_collection"
                  >
                    <v-card-text>
                      <h4 class="mb-1 black--text">Product Colletion Items</h4>
                      <v-text-field
                        outlined
                        dense
                        rounded
                        hide-details=""
                        placeholder="Items here.."
                        append-icon="mdi-plus"
                        @click:append="alert('hi')"
                        rows="3"
                        v-model="collection_code"
                      ></v-text-field>
                      <v-card elevation="0">
                        <v-card-text>
                          <v-sheet
                            class="d-inline-flex py-1 px-2 rounded mr-2"
                            elevation="1"
                            v-for="item in landing_info.collection_items"
                            :key="item"
                          >
                            {{ item }}
                            <v-btn
                              icon
                              x-small
                              @click="removeFromCollection(item)"
                            >
                              <v-icon small class="ml-1" color="primary"
                                >mdi-close</v-icon
                              >
                            </v-btn>
                          </v-sheet>
                        </v-card-text>
                      </v-card>
                    </v-card-text>
                  </v-card>
                  <v-card elevation="1" class="my-3">
                    <v-card-text>
                      <h4 class="mb-1 black--text">Product Info</h4>
                      <v-row align="center">
                        <v-col cols="12" md="3">
                          <v-text-field
                            dense
                            rounded
                            outlined
                            hide-details=""
                            placeholder="No"
                            label="Quantity"
                            v-model="product_info.quantity"
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
                            v-model="product_info.price"
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
                            v-model="product_info.old_price"
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

                  <v-btn color="primary" @click="e1 = 3" small>
                    Continue
                  </v-btn>
                  <v-btn @click="e1 = 1" small> Back </v-btn>
                </v-card>
              </v-stepper-content>
              <v-stepper-step :complete="e1 > 3" step="3">
                Insert product name and sub products
                <small>Product details with its sub collection</small>
              </v-stepper-step>
              <v-stepper-content step="3">
                <v-card class="ma-2" elevation="0">
                  <v-row class="mt-3">
                    <v-col cols="12" md="6" sm="6" xs="12">
                      <v-card elevation="1">
                        <v-card-text>
                          <h4 class="mb-1 black--text">Product Title (AR)</h4>
                          <v-text-field
                            rounded
                            outlined
                            dense
                            hide-details=""
                            placeholder="Product name in Arabic"
                            v-model="landing_info.title_ar"
                          ></v-text-field>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" xs="12">
                      <v-card elevation="1">
                        <v-card-text>
                          <h4 class="mb-1 black--text">Product Title (EN)</h4>
                          <v-text-field
                            rounded
                            outlined
                            dense
                            hide-details=""
                            placeholder="Product name in English"
                            v-model="landing_info.title_en"
                          ></v-text-field>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-card elevation="1" class="mt-3">
                    <v-card-text>
                      <h4 class="mb-1 black--text">Product Note(AR)</h4>
                      <v-textarea
                        outlined
                        dense
                        hide-details=""
                        placeholder="Note here.."
                        rows="3"
                        v-model="landing_info.desc_ar"
                      ></v-textarea>
                    </v-card-text>
                  </v-card>
                  <v-card elevation="1" class="my-3">
                    <v-card-text>
                      <h4 class="mb-1 black--text">Product Note(EN)</h4>
                      <v-textarea
                        outlined
                        dense
                        hide-details=""
                        placeholder="Note here.."
                        rows="3"
                        v-model="landing_info.desc_en"
                      ></v-textarea>
                    </v-card-text>
                  </v-card>
                  <v-btn color="primary" @click="e1 = 4" small>
                    Continue
                  </v-btn>
                  <v-btn small @click="e1 = 2"> Back </v-btn>
                </v-card>
              </v-stepper-content>
              <v-stepper-step step="4">
                Images
                <small>Long, slider, slider1 and slider2</small>
              </v-stepper-step>
              <v-stepper-content step="4">
                <v-row class="mx-2 mb-8">
                  <v-col cols="12">
                    <v-card class="my-3">
                      <v-card-text>
                        <h4 class="mb-1 black--text">Images</h4>
                        <v-row>
                          <v-col cols="12" md="6">
                            <v-file-input
                              label="Slider Images"
                              placeholder="Please select slider images"
                              rounded
                              outlined
                              multiple
                              dense
                              hide-details=""
                              accept="image/*"
                              @change="uploadFile1"
                            >
                            </v-file-input>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-file-input
                              label="Long Images"
                              rounded
                              outlined
                              multiple
                              dense
                              hide-details=""
                              placeholder="Please select long images"
                              accept="image/*"
                              @change="uploadFile2"
                            >
                            </v-file-input>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                    <v-btn
                      color="primary"
                      type="submit"
                      small
                      @click="add_dialog = false"
                    >
                      Save
                    </v-btn>
                    <v-btn small @click="e1 = 3"> Back </v-btn>
                  </v-col>
                </v-row>
              </v-stepper-content>
            </v-stepper>
          </v-form>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      add_dialog: false,
      countries: [],
      companies: [],
      templates: [],
      country_id: [],
      e1: 1,
      data: {},
      landing_info: {
        page_type: 0,
        template_id: null,
        is_collection: false,
        page_language: 0,
        pcode: "",
        title_ar: "",
        title_en: "",
        desc_ar: "",
        desc_en: "",
        collection_items: ["TK1", "TK3", "TK56"],
        info: [],
        images1: null,
        images2: null,
      },
      product_info: {
        quantity: null,
        price: null,
        old_price: null,
      },
      collection_code: "",
    };
  },
  methods: {
    getInfo() {
      this.$axios
        .get("get_info")
        .then((response) => {
          this.data = response.data;
          this.countries = this.data.countries;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    store() {
      console.log(this.landing_info);
    },
    getCompanies(id) {
      this.companies = this.data.companies.filter((el) => {
        return el.country_id == id;
      });
      this.templates = [];
    },
    getTemplates(id) {
      this.templates = this.data.templates.filter((el) => {
        return el.id == id;
      });
    },
    collectionType(type) {
      this.landing_info.is_collection = type;
    },
    openAddDialog() {
      this.countries = this.data.countries;
      this.add_dialog = true;
    },
    uploadFile1(file) {
      this.landing_info.images1 = file;
      console.log(file);
    },
    uploadFile2(file) {
      this.landing_info.images2 = file;
      console.log(file);
    },
    addToCollection() {
      if (
        !this.landing_info.collection_items.find(
          (el) => el == this.collection_code
        )
      ) {
        if (this.collection_code.length < 3) {
          this.$toastr.i({
            title: "Info!",
            msg: "Please enter a valid pcode.",
            timeout: 3000,
            progressbar: true,
          });
        } else {
          this.landig_info.collection_items.push(this.collection_code);
        }
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Item is already added.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    removeFromCollection(pcode) {
      this.landing_info.collection_items =
        this.landing_info.collection_items.filter((el) => el != pcode);
    },
  },
  watch: {
    landing_info: {
      handler(value) {},
      deep: true,
    },
  },
  created() {
    this.getInfo();
  },
};
</script>
