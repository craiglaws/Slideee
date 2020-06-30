<template lang="html">
  <div id="endPage">

    <div class="userScore">
    <p>Well done {{user.name}}
      <br>
    You scored {{user.score}}</p>
    </div>

    <div class="leaderboard">
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) in this.topThree" :key="index">
          <td>{{player.name}}</td>
          <td>{{player.score}}</td>
        </tr>
      </tbody>
    </table>
    </div>

    <button class="playAgain" v-on:click="playAgain">Play Again</button>


  </div>
</template>

<script>
import GameService from '../services/GameService.js'
import {eventBus} from '../main.js'
export default {
  name: 'end-page',
  props: ["user"],
  mounted(){
    console.log(this.user);
    GameService.sendScore(this.user)

    this.getLeaderboard()
  },
  methods: {
    getLeaderboard(){
      GameService.getTopThree()
      .then(res => this.topThree = res)
    },
    playAgain(){
      eventBus.$emit('new-game')
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

*{
  font-family: 'Poppins', sans-serif;
}

#endPage{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../assets/animalsBackground.jpg');
  background-size: cover;
  background-repeat: none;
  height: 100vh;
}

.userScore{
  color: black;
  font-size: 3.5vw;
  margin-top: 4vh;
  background-image: url('../assets/cloud.png');
  background-size: cover;
  text-align: center;
  padding: 0 2vw;
  margin-bottom: 10px;
  height: 32vh;
}


table{
  height: 30vh;
  width: 50vw;
  color: hotpink;
  text-align: center;
  font-size: 3vw;
  margin-bottom: 10px
}

thead{
  background-image: url('../assets/leopard_print.jpg');
  background-size: cover;
  color: snow;
  font-size: 3.5vw;
}

tbody tr:nth-child(odd) {
  background-color: #ffd700;
}

tbody tr:nth-child(even) {
  background-color: #ffa000;
}

.playAgain {
  margin-left: 2vw;
  height: 10vh;
  width: 20vh;
  font-size: 2vw;
  color: white;
  background-color: lightgreen;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  border: 1px solid black;
}
</style>
