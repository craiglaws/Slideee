<template lang="html">
  <div>
    <form v-on:submit.prevent="startQuiz">
      <label for="username">Enter your name</label>
      <input type="text" name="username" v-model="username">

      <input type="submit" name="submit" value="Start Quiz">
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
</style>
