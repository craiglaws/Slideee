<template>
  <div id="app">
    <start-page/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'
export default {
  name: 'app',
  components: {
    'start-page': StartPage
  },
  data() {
    return {
      gameActive: null
    }
  }
}
</script>

<style>

</style>
