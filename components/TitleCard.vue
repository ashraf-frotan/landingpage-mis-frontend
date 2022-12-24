<template>
  <v-card elevation="4">
    <v-card-title class="pb-1">
      <v-icon>{{ title_info.icon }}</v-icon>
      {{ title_info.title }}
    </v-card-title>
    <v-card-text>
      <NuxtLink to="/" class="text-decoration-none">Dashboard</NuxtLink> >>
      <NuxtLink :to="title_info.url" class="text-decoration-none">
        <v-icon small>{{ title_info.icon }}</v-icon>
        {{ title_info.title }}</NuxtLink
      ></v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: ["title_info"],
  data() {
    return {
      title: {},
    };
  },
};
</script>
