<template>
  <a
    @click="clicked"
    :disabled = "isClicked"
    :class = "{ 'nkl-btn--disabled' : this.isClicked }"
    >{{word}}</a>
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
        if (this.word == this.right) {
          this.$emit("choiceMade", true);
        } else {
          this.$emit("choiceMade", false);
          this.isClicked = true;
        }

      }
    }
  }
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
