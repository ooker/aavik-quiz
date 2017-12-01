<template>
  <div class="intro-root">
    <div id="nkl-parallax__scene" style="background:hsl(39, 45%, 46%);">

      <!-- Linn -->
      <div class="nkl-parallax__layer" data-depth="-0.1">
        <div class="nkl-parallax__item" style="top:10%; right:10%;">
          <img src="../assets/intro/linn.png" style="width:35vw; height: auto;" />
        </div>
      </div>

      <!-- Sein -->
      <div class="nkl-parallax__layer" data-depth="0.05">
        <div class="nkl-parallax__item nkl-intro__wall" style="top:-5%; left:-5%;">
          <svg viewBox="0 0 1920 1080" class="nkl-intro__wall-svg">
            <defs>
              <pattern id="tapeet" patternUnits="userSpaceOnUse" width="56" height="28">
                <image xlink:href="../assets/intro/tapeet.png" x="0" y="0" width="56" height="28" />
              </pattern>
            </defs>
            <g fill="url(#tapeet)" fill-rule="evenodd">
                <path d="
                      M 0,0 h 1920 v 1080 h -1920 z
                      M 1140,140 h 480 v 470 h -480 z" />
            </g>
            <!-- <rect x="0" y="0" width="100%" height="100%" fill="#ff0" clip-path="url(#windowClip)" ></rect> -->
          </svg>
        </div>
      </div>

      <!-- Aken -->
      <div class="nkl-parallax__layer" data-depth="0.05">
        <div class="nkl-parallax__item" style="top:5%; right:10%;">
          <img src="../assets/intro/aken-ja-kardin.png" style="width:35vw; height: auto;" />
        </div>
      </div>
      <!-- Laud -->
      <div class="nkl-parallax__layer" data-depth="0.17">
        <div class="nkl-parallax__item" style="bottom:-8%; right:10%;">
          <img src="../assets/intro/laud.png" style="width:35vw; height: auto;" />
        </div>
      </div>
      <!-- Johannes -->
      <div class="nkl-parallax__layer" data-depth="0.33">
        <div class="nkl-parallax__item" style="bottom:-7%; left:15vw;">
          <img src="../assets/intro/Johannes.png" style="width:40vw; height: auto;" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  const Parallax = require('parallax-js');

  export default {
    props: ["gameData", "gameIndex"],
    data(){
      return {
        message : "Intro here"
      }
    },
    mounted(){
      const scene = document.getElementById('nkl-parallax__scene');
      const parallaxInstance = new Parallax(scene);
    },
    methods : {

    }
  }
</script>

<style scoped lang="scss">
  .intro-root {
    /*display: flex;
    justify-content: center;
    align-items: center;*/

    width: 100%;
    height: calc(100vw*0.5);
  }
  #nkl-parallax__scene {
    width: 100%;
    height: 100%;
    overflow: hidden;
    //position: relative;
    //border: 0.5vmin solid hsl(28, 55%, 19%);


  }
  .nkl-parallax__layer {
    position:absolute;
    width:100%;
    height: 100%;
  }
  .nkl-parallax__item {
    position: absolute;
    display: inline;
    img {
      display: block;
    }
  }


  .nkl-intro__wall {
    width: 110%;
    height: 110%;
    //background-color: #f6e98a;
/*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23e1be57' fill-opacity='0.32' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");*/
  }
  .nkl-intro__wall-svg {
    width: 100%;
    height: auto;
  }
</style>
