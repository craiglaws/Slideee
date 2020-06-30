<template lang="html">

  <div>
    {{ findCorrectAnswer() }}
    <div id="bigContainer">
      <div id="questionContainer">
        <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{selectedQuestion.unit}}</h3>
      </div>
      <h1 class="pulse"><span v-if="this.timer > 0">{{ this.timer }}</span> <span v-if="this.timer === 0">X</span></h1>
    </div>
    <div class="guess">
      <p>{{this.guessAnswer}}</p>
    </div>
    <div class="slidecontainer">
      <label>0</label><br>
      <input type="range" min="0" :max="getMaxValue()" :step="(getMaxValue()/20)" class="slider" v-model="guessAnswer" value="1" required><br>
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
      correctAnswer: null,
      timer: 15
    }
  },
  props: {
    selectedAnimal: Object,
    selectedQuestion: Object
  },
  watch: {
    timer: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.timer--;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
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

      let bonus = (this.timer / 2);

      if(this.guessAnswer == this.correctAnswer){
        eventBus.$emit('right-answer', (10 + bonus))
        statement = `Well done you got it right! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${10 + bonus}!`
        this.playSound('http://soundbible.com/mp3/Roaring%20Lion-SoundBible.com-527774719.mp3')
      } else if (((this.guessAnswer) >= (this.correctAnswer * 0.9)) && ((this.guessAnswer) <= (this.correctAnswer * 1.1))){
        eventBus.$emit('right-answer', (9 + bonus))
        statement = `You were 10% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${9 + bonus}!`
        this.playSound('http://soundbible.com/mp3/Elephant%20Trumpeting-SoundBible.com-1343370148.mp3')
      } else if (((this.guessAnswer) >= (this.correctAnswer * 0.8)) && ((this.guessAnswer) <= (this.correctAnswer * 1.2))){
        eventBus.$emit('right-answer', (8 + bonus))
        statement = `You were 20% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${8 + bonus}!`
      } else if (((this.guessAnswer) >= (this.correctAnswer * 0.7)) && ((this.guessAnswer) <= (this.correctAnswer * 1.3))){
        eventBus.$emit('right-answer', (7 + bonus))
        statement = `You were 30% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${7 + bonus}!`
      } else if (((this.guessAnswer) >= (this.correctAnswer * 0.6)) && ((this.guessAnswer) <= (this.correctAnswer * 1.4))){
        eventBus.$emit('right-answer', (6 + bonus))
        statement = `You were 40% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${6 + bonus}!`
      } else if (((this.guessAnswer) >= (this.correctAnswer * 0.5)) && ((this.guessAnswer) <= (this.correctAnswer * 1.5))){
        eventBus.$emit('right-answer', (5 + bonus))
        statement = `You were 50% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${5 + bonus}!`
      } else{
        statement = `Unlucky! The correct answer was ${this.correctAnswer}, you guessed ${this.guessAnswer}.`
      }

      eventBus.$emit('add-to-counter', 1)


      eventBus.$emit('display-answer', statement)
    },

    playSound(sound){
      const answerSound = new Audio(sound)
      answerSound.play()
    }
  }
}


</script>

<style lang="css" scoped>
.guess {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 26vh;
  left: 25vw;
  width: 50%;
}
.guess p{
  background-color: white;
  border-radius: 20%;
  padding: 1vh;
  height: 2vh;
  width: auto;

}
#bigContainer{
  display: flex;
  top: 10vh;
  left: 10vw;
}
#questionContainer{
  position: fixed;


  color: black;
  font-family: 'Poppins', sans-serif;

  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  padding: 25px;
  border-radius: 10px;
  border-style: ridge;
}
.submit-answer{
  position: fixed;
  bottom: 15vh;
  left: 45vw;
}
.button {
  box-shadow:inset 0px 1px 0px 0px #5eeb84;
  background:linear-gradient(to bottom, #73f53f 5%, #11f06a 100%);
  background-color:#73f53f;
  border-radius:11px;
  border:6px solid #38a3eb;
  display:inline-block;
  cursor:pointer;
  font-family:Trebuchet MS;
  font-size:15px;
  padding:6px 10px;
  text-decoration:none;
  text-shadow:0px 1px 0px #0fa814;
  width: 10vw;
}
.button:hover {
  background:linear-gradient(to bottom, #11f06a 5%, #73f53f 100%);
  background-color:#11f06a;
}
.button:active {
  position:relative;
  top:1px;
}
.slidecontainer {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 20vh;
  left: 25vw;
  width: 50%;
}
.slidecontainer label{
  background-color: white;
  border-radius: 50%;
  padding: 2vw;
}

.slider {

  -webkit-appearance: none;
  width: 100%;
  height: 30px;
  border-radius: 15px;
  background: #38a3eb;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #73f53f;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #73f53f;
  cursor: pointer;
}
.pulse {

  background: red;
  border-radius: 50%;
  margin: 10px;
  height: 70px;
  width: 70px;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
