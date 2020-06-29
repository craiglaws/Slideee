<template lang="html">

    <div>
        {{ findCorrectAnswer() }}

        <div>
            <h1><span v-if="this.timer > 0">{{ this.timer }}</span> <span v-if="this.timer === 0">No bonus points</span></h1>
        </div>

    <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{selectedQuestion.unit}}</h3>
    <p>{{this.guessAnswer}}</p>

    <div class="slidecontainer">
        <label>0</label>
        <input type="range" min="0" :max="getMaxValue()" :step="(getMaxValue()/20)" class="slider" id="slider" v-model="guessAnswer" value="1" required>
        <label>{{getMaxValue()}}</label>
    </div>
    <div class="submit-answer">
        <button v-on:click.once="checkAnswer">Submit Answer</button>
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
            } else if (((this.guessAnswer) >= (this.correctAnswer * 0.9)) && ((this.guessAnswer) <= (this.correctAnswer * 1.1))){
                eventBus.$emit('right-answer', (9 + bonus))
                statement = `You were 10% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${9 + bonus}!`
            } else if (((this.guessAnswer) >= (this.correctAnswer * 0.8)) && ((this.guessAnswer) <= (this.correctAnswer * 1.2))){
                eventBus.$emit('right-answer', (8 + bonus))
                statement = `You were 20% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${8 + bonus}!`
            } else if (((this.guessAnswer) >= (this.correctAnswer * 0.7)) && ((this.guessAnswer) <= (this.correctAnswer * 1.3))){
                eventBus.$emit('right-answer', (7 + bonus))
                statement = `You were 30% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${9 + bonus}!`
            } else if (((this.guessAnswer) >= (this.correctAnswer * 0.6)) && ((this.guessAnswer) <= (this.correctAnswer * 1.4))){
                eventBus.$emit('right-answer', (6 + bonus))
                statement = `You were 40% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${9 + bonus}!`
            } else if (((this.guessAnswer) >= (this.correctAnswer * 0.5)) && ((this.guessAnswer) <= (this.correctAnswer * 1.5))){
                eventBus.$emit('right-answer', (5 + bonus))
                statement = `You were 50% off! The answer was ${this.correctAnswer}. Your speed gained you ${bonus} points. +${9 + bonus}!`
            } else{
                statement = `Unlucky! The correct answer was ${this.correctAnswer}, you guessed ${this.guessAnswer}.`
            }

            eventBus.$emit('add-to-counter', 1)


            eventBus.$emit('display-answer', statement)
        }
    }
}


</script>

<style lang="css" scoped>


</style>
