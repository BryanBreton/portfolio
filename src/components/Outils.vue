<template>
  <div class="home__outils">
    <v-row class="mt-12 text-center home__outils-title">
        <v-col align="center">
            <h1 class="title--gradient">Les outils que je maitrise</h1>
        </v-col>
     
    </v-row>
    <v-row class="home__outils-description">
        <v-col align="center">
            <h2>Je pourrais vous apporter toutes mes connaissances</h2>
        </v-col>
      
    </v-row>

    <div class="home__outils-content">
      <v-row class="home__outils-presentation">
        <v-col>
          <v-row>
            <v-col align="center">
              <v-card rounded class="home__outils-card">
                <v-img class="home__outils-image"
                  src="../assets/github.png"
                ></v-img>

                <v-card-title>Github</v-card-title>
              </v-card>
            </v-col>
            <v-col class="mt-10" align="center">
              <v-card rounded class="home__outils-card">
                <v-img class="home__outils-image"
                  src="../assets/kubernetes.png"
                ></v-img>

                <v-card-title>Kubernetes</v-card-title>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-card rounded class="home__outils-card">
                <v-img class="home__outils-image"
                  src="../assets/jenkins.png"
                ></v-img>

                <v-card-title>Jenkins</v-card-title>
              </v-card>
            </v-col>
            <v-col align="center">
              <v-card rounded class="mt-6 home__outils-card" >
                <v-img class="home__outils-image"
                  src="../assets/figma.svg"
                ></v-img>

                <v-card-title>Figma</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <p class="home__outils-explications">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style>
.home__outils-image {
  width: 12vw;
  /* height: 20vh; */
}
.home__outils-card {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px !important;
}
.home__outils-description {
  text-align: center;
}
.home__outils-explications {
  font-size: 150%;
}
.home__outils-presentation {
    flex-direction: row;
}
@media (max-width: 768px) {
    .home__outils-presentation {
        flex-direction: column;
    }
}
</style>
