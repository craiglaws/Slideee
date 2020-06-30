<template lang="html">

  <div id="questionsPage">
    <!-- current player + score -->

    <div id="userScore">
      <img src="../assets/userScore.png" class="rotate linear infinite" width="400" height="400"/>
      <p>{{user.name}} <br> {{user.score}} pts</p>
    </div>

    <div v-if="selectedAnimal && selectedQuestion">
      <!-- {{ getNewQuestion() }}
      {{ getNewAnimal() }} -->
      <questions-display v-if="toggleAnswer == false" :selectedAnimal="selectedAnimal" :selectedQuestion="selectedQuestion" />
    </div>

    <div v-if="toggleAnswer" >
      <div id="questionContainer">
        <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{ selectedQuestion.unit}}</h3>
        <p>{{ this.statement }}</p>
      </div>

      <div >
        <button class="button" name="button" v-on:click="nextQuestion">Next Question</button>
      </div>
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

#test {
    position: fixed;
    z-index: 1000;
    height: 50vh;
    background-color: red;
}
#questionsPage{
  background-image: url('../assets/questionFrameTransparent.png');
  background-size: cover;
  background-repeat: none;
  height: 100vh;
}
#userScore{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.rotate {
  animation: rotation 10s}


  .linear {
    animation-timing-function: linear;
  }

  .infinite {
    animation-iteration-count: infinite;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  #questionContainer{
    top: 50vh;
    padding: 5vw;
    height: 30vh;
    width: 100vw;
    color: black;
    font-family: 'Poppins', sans-serif;
    width: 20%;
    background: rgba(255, 255, 255, 0.5);
    margin-bottom: 20px;
    padding: 25px;
    border-radius: 10px;
    border-style: ridge;
  }
  .button {
	box-shadow:inset 0px 1px 0px 0px #5eeb84;
	background:linear-gradient(to bottom, #73f53f 5%, #11f06a 100%);
	background-color:#73f53f;
	border-radius:11px;
	border:6px solid #38a3eb;
	display:inline-block;
	cursor:pointer;
	color:#000000;
	font-family:Trebuchet MS;
	font-size:15px;
	padding:6px 10px;
	text-decoration:none;
	text-shadow:0px 1px 0px #0fa814;
}
.button:hover {
	background:linear-gradient(to bottom, #11f06a 5%, #73f53f 100%);
	background-color:#11f06a;
}
.button:active {
	position:relative;
	top:1px;
}


  </style>
