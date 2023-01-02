<template>
  <div>
    <v-dialog v-model="filter_dialog" max-width="700">
      <v-card>
        <v-card-title> Filter Products </v-card-title>
        <v-card-text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          consequatur minima sint ex porro amet. Deserunt, quaerat architecto
          dignissimos labore aliquam, magni laborum incidunt, maiores quam
          nesciunt suscipit blanditiis laudantium?
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
    };
  },
};
</script>

<style>
</style>