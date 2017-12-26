require("./assets/scss/nkl.scss");

import Vue from 'vue'
import Vuebar from 'vuebar';
Vue.use(Vuebar);
import App from './App.vue'






const gameData = [
  // ekkima
  {
    "start" : "Ma ",
    "aavik" : "ekkisin",
    "end" : " terve õhtu, enne kui talle sõnumi saatsin.",
    "translation" : "kõhklesin",
    "options" : [
      "päädlesin",
      "undlesin",
      "lükkisin"
    ],
    "itemFound" : false
  },
  // jallis
  {
    "start" : "Ta põrnitses ",
    "aavik" : "jallilt",
    "end" : " nurgas kui ma teiste poistega tantsisin.",
    "translation" : "armukadedalt",
    "options" : [
      "kübedalt",
      "niinelt",
      "vähkralt"
    ],
    "itemFound" : false
  },
  // kaulis
  {
    "start" : "Kõik poisid olid end vaheajal ",
    "aavik" : "kauliks",
    "end" : " püganud.",
    "translation" : "kiilaks",
    "options" : [
      "paldriks",
      "laageks",
      "nupupeaks"
    ],
    "itemFound" : false
  },
  // laikima
  {
    "start" : "Talle endale ei meeldinud kuidas ta ",
    "aavik" : "laikis",
    "end" : ".",
    "translation" : "välja nägi",
    "options" : [
      "luukis",
      "seeris",
      "välnis"
    ],
    "itemFound" : false
  },
  // laupima
  {
    "start" : "Poisid vaidlesid esiti vastu, aga lõpuks siiski ",
    "aavik" : "laupisid",
    "end" : ".",
    "translation" : "kuuletusid",
    "options" : [
      "mäldisid",
      "vauglesid",
      "soodusid"
    ],
    "itemFound" : false
  },
  // lurjama
  {
    "start" : "",
    "aavik" : "Lurjasime",
    "end" : " pool päeva mööda ostukeskuseid.",
    "translation" : "Hulkusime",
    "options" : [
      "Võõrlesime",
      "Hängisime",
      "Lüürisime"
    ],
    "itemFound" : false
  },
  // neep
  {
    "start" : "Keegi ei mäletanud, mitmendas klassis see ",
    "aavik" : "neep",
    "end" : " nüüd käiski.",
    "translation" : "lapselaps",
    "options" : [
      "poiruk",
      "maamu",
      "pägalik"
    ],
    "itemFound" : false
  },
  // nõmik
  {
    "start" : "Kes ei õpi, jääb ",
    "aavik" : "nõmikuks",
    "end" : ".",
    "translation" : "harimatuks",
    "options" : [
      "nürmikuks",
      "tümmiks",
      "pürmiks"
    ],
    "itemFound" : false
  },
  // polp
  {
    "start" : "Liumäest lasti ",
    "aavik" : "polbi",
    "end" : " peal alla.",
    "translation" : "tagumiku",
    "options" : [
      "põmari",
      "reaari",
      "tümmi"
    ],
    "itemFound" : false
  },
  // põrpima
  {
    "start" : "Ta oli lausa ",
    "aavik" : "põrpivalt",
    "end" : " ahvi nägu.",
    "translation" : "rabavalt",
    "options" : [
      "hoopivalt",
      "äärduvalt",
      "tohuvalt"
    ],
    "itemFound" : false
  },

  // rümu, rümud
  {
    "start" : "Uue õpetaja kohta ringles igasugu ",
    "aavik" : "rümusid",
    "end" : ".",
    "translation" : "kuulujutte",
    "options" : [
      "kuulakaid",
      "soslepeid",
      "hõlinaid"
    ],
    "itemFound" : false
  },
  // sihamsuham
  {
    "start" : "Laadal oli selline ",
    "aavik" : "sihamsuham",
    "end" : " et isa otsustas lahkuda.",
    "translation" : "möll",
    "options" : [
      "mäserus",
      "hullar",
      "mörrand"
    ],
    "itemFound" : false
  },
  // taav, taavu, taavut
  {
    "start" : "",
    "aavik" : "Taav",
    "end" : " naeris nii, et pisar silmas.",
    "translation" : "Vanaisa",
    "options" : [
      "Kaadu",
      "Iisu",
      "Pööp"
    ],
    "itemFound" : false
  },
  // umm
  {
    "start" : "Meie ",
    "aavik" : "umm",
    "end" : " käib reedeti joogas.",
    "translation" : "vanaema",
    "options" : [
      "mumm",
      "mammu",
      "mana"
    ],
    "itemFound" : false
  },
  // uubuma
  {
    "start" : "Olin peale matemaatikat nii ",
    "aavik" : "uubunud",
    "end" : ", et ei jõudnudki järgmisesse tundi.",
    "translation" : "väsinud",
    "options" : [
      "tühher",
      "nõris",
      "lüüdinud"
    ],
    "itemFound" : false
  },
  // välmingud
  {
    "start" : "Paljud ",
    "aavik" : "välmingud",
    "end" : " on meie elu lihtsamaks muutnud.",
    "translation" : "leiutised",
    "options" : [
      "saiendid",
      "masineriid",
      "inoovikud"
    ],
    "itemFound" : false
  },
  // vüün, vüünu, vüünu
  {
    "start" : "Ma ei ole juba kaks ",
    "aavik" : "vüünu",
    "end" : " maganud.",
    "translation" : "ööpäeva",
    "options" : [
      "ööpsi",
      "päevakut",
      "pöövi"
    ],
    "itemFound" : false
  },
  // öördama
  {
    "start" : "Keegi oli jälle ",
    "aavik" : "öördanud",
    "end" : " mu peale.",
    "translation" : "kaevanud",
    "options" : [
      "nüttinud",
      "pääbutanud",
      "hüllanud"
    ],
    "itemFound" : false
  }

];

export const eventBus = new Vue({
  data: {
    gameData : gameData,
    gameIndex : 0,
    finalScore : 0,
    penalty : -5,
    bonus : 20
  },
  methods : {
    addOne(){
      this.$emit("addedOne");
    },
    changeView(viewName){
      this.$emit("viewChanged", viewName);
    },
    changeScore(value){
      this.$emit("scoreChanged", value);
    },
    changeRound(){
      this.$emit("roundChanged", this.gameIndex);
    },
    foundItem(){
      this.$emit("itemFound");
    },
    shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
      }
      return sourceArray;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
