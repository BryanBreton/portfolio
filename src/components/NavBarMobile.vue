<template>
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
</template>
<style>
.barBasse {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
}
</style>