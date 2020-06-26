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
export default {
  name: 'start-page',
  data() {
    return {
      username: ""
    }
  },
  methods: {
    startQuiz(){
      GameService.
    }
  }
}
</script>

<style lang="css" scoped>
</style>
