<template>
  <div class="nkl-modal">

      <div class="nkl-modal__content">
        <!-- <div style="margin:auto; min-height: 100vh;"> -->

          <!-- <h1 class="nkl-modal__title">{{ modalTitle }}</h1> -->
          <!-- <div v-html="modalContent"></div> -->
          <component :is="modalSubject"></component>

          <!-- <a
            v-if="modalSubject == 'nkl-modal-game'"
            @click="openGame"
            class="nkl-button">
              MÄNGIMA
          </a> -->
        <!-- </div> -->
      </div>

      <a class="nkl-modal__close" @click = "closeModal">
        <span>&times;</span>
      </a>

  </div>
</template>




<script>
  // import {eventBus} from "../main";
  import ModalGame from "../components/modals/ModalGame.vue";
  import ModalLife from "../components/modals/ModalLife.vue";
  import ModalWords from "../components/modals/ModalWords.vue";
  import ModalAbout from "../components/modals/ModalAbout.vue";

  export default {
    props: ["modalSubject"],
    components : {
      "nkl-modal-game": ModalGame,
      "nkl-modal-life": ModalLife,
      "nkl-modal-words": ModalWords,
      "nkl-modal-about": ModalAbout
    },
    data(){
      return {
        message : "Intro modal here"
      }
    },
    methods: {
      closeModal(){
        this.$emit("modalCloserClicked");
      },
      // openGame() {
      //   eventBus.changeView("nkl-game");
      // }
    }
  }
</script>




<style scoped lang="scss">
  @import "../assets/scss/variables.scss";


  a {
    cursor: pointer;
    //color: $nkl-blue;
  }
  .nkl-modal {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    padding: 1vw;
    display: flex;
    justify-content: flex-end;
    background: hsla(0,0%,0%,0.7);
  }
  .nkl-modal__content {
    //background: $nkl-brown--dark;

    max-height: 100vh;
    width: 100%;
    max-width: 700px;

    // font-size: $nkl-l;
    font-size: 1.1rem;
    line-height: 1.5;
    // overflow-y: scroll;
    overflow: auto;
    text-align: left;
    color: $nkl-brown--dark;

    background-color: hsl(51, 69%, 85%);
    background-image:
      linear-gradient(90deg, transparent 5%, hsl(0, 0%, 74%) 5%, hsl(0, 0%, 74%) 5.15%, transparent 5.15%),
      linear-gradient(90deg, transparent 92%, hsl(348, 84%, 74%) 92%, hsl(348, 84%, 74%) 92.15%, transparent 92.15%),
      linear-gradient(hsl(0, 0%, 84%) .085rem, transparent .085rem);
    background-size: 100% 5vh;
    box-shadow: -0.5vmin 0 0.5vmin 0.2vmin hsla(0, 0%, 0%, 0.35);



  }

  .nkl-modal__content > div {
    // display: flex;
    // flex-direction: column;
    // //justify-content: center;
    // align-items: flex-start;
    padding: 3vh 9vw 3vh 8vw;
  }

  .nkl-modal__close {
    position: absolute;
    top: 25px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 0; margin: 0;
    border-radius: 50%;
    background: $nkl-brown--dark;
    color: #fff;
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 0;
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    font-size: $nkl-xxxl;
  }
  

  @include mq-l-landscape {
    .nkl-modal__content > div {
      padding: 3vh 5vw 10vh 3.5vw;

      h1 {
        font-size: 3vw;
        line-height: 1;
      }
    }
    
  }
</style>
