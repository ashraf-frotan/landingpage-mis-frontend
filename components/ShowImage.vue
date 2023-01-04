<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card style="position: relative"
      ><v-btn
        style="position: absolute; z-index: 1; right: 4px; top: 4px"
        small
        icon
        color="white"
        outlined
        @click="dialog = false"
        ><v-icon>mdi-close</v-icon></v-btn
      >
      <v-img :src="url" width="100%"></v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      url: "",
    };
  },
  methods: {
    openDialog(url) {
      this.url = url;
      this.dialog = true;
    },
  },
};
</script>

<style>
</style>