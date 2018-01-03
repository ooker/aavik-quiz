<template>
  <div class="nkl-modal">

      <div class="nkl-modal__content">
        <!-- <div style="margin:auto; min-height: 100vh;"> -->

          <h1 class="nkl-modal__title">{{ modalTitle }}</h1>
          <div v-html="modalContent"></div>
          <!-- <component :is="modalTitle"></component> -->

          <a
            v-if="modalTitle == 'Pane end proovile'"
            @click="openGame"
            class="nkl-button">
              MÄNGIMA
          </a>
        <!-- </div> -->
      </div>

      <a class="nkl-modal__close" @click = "closeModal">
        <span>&times;</span>
      </a>

  </div>
</template>




<script>
  import {eventBus} from "../main";
  import ModalGame from "../components/modals/ModalGame.vue";


  export default {
    props: ["modalTitle","modalContent"],
    components : {
      "nkl-modal-game": ModalGame
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
      openGame() {
        eventBus.changeView("nkl-game");
      }
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
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    padding: 3vh 9vw 3vh 8vw;
    max-height: 100vh;
    width: 100%;
    max-width: 660px;

    font-size: $nkl-l;
    line-height: 1.4;
    // overflow-y: scroll;
    overflow: auto;
    text-align: left;
    color: $nkl-brown--dark;

    background-color: hsl(50, 42%, 94%);
    background-image:
      linear-gradient(90deg, transparent 5%, hsl(0, 0%, 74%) 5%, hsl(0, 0%, 74%) 5.15%, transparent 5.15%),
      linear-gradient(90deg, transparent 92%, hsl(348, 84%, 74%) 92%, hsl(348, 84%, 74%) 92.2%, transparent 92.2%),
      linear-gradient(#eee .1rem, transparent .1rem);
    background-size: 100% 2.2rem;

    box-shadow: -0.5vmin 0 0.5vmin 0.2vmin hsla(0, 0%, 0%, 0.35);

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

  .nkl-img--framed {
    border: 15px solid transparent;
    border-image-source: url(../assets/photo-edge.png);
    border-image-slice: 17;
    border-image-width: 1;
    border-image-repeat: round;
  }



  @include mq-l-landscape {
    .nkl-modal__content {
      padding: 3vh 5vw 3vh 5vw;
    }
    h1 {
      font-size: 3vw;
      line-height: 1;
    }
  }
</style>
