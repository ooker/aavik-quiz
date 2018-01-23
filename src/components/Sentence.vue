<template>
  <!-- <transition name="fade" mode="out-in"> -->
    <div class="nkl-sentences__container">


      <section class="nkl-sentences__top" style="flex: 1 0 40vh; display:flex; flex-direction: column; justify-content: flex-end;">

        <div class="nkl-sentence__comment">{{gameIndex+1}} / {{gameLength}}</div>
        <div class="nkl-sentence__comment">Tänapäevane variant</div>
        <h2 class="nkl-sentence__translation">
          {{this.currentSentence.start}}<span>{{this.currentSentence.translation}}</span>{{this.currentSentence.end}}
        </h2>

        <div class="nkl-sentence__comment">
          <transition name="fade" mode="out-in">
            <div key="notfound" v-if="!itemFound">Leia Aaviku variant</div>
            <div key="found" v-else>Tubli, see on õige vastus!</div>
          </transition>

        </div>
      </section>

      <section class="nkl-sentences__bottom" style="flex:0 0 50vh;">
        <transition name="fade" mode="out-in" :duration="{ enter: 700, leave: 400 }">

          <div v-if="!itemFound" class="nkl-sentence" key="notfound">

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
            </span>
            <span class="nkl-sentence-end">{{this.currentSentence.end}}</span>
          </div>

          <div v-else key="found" style="display:flex;flex-direction:column;justify-content:flex-start;align-items:center;">
            <h2  class="nkl-sentence__aavik">
              {{this.currentSentence.start}}<span class="nkl-sentence__aavik-word">{{this.currentSentence.aavik}}</span>{{this.currentSentence.end}}
            </h2>
            <a class="nkl-button" @click="nextRound"><template v-if="this.gameIndex+1 === this.gameLength ">Vaata tulemust</template><template v-else>EDASI</template></a>
          </div>

        </transition>
        <!-- <transition name="fade">
          <div v-if="currentChoice"  class="">
            <a class="nkl-button" @click="nextRound">EDASI</a>
          </div>
        </transition> -->
      </section>


      <a
        class="nkl-back"
        @click="cancelGame"
      >välju mängust</a>





    </div>
  <!-- </transition> -->
</template>

<script>
  import {eventBus} from "../main";
  import SentenceOption from "../components/SentenceOption.vue";

  export default {
    props: ["currentSentence", "gameLength", "gameIndex"],
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
        eventBus.restartGame();
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
    flex-direction: column;
    min-height:100vh;
    padding: 4vh 4vw;

    background-color: hsl(51, 69%, 85%);
    background-image:
      linear-gradient(90deg, transparent 5%, hsl(0, 0%, 74%) 5%, hsl(0, 0%, 74%) 5.15%, transparent 5.15%),
      linear-gradient(90deg, transparent 92%, hsl(348, 84%, 74%) 92%, hsl(348, 84%, 74%) 92.15%, transparent 92.15%),
      linear-gradient(hsl(0, 0%, 84%) .085rem, transparent .085rem);
    background-size: 100% 5vh;

    overflow-y: auto;

    transition: all 0.5s ease-out;

  }

  .nkl-sentence__translation {
    text-align: center;
    font-family: $font-main;
    font-size: $nkl-l;
    color: $nkl-brown--dark;
    
    margin: 0 0 $nkl-l 0;
    padding: $nkl-xs $nkl-m;

    border-radius: $nkl-s;
    background: hsla(0, 0%, 100%, 0.3);
    box-shadow: 0 0 4px 1px hsla(0, 0%, 0%, 0.3);

    span {
      color: $nkl-green;
    }
  }
  .nkl-sentence__aavik {
    font-family: $font-main;
    font-size: $nkl-xl;
    text-align: center;
    margin: 0 0 $nkl-xxl 0;
    padding: $nkl-xs $nkl-m;
    border-radius: $nkl-s;
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

    padding: $nkl-xs $nkl-m;

    border-radius: $nkl-s;
    font-family: $font-main, cursive;
    font-size: $nkl-xl;
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


  @include mq-landscape {
    .nkl-sentence-chooser {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  @include mq-m {
    .nkl-sentence__translation {
      font-size: $nkl-xl;
      margin: 0 0 $nkl-xl 0;
      padding: $nkl-m $nkl-xxxl;
    }
    .nkl-sentence__aavik {
      font-size: $nkl-xxxl;
      padding: $nkl-m $nkl-xxxl;
    }
    .nkl-sentence {
      font-size: $nkl-xxl;
      padding: $nkl-m $nkl-xxxl;
    }
  }

</style>
