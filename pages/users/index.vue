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
      <ActionsCard
        @openAddDialog="openDialog('add')"
        @openEditDialog="openDialog('edit')"
      />
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="users"
            v-model="selected"
            show-select
            :single-select="single_select"
          >
            <template v-slot:item.image="{ item }">
              <a :href="item.image" target="_blank">
                <v-img :src="item.image" width="60" />
              </a>
            </template>
            <template v-slot:top>
              <v-switch color="primary" v-model="single_select" dense>
              </v-switch>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <Dialog @closeAddDialog="index" ref="add_dialog" />
  </v-row>
</template>
<script>
import Dialog from "~/components/users/Dialog.vue";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      single_select: false,
      users: [],
      user: null,
      selected: [],
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
    openDialog(type) {
      if (type == "add") {
        this.$refs.add_dialog.openDialog(null);
      } else {
        if (this.selected.length == 1) {
          this.user = this.users.filter(
            (user) => user.id == this.selected[0].id
          );
          this.$refs.add_dialog.openDialog(...this.user);
        } else {
          this.$toastr.i({
            title: "Info!",
            msg: "Please select one record",
            timeout: 3000,
            progressbar: true,
          });
        }
      }
    },
  },
  created() {
    this.index();
  },
};
</script>