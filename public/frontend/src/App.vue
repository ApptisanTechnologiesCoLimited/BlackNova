<template>
  <div id="app">
    <HeaderAll/>
  </div>
</template>

<script>
import HeaderAll from './components/HeaderAll.vue'

export default {
  name: 'app',
  components: {

    HeaderAll
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
