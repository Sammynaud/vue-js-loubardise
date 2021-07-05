<template>
  <transition name="modal-fade">
    <div class="general-popup" v-if="open">
      <button id="close" class="close" v-on:click="close">X</button>
      <div class="image" v-bind:style="'background-image:url(' + infoDechet.urlfile + ');'"></div>

      <div class="sub-info">
        <p class="pd-number">Produit {{ infoDechet.id }}</p>
        <button class="button-pick" v-on:click="pickWaste">Nettoyé 🦋</button>
        <p class="information">{{ infoDechet.typedechets }}</p>
        <p class="description">Type</p>
        <p class="information">{{ infoDechet.latitude }}</p>
        <p class="description">Latitude</p>
        <p class="information">{{ infoDechet.longitude }}</p>
        <p class="description">Longitude </p>
      </div>

    </div>
  </transition>

</template>

<script>
import axios from 'axios'

export default {
  name: "popupInfoProduit",
  props: {
    open: Boolean,
    infoDechet : Object,
    posx: Number,
    posy: Number
  },
  methods: {
    close(){
      this.$emit('close')
    },
    async pickWaste(){
      try {
        await axios.put('https://api-loubardise.kozyvisit.com/api/dechets/hideDechet/' + this.infoDechet.id)
        this.$emit('pick-up-waste', this.infoDechet.id)
      } catch(e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

@keyframes left-to-right{
  0% {
    transform: translateX(-400px);
  }
  100% {
    transform: translateX(0);
  }
}

.modal-fade-enter-active{
  animation: left-to-right 0.5s ease-in;
}

.modal-fade-leave-active{
  animation: left-to-right 0.5s ease-in reverse;
}

.general-popup{
  position: absolute;
  z-index:100;
  background: white;
}

.close{
  position:absolute;
  top: 10px;
  left: 10px;
  background: white;
  border-radius: 100px;
  border: 0;
}

.close:hover{
  cursor: pointer;
}

p{
  margin: 0
}

.sub-info{
  padding: 6% 5%;
  text-align: center;
}

.image{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-bottom: 70%;
  border-radius: 5px 5px 0 0;
}

.pd-number{
  font-weight: bold;
  color: #1C1C1C;
}

.button-pick{
  font-weight : normal;
  padding: 10px 50px;
  border-radius: 5px;
  opacity: 1;
  transition: 0.5s;
  margin:10% 0;
  color: white;
  background: #2F6C60;
  border:none;
  outline: none;
}

.button-pick:hover{
  cursor: pointer;
  opacity: 0.7;
  transition: 0.5s;
  transform: translateY(-3px);
}

.description{
  color: #D1D1D1;
  margin-bottom: 5%;
}

.information{
  color: #1C1C1C;
}

/* desktop */
@media (min-width: 1024px){
  .general-popup{
    border-radius: 5px;
    width: 20vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    left: 1%;
    top: 10%;
  }

  .pd-number{
    font-size: 2.25vw;
  }

  .button-pick{
    font-size: 1.25vw;
  }

  .description{
    font-size: 0.8vw;
  }

  .information{
    font-size:1vw;
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .general-popup{
    width: 60vw;
    position: fixed;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    left: 1%;
    top: 10%;
  }

  .pd-number{
    font-size: 6vw;
  }

  .button-pick{
    font-size: 3vw;
  }

  .description{
    font-size: 1.5vw;
  }

  .information{
    font-size:2.5vw;
  }
}

/* iphone */
@media (max-width: 767px){
  .general-popup{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
  }

  .pd-number{
    font-size: 8vw;
  }

  .button-pick{
    font-size: 5vw;
  }

  .description{
    font-size: 3.5vw;
  }

  .information{
    font-size:4.5vw;
  }
}

</style>