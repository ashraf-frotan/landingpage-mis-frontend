<template>
  <v-row>
    <v-col cols="12">
      <TitleCard
        :title_info="{
          title: 'Users',
          icon: 'mdi-account-multiple',
          url: 'users',
        }"
      />
      <ActionsCard />
      <v-card>
        <v-card-text>
          <v-data-table :headers="headers" :items="users">
            <template v-slot:item.image="{ item }">
              <v-img :src="item.image" width="60" />
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <AddDialog />
  </v-row>
</template>
<script>
import AddDialog from "~/components/users/AddDialog.vue";
export default {
  components: {
    AddDialog,
  },
  data() {
    return {
      users: [],
      headers: [
        { value: "id", text: "ID" },
        { value: "name", text: "Name" },
        { value: "email", text: "Email" },
        { value: "image", text: "Profile" },
      ],
    };
  },
  methods: {
    index() {
      this.$axios
        .get("user")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.index();
  },
};
</script>