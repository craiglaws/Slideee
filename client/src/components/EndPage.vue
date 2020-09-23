<template lang="html">
  <div id="endPage">

    <div class="userScore">
    <p>Well done <br>
      {{user.name}}
      <br>
    You scored {{user.score}}!</p>
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
    // Posts user score to database
    GameService.sendScore(this.user)
    // Gets top 3 scores
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
  font-size: 3vw;
  margin-top: 3vh;
  background-image: url('../assets/cloud.png');
  background-size: cover;
  text-align: center;
  padding: 0  6vw;

  height: 35vh;
}
.userScore p {
  position: relative;
  top: 2vh;
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
  font-size: 1.2vw;
  color: Black;

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
  animation: playAgain 1s infinite;
  z-index: 2000;

}

@keyframes playAgain {
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
