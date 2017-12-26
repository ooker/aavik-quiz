<template>
  <!-- <a
    @click="clicked"
    :disabled = "isClicked"
    :class = "{ 'nkl-sentence__option--disabled' : this.isClicked }"
  >{{word}}</a> -->
  <span>{
  <a
    @click="clicked"
    :disabled = "isClicked"
    :class = "{ 'nkl-sentence__option--disabled' : this.isClicked }"
  >{{word}}</a>
  }</span>
</template>

<script>
  export default {
    props: ["word", "right", "current"],
    data() {
      return {
        isClicked : false
      }
    },
    methods: {
      clicked () {
        if (this.word === this.right) {
          this.$emit("choiceMade", true);
        } else {
          this.$emit("choiceMade", false);
          this.isClicked = true;
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/_variables.scss";

  span {
    padding: 0 $nkl-xs;
    white-space: nowrap;
  }
  a {
    cursor: pointer;
    text-align: center;
    //display: block;
    color: $nkl-green;
    transform: scale(1);

    &:hover {
      text-decoration: underline;
      transform: rotate(9);
    }
  }
  .nkl-sentence__option--disabled {

    /* display: none; */
    /* transform: scale(0);
    height: 0px;
    width: 0px;
    transition: all 0.2s ease-in; */
    /*text-decoration: line-through;
    transition: opacity 1.2s ease-in;
    opacity: 0.2;
    pointer-events:none;*/
    transform: scale(1);

    animation: hideOption 0.75s ease-in forwards;
  }
  @keyframes hideOption {
    0% {
      transform: scaleY(1);
      opacity: 1;

    }
    100% {
      transform: scaleY(0.4);
      opacity: 0.3;
      text-decoration: line-through;
    }
  }
</style>
