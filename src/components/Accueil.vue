<template>
  <div class="general-accueil">
    <div id="map" ref="map">
      <li v-for="dechet in allDechets" :key="dechet.id">
        <MapMarker :lat=parseFloat(dechet.latitude) :lng=parseFloat(dechet.longitude)></MapMarker>
      </li>

      <!--
     remplacer les MapMarker par ceux de Hugo
     quand tu cliques sur un point popup afficher les infos
     -->

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
    axios.get('https://api-loubardise.kozyvisit.com/api/dechets/getAllDechets')
    .then(res => {
      this.allDechets = res.data
    })
    this.map = new window.google.maps.Map(this.$refs["map"], {
      center: { lat: 48.7887337,lng: 2.361544 },
      zoom: 10
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