<template>
  <div id="app">

    <start-page v-if="this.gameActive === false"/>

    <questions-page v-if="(this.gameActive === true) && (this.questionCounter < 11)" :user="user" :animals="animals" :questions="questions" :questionCounter="questionCounter"/>

    <end-page v-if="this.questionCounter === 11" :user="user"/>

  </div>
</template>

<script>
import GameService from './services/GameService.js'
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
      questionCounter: 0,
      animals: null,
      questions: null
    }
  },
  mounted(){
    GameService.getAnimals()
    .then(res => this.animals = res)

    GameService.getQuestions()
    .then(res => this.questions = res)

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
    eventBus.$on('new-game', () => {
      this.questionCounter = 0
      this.gameActive = false
    })
  }
}
</script>

<style>

    html {
        margin: 0;
        padding: 0;
        border: none;
    }

    body {
        margin: 0;
        padding: 0;
    }

</style>
