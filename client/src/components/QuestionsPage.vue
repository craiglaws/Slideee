<template lang="html">

  <div id="questionsPage">
    <div v-if="selectedAnimal">
      <img :src="selectedAnimal.photo" alt="PIC" id="animalPicture">
    </div>

    <!-- current player + score -->

    <div id="userScore">
      <img src="../assets/userScore.png" class="rotate linear infinite" width="400" height="400"/>
      <p>{{user.name}} <br> {{user.score}} pts</p>
    </div>

    <div v-if="selectedAnimal && selectedQuestion">
      <questions-display v-if="toggleAnswer == false" :selectedAnimal="selectedAnimal" :selectedQuestion="selectedQuestion" />
    </div>

    <div v-if="toggleAnswer" >
      <div id="questionContainer">
        <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{ selectedQuestion.unit}}</h3>
        <p>{{ this.statement }}</p>

      </div>

      <div id="next">
        <button v-if="questionCounter < 9" class="button" name="button" v-on:click="nextQuestion">Next Question</button>
        <button v-if="questionCounter >= 9" class="button" name="button" v-on:click="nextQuestion">Finish</button>
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
  props: ['user', 'animals', 'questions', 'questionCounter'],

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
      this.selectedAnimal = this.animals[Math.floor(Math.random() * this.animals.length)]
    },
    getNewQuestion(){
      eventBus.$emit('add-to-counter', 1)
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
  // computed: {
  //   images() {
  //     if(!this.selectedAnimal) return null;
  //      return {
  //        selectedImagePic: require(this.selectedAnimal.photo)
  //      }
  //   }
  // }

}

</script>

<style lang="css" scoped>
#animalPicture{
  position: fixed;
  z-index: -1000;
  height: 100vh;
  width: 100vw;
}
#questionsPage{
  background-image: url('../assets/questionFrameTransparent.png');
  background-size: cover;
  background-repeat: none;
  height: 100vh;
}
#userScore{
  position: fixed;
  top: -20vh;
  right: -20vh;
}
#userScore p{
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  color: white;
  position: fixed;
  top: 4vh;
  right: 4vh;


  z-index: 2000;
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
    position: fixed;
    top: 10vh;
    left: 15vw;
    height: 30vh;
    width: 30vw;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;

    background: rgba(255, 255, 255, 0.5);

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
    font-family: 'Poppins', sans-serif;
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
  #next{
    position: fixed;
    bottom: 15vh;
    left: 45vw;
  }


  </style>
