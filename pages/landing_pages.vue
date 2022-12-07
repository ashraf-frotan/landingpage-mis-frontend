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
      <ActionsCard />
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
            <v-stepper-step :complete="e1 > 2" step="2">
              Step 2
            </v-stepper-step>
            <v-stepper-step :complete="e1 > 3" step="3">
              Step 3
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" color="grey lighten-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsam amet nesciunt. Dicta neque libero excepturi, rem,
                suscipit, minima voluptatibus aliquam ad quam sint alias et esse
                error aliquid nisi?
              </v-card>

              <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card class="mb-12" color="grey lighten-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                ipsam amet nesciunt. Dicta neque libero excepturi, rem,
                suscipit, minima voluptatibus aliquam ad quam sint alias et esse
                error aliquid nisi?
              </v-card>

              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1">
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
      e1: 1,
    };
  },
  methods: {
    getInfo() {
      this.$axios
        .get("get_info")
        .then((response) => {
          this.countries = response.data.countries;
          this.companies = response.data.companies;
          this.page_types = response.data.page_types;
          this.templates = response.data.page_types;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openAddDialog() {},
  },
  created() {
    this.getInfo();
  },
};
</script>