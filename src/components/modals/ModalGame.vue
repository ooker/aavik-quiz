<template>
  <div style="display: flex; flex-direction:column; align-items: center; justify-content: center; min-height: 100%;">

    <h1>Pane end proovile</h1>
    <p>
      Paljud Aaviku leiutatud sõnad tunduvad meile täna väga tuttavad &ndash; me ei tule enamasti selle pealegi, et neid kellegi väljamõeldiseks pidada. Samas on tal suur hulk vähemtuntud sõnu, mis tunduvad tänapäeval kummalised, isegi naljakad.
    </p>
    <p>
      <!-- Sa näed ühte &quot;tavalist&quot; lauset ja sama lauset, kus üks sõnadest on ära vahetatud väljamõeldud variantidega. Sinu ülesandeks on proovida nende seast just Johannes Aaviku pakutud sõna ära tunda. -->
      Mängus näed sa lauseid, kus üks sõnadest on välja mõeldud. Sinu ülesandeks on proovida välja mõeldud sõnade seast Johannes Aaviku pakutu ära tunda. Mängida saab mitu korda, sest laused vahelduvad.
    </p>
    <p>
      <b><i><small>NB! Leiuta ka ise uusi sõnu, mis võiksid sinu meelest mängu lausetesse sobida.</small></i></b>
    </p>

    <div style="margin-top: 5vh; margin-bottom:10vh; text-align: center;">
      <a @click="openGame" class="nkl-button nkl-button--game">MÄNGIMA</a>
    </div>

  </div>
</template>




<script>
  import {eventBus} from "../../main";
  export default {
    data(){
      return {
        message : "I am ModalGame"
      }
    },
    methods: {
      openGame() {
        eventBus.restartGame();
        eventBus.changeView("nkl-game");
      }
    }
  }
</script>

<style scoped lang="scss">
  
</style>
