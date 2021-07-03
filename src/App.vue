<template>
  <div id="app">
    <div id="map" ref="map">
      <MapMarker :lat="48.8737917" :lng="2.2928388"></MapMarker>
      <MapMarker :lat="48.8583701" :lng="2.2922926"></MapMarker>
      <MapMarker :lat="48.8421379" :lng="2.3197627"></MapMarker>
      <MapMarker :lat="48.8039639" :lng="2.3632974"></MapMarker>
    </div>
  </div>
</template>

<script>
import MapMarker from "./components/MapMarker"
  export default {
    name: "app",
    data:() => ({
      map: null
    }),
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