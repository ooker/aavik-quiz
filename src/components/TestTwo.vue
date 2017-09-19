<template>
  <div>
    <button @click="clicked">{{this.mytext}}</button>
  </div>
</template>

<script>

  import {eventBus} from "../main";

  export default {
    props: ["mytext"],
    data(){
      return {
        //newScore : this.score
      }
    },
    methods : {
      clicked() {
        eventBus.addOne();
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
