<template>
  <div class="general-accueil">
    <div id="map" ref="map">
      <div v-for="dechet in allDechets" :key="dechet.id">
        <MapMarker
            v-if="allDechets.includes(dechet)"
            :lat=parseFloat(dechet.latitude)
            :lng=parseFloat(dechet.longitude)
            :infoDechet="dechet"
            @open-info="openInfo"
        />
      </div>

      <!--
     remplacer les MapMarker par ceux de Hugo
     quand tu cliques sur un point popup afficher les infos
     -->

    </div>
    <popupInfoProduit
        :open="open"
        :infoDechet="uniqueDechet"
        @close="close"
        @pick-up-waste="pickUpWaste"
        :posx="posx"
        :posy="posy"
    />
    <div class="ask" v-on:click="openAccueil">
      <span>🦋</span>
    </div>
  </div>
</template>

<script>

import MapMarker from "./MapMarker"
import popupInfoProduit from "./popupInfoProduit"
import axios from 'axios'

export default {
  name: "Accueil",
  data(){
    return {
      allDechets: [],
      uniqueDechet: {},
      open: false,
      posx: 0,
      posy: 0
    }
  },
  components:{
    MapMarker,
    popupInfoProduit
  },
  methods: {
    getMap(callback) {
      let vm = this
      function checkForMap() {
        if (vm.map) callback(vm.map)
        else setTimeout(checkForMap, 200)
      }
      checkForMap()
    },
    pickUpWaste(id){
      this.close()
      this.allDechets.splice(this.allDechets.findIndex(a => a.id === id), 1)
    },
    openInfo(args){
      this.uniqueDechet = args.dechet
      this.open = true
    },
    close(){
      this.open = false
    },
    openAccueil(){
      this.$emit('open-accueil')
    }
  },
  mounted() {
    axios.get('https://api-loubardise.kozyvisit.com/api/dechets/getAllDechets')
    .then(res => {
      this.allDechets = res.data
    })
    this.map = new window.google.maps.Map(this.$refs["map"], {
      center: { lat: 48.7887337,lng: 2.361544 },
      zoom: 10,
      mapId: '43e5010fc67fffb9',
      streetViewControl: false
    })
  }
}
</script>

<style scoped>
#map {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.ask{
  position: fixed;
  background:white;
  border-radius: 100px;
  padding: 10px;
  transform: translateY(0);
  transition: all 0.2s ease-in;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.ask:hover{
  cursor: pointer;
  transition: all 0.2s ease-in;
  transform: translateY(-5px);
}

/* desktop */
@media (min-width: 1024px){
  .ask{
    font-size: 2vw;
    bottom: 5%;
    left: 1%;
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .ask{
    font-size: 4vw;
    bottom: 5%;
    left: 1%;
  }
}

/* iphone */
@media (max-width: 767px){
  .ask{
    font-size: 6vw;
    bottom: 6%;
    left: 3%;
  }
}

</style>