<template>
  <div class="nkl-sentences__container">
    <transition name="fade" mode="out-in">
    <!--<div v-if="itemFound">
      <h2>
        {{this.currentSentence.start}}
        <span style="color:blue;">{{this.currentSentence.aavik}}</span>
        {{this.currentSentence.end}}
      </h2>
      <h3>
        {{this.currentSentence.start}}
        <span style="color:blue;">{{this.currentSentence.translation}}</span>
        {{this.currentSentence.end}}
      </h3>
      <button class="nkl-button">Edasi</button>
    </div>-->
    <div class="nkl-sentence">
      <span class="nkl-sentence-start">{{this.currentSentence.start}}</span>
      <span class="nkl-sentence-chooser">
        <nkl-sentence-option
          v-for="choice in choices"
          :key="choice"
          :word="choice"
          :right="rightChoice"
          :current="currentChoice"
          @choiceMade = "checkAnswer"
        ></nkl-sentence-option>
      </span>
      <span class="nkl-sentence-end">{{this.currentSentence.end}}.</span>
    </div>
    </transition>

    <a
      class="nkl-sentence__back-button"
      @click="cancelGame"
    >&laquo; välju mängust</a>

  </div>
</template>

<script>
  import {eventBus} from "../main";
  import SentenceOption from "../components/SentenceOption.vue";

  export default {
    props: ["currentSentence"],
    data(){
      return {
        //image : require("../assets/img/game/" + this.gd[this.gi].item.img) ,
        choices : [],
        chants : ["ÕIGE VASTUS!", "VÄGA TUBLI!", "HEA TÖÖ!", "HÄSTI PAKUTUD!", "ARVASID ÄRA!"],
        itemFound : false,
        currentChoice: null,
        guessScore: 6,
        penalty: 5
      }
    },
    components : {
      "nkl-sentence-option": SentenceOption
    },
    methods : {
      checkAnswer(d){
        if (d == false) {
          this.guessScore -= this.penalty;
          eventBus.changeScore(eventBus.penalty);
          this.currentChoice = false;
        } else if (d == true) {
          eventBus.changeScore(eventBus.bonus);
          this.currentChoice = true;
          eventBus.foundItem();
          this.itemFound = true;
          eventBus.changeRound();
        }
        console.log("checking..." + d);
      },
      buildChoices(){
        this.choices = [];
        this.choices.push(this.currentSentence.aavik);
        for (var value of this.currentSentence.options) {
          this.choices.push(value);
        }
        this.choices = eventBus.shuffle(this.choices);
        this.rightChoice = this.currentSentence.aavik;
      },
      cancelGame(){
        eventBus.changeView("nkl-intro");
      }
    },
    created(){
      this.choices.push(this.currentSentence.aavik);
      for (var value of this.currentSentence.options) {
        this.choices.push(value);
      }
      this.choices = eventBus.shuffle(this.choices);
      this.rightChoice = this.currentSentence.aavik;
      //this.buildChoices();
      /*this.choices.push(this.gd[this.gi].aavik);
      for (var value of this.gd[this.gi].options) {
        this.choices.push(value);
      }
      this.choices = eventBus.shuffle(this.choices);
      this.rightChoice = this.gd[this.gi].aavik;*/
    },
    watch : {
      currentSentence : function(){
        this.buildChoices();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/_variables.scss";


  .nkl-sentences__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    background-color: hsl(51, 69%, 85%);
    background-image:
      linear-gradient(90deg, transparent 5%, hsl(0, 0%, 74%) 5%, hsl(0, 0%, 74%) 5.15%, transparent 5.15%),
      linear-gradient(90deg, transparent 92%, hsl(348, 84%, 74%) 92%, hsl(348, 84%, 74%) 92.15%, transparent 92.15%),
      linear-gradient(hsl(0, 0%, 80%) .085rem, transparent .085rem);
    background-size: 100% 5vh;
  }

  .nkl-sentence {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: $font-main, cursive;
    font-size: $nkl-xxxl;
  }
  .nkl-sentence-chooser {
    display: flex;
    flex-direction: column;
    margin: auto 1rem;
  }
  .nkl-sentence-chooser__instruction {
    margin-bottom: $nkl-s;
    font-size: $nkl-xs;
    opacity: 0.4;
    letter-spacing: 1.2px;

  }
  nkl-sentence-option {
    padding: $nkl-l;
    cursor: pointer;
  }

  .nkl-sentence__back-button {
    position: absolute;
    top: 3vh;
    left: 4vh;
    padding: $nkl-xxs $nkl-s;
    font-family: $font-special;
    color: $nkl-brown--dark;
    font-size: $nkl-xxl;
    //border-bottom: 1px dotted $nkl-brown--dark;
  }

</style>
