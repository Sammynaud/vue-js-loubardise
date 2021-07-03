<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "app",
    data:() => ({
      map: null
    }),
  }
</script>

<style scoped>
</style>