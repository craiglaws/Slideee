<template lang="html">
  <div id="start-page">
    <form v-on:submit.prevent="startQuiz">
        <div id="start-form">
            <label class="padding userEnter" id="username" for="username">Enter your name</label>
            <br>
            <input class="padding textEnter" type="text" name="username" v-model="username">
            <br>
            <input class="padding submit" type="submit" name="submit" value="Start Quiz">
        </div>
    </form>
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



    #start-page{
        display: flex;
        justify-content: center;
        background-color: #fca16f;
        height: 100vh;
    }

    #start-form{
        position: relative;
        top: 20vh;
        padding: 5vw;
        height: 25vh;
        width: 50vw;
        border: 5px solid black;
        background-color: grey;
        text-align: center;
        display: block;
    }

    .userEnter {
        font-size: 4vw;
    }

    .padding {
        margin-bottom: 10vh;
    }

    .textEnter {
        font-size: 3vw;
        height: 5vh;
        width: 20vw;
        margin: 2vh;
    }
    .submit {
        font-size: 3vw;
        height: 10vh;
        width: 30vw;
        border: 2px solid lightgrey;
        border-radius: 3vw;
    }

    button {
        height: 10vh;
    }

</style>
