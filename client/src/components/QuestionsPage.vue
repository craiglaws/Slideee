<template lang="html">


    <div id="questionsPage">

    <!-- Baackground picture of animal -->
        <div v-if="selectedAnimal">
            <img :src="selectedAnimal.photo" alt="PIC" id="animalPicture">
        </div>

        <!-- Top right corner - Q number, score, Player Name -->
        <div id="userScore">
            <img src="../assets/userScore.png" class="rotate linear infinite" width="400" height="400"/>
            <p>Question {{this.questionCounter}} <br> {{user.name}} <br> Score: {{user.score}} </p>
        </div>

        <!-- Question display -->
        <div v-if="selectedAnimal && selectedQuestion">
            <questions-display v-if="toggleAnswer == false" :selectedAnimal="selectedAnimal" :selectedQuestion="selectedQuestion" />
        </div>

        <!-- Answer display and next Question button -->
        <div v-if="toggleAnswer" >
            <div id="answerContainer">
                <div>
                    <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{ selectedQuestion.end}}</h3>
                    <p id="answer">{{ this.statement }}</p>
                </div>
            </div>

            <div id="next">
                <button v-if="questionCounter < 10" class="button" name="button" v-on:click="nextQuestion">Next Question</button>
                <button v-if="questionCounter >= 10" class="button" name="button" v-on:click="nextQuestion">Finish</button>
            </div>
        </div>

    </div>

</template>

<script>

import QuestionsDisplay from './QuestionsDisplay.vue';
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


}

</script>

<style lang="css" scoped>
#animalPicture{
    position: fixed;
    z-index: -1000;
    height: 100vh;
    width: 100vw;
}

#answerContainer{
    position: fixed;
    top: 10vh;
    left: 10vw;
    height: 30vh;
    width: auto;
    max-width: 40vw;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 2.5vh;

    background: rgba(255, 255, 255, 0.5);

    padding: 25px;
    border-radius: 10px;
    border-style: ridge;
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
    top: -1vh;
    right: 3vh;
    text-align: right;


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
        left: 10vw;
        height: 30vh;
        width: 40vw;
        color: black;
        font-family: 'Poppins', sans-serif;


        background: rgba(255, 255, 255, 0.5);

        padding: 25px;
        border-radius: 10px;
        border-style: ridge;
    }
    .button {
        width: 100%;
        box-shadow:inset 0px 1px 0px 0px #5eeb84;
        background:linear-gradient(to bottom, #73f53f 5%, #11f06a 100%);
        background-color:#73f53f;
        border-radius:11px;
        border:6px solid #38a3eb;
        display:inline-block;
        cursor:pointer;
        color:#000000;
        font-family:Trebuchet MS;
        font-size:1.5vw;
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
        left: 42vw;
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
      font-family: 'Poppins', sans-serif;
      padding:6px 10px;
      text-decoration:none;
      text-shadow:0px 1px 0px #0fa814;
      width: 10vw;
      height: 10vh;
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
      bottom: 7.5vh;
      left: 45vw;

      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
      transform: scale(1);
      animation: next 1s infinite;
      z-index: 2000;
    }

    @keyframes next {
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
