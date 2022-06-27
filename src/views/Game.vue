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
          <img
            v-if="getCoordonneeImage(col, row)"
            src="../assets/bryan.png"
          />
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
  mounted() {
    window.addEventListener("keyup", this.onkeyup);
  },
  methods: {
    getCoordonneeImage(x, y) {
      return x === this.imgX && y === this.imgY ? true : false;
    },
    checkNavigation() {
      let navigation = false
      if(this.imgX === 1 && this.imgY === 4){
        this.$router.push('contact')
        navigation = true
      } else if (this.imgX === 7 && this.imgY === 4) {
        navigation = true
      } else if (this.imgX === 4 && this.imgY === 1) {
        navigation = true
      } else if (this.imgX === 4 && this.imgY === 7) {
        navigation = true
      }
      console.log(this.imgX);
      console.log(this.imgY);
      console.log(navigation);
      return navigation
    },
    onkeyup(event) {
      switch (event.code) {
        case "ArrowUp":
          this.checkNavigation()
          this.imgY--;
          break;
        case "ArrowDown":
          this.checkNavigation()
          this.imgY++;
          break;
        case "ArrowLeft":
          this.checkNavigation()
          this.imgX--;
          break;
        case "ArrowRight":
          this.checkNavigation()
          this.imgX++;
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
