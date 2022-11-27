<template>
  <v-row>
    <v-col cols="12">
      <TitleCard :title_info="title_info" />
      <ActionsCard @searchContent="singleSearch($event)" />
      <v-card>
        <v-card-text>
          <v-data-table
            :items="companies"
            :headers="headers"
            show-select
            :single-select="single_select"
            item-key="id"
            v-model="selected"
            dense
            :search="single_search"
          >
            <template v-slot:top>
              <v-switch label="Single Select"></v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TitleCard from "~/components/TitleCard.vue";
import ActionsCard from "~/components/ActionsCard.vue";
export default {
  components: {
    TitleCard,
    ActionsCard,
  },
  data() {
    return {
      selected: [],
      single_select: false,
      single_search: "",
      title_info: { title: "Companies", icon: "mdi-domain", url: "companies" },
      companies: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Logo", value: "logo" },
        { text: "Country", value: "country_id" },
      ],
    };
  },
  methods: {
    index() {
      this.$axios
        .get("company")
        .then((response) => {
          this.companies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    singleSearch(data) {
      this.single_search = data;
    },
  },
  created() {
    this.index();
  },
};
</script>

<style>
</style>