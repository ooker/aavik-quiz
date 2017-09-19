require("./assets/scss/nkl.scss");

import Vue from 'vue'
import App from './App.vue'

const gameData = [
  {
    "start" : "Aias istus",
    "aavik" : "jaunis",
    "end" : "kass",
    "translation" : "kena",
    "options" : [
      "munav",
      "tulnis",
      "liuge"
    ],
    "itemFound" : false
  },
  {
    "start" : "Volp peaks olema",
    "aavik" : "polbe",
    "end" : "",
    "translation" : "nämmu",
    "options" : [
      "nüüge",
      "velbas",
      "seerduv"
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
