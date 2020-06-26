<template lang="html">
  <div>
    <p>Well done {{user.name}}</p>
    <p>You scored {{user.score}}</p>
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <tbody>{{getLeaderboard()}}
        <tr v-for="(player, index) in this.topThree" :key="index">
          <td>{{player.name}}</td>
          <td>{{player.score}}</td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="playAgain">Play Again</button>


  </div>
</template>

<script>
import GameService from '../services/GameService.js'
export default {
  name: 'end-page',
  props: ["user"],
  methods: {
    getLeaderboard(){
      GameService.getTopThree()
      .then(res => this.topThree = res)
    },
    playAgain(){
      
    }
  },
  data(){
    return{
      topThree: []
    }
  }
}
</script>

<style lang="css" scoped>
</style>
