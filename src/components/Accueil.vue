<template>
  <div class="general-accueil">
    <div id="map" ref="map">
      <!-- faire un v-for dans la liste AllDechets
     pour rappel All Dechets est un tableau de dictionnaire
     le dictionnaire est composé de
     id,
     urlfile,
     latitude,
     longitude,typedechets


     A faire aussi:
     remplacer les MapMarker par ceux de Hugo
     quand tu cliques sur un point popup afficher les infos

     -->


      <MapMarker :lat="48.8737917" :lng="2.2928388"></MapMarker>
      <MapMarker :lat="48.8583701" :lng="2.2922926"></MapMarker>
      <MapMarker :lat="48.8421379" :lng="2.3197627"></MapMarker>
      <MapMarker :lat="48.8039639" :lng="2.3632974"></MapMarker>
    </div>

  </div>
</template>

<script>

import MapMarker from "./MapMarker"
import axios from 'axios'

export default {
  name: "Accueil",
  data(){
    return {
      allDechets: []
    }
  },
  components:{
    MapMarker
  },
  methods: {
    getMap(callback) {
      let vm = this
      function checkForMap() {
        if (vm.map) callback(vm.map)
        else setTimeout(checkForMap, 200)
      }
      checkForMap()
    }
  },
  mounted() {
    this.allDechets = axios.get('https://api-loubardise.com/api/dechets/getAllDechets')

    this.map = new window.google.maps.Map(this.$refs["map"], {
      center: { lat: 48.7887337,lng: 2.361544 },
      zoom: 10
    })
    new window.google.maps.Marker({
      position: { lat: 48.7887337,lng: 2.361544 },
      map: this.map
    })
  }
}
</script>

<style scoped>
#map {
  height: 600px;
  background: grey;
}

</style>