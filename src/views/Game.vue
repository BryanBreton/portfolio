<template>
  <div class="about">
    <v-row
      class="ligne"
      align="center"
      justify="center"
      v-for="row in 7"
      :key="row"
    >
      <v-col align-self="center" v-for="col in 7" :key="col">
        <div class="image">
          <div v-if="row === 1 && col === 4">Experiences</div>
          <div v-if="row === 7 && col === 4">Formations</div>
          <div v-if="row === 4 && col === 1">Contact</div>
          <div v-if="row === 4 && col === 7">Autres</div>
          <img v-if="getCoordonneeImage(col, row)" src="../assets/bryan.png" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgX: 4,
      imgY: 4,
    };
  },
  created() {
    this.resetCoordonnee();
  },
  beforeDestroy() {
    this.resetCoordonnee();
  },
  mounted() {
    window.addEventListener("keyup", this.onkeyup);
  },
  methods: {
    resetCoordonnee() {
      this.imgX = 4;
      this.imgY = 4;
    },
    getCoordonneeImage(x, y) {
      return x === this.imgX && y === this.imgY ? true : false;
    },
    checkNavigation() {
      let navigation = false;
      switch (true) {
        case this.imgX === 0 && this.imgY === 4:
          navigation = true;
          console.log(this.imgX, "navigation", this.imgY);
          this.$router.push("contact");
          break;
        case this.imgX === 8 && this.imgY === 4:
          navigation = true;
          break;
        case this.imgX === 4 && this.imgY === 0:
          navigation = true;
          break;
        case this.imgX === 4 && this.imgY === 8:
          navigation = true;
          break;
      }
      console.log(this.imgX);
      console.log(this.imgY);
      console.log(navigation);
      return navigation;
    },
    onkeyup(event) {
      switch (event.code) {
        case "ArrowUp":
          // on peut plus monter
          if (!(this.imgY === 1 && this.imgX !== 4)) {
            this.imgY = this.imgY - 1;
            this.checkNavigation();
          }
          break;
        case "ArrowDown":
          if (!(this.imgY === 7 && this.imgX !== 4)) {
            this.imgY++;
            this.checkNavigation();
          }
          break;
        case "ArrowLeft":
          if (!(this.imgX === 1 && this.imgY !== 4)) {
            this.imgX = this.imgX - 1;
            this.checkNavigation();
          }
          break;
        case "ArrowRight":
          if (!(this.imgX === 7 && this.imgY !== 4)) {
            console.log('ici')
            this.imgX++;
            this.checkNavigation();
          }

          break;
      }
    },
  },
};
</script>
<style>
.ligne {
  height: 15vh;
}
.colonne {
  width: 15vw;
}
img {
  max-width: 10vw;
  max-height: 10vh;
  border-radius: 100%;
}
.image {
  text-align: center;
}
</style>
