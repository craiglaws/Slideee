<template lang="html">

    <div>
        {{ findCorrectAnswer() }}

        <!-- <h1>{{ correctAnswer }}</h1> -->


        <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{selectedQuestion.unit}}</h3>
        <p>{{this.guessAnswer}}</p>

        <div class="slidecontainer">
            <label>0</label>
            <input type="range" min="0" :max="getMaxValue()" :step="(getMaxValue()/100)" class="slider" id="slider" v-model="guessAnswer" value="1" required>
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
            if (max_value < 100) {
                max_value = Math.ceil(max_value/100)*100;

            } else if (max_value >= 100 && max_value < 1000) {
                max_value = Math.ceil(max_value/1000)*1000;

            } else if (max_value >= 1000 && max_value < 10000) {
                max_value = Math.ceil(max_value/10000)*10000;

            } else if (max_value >= 10000 && max_value < 100000) {
                max_value = Math.ceil(max_value/100000)*100000;

            } else if (max_value >= 100000 && max_value < 1000000) {
                max_value = Math.ceil(max_value/1000000)*1000000;

            } else if (max_value >= 1000000 && max_value < 10000000) {
                max_value = Math.ceil(max_value/10000000)*10000000;
            }

            return max_value
        },
        checkAnswer(){

            let statement = ""
            if(this.guessAnswer == this.correctAnswer){
                eventBus.$emit('right-answer', 1)
                statement = `Well done you got it right! The answer was ${this.correctAnswer}.`
            }
            else{
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
