<template>
  <v-card class="my-5" elevation="4">
    <v-card-title> Actions </v-card-title>
    <v-card-text>
      <v-row>
        <v-col md="4" xs="12" sm="12" class="d-flex justify-start">
          <v-text-field
            dense
            outlined
            rounded
            placeholder="Search.."
            append-icon="mdi-search"
            hide-details=""
            v-model="search"
          ></v-text-field>
        </v-col>
        <v-col md="8" xs="12" sm="12" class="d-flex justify-end">
          <v-btn
            small
            class="primary text-capitalize mr-1 font-weight-bold"
            @click="$emit('openAddModal')"
          >
            <v-icon small>mdi-plus</v-icon> Create</v-btn
          >
          <v-btn
            small
            class="success text-capitalize mr-1"
            @click="$emit('openEditModal')"
          >
            <v-icon small>mdi-pencil</v-icon> Edit</v-btn
          >
          <v-btn small class="error text-capitalize mr-1" @click="deleteRecord">
            <v-icon small>mdi-delete</v-icon> Delete</v-btn
          >
          <v-btn
            small
            class="orange text-capitalize white--text mr-1"
            @click="$emit('openSearchModal')"
          >
            <v-icon small>mdi-filter</v-icon> Filter</v-btn
          >
          <v-btn small class="text-capitalize" @click="$emit('resetDatatable')">
            <v-icon small>mdi-refresh</v-icon> Reset</v-btn
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
      search: "",
    };
  },
  methods: {
    deleteRecord() {
      this.$emit("deleteRecord");
    },
  },
  watch: {
    search() {
      this.$emit("searchContent", this.search);
    },
  },
};
</script>

<style>
.radio-group {
  margin: 0;
  padding: 0;
}
</style>