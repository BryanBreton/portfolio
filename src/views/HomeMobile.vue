<template>
  <div class="homeMobile">
    <top-bar-mobile />
    <v-row class="mt-6">
        <v-col align="center">
          <h1 class="anim homeMobile__job">Full stack Developer</h1>
        </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col class="homeMobile__description" align="center">
        <h3>22, French Developer based in Auckland</h3>
        <p>4 years of experience as Developer and a year as a Lead Dev</p>
      </v-col>
    </v-row>
    <v-row class="mobile__promotion" align="end">
      <span> Available for freelance </span>
    </v-row>

    <nav-bar-mobile/>
  </div>
</template>
<script>
import TopBarMobile from "../components/TopBarMobile.vue";
import NavBarMobile from "../components/NavBarMobile.vue";
export default {
  components: {
    TopBarMobile,
    NavBarMobile
  },
};
</script>
<style>
.profileImageMobile {
  border-radius: 100%;
  max-height: 15vh;
}
.homeMobile {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  /* background-image: url("../assets/bg-small-1.jpg");
  background-size: cover;
  background-repeat: no-repeat; */
}
.homeMobile__job {
  background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.homeMobile__description {
    color: black;
    font-size: 150%
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
  color: black;
  position: fixed;
  bottom: 10%;
}
/* @keyframes tipsy {
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
} */

/* .anim {
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
} */
</style>
