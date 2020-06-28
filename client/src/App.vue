<template>
  <div id="app">
    <start-page v-if="this.gameActive === false"/>
    <questions-page v-if="this.gameActive === true" :user="user"/>
    <end-page v-if="this.questionCounter === 10" :user="user"/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'
import {eventBus} from './main.js'
import EndPage from './components/EndPage.vue'
import QuestionsPage from './components/QuestionsPage.vue'

export default {
  name: 'app',
  components: {
    'start-page': StartPage,
    'end-page': EndPage,
    'questions-page': QuestionsPage
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
    eventBus.$on('right-answer', (val) => {
      this.user.score += val
    })
    eventBus.$on('add-to-counter', (val) => {
      this.questionCounter += val
    })
  }
}
</script>

<style>

</style>
