require("./assets/scss/nkl.scss");

import Vue from 'vue'
import Vuebar from 'vuebar';
Vue.use(Vuebar);
import App from './App.vue'






const gameData = [
  // braveerima
  {
    "start" : "Seetõttu ",
    "aavik" : "braveerisin",
    "end" : " ma meelega kooli kodukorda.",
    "translation" : "trotsisin",
    "options" : [
      "vänglesin",
      "rõkkisin",
      "türeerisin"
    ],
    "itemFound" : false
  },
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
  // faksid
  {
    "start" : "Vanaonu Elmari ",
    "aavik" : "faksid",
    "end" : " hakkasid mind tasapisi juba ära tüütama.",
    "translation" : "tembud",
    "options" : [
      "näkad",
      "vämbud",
      "nõlmikud"
    ],
    "itemFound" : false
  },
  // jallis
  {
    "start" : "Ta põrnitses ",
    "aavik" : "jallilt",
    "end" : " nurgas kui ma teistega tantsisin.",
    "translation" : "armukadedalt",
    "options" : [
      "kübedalt",
      "niinelt",
      "vähkralt"
    ],
    "itemFound" : false
  },
  // juuvima
  {
    "start" : "Direktor ",
    "aavik" : "juuvis",
    "end" : " kõik laste ettepanekud.",
    "translation" : "kiitis heaks",
    "options" : [
      "hüüvis",
      "kiindis",
      "leebis"
    ],
    "itemFound" : false
  },
  // jõre
  {
    "start" : "Täna oli ta eriti ",
    "aavik" : "jõre",
    "end" : ".",
    "translation" : "tusane",
    "options" : [
      "möre",
      "kärv",
      "kõõrel"
    ],
    "itemFound" : false
  },
  // kaavitama
  {
    "start" : "Publiku ",
    "aavik" : "kaavitamisest",
    "end" : " oli kõvasti kasu.",
    "translation" : "kaasa aitamisest",
    "options" : [
      "hälpimisest",
      "rüldamisest",
      "kaaramisest"
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
      "lüüneks"
    ],
    "itemFound" : false
  },
  // laikima
  {
    "start" : "Talle endale meeldis tohutult, kuidas ta selles videos ",
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
  // loir
  {
    "start" : "Kuldselt särav ",
    "aavik" : "loir",
    "end" : " lehvis meie kangelase ümber.",
    "translation" : "aupaiste",
    "options" : [
      "vüül",
      "vaalar",
      "vaale"
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
      "Jössisime",
      "Lüürisime"
    ],
    "itemFound" : false
  },
  // lurnidus
  {
    "start" : "Tema ",
    "aavik" : "lurnidus",
    "end" : " hämmastas meid kõiki.",
    "translation" : "silmakirjalikkus",
    "options" : [
      "veeritus",
      "palnidus",
      "püritus"
    ],
    "itemFound" : false
  },
  // nantma
  {
    "start" : "Nõukogude Liit ",
    "aavik" : "nantis",
    "end" : " Eesti 1940. aastal.",
    "translation" : "okupeeris",
    "options" : [
      "kähmas",
      "võntis",
      "räätis"
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
  // neiris
  {
    "start" : "Ta oli üsna ",
    "aavik" : "neiris",
    "end" : " tekstülesannete lahendaja.",
    "translation" : "leidlik",
    "options" : [
      "heelduv",
      "taibik",
      "saalne"
    ],
    "itemFound" : false
  },
  // nelgem
  {
    "start" : "Härra Tuvike ei olnud just kõige ",
    "aavik" : "nelgem",
    "end" : " õpetaja.",
    "translation" : "leebem",
    "options" : [
      "moobem",
      "paldim",
      "häävim"
    ],
    "itemFound" : false
  },
  // nõmik
  {
    "start" : "Kes ei õpi, jääbki ",
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
  // nyymukas
  {
    "start" : "",
    "aavik" : "Nüümuka",
    "end" : " näitleja saabumine pani kogu linna kihama.",
    "translation" : "Kuulsa",
    "options" : [
      "Poorika",
      "Faamika",
      "Pülmika"
    ],
    "itemFound" : false
  },
  // paaldama
  {
    "start" : "Minister ",
    "aavik" : "paaldas",
    "end" : " oma kunagist seotust tsirkusega.",
    "translation" : "tunnistas avalikult",
    "options" : [
      "namitas",
      "konveeris",
      "teemis"
    ],
    "itemFound" : false
  },
  // plaperdamine
  {
    "start" : "Tänavalt kostev vanamuttide ",
    "aavik" : "plaperdamine",
    "end" : " äratas mind juba enne kaheksat.",
    "translation" : "lobisemine",
    "options" : [
      "päbardamine",
      "kludistamine",
      "pädisemine"
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
      "kannistu",
      "reaari",
      "tümmi"
    ],
    "itemFound" : false
  },
  // põrpima
  {
    "start" : "Ta oli lausa ",
    "aavik" : "põrpivalt",
    "end" : " ahvi sarnane.",
    "translation" : "rabavalt",
    "options" : [
      "hoopivalt",
      "äärduvalt",
      "tohuvalt"
    ],
    "itemFound" : false
  },
  // raitisin
  {
    "start" : "",
    "aavik" : "Raitisin",
    "end" : " sõidueksami juba kaheksandal korral.",
    "translation" : "Sooritasin",
    "options" : [
      "Elbisin",
      "Supeerisin",
      "Mältisin"
    ],
    "itemFound" : false
  },
  // roinis
  {
    "start" : "Torumehe suuvärk oli nii ",
    "aavik" : "roinis",
    "end" : ", et proua Kask peaaegu minestas.",
    "translation" : "ropp",
    "options" : [
      "rüüv",
      "rämar",
      "võher"
    ],
    "itemFound" : false
  },
  // rümu, rümud
  {
    "start" : "Eesti keele õpetaja kohta ringles igasugu ",
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
    "end" : ", et isa otsustas lahkuda.",
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
  // teinima
  {
    "start" : "Inspektor ",
    "aavik" : "teinis",
    "end" : " kadunukese juurest leitud dokumente.",
    "translation" : "uuris hoolikalt",
    "options" : [
      "pingis",
      "täppis",
      "kiikis"
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
  // vesmima
  {
    "start" : "Palun ",
    "aavik" : "vesmige",
    "end" : " sellest kindlasti ka oma vanemaid.",
    "translation" : "informeerige",
    "options" : [
      "täävitage",
      "viirake",
      "stüüvige"
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
      "massiinid",
      "inoovikud"
    ],
    "itemFound" : false
  },
  // vüün, vüünu, vüünu
  {
    "start" : "Ma ei ole juba kaks ",
    "aavik" : "vyynu",
    "end" : " maganud.",
    "translation" : "ööpäeva",
    "options" : [
      "ööpsi",
      "päevakut",
      "pöövi"
    ],
    "itemFound" : false
  },
  // õst
  {
    "start" : "Madruste ",
    "aavik" : "õst",
    "end" : " kestis juba teist nädalat.",
    "translation" : "vastuhakk",
    "options" : [
      "klõmming",
      "värdmine",
      "rigoot"
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
      "hyllanud"
    ],
    "itemFound" : false
  }

];

export const eventBus = new Vue({
  data: {
    gameData : gameData,
    gameIndex : 0,
    //finalScore : 0,
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

    restartGame(){
      this.$emit("gameRestarted");
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
  created(){
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '384100842040668',
      xfbml      : true,
      version    : 'v2.11'
    });
    FB.AppEvents.logPageView();

    FB.shareMyScore = function(data) {
			FB.ui({
				method: 'feed',
				name: 'Mängisin Johannes Aaviku mängu...',
				link: data.link,
				picture: data.image,
				caption: data.caption,
				description: data.description
			}, function(response) {
				if (response && response.post_id) {
				  //alert('Jagamine õnnestus!');
				} else {
					//alert('Kahjuks jagamine ei õnnestunud :)');
				}
			});
		}
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  },
  render: h => h(App)
})
