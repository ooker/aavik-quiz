<template>
  <div id="app">
    <component :is="currentView" :gd="gameData" :gi="gameIndex"></component>
    <!--<nkl-sentence :currentSentence="this.gameData[gameIndex]"></nkl-sentence>
    <nkl-score :score="this.gameScore"></nkl-score>-->
  </div>
</template>

<script>

  import {eventBus} from "./main";
  import Intro from "./components/Intro.vue";
  import GameScore from "./components/GameScore.vue";
  import Sentence from "./components/Sentence.vue";

export default {
    name: 'app',
    data () {
      return {
        currentView: "nkl-intro",
        gameScore : 50,
        gameData: eventBus.shuffle(eventBus.gameData),
        gameIndex: 0,
        gameStarted: false
      }
    },
    components : {
      "nkl-intro": Intro,
      "nkl-score": GameScore,
      "nkl-sentence" : Sentence
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
        this.gameIndex++;
        console.log("Game index is " + this.gameIndex) ;
      });
      eventBus.$on("itemFound", ()=>{
          this.gameData[this.gameIndex].itemFound = true;
      });
    }
  }
</script>

<style lang="scss">
  #app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

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
    color: #42b983;
  }



</style>
