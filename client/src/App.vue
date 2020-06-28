<template>
  <div id="app">
    <start-page v-if="this.gameActive === false"/>
    <questions-page v-if="this.gameActive === true"/>
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
