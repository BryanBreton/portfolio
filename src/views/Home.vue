<template>
  <div class="home">
    <top-bar />
    <v-container>
      <div class="home__content">
        <v-row>
          <v-col align="center">
            <img
              class="home__profileImage"
              justify="center"
              src="../assets/bryan.png"
            />
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col class="titre" align="center">
            <h1 class="home__job title--gradient">Full stack Developer</h1>
            <h3 class="home__h3">22, French Developer based in Auckland</h3>
            <p class="home__p">
              4 years of experience as Developer and a year as a lead dev
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="6" align="end">
            <v-btn class="home__btn white--text" x-large rounded primary
              >Experiences</v-btn
            >
          </v-col>
          <v-col cols="6" align="start">
            <v-btn class="home__btn white--text" x-large rounded primary
              >Formations</v-btn
            >
          </v-col>
        </v-row>
        <v-row class="home__promotion" align="end">
          <span> Available for freelance </span>
        </v-row>
        <competences />
        <outils />
        <v-row class="home__whiteSpace"></v-row>
      </div>
      <!-- <home-footer /> -->
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar";
// import HomeFooter from "@/components/HomeFooter";
import Competences from "@/components/Competences";
import Outils from "@/components/Outils";
export default {
  name: "Home",
  created() {
    // switch (this.$vuetify.breakpoint.name) {
    //   case "xs":
    //     this.$router.push("HomeMobile");
    //     break;
    //   case "sm":
    //     this.$router.push("HomeMobile");
    //     break;
    //   case "md":
    //     this.$router.push("HomeMobile");
    //     break;
    //   case "lg":
    //     return 600;
    //   case "xl":
    //     return 800;
    // }
  },
  components: {
    TopBar,
    // HomeFooter,
    Competences,
    Outils,
  },
};
</script>
<style>
.home {
  width: 100vw;
  height: 100vh;
}
.home__content {
  margin-top: 10% !important;
}
.title--gradient {
  background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home__profileImage {
  border-radius: 100%;
  max-height: 15vh;
}
.titre {
  color: black;
}
.home__job {
  font-size: 500%;
}
.home__h3 {
  font-size: 250%;
}
.home__p {
  font-size: 150%;
}
.home__btn {
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
}
.home__promotion::before {
  background: #95cd71;
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 2%;
}
.home__promotion {
  color: black;
  /* position: fixed; */
  /* bottom: 20%; */
}
.home__whiteSpace {
  height: 20vh;
}
</style>
