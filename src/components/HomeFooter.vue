<template>
    <v-footer
    dark
    padless
    absolute
    class="home__footer"
  >
    <v-card
      tile
      class="white black--text text-center home__footer-card"
    >
      <v-card-text>
        <v-btn class="mx-4 black--text" icon x-large color="white"><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn class="mx-4 black--text" icon x-large color="blue"><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn class="mx-4 black--text" icon x-large color="red"><v-icon>mdi-gmail</v-icon></v-btn>
        <v-btn class="mx-4 black--text" icon x-large color="blue"><v-icon>mdi-linkedin</v-icon></v-btn>
      </v-card-text>

      <v-card-text class="black--text pt-0 footer__text">
        Contact me on these social networks or by phone : (+33) 0682344200      
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Bryan Breton</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>
<style>
.home__footer {
  width: 100vw !important;
  position: fixed !important;
  bottom: 0 !important;
}
.home__footer-card {
box-shadow: #00ff95 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px !important;
  width: 100vw !important;
}
.footer__text {
  font-size: 120% !important;
}
</style>