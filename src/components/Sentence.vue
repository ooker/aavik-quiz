<template>
  <transition name="fade" mode="out-in">
    <div class="nkl-sentences__container">


      <!-- <div class="nkl-sentences"> -->

        <div class="nkl-sentence__comment">Tänapäevane variant</div>
        <h2 class="nkl-sentence__translation">
          {{this.currentSentence.start}}<span>{{this.currentSentence.translation}}</span>{{this.currentSentence.end}}
        </h2>

        <div class="nkl-sentence__comment"><span v-if="!itemFound">Leia</span> Aaviku variant</div>

        <transition name="fade" mode="out-in">

          <div class="nkl-sentence" v-if="!itemFound">

            <span class="nkl-sentence-start">{{this.currentSentence.start}}</span>
            <span class="nkl-sentence-chooser">

              <nkl-sentence-option
                v-for="choice in choices"
                v-if="!itemFound"
                :key="choice"
                :word="choice"
                :right="rightChoice"
                :current="currentChoice"

                @choiceMade = "checkAnswer"
              ></nkl-sentence-option>


                <!--<nkl-sentence-option
                  v-if="itemFound"
                  :word="rightChoice"
                  :right="rightChoice"
                  :current="currentChoice"
                    style="text-transform: uppercase; background: hsla(0, 0%, 100%, 0.5); padding: 5px 15px; transform: scale(1.3) rotateZ(-5deg)"

                ></nkl-sentence-option>-->

            </span>
            <span class="nkl-sentence-end">{{this.currentSentence.end}}</span>
          </div>

          <h2 v-else-if="itemFound" class="nkl-sentence__aavik">
            {{this.currentSentence.start}}<span class="nkl-sentence__aavik-word">{{this.currentSentence.aavik}}</span>{{this.currentSentence.end}}
          </h2>

        </transition>
        <!-- <hr  /> -->






      <a
        class="nkl-sentence__back-button"
        @click="cancelGame"
      >välju mängust</a>


      <div v-if="currentChoice"   @click="nextRound" class="">
        Bing bong good choice!
      </div>

      <!-- </div> -->
    </div>
  </transition>
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
        //guessScore: 6,
        //penalty: 5
      }
    },
    components : {
      "nkl-sentence-option": SentenceOption
    },
    methods : {
      checkAnswer(d){
        if (d === false) {
          //this.guessScore -= this.penalty;
          eventBus.changeScore(eventBus.penalty);
          this.currentChoice = false;
        } else if (d == true) {
          eventBus.changeScore(eventBus.bonus);
          this.currentChoice = true;
          eventBus.foundItem();
          this.itemFound = true;
          //eventBus.changeRound();
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
      nextRound(){
        eventBus.changeRound();
        this.currentChoice = false;
        this.itemFound = false;
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

  hr {
    width: 78%;
  }
  .nkl-sentences__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height:100vh;

    background-color: hsl(51, 69%, 85%);
    background-image:
      linear-gradient(90deg, transparent 5%, hsl(0, 0%, 74%) 5%, hsl(0, 0%, 74%) 5.15%, transparent 5.15%),
      linear-gradient(90deg, transparent 92%, hsl(348, 84%, 74%) 92%, hsl(348, 84%, 74%) 92.15%, transparent 92.15%),
      linear-gradient(hsl(0, 0%, 84%) .085rem, transparent .085rem);
    background-size: 100% 5vh;

    overfow-y: auto;

    transition: all 0.5s ease-out;

  }

  .nkl-sentence__translation {
    text-align: center;
    font-family: $font-main;
    font-size: $nkl-xl;
    color: $nkl-brown--dark;
    margin: 0 0 $nkl-xxl 0;

    padding: $nkl-m $nkl-xxxl;


    background: hsla(0, 0%, 100%, 0.3);
    box-shadow: 0 0 4px 1px hsla(0, 0%, 0%, 0.3);

    span {
      color: $nkl-green;
      //text-transform: uppercase;
      // font-weight: bold;
    }
  }
  .nkl-sentence__aavik {
    font-family: $font-main;
    font-size: $nkl-xxxl;
    text-align: center;
    margin: 0 0 $nkl-xxl 0;
    padding: $nkl-m $nkl-xxxl;

    background: hsla(0, 0%, 100%, 0.85);
    box-shadow: 0 0 4px 1px hsla(0, 0%, 0%, 0.3);

    span {
      color: $nkl-green;
    }
  }

  .nkl-sentence {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // height: 50vh;

    padding: $nkl-xxl;
    font-family: $font-main, cursive;
    font-size: $nkl-xxl;
    background: hsla(0, 0%, 100%, 0.3);

    box-shadow: 0 0 4px 1px hsla(0, 0%, 0%, 0.3);
  }
  .nkl-sentence-start, .nkl-sentence-end {
    text-align: center;
  }
  .nkl-sentence-chooser {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 1rem;
    transition: all 0.5s ease-out;
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
    transition: all 0.3s ease-out;
  }

  .nkl-sentence__comment {
    text-transform: uppercase;
    font-size: $nkl-s;
    color: $nkl-gray;
    text-align: center;
    font-weight: bold;
    padding-bottom: 7px;
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
    &::before {
      content: "\21a2";
      display: inline-block;
      margin-right: 12px;

    }
  }

  @include mq-landscape {
    .nkl-sentence-chooser {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
</style>
