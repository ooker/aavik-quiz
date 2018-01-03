<template>
  <div class="nkl-intro">

    <div class="nkl-intro__room">
      <div id="nkl-parallax__scene">

        <!-- Linn -->
        <div class="nkl-parallax__layer" data-depth="-0.1">
          <div class="nkl-parallax__item" style="top:10%; right:10%;">

              <img
                style="width:35vw; height: auto;"
                src="../assets/intro/linn.jpg"
                srcset="../assets/intro/linn.jpg 500w, ../assets/intro/linn_lg.jpg 900w"
                sizes="35vw"
                alt="Kuressaare gümnaasium 20. saj. alguses"
              >
          </div>
        </div>

        <!-- Neiu -->
        <div class="nkl-parallax__layer" data-depth="-0.05">
          <div class="nkl-parallax__item" style="top:36%; right:15%;">
            <img
                style="width:12vw; height: auto;"
                src="../assets/intro/neiu.png"
                srcset="../assets/intro/neiu.png 200w, ../assets/intro/neiu_lg.png 300w"
                sizes="12vw"
                alt="Johannese unistuste neiu"
              >
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
            </svg>
          </div>
        </div>

        <!-- Aken -->
        <div class="nkl-parallax__layer" data-depth="0.05">
          <div class="nkl-parallax__item" style="top:5%; right:10%;">
            <!-- <img src="../assets/intro/aken.png" style="width:35vw; height: auto;" /> -->
            <img
              style="width:35vw; height: auto;"
              src="../assets/intro/aken.png"
              srcset="../assets/intro/aken.png 500w, ../assets/intro/aken_lg.png 1000w, ../assets/intro/aken_sm.png 250w"
              sizes="35vw"
              alt="aknast paistab linnatänav ja tüdruk valges"
            >
          </div>
        </div>

        <!-- Sõnad -->
        <div class="nkl-parallax__layer nkl-intro__words" data-depth="0.09" style="mix-blend-mode: multiply; opacity:0.7;">
          <div class="nkl-parallax__item" style="top:26%; right:13vw;">hurmav</div>
          <div class="nkl-parallax__item" style="bottom:26%; left:48vw;">mõrv</div>
          <div class="nkl-parallax__item" style="top:8%; left:7vw;">relv</div>
          <div class="nkl-parallax__item" style="bottom:43%; left:7vw;">kurv</div>
          <div class="nkl-parallax__item" style="bottom:26%; right:6vw;">pühamu</div>
          <div class="nkl-parallax__item" style="top:42%; right:4vw;">ahistama</div>
          <div class="nkl-parallax__item" style="bottom:16%; left:5vw;">kummaline</div>
          <div class="nkl-parallax__item" style="top:25%; right:47vw;">reetma</div>
          <div class="nkl-parallax__item" style="top:44%; right:30vw;">jaunis</div>
          <div class="nkl-parallax__item" style="top:37%; left:3vw;">sulnis</div>
          <div class="nkl-parallax__item" style="top:8%; left:45vw;">embama</div>
          <div class="nkl-parallax__item" style="bottom:10%; left:45vw;">morn</div>
        </div>

        <!-- Laud -->
        <div class="nkl-parallax__layer" data-depth="0.17">
          <div class="nkl-parallax__item" style="bottom:-8%; right:10%;">
            <!-- <img src="../assets/intro/laud.png" style="width:35vw; height: auto;" /> -->
            <img
              style="width:35vw; height: auto;"
              src="../assets/intro/laud.png"
              srcset="../assets/intro/laud.png 500w, ../assets/intro/laud_lg.png 900w, ../assets/intro/laud_sm.png 250w"
              sizes="35vw"
              alt="toas on laud tindipoti ja pooleli töödega"
            >
          </div>
        </div>



        <!-- Johannes -->
        <div class="nkl-parallax__layer" data-depth="0.33">
          <div class="nkl-parallax__item" style="bottom:-2%; left:12vw;">
            <!-- <img src="../assets/intro/johannes.png" style="width:40vw; height: auto;" /> -->
            <img
              style="width:40vw; height: auto;"
              src="../assets/intro/johannes.png"
              srcset="../assets/intro/johannes.png 500w, ../assets/intro/johannes_lg.png 900w, ../assets/intro/johannes_sm.png 250w"
              sizes="40vw"
              alt="Johannes Aavik mängib toas viiulit"
            >
          </div>
        </div>



        <!-- Lingid -->
        <div class="nkl-parallax__layer nkl-intro__texts" data-depth="0.12">
          <div class="nkl-parallax__item" style="top:26%; left:5vw;">
            <nkl-modal-launcher
              word="elu ja töö"
              subject="life"
              @modalLauncherClicked="openModal"></nkl-modal-launcher>
          </div>
          <div class="nkl-parallax__item" style="top:66%; left:34vw;">
            <nkl-modal-launcher
              word="Aavik isiksusena"
              subject="work"
              @modalLauncherClicked="openModal"></nkl-modal-launcher>
          </div>
          <div class="nkl-parallax__item" style="top:18%; left:38vw;">
            <nkl-modal-launcher
              word="sõnad"
              subject="work"
              @modalLauncherClicked="openModal"></nkl-modal-launcher>
          </div>
          <div class="nkl-parallax__item" style="top:16%; right:1.6vw; transform:scale(0.75)">
            <nkl-modal-launcher
              word="projektist"
              subject="about"
              @modalLauncherClicked="openModal" ></nkl-modal-launcher>
          </div>
          <div class="nkl-parallax__item" style="top:68%; left:5vw;">
            <nkl-modal-launcher
              word="lisalugemist"
              subject="links"
              @modalLauncherClicked="openModal" ></nkl-modal-launcher>
          </div>
        </div>

      </div>

    </div><!-- .nkl-intro__room -->



    <div class="nkl-intro__sign">
      <div class="nkl-intro__sign-info">
        <h1 class="nkl-intro__sign-heading"><span>Johannes</span><span>Aavik</span></h1>
        <hr />
        <p class="nkl-intro__sign-subheading">
        Saaremaa sõnameister (1880-1973)
        </p>
      </div>

      <div class="nkl-intro__sign-launcher">
          <a class="nkl-button"
            @click="openModal('game')"
          >Sõnamäng</a>
      </div>

      <div class="nkl-intro__sign-nav">
          <nav>
              <ul>
                <a  @click="openModal('game')"><li>elu</li></a>
              </ul>
          </nav>
      </div>

    </div><!-- .nkl-intro__sign -->



    <transition name="fade">
      <nkl-modal
        v-if="activeSubject"
        :modalTitle="getSubject.title"
        :modalContent="getSubject.content"
        @modalCloserClicked="closeModal"
      ></nkl-modal>
    </transition>

  </div> <!-- .nkl-intro -->
</template>








<!--

SCRIPT _____________________________________________________________________

-->
<script>
  const Parallax = require('parallax-js');

  import Modal from "../components/Modal.vue";
  import ModalLauncher from "../components/ModalLauncher.vue";

  export default {
    //props: ["gameData", "gameIndex"],
    data(){
      return {
        activeSubject : false,
        modals: {
          "life" : {
            "title" : "About life",
            "content" : "About life text here"
          },
          "work" : {
            "title" : "About work",
            "content" : `
                About work text here
                <br />
                <b>Maybe some HTML</b> too
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex sapien. Sed suscipit molestie iaculis. Pellentesque pellentesque pellentesque metus sit amet sodales. Pellentesque non nibh non ante posuere accumsan ac id ante. Donec luctus neque in mauris ornare, ac dignissim leo aliquam. Fusce consequat consectetur sapien et tempor. Aenean sed molestie leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin commodo neque eu nunc malesuada bibendum. Ut iaculis libero non nunc tempor aliquam. Nunc ut tincidunt massa. Cras sagittis semper massa, vel venenatis purus pretium ac. Sed auctor feugiat augue, et sodales nibh bibendum et. Cras imperdiet quam dui, eu faucibus lacus vestibulum ac.</p>
                <p>
Praesent rutrum ante eget urna pretium, nec cursus odio interdum. In fringilla luctus leo, eu iaculis lacus posuere vel. Donec eu molestie nisi. Nunc dapibus quam non mauris posuere sodales. Fusce id metus luctus magna dapibus blandit. Suspendisse tempor ac dolor in varius. Aliquam sagittis consectetur urna, euismod facilisis nisi vulputate eget. Etiam vehicula eros nec scelerisque porttitor. Cras gravida congue leo, ac porttitor augue dictum eget. Praesent porta, mauris vitae blandit venenatis, sapien lectus malesuada lacus, id dictum nulla dolor nec elit.
                </p>
                <p>
Praesent rutrum ante eget urna pretium, nec cursus odio interdum. In fringilla luctus leo, eu iaculis lacus posuere vel. Donec eu molestie nisi. Nunc dapibus quam non mauris posuere sodales. Fusce id metus luctus magna dapibus blandit. Suspendisse tempor ac dolor in varius. Aliquam sagittis consectetur urna, euismod facilisis nisi vulputate eget. Etiam vehicula eros nec scelerisque porttitor. Cras gravida congue leo, ac porttitor augue dictum eget. Praesent porta, mauris vitae blandit venenatis, sapien lectus malesuada lacus, id dictum nulla dolor nec elit.
                </p>
                <p>
Praesent rutrum ante eget urna pretium, nec cursus odio interdum. In fringilla luctus leo, eu iaculis lacus posuere vel. Donec eu molestie nisi. Nunc dapibus quam non mauris posuere sodales. Fusce id metus luctus magna dapibus blandit. Suspendisse tempor ac dolor in varius. Aliquam sagittis consectetur urna, euismod facilisis nisi vulputate eget. Etiam vehicula eros nec scelerisque porttitor. Cras gravida congue leo, ac porttitor augue dictum eget. Praesent porta, mauris vitae blandit venenatis, sapien lectus malesuada lacus, id dictum nulla dolor nec elit.
                </p>
              `
          },
          "game" : {
              "title" : "Pane end proovile",
              "content" : `
                  <p>
                    Paljud Aaviku leiutatud sõnad tunduvad meile täna väga tuttavad &ndash; me ei tule enamasti selle pealegi, et neid kellegi väljamõeldisteks pidada. Samas on tal suur hulk vähemtuntud sõnu, mis tunduvad tänapäeval kummalised, isegi naljakad.
                  </p>
                  <p>
                    Näitame sulle ühte &quot;tavalist&quot; lauset ja sama lauset kus üks sõnadest on ära vahetatud väljamõeldud variantidega. Sinu ülesandeks on proovida nende seast just Johannes Aaviku pakutud sõna ära tunda.
                  </p>
                  <p>
                    <i><small>NB! leiuta ka ise täiesti uusi sõnu, mis võiksid sinu meelest sinna lausesse sobida. </small></i>
                  </p>
              `
          },
          "about" : {
              "title" : "Dadada",
              "content" : `
                  <p>
                    Hei hei, meie siin!
                  </p>
              `
          },
        }
      }
    },
    components : {
      "nkl-modal": Modal,
      "nkl-modal-launcher": ModalLauncher
    },
    mounted(){
      const scene = document.getElementById('nkl-parallax__scene');
      const parallaxInstance = new Parallax(scene);
    },
    computed : {
      getSubject: function() {
        return this.modals[this.activeSubject];
      },
    },
    methods : {
      openModal(subject) {
        this.activeSubject = subject;

      },
      closeModal() {
        this.activeSubject = false;
      }

    }
  }
</script>






<!--

STYLE _____________________________________________________________________

-->


<style scoped lang="scss">
  @import "../assets/scss/variables.scss";

  .nkl-intro {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: bottom;
    justify-content: space-between;
    height: 100vh;

    overflow: hidden;

    // background: $nkl-brown--dark;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23e1be57' fill-opacity='0.32' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");


  }
  .nkl-intro__room {
    width: 100%;
    //height: calc(100vw*0.6);
    //height: calc(100vw*0.55);
    height: calc(100vw*0.55);
    display: flex;
    align-items: center;
  }
  #nkl-parallax__scene {
    width: 100%;
    background: hsl(40, 42%, 29%);
    height: calc(100vw*0.55);

    overflow: hidden;
    box-shadow: 0 0 0.3vh 0.4vh hsla(0, 0, 0, 0.3);
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
  }
  .nkl-intro__wall-svg {
    width: 100%;
    height: auto;
  }


  .nkl-intro__sign {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: calc(100vh - (100vw*0.45));
    margin: 0;
    padding:3vh 0;
    background: hsla(27, 38%, 14%, 0.6);
    &-heading {
      text-align: center;
      font-size: 10vw;
      margin: 0; padding:0;
      line-height: 1;
      color: $nkl-yellow--pale;
      text-shadow: 1px 3px 0 hsla(0,0,0,0.5);
    }
    &-subheading {
      margin: 2vh 0 0 0; padding: 0 $nkl-m;
      line-height: 1.2;
      font-family: $font-main;
      font-size: $nkl-s;
      font-weight: 400;
      text-align: center;
      color: $nkl-yellow--pale;
      letter-spacing: 0.3vw;
      //font-style: italic;
      text-transform: uppercase;
    }


    hr {
      border-bottom-color: hsla(52, 82%, 74%, 0.4);
      margin: 0; padding:0;
    }
  }

  .nkl-intro__sign-info {}
  .nkl-intro__sign-launcher {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nkl-intro__texts {
    display: none !important;
  }

  .nkl-intro__words {
    display: none !important;
    font-family: $font-main;
    font-size: 1.8vw;
    // color: $nkl-brown--dark;
    color: hsl(37, 79%, 37%);
    font-style: italic;
  }












@include mq-landscape {

  .nkl-intro {
    flex-direction: row;
    //align-items: center;
  }
  .nkl-intro__room {
    //height: calc(100vw*0.4);
    flex-direction: row;
    align-items: flex-start;
    height: 100vh;
  }
  #nkl-parallax__scene {
    height: calc(100vw*0.5);

  }

  .nkl-intro__sign {
    flex-direction: row;
    position: absolute;
    top: auto;
    bottom: 0;
    padding: 2vh 0;
    width: 100%;
    height: auto;
    //min-height: 20vh;

    background: hsla(27, 38%, 14%, 0.75);
    //background: hsla(27, 0%, 0%, 0);

    &-heading {
      font-size: 6vw;
    }
    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      //height: 100%;
    }
    &-nav {
      display: none;
    }
  }

  .nkl-intro__sign-info {
    flex: 1 0 60%;
  }
  .nkl-intro__sign-launcher {
    flex: 1 0 40%;
  }
  .nkl-intro__texts {

    display: block !important;
    pointer-events: auto;
    z-index: 20000;

    .nkl-modal-launcher {
      padding: 0 $nkl-l 0 $nkl-m; margin: 0;
      border-radius: 30px;
      cursor: pointer;
      font-family: $font-special;
      font-size: 2.7vw;
      line-height: 0;
      color: $nkl-brown--dark;
      //border-bottom: 1px dotted $nkl-brown--dark;
      box-shadow: 0 1px 2px 1px hsla(0, 0%, 0%, 0.25);
      background-color: hsla(0, 20%, 100%, 0.4);
      transition: background-color 0.3s ease-out;
      &:hover {
        background-color: hsla(0, 20%, 100%, 1);
      }
    }
  }
  .nkl-intro__words {
    display: block !important;
  }
} // mq-landscape

@include mq-m {
  .nkl-intro__sign {

    &-subheading {
      font-size: $nkl-m;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
}  // mq-m

@include mq-l {
  .nkl-intro__sign {
    padding: 2vh 0 1vh 0;
    &-heading {
      font-size: 4.7rem;
    }
    &-subheading {
      margin: $nkl-xxs 0 0 0; padding: 0 $nkl-s;
    }
  }

  .nkl-intro__words {
    font-size: $nkl-l;
  }

  .nkl-intro__texts {

    .nkl-modal-launcher {
      font-size: 2.4vw;
    }
  }

}  // mq-l






</style>
