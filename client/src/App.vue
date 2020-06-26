<template>
  <div id="app">
    <start-page/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'
import {eventBus} from './main.js'
export default {
  name: 'app',
  components: {
    'start-page': StartPage
  },
  data() {
    return {
      gameActive: false,
      user: []
    }
  },
  mounted(){
    eventBus.$on('start-quiz', (res) => {
      this.user.push(res);
      this.gameActive = true
    })
  }
}
</script>

<style>

</style>
