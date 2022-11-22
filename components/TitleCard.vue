<template>
  <v-card elevation="4">
    <v-card-title>
      <v-icon>{{ title.icon }}</v-icon>
      {{ title.title }}
    </v-card-title>
    <v-card-text>
      <NuxtLink to="/" class="text-decoration-none">Dashboard</NuxtLink> >>
      <NuxtLink :to="title.url" class="text-decoration-none">{{
        title.title
      }}</NuxtLink></v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: ["title"],
  data() {
    return {
      title: {},
    };
  },
};
</script>

<style>
</style>