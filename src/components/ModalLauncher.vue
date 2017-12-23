<template>
  <a
    class="nkl-modal-launcher"
    @click="clicked"
    >{{word}}</a>
</template>

<script>
  export default {
    props: ["word", "subject"],
    data() {
      return {
        isClicked : false
      }
    },
    methods: {
      clicked () {
        console.log("click");
        this.$emit("modalLauncherClicked", this.subject);
      }
    }
  }
</script>

<style scoped lang="scss">
  /*@import "../assets/scss/variables.scss";
  a {

  }*/
</style>
