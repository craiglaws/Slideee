<template lang="html">
  <div id="startPage">

    <div id="topBar">
         <p id="topBarText"> Get learning - AnimalQuiz &trade; </p>
    </div>

    <h1 id="mainHeader">
        <span class="red">A</span>
        <span class="green">n</span>
        <span class="blue">i</span>
        <span class="yellow">m</span>
        <span class="red">a</span>
        <span class="green">l </span>
        <span class="blue">Q</span>
        <span class="yellow">u</span>
        <span class="red">i</span>
        <span class="green">z</span>
    </h1>

    <form v-on:submit.prevent="startQuiz">
        <div id="startForm">
            <label class="padding userEnter" id="username" for="username">Enter your name</label>
            <br>
            <div id="userAndGo">
                <input id="textEnter" class="padding" type="text" name="username" v-model="username">
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
      username: ""
    }
  },
  methods: {
    startQuiz(){
      const newUser = {
        name: this.username,
        score: 0
      }
      GameService.postUser(newUser)
      .then(res => eventBus.$emit('start-quiz', res))
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
        font-size: 10vw;
        z-index: 100;
        font-family: 'Poppins', sans-serif;
        /* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; */
        -webkit-text-stroke: 5px white;
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
        height: 5vh;
        width: 5vh;
        font-size: 1.5vw;
        color: white;
        background-color: lightgreen;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        border: 1px solid black;
    }

    #startQuiz:hover {
        background-color: white;
        border: 3px solid black;

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

</style>
