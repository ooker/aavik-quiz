<template>
  <div class="nkl-score" :class="[{alert : alertMe}, {success : praiseMe}]">
    {{ this.newScore }}
  </div>
</template>

<script>
  export default {
    props: ["score"],
    data(){
      return {
        newScore : this.score,
        alertMe : false,
        praiseMe : false
      }
    },
    methods : {
      scoreChanged(){
        if(this.score < this.newScore){
          this.alertMe = true;
          this.scrubNumbers();
        } else {
          this.praiseMe = true;
          this.scrubNumbers();
        }
      },
      scrubNumbers(){
        let int;
        const vm = this;

        int = setInterval(function(){
          if(vm.score == vm.newScore){
            clearInterval(int);
            setTimeout(function(){
              vm.alertMe = false;
              vm.praiseMe = false;
            }, 500);

          } else {
            if(vm.score > vm.newScore){
              vm.newScore++;
            } else {
              vm.newScore--;
            }
          }
        }, 100);
      }
    },
    watch : {
      score : function(){
        this.scoreChanged();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables.scss";

  .nkl-score {
    position: fixed;
    top: 2vmin;
    right: 2vmin;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: $font-main;
    font-size: 2rem;
    line-height: 1;
    color: $nkl-brown--dark;
    border: 5px solid $nkl-brown--dark;
    font-weight: bold;

    //border: 3px $nkl-yellow--pale solid;
    //background: hsla(0, 0%, 0%, 0.8);
    //background: $nkl-brown--dark;
    transition: all 1s;
  }

  .alert {
    background: hsl(16, 83%, 36%);
    width: 5.6rem;
    height: 5.6rem;
    top: 15%;
    right: 15%;
    transition: all .75s;
  }
  .success {
    background: hsl(124, 83%, 36%);
    width: 5.6rem;
    height: 5.6rem;
    top: 15%;
    right: 15%;
    transition: all .75s;
  }


</style>
