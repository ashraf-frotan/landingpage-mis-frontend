<template>
  <div>
    <v-dialog v-model="filter_dialog" max-width="700">
      <v-card>
        <v-card-title> Filter Products </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4" sm="4" xs="4"
              ><v-select dense></v-select>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
              <v-select dense></v-select>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="4">
              <v-select dense></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn small class="text-capitalize"> Cancel </v-btn>
          <v-btn small class="text-capitalize"> Filter </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter_dialog: true,
      landing_info: {
        countries: [],
        companies: [],
        templates: [],
        pcode: "",
        title: "",
        sale_type: "",
        page_type: "",
      },
    };
  },
};
</script>

<style>
</style>