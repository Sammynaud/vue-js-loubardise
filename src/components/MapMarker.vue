<script>

export default {
  props: {
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
    infoDechet: {type: Object, required: true}
  },
  data: () => ({
    marker: null,
    open: false
  }),
  mounted() {
    this.$parent.getMap(map => {
      this.marker = new window.google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: map,
        icon: {
          url: 'https://myloubardiseclient.s3.eu-west-3.amazonaws.com/marker-green%402x.png',
          scaledSize: new window.google.maps.Size(34.5, 50)
        }
      })
      this.marker.addListener("click", () => {
        this.$emit('open-info', {dechet: this.infoDechet})
      });
    })
  },
  beforeDestroy() {
    this.marker.setMap(null)
    window.google.maps.event.clearInstanceListeners(this.marker)
  },
  render() {
    return null
  }
}
</script>