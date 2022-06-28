<template>
  <div class="contact">
    <v-container>
        <v-row class="mt-8">
      <v-col align="center">
        <h1 class="titre__page">Contact</h1>
      </v-col>
    </v-row>
    <v-row class="mt-8">
        <v-col align="center">
           <v-card class="contact__card">
                <v-card-title class="justify-center">
                    Mon profil vous interesse ?
                </v-card-title>
                <v-card-text>
                    Contactez moi via les moyens suivants
                </v-card-text>
            </v-card> 
        </v-col>
    </v-row>
    <v-row class="contact__infos flex-sm-column flex-lg-row" >
        <v-col class="contact__details">
            <v-row>
                <v-col align="center"><h2>Contact details</h2></v-col>
                
            </v-row>
            <v-row class="phone">
                <v-col align="center">
                    <v-icon medium color="white"> mdi-phone </v-icon>
                    (+33) 0682344200
                </v-col>
            </v-row>
            <v-row class="mail">
                <v-col align="center">
                    <v-icon medium color="white"> mdi-email </v-icon>
                    bryanbreton@outlook.fr
                </v-col>
            </v-row>
        </v-col>
        <v-col class="contact__networks">
            <v-row>
                <v-col align="center">
                    <h2>Social Networks</h2>
                </v-col>
                
            </v-row>
            <v-row class="mt-6">
                <v-col align="center">
                    <v-icon class="ml-2" x-large color="#0a66c2">
                        mdi-linkedin
                        </v-icon>
                        <v-icon class="ml-2" x-large color="white">
                        mdi-instagram
                    </v-icon>
                        <v-icon class="ml-2" x-large color="white">
                        mdi-gmail
                    </v-icon>
                        <v-icon class="ml-2" x-large color="#1d9bf0">
                        mdi-twitter
                    </v-icon>
                </v-col>
            
        </v-row> 
        </v-col>
        
    </v-row>
        
    </v-container>
    <nav-bar-mobile v-if="isMobile()"/>
  </div>
</template>
<script>
import NavBarMobile from '../components/NavBarMobile.vue';
export default {
  components: { NavBarMobile },
  methods: {
    isMobile() {
        console.log(window.innerWidth);
        /* eslint-disable */
        if(window.innerWidth < 768) {
            return true
        } else { 
            return false
        }
    }
  }
};
</script>
<style>
.titre__page {
    font-size: 48px;
  background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact__card {
  background-color: white !important;
  color: black !important;
  width: 70%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset !important;}
.v-card__text {
    color: black !important;
}
.v-card__title {
  text-align: center !important;
}
/* .nom {
  color: black !important;
} */
.contact {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg-small-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.contact__details, .phone, .mail{
  color: white;
}
.contact__networks {
  color: white;
}


</style>