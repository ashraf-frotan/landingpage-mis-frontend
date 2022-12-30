<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="4">
        <v-card-title> Dashboard </v-card-title>
        <v-card-text>
          <div>
            <NuxtLink to="landing/x-y-x">Landing Page</NuxtLink>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          libero recusandae, ducimus nesciunt ab voluptatibus quos dolorum
          perferendis hic eligendi id tempora, necessitatibus velit eum sed
          laboriosam fugit architecto alias!
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: "Dashboard",
    };
  },
};
</script>
