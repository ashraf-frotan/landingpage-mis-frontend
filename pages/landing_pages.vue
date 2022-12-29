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
      <ActionsCard
        @openAddDialog="openAddDialog"
        @openShowDialog="openShowDialog"
        @deleteRecord="destroy"
        :view="true"
      />
      <v-card>
        <v-card-text>
          <v-data-table
            :items="products"
            :headers="headers"
            :single-select="single_select"
            dense
            show-select
            v-model="selected"
            item-key="id"
          >
            <template v-slot:item.id="{ item }">
              <div
                class="blue--text"
                style="cursor: pointer"
                @click="show(item.page_link)"
              >
                {{ item.id }}
              </div>
            </template>
            <template v-slot:item.page_status="{ item }">
              <span v-if="item.page_status == 0"> Registered </span>
              <span v-else-if="item.page_status == 1"> Publish </span>
              <span v-else> Unpublished </span>
            </template>
            <template v-slot:item.template_id="{ item }">
              {{ item.template.name }}
            </template>
            <template v-slot:item.sale_type="{ item }">
              <span v-if="item.sale_type == 0"> Simple </span>
              <span v-else> Buy 1 get 1 free </span>
            </template>
            <template v-slot:item.page_link="{ item }">
              <NuxtLink
                :to="'landing/' + item.page_link"
                class="text-decoration-none"
                >open</NuxtLink
              >
            </template>
            <template v-slot:item.is_collection="{ item }">
              <span v-if="item.is_collection">Collection</span>
              <span v-else>Piece</span>
            </template>
            <template v-slot:item.template.company_id="{ item }">
              {{ item.template.company.name }}
            </template>
            <template v-slot:top>
              <v-switch
                label="Single Select"
                v-model="single_select"
              ></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- start dialog -->
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
            <v-toolbar-items> </v-toolbar-items>
          </v-toolbar>
        </v-card>
        <v-card>
          <v-form ref="add_form">
            <v-stepper v-model="e1" vertical>
              <v-stepper-step :complete="e1 > 1" step="1">
                Genral Information
                <small>Please select the general info about product</small>
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-card class="ma-2 mb-4" elevation="0">
                  <!-- START COUNTRY SECTION -->
                  <v-form ref="step-1" @submit.prevent="step1">
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
                              class="px-5 py-3 ml-2 country-card"
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
                    <v-card
                      class="mt-4"
                      min-height="125px"
                      v-if="country_id != null"
                    >
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
                    <!-- START TEMPLATE SECTION -->
                    <v-card class="mt-3" v-if="company_id != null">
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
                              @click="
                                selectTemplate(template.id, template.type)
                              "
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
                                  @click="collectionType($event, false)"
                                >
                                  Piece
                                </v-btn>
                                <v-btn
                                  color="primary"
                                  outlined
                                  class="text-capitalize"
                                  @click="collectionType($event, true)"
                                >
                                  Collection
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-btn color="primary" type="submit" small>
                      Continue
                    </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
              <v-stepper-step :complete="e1 > 2" step="2">
                Product Details
                <small>Fill all the required informations about product</small>
              </v-stepper-step>
              <v-stepper-content step="2">
                <v-card elevation="0" class="ma-2">
                  <v-form @submit.prevent="step2" ref="form2" lazy-validation>
                    <v-card elevation="1">
                      <v-card-text>
                        <h4 class="mb-3 black--text">Product Code</h4>
                        <v-text-field
                          dense
                          rounded
                          outlined
                          label="Product"
                          placeholder="Please enter product name here"
                          v-model="landing_info.pcode"
                          :rules="pcodeRules"
                          required
                        ></v-text-field>
                      </v-card-text>
                    </v-card>
                    <v-card
                      elevation="1"
                      class="mt-3"
                      v-if="landing_info.is_collection"
                    >
                      <v-card-text>
                        <h4 class="mb-1 black--text">
                          Product Colletion Items
                        </h4>
                        <v-text-field
                          outlined
                          dense
                          rounded
                          placeholder="Items here.."
                          append-icon="mdi-plus"
                          @click:append="addToCollection"
                          rows="3"
                          v-model="collection_code"
                          :rules="pcodeRules"
                        ></v-text-field>
                        <v-card elevation="0">
                          <v-card-text>
                            <v-chip
                              v-for="item in landing_info.collection_items"
                              :key="item"
                              class="ma-2"
                              close
                              color="primary"
                              outlined
                              @click:close="removeFromCollection(item)"
                            >
                              {{ item }}
                            </v-chip>
                          </v-card-text>
                        </v-card>
                      </v-card-text>
                    </v-card>
                    <v-card elevation="1" class="my-3">
                      <v-card-text>
                        <h4 class="mb-2 black--text">Product Info</h4>
                        <v-row
                          v-for="(price, index) in landing_info.prices"
                          :key="index"
                        >
                          <v-col cols="12" md="10" sm="10" xs="10">
                            <v-row>
                              <v-col cols="12" md="4" sm="4" xs="4">
                                <v-text-field
                                  dense
                                  rounded
                                  outlined
                                  placeholder="No"
                                  label="Quantity"
                                  v-model="landing_info.prices[index].quantity"
                                  :rules="requireRule"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4" sm="4" xs="4">
                                <v-text-field
                                  dense
                                  rounded
                                  outlined
                                  placeholder="price"
                                  label="Price"
                                  v-model="landing_info.prices[index].price"
                                  :rules="requireRule"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="4" sm="4" xs="4">
                                <v-text-field
                                  dense
                                  rounded
                                  outlined
                                  placeholder="Old price"
                                  label="Old Price"
                                  v-model="landing_info.prices[index].old_price"
                                  :rules="requireRule"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col cols="12" md="2" sm="2" xs="2">
                            <v-btn
                              small
                              color="primary"
                              v-if="index == 0"
                              fab
                              @click="addMorePrices"
                            >
                              <v-icon color="white">mdi-plus</v-icon>
                            </v-btn>
                            <v-btn
                              small
                              color="error"
                              v-else
                              fab
                              @click="removeMorePrices(index)"
                            >
                              <v-icon color="white">mdi-minus</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                    <v-card elevation="1" class="my-3">
                      <v-card-text>
                        <h4 class="black--text">Sale Type</h4>
                        <v-row>
                          <v-col cols="12">
                            <v-checkbox
                              v-model="landing_info.sale_type"
                              label="Buy 1 Get 1 Free"
                              color="success"
                              hide-details
                            ></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                    <v-btn color="primary" type="submit" small>
                      Continue
                    </v-btn>
                    <v-btn @click="e1 = 1" small> Back </v-btn>
                  </v-form>
                </v-card>
              </v-stepper-content>
              <v-stepper-step :complete="e1 > 3" step="3">
                Insert product name and sub products
                <small>Product details with its sub collection</small>
              </v-stepper-step>
              <v-stepper-content step="3">
                <v-card class="ma-2" elevation="0">
                  <v-form @submit.prevent="step3" ref="form3" lazy-validation>
                    <v-row class="mt-3">
                      <v-col
                        cols="12"
                        md="6"
                        sm="6"
                        xs="12"
                        v-if="
                          landing_info.page_language == 0 ||
                          landing_info.page_language == 1
                        "
                      >
                        <v-card elevation="1">
                          <v-card-text>
                            <h4 class="mb-1 black--text">Product Title (AR)</h4>
                            <v-text-field
                              rounded
                              outlined
                              dense
                              placeholder="Product name in Arabic"
                              v-model="landing_info.title_ar"
                              :rules="commonRules"
                            ></v-text-field>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col
                        cols="12"
                        md="6"
                        sm="6"
                        xs="12"
                        v-if="
                          landing_info.page_language == 0 ||
                          landing_info.page_language == 2
                        "
                      >
                        <v-card elevation="1">
                          <v-card-text>
                            <h4 class="mb-1 black--text">Product Title (EN)</h4>
                            <v-text-field
                              rounded
                              outlined
                              dense
                              :rules="commonRules"
                              placeholder="Product name in English"
                              v-model="landing_info.title_en"
                            ></v-text-field>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-card
                          elevation="1"
                          v-if="
                            landing_info.page_language == 0 ||
                            landing_info.page_language == 1
                          "
                        >
                          <v-card-text>
                            <h4 class="mb-1 black--text">Product Note(AR)</h4>
                            <v-textarea
                              outlined
                              dense
                              :rules="commonRules"
                              placeholder="Note here.."
                              rows="3"
                              v-model="landing_info.desc_ar"
                            ></v-textarea>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-card
                          elevation="1"
                          v-if="
                            landing_info.page_language == 0 ||
                            landing_info.page_language == 2
                          "
                        >
                          <v-card-text>
                            <h4 class="mb-1 black--text">Product Note(EN)</h4>
                            <v-textarea
                              outlined
                              dense
                              :rules="commonRules"
                              placeholder="Note here.."
                              rows="3"
                              v-model="landing_info.desc_en"
                            ></v-textarea>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-card
                          elevation="1"
                          v-if="
                            landing_info.page_language == 0 ||
                            landing_info.page_language == 1
                          "
                        >
                          <v-card-text>
                            <h4 class="mb-1 black--text">Message (AR)</h4>
                            <v-textarea
                              outlined
                              dense
                              :rules="commonRules"
                              placeholder="Message here.."
                              rows="3"
                              v-model="landing_info.message_ar"
                            ></v-textarea>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-card
                          elevation="1"
                          v-if="
                            landing_info.page_language == 0 ||
                            landing_info.page_language == 2
                          "
                        >
                          <v-card-text>
                            <h4 class="mb-1 black--text">Message (EN)</h4>
                            <v-textarea
                              outlined
                              dense
                              :rules="commonRules"
                              placeholder="Message here.."
                              rows="3"
                              v-model="landing_info.message_en"
                            ></v-textarea>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row class="mt-3">
                      <v-col cols="12">
                        <v-btn color="primary" type="submit" small>
                          Continue
                        </v-btn>
                        <v-btn small @click="e1 = 2"> Back </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card>
              </v-stepper-content>
              <v-stepper-step step="4">
                Images
                <small>Long, slider, slider1 and slider2</small>
              </v-stepper-step>
              <v-stepper-content step="4">
                <v-form @submit.prevent="step4" ref="form4" lazy-validation>
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
                                show-size
                                counter
                                small-chips
                                accept="image/*"
                                @change="uploadFile1"
                                :rules="requireRule"
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
                                counter
                                show-size
                                small-chips
                                placeholder="Please select long images"
                                accept="image/*"
                                @change="uploadFile2"
                                :rules="requireRule"
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
                      >
                        Save
                      </v-btn>
                      <v-btn small @click="e1 = 3"> Back </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-stepper-content>
            </v-stepper>
          </v-form>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- end dialog -->

    <!-- Start Show Dialog Component -->
    <Dialog :slug="slug" v-if="dialog" @closeShowDialog="dialog = false" />
    <!-- End Show Dialog Component -->
    
    <!-- Start Loader  -->
    <v-dialog
      v-model="loader"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- End Loader  -->
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      loader:true,
      dialog: false,
      single_select: false,
      selected: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "PCode", value: "pcode" },
        { text: "Title", value: "title_en" },
        { text: "Status", value: "page_status" },
        { text: "Company", value: "template.company_id" },
        { text: "Template", value: "template_id" },
        { text: "Link", value: "page_link" },
        { text: "Sale type", value: "sale_type" },
        { text: "Product type", value: "is_collection" },
      ],
      add_dialog: false,
      countries: [],
      companies: [],
      templates: [],
      country_id: null,
      company_id: null,
      products: [],
      slug: null,
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
        message_ar: "",
        message_en: "",
        sale_type: 0,
        collection_items: [],
        info: [],
        prices: [
          {
            quantity: "",
            price: "",
            old_price: "",
          },
        ],
      },
      s_images: "",
      l_images: "",
      collection_code: "",
      // Rules
      pcodeRules: [
        v => !!v || 'Pcode is required',
        v => v.length >= 3 || 'Pcode must be more than 3 characters',
        v => v.length <= 4 || 'Pcode must be less than 5 characters'
      ],
      requireRule: [
        v => !!v || 'This field is required',
      ],
      commonRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'This field must be more than 3 characters',
      ]
    };
  },
  methods: {
    async index() {
      await this.$axios
        .get("product")
        .then((response) => {
          this.products = response.data;
          this.loader=false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
    show(slug) {
      this.slug = slug;
      this.dialog = true;
    },
    destroy() {
      if (this.selected.length > 0) {
        let arr_delete = this.selected.map((e) => e.id);
        this.$swal({
          icon: "info",
          title: "Are you sure to delete?",
          confirmButtonText: "Yes",
          showCancelButton: true,
          confirmButtonColor: "#1976d2",
          cancelButtonColor: "red",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$axios
              .delete("product/1", { params: arr_delete })
              .then((response) => {
                this.index();
                this.$toastr.s({
                  title: "Success!",
                  msg: "Record deleted successfully.",
                  timeout: 3000,
                  progressbar: true,
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select a record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    step1() {
      this.e1 = 2;
    },
    step2() {
      if(this.$refs.form2.validate()){
        this.e1 = 3;
      }
    },
    step3() {
      if(this.$refs.form3.validate()){
        this.e1 = 4;
      }
    },
    step4() {
      if(this.$refs.form4.validate()){
        this.e1=1;
        this.store();
      }
    },
    openShowDialog() {
      if (this.selected.length == 1) {
        this.show(this.selected[0].page_link);
      } else {
        this.$toastr.i({
          title: "Info!",
          msg: "Please select one record.",
          timeout: 3000,
          progressbar: true,
        });
      }
    },
    store() {
      this.add_dialog=false;
      let data = new FormData();
      data.append("landing_info", JSON.stringify(this.landing_info));
      data.append("prices", this.prices);
      data.append("s_images", this.s_images);
      for (let i = 0; i < this.s_images.length; i++) {
        let file = this.s_images[i];
        data.append("s_images[" + i + "]", file);
      }

      for (let i = 0; i < this.l_images.length; i++) {
        let file = this.l_images[i];
        data.append("l_images[" + i + "]", file);
      }

      this.$axios
        .post("product", data, {
          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.$refs.form1.reset();
          this.$refs.form2.reset();
          this.$refs.form3.reset();
          this.$refs.form4.reset();
          this.index();
          this.$toastr.s({
            title: "Success!",
            msg: "Record inserted successfully!",
            timeout: 3000,
            progressbar: true,
          });
          this.e1 = 1;
          this.$refs.add_form.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCompanies(id) {
      this.country_id = id;
      this.companies = this.data.companies.filter((el) => {
        return el.country_id == id;
      });
      this.templates = [];
    },
    getTemplates(id) {
      this.company_id = id;
      this.templates = this.data.templates.filter((el) => {
        return el.id == id;
      });
    },
    collectionType($event, type) {
      this.landing_info.is_collection = type;
    },
    openAddDialog() {
      this.countries = this.data.countries;
      this.add_dialog = true;
    },
    uploadFile1(file) {
      this.s_images = file;
    },
    uploadFile2(file) {
      this.l_images = file;
    },
    addToCollection() {
      if (
        !this.landing_info.collection_items.find(
          (el) => el == this.collection_code
        )
      ) {
        if (!(this.collection_code.length < 3 || this.collection_code.length > 4)) {
          this.landing_info.collection_items.push(this.collection_code.toUpperCase());
          this.collection_code = "";
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
    selectTemplate(id, type) {
      this.landing_info.template_id = id;
      this.landing_info.page_type = type;
    },
    addMorePrices() {
      this.landing_info.prices.push({
        quantity: "",
        price: "",
        old_price: "",
      });
    },
    removeMorePrices(index) {
      this.landing_info.prices.splice(index, 1);
    },
  },
  watch: {
    landing_info: {
      handler(value) {},
      deep: true,
    },
  },
  created() {
    this.index();
    this.getInfo();
  },
};
</script>
<style scoped>
.country-card {
  border: 1.5px solid #1976d2 !important;
}
</style>
