<template>
  <div style="display: flex; flex-direction:column; align-items: center; justify-content: center; min-height: 100%;">

    <h1>Pane end proovile</h1>
    <p>
      Paljud Aaviku leiutatud sõnad tunduvad meile täna väga tuttavad &ndash; me ei tule enamasti selle pealegi, et neid kellegi väljamõeldisteks pidada. Samas on tal suur hulk vähemtuntud sõnu, mis tunduvad tänapäeval kummalised, isegi naljakad.
    </p>
    <p>
      Sa näed ühte &quot;tavalist&quot; lauset ja sama lauset, kus üks sõnadest on ära vahetatud väljamõeldud variantidega. Sinu ülesandeks on proovida nende seast just Johannes Aaviku pakutud sõna ära tunda.
    </p>
    <p>
      <b><i><small>NB! leiuta ka ise täiesti uusi sõnu, mis võiksid sinu meelest sinna lausetesse sobida. </small></i></b>
    </p>

    <div style="margin-top: 5vh; text-align: center;">
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
  .nkl-button--game {
    margin-top: 1vh;
  }
</style>
