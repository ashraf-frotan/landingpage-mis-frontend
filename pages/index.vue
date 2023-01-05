<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card color="#bf4abf" dark>
          <div class="d-flex justify-center">
            <div>
              <v-card-title class="text-h6"> User Accounts </v-card-title>
              <v-card-subtitle> accounts list </v-card-subtitle>
              <v-card-actions class="ma-0 pa-0">
                <v-btn class="ml-3" outlined rounded x-small>
                  view accounts
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="100" tile>
              <v-img
                :src="require('~/assets/images/profile.jpg')"
                class="rounded"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="#42b3f4" dark>
          <div class="d-flex justify-center">
            <div>
              <v-card-title class="text-h6 ma-0"> Landing Pages </v-card-title>
              <v-card-subtitle> landing pages list </v-card-subtitle>
              <v-card-actions class="ma-0 pa-0">
                <v-btn class="ml-3" outlined rounded x-small> view now </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="100" tile>
              <v-img
                :src="require('~/assets/images/profile.jpg')"
                class="rounded"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="#952175" dark>
          <div class="d-flex justify-center">
            <div>
              <v-card-title class="text-h6 ma-0"> Templates List </v-card-title>
              <v-card-subtitle> check them </v-card-subtitle>
              <v-card-actions class="ma-0 pa-0">
                <v-btn class="ml-3" outlined rounded x-small>
                  see templates
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="100" tile>
              <v-img
                :src="require('~/assets/images/profile.jpg')"
                class="rounded"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col cols="12">
              <v-sparkline
                :fill="fill"
                :gradient="selectedGradient"
                :line-width="width"
                :padding="padding"
                :smooth="radius || false"
                :value="value"
                auto-draw
              ></v-sparkline>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row class="fill-height" align="center">
            <v-col cols="6" md="6" class="d-flex justify-center">
              <v-item-group v-model="selectedGradient" mandatory class="d-flex">
                <v-item
                  v-for="(gradient, i) in gradients"
                  :key="i"
                  v-slot="{ active, toggle }"
                  :value="gradient"
                >
                  <v-card
                    :style="{
                      background:
                        gradient.length > 1
                          ? `linear-gradient(0deg, ${gradient})`
                          : gradient[0],
                      border: '2px solid',
                      borderColor: active ? '#222' : 'white',
                    }"
                    width="30"
                    height="30"
                    @click.native="toggle"
                  ></v-card>
                </v-item>
              </v-item-group>
            </v-col>
            <v-col cols="6" md="6">
              <v-row class="fill-height" align="center">
                <v-switch v-model="fill" label="Filled"></v-switch>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  head() {
    return {
      title: "Dashboard",
    };
  },
  data: () => ({
    fill: true,
    selectedGradient: gradients[3],
    gradients,
    padding: 8,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
  }),
};
</script>
