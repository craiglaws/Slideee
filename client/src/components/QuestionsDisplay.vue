<template lang="html">

  <div>
    {{ findCorrectAnswer() }}

    <!-- <h1>{{ correctAnswer }}</h1> -->

    <div id="questionContainer" :img="selectedAnimal.photo">
      <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{selectedQuestion.unit}}</h3>
    </div>
    <div class="">
        <p>{{this.guessAnswer}}</p>
    </div>
    <div class="slideContainer">
      <label>0</label>
      <input type="range" min="0" :max="getMaxValue()" :step="(getMaxValue()/20)" class="slider" id="slider" v-model="guessAnswer" value="1" required>
      <label>{{getMaxValue()}}</label>
    </div>
    <div class="submit-answer">
      <button class="button" v-on:click.once="checkAnswer">Submit Answer</button>
    </div>

  </div>

</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'questions-display',
  data() {
    return {
      guessAnswer: 0,
      correctAnswer: null
    }
  },
  props: {
    selectedAnimal: Object,
    selectedQuestion: Object
  },
  methods: {
    findCorrectAnswer(){
      this.correctAnswer = this.selectedAnimal[this.selectedQuestion.value]
    },
    getMaxValue(){
      // let max_value = (this.correctAnswer * (1.3 + (Math.random() * 0.3)))
      let max_value = this.correctAnswer
      if (max_value < 20) {
        max_value = 20;

      } else if (max_value >= 20 && max_value < 50) {
        max_value = 50;

      } else if (max_value >= 50 && max_value < 100) {
        max_value = 100;

      } else if (max_value >= 100 && max_value < 200) {
        max_value = 200;

      } else if (max_value >= 200 && max_value < 500) {
        max_value = 500;

      } else if (max_value >= 500 && max_value < 1000) {
        max_value = 1000;

      } else if (max_value >= 1000 && max_value < 2000) {
        max_value = 2000;

      } else if (max_value >= 2000 && max_value < 5000) {
        max_value = 5000;

      } else if (max_value >= 5000 && max_value < 10000) {
        max_value = 10000;

      } else if (max_value >= 10000 && max_value < 20000) {
        max_value = 20000;

      } else if (max_value >= 20000 && max_value < 50000) {
        max_value = 50000;

      } else if (max_value >= 50000 && max_value < 100000) {
        max_value = 100000;

      } else if (max_value >= 100000 && max_value < 200000) {
        max_value = 200000;

      } else if (max_value >= 200000 && max_value < 500000) {
        max_value = 500000;

      } else if (max_value >= 500000 && max_value < 1000000) {
        max_value = 1000000;

      } else if (max_value >= 1000000 && max_value < 2000000) {
        max_value = 2000000;

      } else if (max_value >= 2000000 && max_value < 5000000) {
        max_value = 5000000;

      } else if (max_value >= 500000 && max_value < 10000000) {
        max_value = 10000000;
      }

      return max_value
    },

    checkAnswer(){

      let statement = ""

      if(this.guessAnswer == this.correctAnswer){
        eventBus.$emit('right-answer', 10)
        statement = `FANTASTIC, you got it right! The answer was ${this.correctAnswer}. +10 points!`
      }

      else if (((this.guessAnswer) >= (this.correctAnswer * 0.9)) && ((this.guessAnswer) <= (this.correctAnswer * 1.1))){
        eventBus.$emit('right-answer', 8)
        statement = `You were close, just 10% off! The answer was ${this.correctAnswer}. +8 points!`
      }

      else if (((this.guessAnswer) >= (this.correctAnswer * 0.8)) && ((this.guessAnswer) <= (this.correctAnswer * 1.2))){
        eventBus.$emit('right-answer', 5)
        statement = `You were 20% off! The answer was ${this.correctAnswer}. +5 points!`
      }

      else if (((this.guessAnswer) >= (this.correctAnswer * 0.7)) && ((this.guessAnswer) <= (this.correctAnswer * 1.3))){
        eventBus.$emit('right-answer', 2)
        statement = `You were 30% off! The answer was ${this.correctAnswer}. +2 points!`
      }

      // else if (((this.guessAnswer) >= (this.correctAnswer * 0.6)) && ((this.guessAnswer) <= (this.correctAnswer * 1.4))){
      //   eventBus.$emit('right-answer', 6)
      //   statement = `You were 40% off! The answer was ${this.correctAnswer}. +6`
      // }
      //
      // else if (((this.guessAnswer) >= (this.correctAnswer * 0.5)) && ((this.guessAnswer) <= (this.correctAnswer * 1.5))){
      //   eventBus.$emit('right-answer', 5)
      //   statement = `You were 50% off! The answer was ${this.correctAnswer}. +5`
      // }

      else{
        statement = `Unlucky! Your guess was ${this.guessAnswer}, the correct answer was ${this.correctAnswer}.`
      }

      eventBus.$emit('add-to-counter', 1)


      eventBus.$emit('display-answer', statement)
    }
  }
}


</script>

<style lang="css" scoped>
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
