<template>
  <div class="home" @click="redirectGame()">
c'est bryan
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    redirectGame() {
      this.$router.push('game')
    }
  }
}
</script>
