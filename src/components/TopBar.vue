<template>
  <div class="topbar">
    <v-container>
      <v-row>
        <v-col cols="1" align="center" v-if="!isHome()"> <v-icon @click="redirectHome()" class="topbar__arrow" x-large>mdi-arrow-left-circle</v-icon> </v-col>
        <v-col align="center"> <h1 class="topbar__nom">Bryan Breton</h1> </v-col>
      </v-row>
      
    </v-container>
    
    
  </div>
</template>
<script>
export default {
  name: "topBarDesktop",
  methods: {
    redirectHome() {
      this.$router.push('/')
    },
    isHome() {
      return window.location.pathname === "/" ? true : false
    }
  }
};
</script>
<style>
.topbar__nom {
  color: black;
  font-size: 300% !important;
}
.topbar__arrow {
  margin-top: 30%;
}
.mdi-instagram {
  background: radial-gradient(
      circle farthest-corner at 35% 90%,
      #fec564,
      transparent 50%
    ),
    radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
    radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 20% -50%,
      #5258cf,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 60% -20%,
      #893dc2,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
    linear-gradient(
      #6559ca,
      #bc318f 30%,
      #e33f5f 50%,
      #f77638 70%,
      #fec66d 100%
    );
  border-radius: 30%;
}
</style>
