<template>
  <div class="nkl-sentences-container">
    <transition name="fade" mode="out-in">
    <div v-if="itemFound">
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
    </div>
    <div v-else class="nkl-sentence">
      <span class="nkl-sentence-start">{{this.currentSentence.start}}</span>
      <span class="nkl-sentence-chooser">
        <nkl-sentence-option
          v-for="choice in choices"
          :word="choice"
          :right="rightChoice"
          :current="currentChoice"
          @choiceMade = "checkAnswer"
        ></nkl-sentence-option>
      </span>
      <span class="nkl-sentence-end">{{this.currentSentence.end}}.</span>
    </div>

    </transition>
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


  .nkl-sentences-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
  }
  .nkl-sentence {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    font-size: $nkl-xxl;
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

</style>
