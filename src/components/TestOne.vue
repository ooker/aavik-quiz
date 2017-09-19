<template>
  <div class="nkl-score" >
    <h2> {{ this.score }} </h2>
  </div>
</template>

<script>
  export default {
    props: ["score"],
    data(){
      return {
        newScore : this.score
      }
    },
    methods : {
      scoreChanged() {
        this.newScore = this.score;
      }
    }/*,
    watch : {
      score : function(){
        //this.scoreChanged();
        this.newScore = this.score;
      }
    }*/
  }
</script>

<style scoped lang="scss">


</style>
