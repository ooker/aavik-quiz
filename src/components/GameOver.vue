<template>
  <div class="nkl-gameover__container">

    <div class="nkl-gameover">

        <h1>Mäng läbi!</h1>
        <h2>Sul õnnestus koguda {{gameScore}} punkti {{gameLength*gameBonus}}-st võimalikust.</h2>

        <hr style="width: 100%;" />
        <a class="nkl-button nkl-gameover__button" @click="shareToFB">Jaga Facebookis</a>
        <hr style="width: 100%;" />

        <a class="nkl-back nkl-gameover__back" @click="playAgain">mängi uuesti</a>

        <a class="nkl-back nkl-gameover__back" @click="quit">avalehele</a>

    </div>



  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    props: ["gameScore", "gameLength", "gameBonus"],
    data() {
      return {
        isClicked : false
      }
    },
    methods: {
      playAgain() {
        eventBus.restartGame();
        eventBus.changeView("nkl-game");
      },
      quit(){
        eventBus.changeView("nkl-intro");
      },
      shareToFB() {
        FB.shareMyScore({
          link: 'http://saaremaa.folklore.ee/aavik/',
          image: 'http://saaremaa.folklore.ee/aavik/FB_share-2.jpg',
          title: 'Mängisin Johannes Aaviku veebimängu...',
          description: '...ja saavutasin ' + this.gameScore + ' punkti. Proovi ka!'
          // caption: 'Tee järgi või tee veel paremini!',
          // 
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/_variables.scss";


  .nkl-gameover__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 3vh 4vw;
  }
  .nkl-gameover {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $nkl-xxl;
    border-radius: $nkl-xl;
    background: hsla(0, 0%, 0%, 0.34);
    box-shadow: 0 1px 3px 2px hsla(0, 0%, 0%, 0.7);
    text-align: center;
  }

  h1 {
    margin: 0;
    color: $nkl-yellow--pale;
    font-size: $nkl-5xl;
  }
  h2 {
    margin: $nkl-s 0 $nkl-m 0;
    color: $nkl-yellow--pale;
    font-family: $font-main;
    font-size: $nkl-l;
  }
  .nkl-gameover__button {
    font-size: $nkl-l;
  }
  .nkl-gameover__back {
    position: static;
    transition: color 0.3s ease-out;
    color: $nkl-yellow--pale;
    &:hover {
      color: white !important;
    }
  }

</style>
