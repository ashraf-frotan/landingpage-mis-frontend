<template>
  <v-card class="my-3" elevation="4">
    <v-card-title class="pb-1">
      <v-icon>mdi-pencil</v-icon> Actions
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="4" xs="12" sm="12">
          <v-text-field
            dense
            outlined
            rounded
            placeholder="Search.."
            append-icon="mdi-magnify"
            hide-details=""
            v-model="search"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="8" xs="12" sm="12">
          <div class="d-flex flex-wrap justify-center justify-md-end">
            <v-btn
              small
              class="primary text-capitalize mr-1 font-weight-bold"
              v-if="view"
              @click="$emit('openShowDialog')"
            >
              <v-icon small>mdi-eye</v-icon> View</v-btn
            >
            <v-btn
              small
              class="primary text-capitalize mr-1 font-weight-bold"
              @click="$emit('openAddDialog')"
            >
              <v-icon small>mdi-plus</v-icon> Create</v-btn
            >
            <v-btn
              small
              class="success text-capitalize mr-1"
              @click="$emit('openEditDialog')"
            >
              <v-icon small>mdi-pencil</v-icon> Edit</v-btn
            >
            <v-btn
              small
              class="error text-capitalize mr-1"
              @click="$emit('deleteRecord')"
            >
              <v-icon small>mdi-delete</v-icon> Delete</v-btn
            >
            <v-btn
              small
              class="orange text-capitalize white--text mr-1"
              @click="$emit('openFilterDialog')"
            >
              <v-icon small>mdi-filter</v-icon> Filter</v-btn
            >
            <v-btn
              small
              class="text-capitalize mt-2 mt-md-0 mt-sm-0"
              @click="$emit('resetDatatable')"
            >
              <v-icon small>mdi-refresh</v-icon> Reset</v-btn
            >
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }" v-if="change_status">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  small
                  dark
                  class="ml-1 text-capitalize"
                >
                  Select Status
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  link
                  dense
                  v-for="s in statuses"
                  :key="s.status"
                  @click="$emit('changeStatus', s.status)"
                >
                  <v-list-item-title>{{ s.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ActionsCard",
  props: ["view", "change_status"],
  data() {
    return {
      search: "",
      statuses: [
        { status: 0, text: "Register" },
        { status: 1, text: "Publish" },
        { status: 2, text: "Unpublish" },
      ],
    };
  },
  methods: {},
  watch: {
    search() {
      this.$emit("searchContent", this.search);
    },
  },
};
</script>

<style scoped>
.radio-group {
  margin: 0;
  padding: 0;
}
.v-card__title {
  font-size: 16px;
}
</style>