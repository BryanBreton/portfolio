<template>
  <div class="topbar">
    <v-row class="mt-10 ml-10">
      <v-col cols="1">
        <img class="profileImage" justify="center" src="../assets/bryan.png" />
      </v-col>
      <v-col cols="4"> <h1 class="nom">Bryan Breton</h1> </v-col>
      <v-col class="nom" align="end">
        <v-icon class="ml-2" x-large color="#0a66c2"> mdi-linkedin </v-icon>
        <v-icon class="ml-2" x-large color="white"> mdi-instagram </v-icon>
        <v-icon class="ml-2" x-large color="white"> mdi-gmail </v-icon>
        <v-icon class="ml-2" x-large color="#1d9bf0"> mdi-twitter </v-icon>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "topBarDesktop",
};
</script>
<style>
.profileImage {
  border-radius: 100%;
  max-height: 7vh;
}
.nom {
  color: white;
  font-family: "AmstelvarAlpha";
  font-style: italic;
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
