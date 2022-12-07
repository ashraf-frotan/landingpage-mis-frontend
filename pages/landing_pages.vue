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
    <v-dialog v-model="add_dialog" width="800">
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
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" editable>
              Step 1
            </v-stepper-step>
            <v-stepper-step :complete="e1 > 2" step="2" editable>
              Step 2
            </v-stepper-step>
            <v-stepper-step :complete="e1 > 3" step="3" editable>
              Step 3
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <div>
                <v-row>
                  <v-col cols="12" md="6" sm="12" xs="12">
                    <v-select
                      :items="countries"
                      item-text="name"
                      item-value="id"
                      rounded
                      outlined
                      dense
                      label="Country"
                      placeholder="Please select country"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="6" sm="12" xs="12">
                    <v-select
                      :items="companies"
                      item-text="name"
                      item-value="id"
                      rounded
                      outlined
                      dense
                      label="Company"
                      placeholder="Please select company"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="6" sm="12" xs="12">
                    <v-select
                      :items="page_types"
                      item-text="name"
                      item-value="id"
                      rounded
                      outlined
                      dense
                      label="Landing Pages"
                      placeholder="Please select landing page"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="6" sm="12" xs="12">
                    <v-select
                      :items="templates"
                      item-text="name"
                      item-value="id"
                      rounded
                      outlined
                      dense
                      label="Templates"
                      placeholder="Please select templates"
                    >
                    </v-select>
                  </v-col>
                </v-row>
              </div>
              <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card class="mb-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsam amet nesciunt. Dicta neque libero excepturi, rem,
                suscipit, minima voluptatibus aliquam ad quam sint alias et esse
                error aliquid nisi?
              </v-card>
              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card class="mb-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsam amet nesciunt. Dicta neque libero excepturi, rem,
                suscipit, minima voluptatibus aliquam ad quam sint alias et esse
                error aliquid nisi?
              </v-card>
              <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>
              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
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