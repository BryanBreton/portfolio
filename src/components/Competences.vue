<template>
  <div class="home__competences">
    <v-row class="mt-12 text-center home__competences-title">
      <v-col align="center">
        <h1 class="title--gradient">Des competences adaptées a vos projets</h1>
      </v-col>
    </v-row>
    <v-row class="home__competences-description">
      <v-col align="center">
        <h2>Je pourrais vous apporter toutes mes connaissances</h2>
      </v-col>
    </v-row>
    <v-row class="home__competences-images">
      <v-col>
        <v-row>
          <v-col align="center">
            <v-card class="home__competences-card">
              <img
                class="home__competences-image"
                src="../assets/mobile.jpg"
              />
              <v-card-title>
                  VueJS/React
              </v-card-title>
            </v-card>
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
              <v-card-title>
                  NodeJS/Spring Boot
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        
      </v-col>
      <v-col>
        <v-row>
          <v-col align="center">
            <v-card rounded class="home__competences-card">
              <img
                class="home__competences-image"
                src="../assets/team-management.png"
              />
              <v-card-title>
                  Team Management
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.home__competences-image {
  width: 20vw;
  height: 18vh;
}
.home__competences-images {
    flex-direction: row;
}
.home__competences-card {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px !important;
}
.home__competences-description {
  text-align: center;
}
.home__competences-nom{
    font-size: 150%;
}

@media (max-width: 768px) {
    .home__competences-images {
        flex-direction: column;
    }
    .home__competences-card {
        width: 80vw;
    }
    .home__competences-image {
        width: 80vw;
    }
}
</style>
