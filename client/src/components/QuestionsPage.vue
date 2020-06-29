<template lang="html">

  <div class="">
    <!-- current player + score -->

    <div id="current_score">
      <p>{{user.name}} <br> {{user.score}} pts</p>
    </div>

      <div v-if="selectedAnimal && selectedQuestion">
        <!-- {{ getNewQuestion() }}
        {{ getNewAnimal() }} -->
        <questions-display v-if="toggleAnswer == false" :selectedAnimal="selectedAnimal" :selectedQuestion="selectedQuestion" />
      </div>

    <div v-if="toggleAnswer">
      <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }}</h3>
        <p>{{ this.statement }}</p>
      <button name="button" v-on:click="nextQuestion">Next Question</button>
    </div>
  </div>

</template>

<script>

import QuestionsDisplay from './QuestionsDisplay.vue';
// import GameService from '../services/GameService.js';
import { eventBus } from '../main.js';


export default {
  name: 'questions-page',
  data(){
    return {
      selectedAnimal: null,
      selectedQuestion: null,
      toggleAnswer: false,
      statement: null
    }
  },
  props: ['user', 'animals', 'questions'],

  mounted(){
    eventBus.$on('correct-answer', (correctAnswer) => {
      this.correctAnswer = correctAnswer
    })
    eventBus.$on('guess-answer', (guessAnswer) => {
      this.guessAnswer = guessAnswer
    })
    eventBus.$on('display-answer', (statement) => {
        this.statement = statement
        this.revealAnswer()
    })

    this.getNewAnimal()
    this.getNewQuestion()
  },
  methods: {
    getNewAnimal(){
        console.log('getNewAnimal called');
        this.selectedAnimal = this.animals[Math.floor(Math.random() * this.animals.length)]
    },
    getNewQuestion(){
        console.log('getNewQuestion called');
        this.selectedQuestion = this.questions[Math.floor(Math.random() * this.questions.length)]
    },
    revealAnswer(){
      this.toggleAnswer = true
    },
    nextQuestion(){
      this.toggleAnswer = false
      this.getNewAnimal()
      this.getNewQuestion()
    }
  },

  components: {
    'questions-display': QuestionsDisplay
  }

}

</script>

<style lang="css" scoped>
#current_score {
  /* background-image: url(../); */
}
</style>
