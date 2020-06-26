<template>
  <div id="app">
    <start-page v-if="this.gameActive == false"/>
    <end-page/>
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
      user: [],
      questionCounter: 0
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
