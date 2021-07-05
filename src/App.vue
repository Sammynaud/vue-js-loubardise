<template>
  <div id="app">
    <router-view
      @open-accueil="openAccueil"
    />
    <PopupAccueil
        :open="open"
        @close-accueil="closeAccueil"
      />
  </div>
</template>

<script>
import PopupAccueil from "./components/PopupAccueil"
  export default {
    name: "app",
    components:{
      PopupAccueil
    },
    data:() => ({
      map: null,
      open: true
    }),
    methods:{
      closeAccueil(){
        this.open = false
      },
      openAccueil(){
        this.open = true
      }
    }
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
}

body{
  background-color: black;
}
</style>