<template lang="html">

  <div class="">
    <!-- current player + score -->
    <div class="">


      <div v-if="toggleAnswer == false">
        {{ getNewQuestion() }}
        {{ getNewAnimal() }}
        <questions-display v-if="selectedAnimal && selectedQuestion" :selectedAnimal="selectedAnimal" :selectedQuestion="selectedQuestion" />
      </div>

    </div>
    <div v-if="toggleAnswer">
      <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }}</h3>

      <p> The correct answer was {{correctAnswer}}, you guessed {{guessAnswer}} </p>
      <!-- <p>{{pointAwarded}}</p> -->
      <button name="button" v-on:click="nextQuestion">Next Question</button>
    </div>
  </div>

</template>

<script>

import QuestionsDisplay from './QuestionsDisplay.vue';
import GameService from '../services/GameService.js';
import { eventBus } from '../main.js';


export default {
  name: 'questions-page',
  data(){
    return {
      animals: [],
      questions: [],
      selectedAnimal: null,
      selectedQuestion: null,
      guessAnswer: null,
      correctAnswer: null,
      toggleAnswer: false
    }
  },
  mounted(){
    GameService.getAnimals()
    .then(res => this.animals = res)
    // MAKE THIS
    GameService.getQuestions()
    .then(res => this.questions = res)

    eventBus.$on('correct-answer', (correctAnswer) => {
      this.correctAnswer = correctAnswer
    })
    eventBus.$on('guess-answer', (guessAnswer) => {
      this.guessAnswer = guessAnswer
    })
    eventBus.$on('display-answer', () => this.revealAnswer())

  },
  methods: {
    getNewAnimal(){
      this.selectedAnimal = this.animals[Math.floor(Math.random() * this.animals.length)]
    },
    getNewQuestion(){
      this.selectedQuestion = this.questions[Math.floor(Math.random() * this.questions.length)]
    },
    revealAnswer(){
      this.toggleAnswer = true
    },
    nextQuestion(){
      this.toggleAnswer = false
    }
  },

  components: {
    'questions-display': QuestionsDisplay
  }

}

</script>

<style lang="css" scoped>
</style>
