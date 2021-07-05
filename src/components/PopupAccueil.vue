<template>
  <transition name="open">
    <div class="general-popup" v-if="open">
      <p class="title-mini">La plateforme Loubardise & Surfrider</p>
      <h1>La planète n'attend pas.</h1>

      <button class="button-pick" v-on:click="close">Accéder à la carte 🦋</button>

      <div class="step-1">
        <div class="info-popup">
          <p class="max-size">8️⃣ millions</p>
          <p>De tonnes de déchets</p>
          <p>plastiques sont déversé</p>
          <p>dans les océans chaque année</p>
        </div>
        <img class="img-map" src="~@/components/img/map-loubardise.png" alt="une map">
      </div>

      <h1 style="margin-top: 50%;">Découvrez le projet<br>Loubardise & Surfrider</h1>

      <div class="step-2">
        <div class="info-popup-2">
          <p class="max-size">🦋</p>
          <p>Ramassez les déchets</p>
          <p>pour nettoyer le monde du plastique</p>
        </div>

        <div class="info-popup-2">
          <p class="max-size">🤖</p>
          <p>Consultez les déchets signalés,</p>
          <p>à travers le monde,</p>
          <p>grâce à notre intelligence artificielle.</p>
        </div>
      </div>

      <img class="img-popup-map" src="~@/components/img/map-popup-loubardise.png" alt="une map">

      <h1 style="margin-top: 10%; margin-bottom: 10%;">Participez à l'effet papillon pour sauver la planète.</h1>
    </div>
  </transition>

</template>

<script>
export default {
  name: "PopupAccueil",
  props: {
    open: Boolean,
  },
  methods: {
    close(){
      this.$emit('close-accueil')
    }
  }
}
</script>

<style scoped>

@keyframes up-to-down {
  0%{
    transform: translateY(1000px);
  }
  100% {
    transform: translateY(0);
  }
}

.open-enter-active{
  animation: up-to-down 0.5s ease-in;
}

.open-leave-active{
  animation: up-to-down 0.5s ease-in reverse;
}

.general-popup{
  background:black;
  width:100vw;
  z-index:1000;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  padding: 5vh 10vw 0 10vw;
  overflow-x: hidden;
}

h1{
  font-weight: bold;
  margin-bottom: 5%;
  margin-top: 5%;
  color: white;
  font-size:5vw;
}

.title-mini{
  color: #E1E1E1;
}

.step-1{
  margin-top: 10%;
  position: relative;
}

.step-2{
  margin-top: 10%;
  position: relative;
  display: flex;
  justify-content: space-around;
}

.info-popup{
  background: #1C1C1C;
  color: white;
  padding: 3%;
  width: 35%;
}

.info-popup-2{
  background: #1C1C1C;
  color: white;
  padding: 3%;
  width: 35%;
}

.max-size{
  font-size: 4vw;
  font-weight: bold;
}

.img-map{
  position: absolute;
  top: 40%;
  left: 45%;
  width: 90%;
  border-radius: 5px;
}

.img-popup-map{
  margin-top: 10%;
  border-radius: 10px;
  width: 100%;
}


.info-popup p{
  margin: 0;
}

.button-pick{
  font-weight : normal;
  padding: 10px 50px;
  border-radius: 5px;
  opacity: 1;
  transition: 0.5s;
  margin:3% 0 5% 0;
  color: white;
  background: #2F6C60;
  border:none;
  outline: none;
  font-size: 1.5vw;
}

.button-pick:hover{
  cursor: pointer;
  opacity: 0.7;
  transition: 0.5s;
  transform: translateY(-3px);
}
</style>