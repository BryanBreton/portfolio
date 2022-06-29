<template>
  <div>
    
    <v-container>
      <v-row>
        <v-col cols="1"><v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon></v-col>

        <!-- <v-col cols="4">
          
        </v-col> -->
        <v-col align="center" class="nom"><h1>Bryan Breton</h1></v-col>
      </v-row>
      <v-row>
          <v-col align="center"><img
            class="profileImageMobile"
            justify="center"
            src="../assets/bryan.png"
          />

          </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <v-row>
        <v-col align="center">
          <h3>Find me on my social networks</h3>
          
        </v-col>
      </v-row>
          <v-list-item>
            <v-icon x-large color="blue">mdi-twitter</v-icon>
            <v-list-item-title class="ml-2"><h3>Twitter</h3></v-list-item-title>
          </v-list-item>

          <v-list-item class="mt-6">
            <v-icon x-large color="red">mdi-gmail</v-icon>
            <v-list-item-title class="ml-2"><h3>Gmail</h3></v-list-item-title>
          </v-list-item>
          <v-list-item class="mt-6">
            <v-icon x-large color="blue">mdi-linkedin</v-icon>
            <v-list-item-title class="ml-2"><h3>Linkedin</h3></v-list-item-title>
          </v-list-item>
          <v-list-item class="mt-6">
            <v-icon x-large color="white">mdi-instagram</v-icon>
            <v-list-item-title class="ml-2"><h3>Instagram</h3></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
<style>

</style>
