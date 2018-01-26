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
  @import "../assets/scss/_variables.scss";

  .nkl-score {
    position: fixed;
    top: 2vmin;
    right: 2vmin;
    width: 3.6rem;
    height: 3.6rem;
    transform: scale(1);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: $font-main;
    font-size: 1.4rem;
    line-height: 1;
    color: $nkl-brown--dark;
    border: 4px solid $nkl-brown--dark;
    font-weight: bold;

    background: hsla(0, 0%, 100%, 1);
    transition: all 1s;
  }

  .alert {
    background: $nkl-red;
    // width: 5.6rem;
    // height: 5.6rem;
    // top: 10%;
    // right: 10%;
    transform: scale(1.5) translate(-10vmin, 10vmin);
    transition: all .75s ease-out;
  }
  .success {
    background: hsl(124, 83%, 36%);
    // width: 5.6rem;
    // height: 5.6rem;
    // top: 10%;
    // right: 10%;
    transform: scale(1.5) translate(-10vmin, 10vmin);
    color: hsl(0, 0%, 100%);
    transition: all .75s ease-out;
  }

  @include mq-m {
    .nkl-score {
      width:4.6rem;
      height:4.6rem;
      font-size:2rem;
      border: 5px solid $nkl-brown--dark;
    }
  }


</style>
