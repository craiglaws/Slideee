<template lang="html">

    <div class="">
        <!-- current player + score -->

        {{ getNewQuestion() }}
        {{ getNewAnimal() }}

        <questions-display v-if="selectedAnimal && selectedQuestion" :selectedAnimal="selectedAnimal" :selectedQuestion="selectedQuestion" />

        <input type="submit" value="Answer">
    </div>

</template>

<script>

import QuestionsDisplay from './QuestionsDisplay.vue';
import GameService from '../services/GameService.js';
// import { eventBus } from '../main.js';


    export default {
        name: 'questions-page',
        data(){
            return {
                animals: [],
                questions: [],
                selectedAnimal: null,
                selectedQuestion: null
            }
        },
        methods: {
            getNewAnimal(){
                this.selectedAnimal = this.animals[Math.floor(Math.random() * this.animals.length)]
            },
            getNewQuestion(){
                this.selectedQuestion = this.questions[Math.floor(Math.random() * this.questions.length)]
            }
        },
        mounted(){
            GameService.getAnimals()
            .then(res => this.animals = res)

            // MAKE THIS
            GameService.getQuestions()
            .then(res => this.questions = res)
        },
        components: {
            'questions-display': QuestionsDisplay
        }
    }

</script>

<style lang="css" scoped>
</style>
