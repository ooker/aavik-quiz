<template>
  <div id="app">
    <!-- <component :is="currentView" :gd="gameData" :gi="gameIndex"></component> -->
    <!-- <nkl-sentence :currentSentence="this.gameData[gameIndex]"></nkl-sentence>
    <nkl-score :score="this.gameScore"></nkl-score> -->
    <transition name="fade" mode="out-in">
      <nkl-intro v-if=" currentView === 'nkl-intro' "></nkl-intro>
      <div v-else-if=" currentView === 'nkl-game' " class="nkl-game__container">
        <nkl-sentence :currentSentence="this.gameData[gameIndex]" :gameLength="this.gameLength" :gameIndex = "this.gameIndex"></nkl-sentence>
        <nkl-score :score="this.gameScore"></nkl-score>
      </div>

        <nkl-gameover v-else-if=" currentView === 'nkl-gameover' "
          :gameScore="this.gameScore"
          :gameLength="this.gameLength"
          :gameBonus="this.rightBonus"></nkl-gameover>
      
    </transition>



  </div>
</template>

<script>

  import {eventBus} from "./main";
  import Intro from "./components/Intro.vue";
  import GameScore from "./components/GameScore.vue";
  import Sentence from "./components/Sentence.vue";
  import GameOver from "./components/GameOver.vue";

export default {
    name: 'app',
    data () {
      return {
        currentView: "nkl-intro",
        gameScore : 0,
        //allData: eventBus.shuffle(eventBus.gameData),
        gameData: eventBus.shuffle(eventBus.gameData).slice(0,this.gameLength) ,
        gameIndex: 0,
        gameStarted: false,
        gameLength: 3,
        rightBonus: eventBus.bonus,
        gameOver: false
      }
    },
    components : {
      "nkl-intro": Intro,
      "nkl-score": GameScore,
      "nkl-sentence" : Sentence,
      "nkl-gameover" : GameOver
    },
    created(){
      eventBus.$on("addedOne", ()=>{
        this.gameScore++;
      });
      eventBus.$on("viewChanged", (newView)=>{
        this.currentView = newView;
      });
      eventBus.$on("scoreChanged", (s)=>{
        this.gameScore += s;
        eventBus.finalScore = this.gameScore;
      });
      eventBus.$on("roundChanged", ()=>{

        if(this.gameIndex < this.gameLength-1){
          this.gameIndex++;
        } else {
          this.gameOver = true;
          this.currentView = "nkl-gameover";
          console.log("Game over happens here");
        }

        console.log("Game index is " + this.gameIndex) ;
      });
      eventBus.$on("itemFound", ()=>{
          this.gameData[this.gameIndex].itemFound = true;
      });

      eventBus.$on("gameRestarted", ()=>{
        for (var i=0; i<this.gameData.length; i++) {
          this.gameData[i].itemFound = false;
        }
        this.gameData = eventBus.shuffle(eventBus.gameData).slice(0,this.gameLength);
        this.gameScore = 0;
        this.gameIndex = 0;
      } );
    }
  }
</script>

<style lang="scss">
  #app {
    position: relative;
    //font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    // color: #42b983;
    cursor: pointer;
  }

  .nkl-game__container {
    width: 100vw;
    height: 100vh;
  }


</style>
