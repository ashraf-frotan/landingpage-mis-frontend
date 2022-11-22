<template>
  <v-row>
    <v-col cols="12">
      <TitleCard :title_info="title_info" />
      <ActionsCard />
      <v-card elevation="4">
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="countries"
            dense
            item-key="id"
            v-model="selected"
            show-select
            :single-select="singleSelect"
          >
            <template v-slot:top>
              <v-switch label="Single Select" v-model="singleSelect"></v-switch>
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
  name: "countries",
  components: {
    TitleCard,
    ActionsCard,
  },
  data() {
    return {
      title_info: { title: "Countries", icon: "mdi-flag", url: "countries" },
      selected: [],
      singleSelect: false,
      countries: [
        { id: 1, code: "AFG", name: "Afghanistan", phonecode: "+93" },
      ],
      headers: [
        { text: "ID", value: "id" },
        { text: "Country Code", value: "code" },
        { text: "Name", value: "name" },
        { text: "Phone Code", value: "phonecode" },
      ],
    };
  },
  methods: {
    getCountries() {},
  },
  created() {
    console.log("created");
  },
};
</script>
