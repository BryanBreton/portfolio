<template>
  <div class="home">
    <top-bar-mobile />
    <v-row>
        
<div id="table">
  <a class="anim" href="http://www.thismanslife.co.uk">Full stack Developer</a>
</div>
    </v-row>
    <v-row class="mt-6">
      <v-col class="description" align="center">
        <h3>22, French Developer based in Auckland</h3>
        <p>4 years of experience as Developer and a year as a Lead Dev</p>
      </v-col>
    </v-row>
    <v-row class="mobile__promotion" align="end">
      <span> Available for freelance </span>
    </v-row>

    <div class="barBasse">
      <v-bottom-navigation>
        <v-btn
          ><span>Formations</span>

          <v-icon x-large color="#0a66c2"> mdi-account-school </v-icon></v-btn
        >

        <v-btn
          ><span>Experiences</span>

          <v-icon x-large > mdi-desktop-classic </v-icon></v-btn
        >

        <v-btn
          ><span>Contact</span>

          <v-icon x-large color="#1d9bf0"> mdi-account-box </v-icon></v-btn
        >
      </v-bottom-navigation>
    </div>
  </div>
</template>
<script>
import TopBarMobile from "../components/TopBarMobile.vue";
export default {
  components: {
    TopBarMobile,
  },
};
</script>
<style>
.profileImageMobile {
  border-radius: 100%;
  max-height: 15vh;
}
.home {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg-small-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.description {
    position: fixed;
    bottom: 30%;
    color: white
}
.barBasse {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
}
.mobile__promotion::before {
  background: #95cd71;
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 15px;
  margin-bottom: 4%;
}
.mobile__promotion {
  color: white;
  position: fixed;
  bottom: 10%;
}
@keyframes tipsy {
  0% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

body {
  font-family: helvetica, arial, sans-serif;
  background-color: #2e2e31;
}

.anim {
  color: #fffbf1 !important;
  text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
  font-size: 80px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.anim:before,
.anim:after {
  content: '';
  padding: .9em .4em;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  display: block;
  border: 15px solid white;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  animation: 10s infinite alternate ease-in-out tipsy;
}

.anim:before {
  border-color: white white rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  z-index: -1;
}

.anim:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white white;
  box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
}
</style>
