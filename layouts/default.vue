<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="primary darken-1"
      dark
    >
      <v-list>
        <v-list-item class="pa-3 pr-2">
          <img
            src="@/assets/images/logo.png"
            alt=""
            width="80px"
            class="logo"
          />
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="mr-2" v-bind="attrs" v-on="on" elevation="2">
            <v-avatar>
              <img src="~/assets/images/profile.jpg" alt="" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link>
            <v-icon>mdi-account</v-icon> &nbsp;
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-icon>mdi-logout</v-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/",
        },
        {
          icon: "mdi-flag",
          title: "Countries",
          to: "/countries",
        },
        {
          icon: "mdi-domain",
          title: "Companies",
          to: "/companies",
        },
        {
          icon: "mdi-image-album",
          title: "Page Types",
          to: "/page_types",
        },
        {
          icon: "mdi-credit-card-chip-outline",
          title: "Templates",
          to: "templates",
        },
        {
          icon: "mdi-credit-card-chip-outline",
          title: "Landing Pages",
          to: "landing_pages",
        },
      ],
      miniVariant: false,
      right: true,
    };
  },
  created() {},
};
</script>

<style scoped>
</style>
