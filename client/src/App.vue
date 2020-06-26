<template>
  <div id="app">
    <start-page v-if="this.gameActive == false"/>
    <end-page :user="user"/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'
import {eventBus} from './main.js'
import EndPage from './components/EndPage.vue'
export default {
  name: 'app',
  components: {
    'start-page': StartPage,
    'end-page': EndPage
  },
  data() {
    return {
      gameActive: false,
      user: null,
      questionCounter: 0
    }
  },
  mounted(){
    eventBus.$on('start-quiz', (res) => {
      this.user = res;
      this.gameActive = true
    })
  }
}
</script>

<style>

</style>
