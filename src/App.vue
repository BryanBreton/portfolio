<template>
  <v-app>
    <top-bar v-if="!isMobile()"/>
    <top-bar-mobile v-if="isMobile()"/>
    <v-main>
      <router-view />
    </v-main>
    <nav-bar-mobile v-if="isMobile()"/>
    <home-footer v-if="!isMobile()"/>
  </v-app>
</template>

<script>
import NavBarMobile from "./components/NavBarMobile.vue"
import HomeFooter from "./components/HomeFooter.vue"
import TopBarMobile from "./components/TopBarMobile.vue"
import TopBar from "./components/TopBar.vue"
export default {
  name: "App",
  components:{
    TopBarMobile,
    TopBar,
    NavBarMobile,
    HomeFooter,
  },
  methods: {
    isMobile() {
      console.log(window.innerWidth);
      /* eslint-disable */
      if (window.innerWidth < 769) {
        return true;
      } else {
        return false;
      }
    },
  },
  data: () => ({
    //
  }),
};
</script>
