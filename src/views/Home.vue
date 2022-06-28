<template>
  <div class="home" @click="redirectGame()">
    <v-container>
      <top-bar/>
      <v-row class="informations mt-12">
        <v-col align="end">
          <h2>Contact</h2>
          <h3>Phone : (+33) 0682344200</h3>
          <h3>Email : bryanbreton@outlook.fr</h3>
        </v-col>
      </v-row>
      <v-row class="mt-12">
        <v-col class="titre" align="center">
          <h1>Full stack Developer</h1>
          <h3>22, French Developer based in Auckland</h3>
          <p>4 years of experience as Developer and a year as a lead dev</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-btn rounded primary>Start Playing</v-btn>
        </v-col>
      </v-row>
      <v-row class="promotion" align="end">
        <span> Available for freelance </span>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar"
export default {
  name: "Home",
  created() {
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
        this.$router.push("HomeMobile");
        break
      case "sm":
        this.$router.push("HomeMobile");
        break
      case "md":
        this.$router.push("HomeMobile");
        break
      case "lg":
        return 600;
      case "xl":
        return 800;
    }
  },
  methods: {
    redirectGame() {
      this.$router.push("game");
    },
  },
  components: {
    TopBar
  }
};
</script>
<style>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg-small-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.titre {
  color: white;
}
.promotion::before {
  background: #95cd71;
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}
.promotion {
  color: white;
  position: fixed;
  bottom: 10%;
}
.informations {
  color: white
}

</style>
