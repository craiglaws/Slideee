<template lang="html">
    <div id="startPage">

        <div id="topBar">
            <p id="topBarText"> Get learning - take a Walk on the Wild Slide &trade; </p>
        </div>

        <h1 id="mainHeader">
          <span class="red">W</span>
          <span class="green">i</span>
          <span class="blue">l</span>
          <span class="yellow">d</span>
          <span class="red">S</span>
          <span class="green">l</span>
          <span class="blue">i</span>
          <span class="yellow">d</span>
          <span class="red">e</span>
          <span class="green">!</span>
        </h1>

        <div class="Iam">
            <b>
                <h2 class="innerIam"><span class="shadowed">Improve your speed </span> <br />
                    <span class="blue shadowed">Expand your knowledge</span> <br />
                    <span class="yellow shadowed">Compete for a high score!</span> <br />
                    <span class="green shadowed">Have fun!</span>
                </h2>
            </b>
        </div>



        <div v-if="toggleHelp" class="instructions" v-on:click="openHelp">
          <p>HOW TO PLAY:</p>
          <p>Click and drag the slider thumb to choose value.</p>
          <p>Click Submit</p>
          <p>Points are rewarded for accuracy and time</p>
          <p>Good Luck!!!</p>
          <p>Click to Close</p>

        </div>

        <form v-on:submit.prevent="startQuiz">
            <div id="startForm">
                <!-- <label class="padding userEnter" id="username" for="username">Enter your name</label> -->
                <br>
                <div id="userAndGo">
                  <button class="help padding" v-on:click="openHelp"  name="button">Help?</button>
                    <input id="textEnter" class="padding" type="text" name="username" v-model="username" placeholder="Enter Your Name" required>
                    <br>
                    <input id="startQuiz" class="padding" type="submit" name="submit" value=">>">

                </div>
            </div>
        </form>

        <img class="sparkle sparkle1" src="../assets/sparkle.png" alt="">
        <img class="sparkle sparkle2" src="../assets/sparkle.png" alt="">
        <img class="sparkle sparkle3" src="../assets/sparkle.png" alt="">
        <img class="sparkle sparkle4" src="../assets/sparkle.png" alt="">


    </div>

</template>

<script>
import GameService from '../services/GameService.js'
import {eventBus} from '../main.js'
export default {
    name: 'start-page',
    data() {
        return {
            username: "",
            toggleHelp: false
        }
    },
    mounted(){
        this.playSound()
    },
    methods: {

        startQuiz(){
            const newUser = {
                name: this.username,
                score: 0
            }
            GameService.postUser(newUser)
            .then(res => eventBus.$emit('start-quiz', res))
        },

        playSound(){
            const introAudio = new Audio('http://soundbible.com/mp3/Light%20Rain%20And%20Crickets-SoundBible.com-1664737469.mp3')
            introAudio.play()
        },

        openHelp(){
          this.toggleHelp = !this.toggleHelp
        }

    }
}
</script>

<style lang="css" scoped>



#startPage{
    display: flex;
    justify-content: center;
    background-image: url('../assets/animalsBackground.jpg');
    background-size: cover;
    background-repeat: none;
    height: 100vh;
}

#topBar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    z-index: 100;
    height: 5vh;
    width: 100%;
    top: 0vh;
    background-color: white;
    border-bottom: 2px solid black;
}

#topBarText {
    margin-right: 7vw;
    font-family: sans-serif;
    font-weight: bold
}

#mainHeader {
    top: 17vh;
    color: white;
    position: absolute;
    font-size: 12vh;
    z-index: 100;
    font-family: 'Poppins', sans-serif;
    /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
    -webkit-text-stroke: 3px white;
}

#catchphrase {
    z-index: 100;
    top: 45vh;
    position: fixed;
}

#startForm{
    position: relative;
    top: 50vh;
    padding: 5vw;
    height: 30vh;
    width: 100vw;
    color: white;
    font-family: 'Poppins', sans-serif;
    border: none;
    background-color: none;
    text-align: center;
    display: block;
}

.userEnter {
    font-size: 2vw;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.padding {
    margin-bottom: 12vh;
}

#textEnter {
    font-size: 2vw;
    height: 5vh;
    width: 20vw;
    text-align: center;
    box-shadow:inset 0px 1px 0px 0px #5eeb84;
    background-color:white;
    border-radius:11px;
    border:6px solid #38a3eb;
    display:inline-block;
    cursor:pointer;
    font-family: 'Poppins', sans-serif;
    padding:6px 10px;
    text-decoration:none;
    text-shadow:0px 1px 0px #0fa814;
}

#textEnter:hover {
    background-color: #fcfcfc;
}

#userAndGo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
}

#startQuiz {
    margin-left: 2vw;
    height: 7.5vh;
    width: 7.5vh;
    font-size: 1.5vw;
    color: white;

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

    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: startQuiz 1s infinite;
    z-index: 2000;

}

.help{

  /* position: fixed;
  left: 19vw;
  bottom: 25vh; */

  margin-right: 2vw;
  height: 7.5vh;
  width: 10vw;
  font-size: 1.5vw;
  color: white;

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

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  z-index: 2001;
}

.instructions{
  position: fixed;
  top: 10vh;
  left: 10vw;
  height: 40vh;
  width: auto;
  max-width: 40vw;
  color: black;
  font-family: 'Poppins', sans-serif;
  font-size: 2.5vh;

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

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  z-index: 3000;
}

#startQuiz:hover {
    background-color: white;
    border: 3px solid black;

}

#startQuiz:hover {
    background:linear-gradient(to bottom, #11f06a 5%, #73f53f 100%);
    background-color:#11f06a;
}
#startQuiz:active {
    position:relative;
    top:1px;
}
button {
    height: 10vh;
}

.red {
    color: red;
}

.green {
    color: green;
}

.blue {
    color: blue;
}

.yellow {
    color: #ffe51f;
}

.sparkle {
    position: fixed;
    height: 25vh;
    width: auto;
    animation: fade 4s infinite;
}

.sparkle1 {
    left: 4vw;
    top: 7vh;
    animation-delay: 0.4s;
}

.sparkle2 {
    left: 14vw;
    top: 65vh;
    animation-delay: 0.3s;
}

.sparkle3 {
    left: 70vw;
    top: 5vh;
    animation-delay: 0.9s;
}

.sparkle4 {
    left: 80vw;
    top: 70vh;
    animation-delay: 0.6s;
}

@keyframes fade {
    from {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.shadowed {
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
}

.Iam {
    top: 42vh;
    text-align: center;
    position: fixed;
    padding: 2em 5em;
    font: normal 2vh Montserrat, sans-serif;
    color: #999;
}
.Iam p {
    float: left;
    margin-right: 0.3em;
}
.Iam b {
    float: left;
    overflow: hidden;
    position: relative;
    height: 3vh;
    /* HEIGHT OF SHOWING AREA */
    line-height: 4vh;
}
.Iam .innerIam {
    display: inline-block;
    color: #e74c3c;
    position: relative;
    white-space: nowrap;
    top: 0;
    left: 0;


    /*animation*/
    -webkit-animation:move 10s;
    -moz-animation:move 10s;
    -ms-animation:move 10s;
    -o-animation:move 10s;
    animation:move 10s;
    /*animation-iteration-count*/
    -webkit-animation-iteration-count:infinite;
    -moz-animation-iteration-count:infinite;
    -ms-animation-iteration-count:infinite;
    -o-animation-iteration-count:infinite;
    animation-iteration-count:infinite;
    /*animation-delay*/
    -webkit-animation-delay:1s;
    -moz-animation-delay:1s;
    -ms-animation-delay:1s;
    -o-animation-delay:1s;
    animation-delay:1s;
}

@-webkit-keyframes move {
    0%  { top: 0px; }
    20% { top: -3vh; }
    40% { top: -7.2vh; }
    60% { top: -10.9vh; }
    80% { top: -14.6vh; }
}
@-moz-keyframes move {
    0%  { top: 0px; }
    20% { top: -3vh; }
    40% { top: -7.2vh; }
    60% { top: -10.9vh; }
    80% { top: -14.6vh; }
}
@-o-keyframes move {
    0%  { top: 0px; }
    20% { top: -3vh; }
    40% { top: -7.2vh; }
    60% { top: -10.9vh; }
    80% { top: -14.6vh; }
}
@keyframes move {
    0%  { top: 0px; }
    20% { top: -3vh; }
    40% { top: -7.2vh; }
    60% { top: -10.9vh; }
    80% { top: -14.6vh; }
}

@keyframes startQuiz {
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

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 0.3; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red;
  opacity: 0.3
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: red;
  opacity: 0.3
}
</style>
