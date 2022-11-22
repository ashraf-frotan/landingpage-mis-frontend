<template>
  <v-card class="my-5" elevation="4">
    <v-card-title> Actions </v-card-title>
    <v-card-text>
      <v-row>
        <v-col md="6" xs="12" class="d-flex justify-start">
          <v-radio-group
            v-model="search_type"
            dense
            hide-details=""
            column
            label="Search Type"
            class="radio-group"
          >
            <v-radio value="id" label="ID" class="f" />
            <v-radio value="content" label="Content" />
          </v-radio-group>
          <v-text-field
            dense
            outlined
            rounded
            placeholder="Search.."
            append-icon="mdi-search"
            hide-details=""
          ></v-text-field>
        </v-col>
        <v-col md="6" xs="12" class="d-flex justify-end">
          <v-btn small class="primary text-capitalize mr-1">
            <v-icon small>mdi-plus</v-icon> Create</v-btn
          >
          <v-btn small class="success text-capitalize mr-1">
            <v-icon small>mdi-pencil</v-icon> Edit</v-btn
          >
          <v-btn small class="error text-capitalize mr-1">
            <v-icon small>mdi-delete</v-icon> Delete</v-btn
          >
          <v-btn small class="orange text-capitalize white--text">
            <v-icon small>mdi-filter</v-icon> Filter</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ActionsCard",
  data() {
    return {
      search_type: "id",
    };
  },
};
</script>

<style>
.radio-group {
  margin: 0;
  padding: 0;
}
</style>