<template lang="html">

    <div>
      <!-- Displays Question & Timer -->
        <div id="bigContainer">
            <div id="questionContainer">
                <h3>{{ selectedQuestion.question }} {{ selectedAnimal.name }} {{selectedQuestion.end}}</h3>
                <p class="pulse"><span v-if="this.timer > 0">{{ this.timer }}</span> <span v-if="this.timer === 0">X</span></p>
            </div>
        </div>

        <!-- Displays user guess - responsive -->
        <div class="guess">
            <p>{{this.guessAnswer}}</p>
        </div>

        <!-- Slider input -->
        <div class="slidecontainer">
            <label>0</label><br>
            <input type="range" min="0" :max="getMaxValue()" :step="(getMaxValue()/20)" class="slider" v-model="guessAnswer" value="1" required><br>
            <label>{{getMaxValue()}}</label>
        </div>
        <div class="submit-answer">
            <button class="button submit" v-on:click.once="checkAnswer">Submit Answer</button>
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
            timer: 20
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
    mounted(){
      this.findCorrectAnswer()
    },
    methods: {
        findCorrectAnswer(){
          // e.g answer = cheetah[speed]
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

            // Bonus Score
            let bonus = (Math.round(this.timer / 3));

            // Conditional logic depending on answer accuracy
            if(this.guessAnswer == this.correctAnswer){
              // updates score back to app.js
                eventBus.$emit('right-answer', (10 + bonus))
                // sets answer feedback statement
                statement = `FANTASTIC, you got it right! The answer was ${this.correctAnswer} ${this.selectedQuestion.unit}. Your gained a total +${10 + bonus} points!`
                this.playSound('http://soundbible.com/mp3/Roaring%20Lion-SoundBible.com-527774719.mp3')
            }
            else if (((this.guessAnswer) >= (this.correctAnswer * 0.9)) && ((this.guessAnswer) <= (this.correctAnswer * 1.1))){
                eventBus.$emit('right-answer', (8 + bonus))
                statement = `So close! The correct answer was ${this.correctAnswer} ${this.selectedQuestion.unit}. You were awarded +${8 + bonus}points!`
                this.playSound('http://soundbible.com/mp3/Elephant%20Trumpeting-SoundBible.com-1343370148.mp3')
            }
            else if (((this.guessAnswer) >= (this.correctAnswer * 0.8)) && ((this.guessAnswer) <= (this.correctAnswer * 1.2))){
                eventBus.$emit('right-answer', (5 + bonus))
                statement = `Nearly! The correct answer was ${this.correctAnswer} ${this.selectedQuestion.unit}. You got +${5 + bonus} points!`
            }
            else if (((this.guessAnswer) >= (this.correctAnswer * 0.7)) && ((this.guessAnswer) <= (this.correctAnswer * 1.3))){
                eventBus.$emit('right-answer', (2 + bonus))
                statement = `A little off! The correct answer was ${this.correctAnswer} ${this.selectedQuestion.unit}. You got ${2 + bonus} points!`
            }
            else{
                statement = `Unlucky! The correct answer was ${this.correctAnswer} ${this.selectedQuestion.unit}.`
            }
            // toggles from question to answer with feedback to questionPage.js
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

#timer{
    position: fixed;
    top: -20vh;
    left: -20vh;
    z-index: 1
}
#timer p{
    z-index: 200;
}

.guess {

    position: fixed;
    text-align: center;
    align-items: center;
    bottom: 26vh;
    left: 45.5vw;
}
.guess p{
    background-color: white;
    border-radius: 50%;
    padding: 1vw;
    height: auto;
    box-shadow:inset 0px 1px 0px 0px #5eeb84;
    background-color:white;
    border-radius:11px;
    border:6px solid #38a3eb;
    display:inline-block;
    font-family: 'Poppins', sans-serif;
    font-size:4vh;
    text-decoration:none;
    text-shadow:0px 1px 0px #0fa814;
    min-width: 6vw;
    width: auto;

}

.submit {
    font-size: 2vh;

}

#bigContainer{
    left: 10px;
    top: 10vh;
    height: 50vh;
    display: flex;
    background-color: none;
    align-items: center;
}
#questionContainer{
    position: fixed;
    top: 10vh;
    left: 10vw;
    height: 30vh;
    width: auto;
    max-width: 40vw;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 2vw;

    background: rgba(255, 255, 255, 0.5);

    padding: 25px;
    border-radius: 10px;
    border-style: ridge;
}

.submit-answer{
    position: fixed;
    bottom: 7.5vh;
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
    font-family: 'Poppins', sans-serif;
    padding:6px 10px;
    text-decoration:none;
    text-shadow:0px 1px 0px #0fa814;
    width: 10vw;
    height: 10vh;
}
.button:hover {
    background:linear-gradient(to bottom, #11f06a 5%, #73f53f 100%);
    background-color: red;
}
.button:active {
    position:relative;
    top:1px;
}


#submit:hover {
    background-color: red;
}
.slidecontainer {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    bottom: 20vh;
    left: 20vw;
    width: 60%;
}
.slidecontainer label{
    background-color: white;
    border-radius: 50%;
    padding: 2vh;
    height: auto;
    width: 5vw;
    box-shadow:inset 0px 1px 0px 0px #5eeb84;
    background-color:white;
    border-radius:11px;
    border:6px solid #38a3eb;
    display:inline-block;
    font-family: 'Poppins', sans-serif;
    font-size:15px;
    padding:6px 10px;
    text-decoration:none;
    text-shadow:0px 1px 0px #0fa814;
    width: 8vw;
    text-align: center;
}

.slider {

    -webkit-appearance: none;
    width: 100%;
    height: 30px;
    border-radius: 15px;
    border: 2px solid black;
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
    position: absolute;
    right: 2.2vw;
    bottom: 3vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 5vh;
    background: red;
    border-radius: 50%;
    margin: 10px;
    height: 70px;
    width: 70px;
    color: white;
    border: 1px solid black;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 1s infinite;
    z-index: 2000;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.rotate {
    animation: rotation 10s}


    .linear {
        animation-timing-function: linear;
    }

    .infinite {
        animation-iteration-count: infinite;
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

    @keyframes  rotation {
        from {
            transform: rotate(359deg);
        }
        to {
            transform: rotate(0deg);
        }

    }
    </style>
