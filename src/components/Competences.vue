<template>
  <div class="home__competences">
    <v-row class="mt-12 text-center home__competences-title">
      <h1>Des competences adaptées a vos projets</h1>
    </v-row>
    <v-row class="home__competences-description">
      <h2>Je pourrais vous apporter toutes mes connaissances</h2>
    </v-row>
    <v-row class="home__competences-images">
      <v-col>
        <v-row>
          <v-col align="center">
            <v-card class="home__competences-card">
              <img
                class="home__competences-image"
                src="../assets/devVueJS.jpg"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <p class="home__competences-nom">VueJS/React</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col align="center">
            <v-card class="home__competences-card">
              <img
                class="home__competences-image"
                src="../assets/devVueJS.jpg"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <p class="home__competences-nom">NodeJS</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col align="center">
            <v-card class="home__competences-card">
              <img
                class="home__competences-image"
                src="../assets/devVueJS.jpg"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <p class="home__competences-nom">Team Management</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.home__competences-image{
  width: 20vw;
}
.home__competences-card {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px !important;
}
.home__competences-description{
  text-align: center;
}
</style>
