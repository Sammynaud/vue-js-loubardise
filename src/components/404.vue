<template>
  <div class="backgroundcolor">
    <div>
      <p>erreur</p>
      <h1>404</h1>
      <router-link class="accueil" :to="{ name: 'Accueil', params: {} }">Accéder à la carte 🦋</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Not-Found-404',
  props: {
    msg: String
  }
}
</script>

<style>

img {
  max-width: 60%;
  margin: auto;

}

.backgroundcolor {
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.backgroundcolor div{
  text-align: center;
  margin: auto;
}

p{
  color: white;
}

h1{
  color:white;
  font-weight: bold;
  margin: 0 auto 5% auto;
}

.accueil{
  color:white;
  text-decoration: none;
  transform: translateY(0);
  transition: all 0.2s ease-in;

}

.accueil:hover{
  cursor: pointer;
  color:white;
  transform: translateY(-5px);
  transition: all 0.2s ease-in;
}

/* desktop */
@media (min-width: 1024px){
  h1{
    font-size: 8vw;
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  h1{
    font-size: 9vw;
  }
}

/* iphone */
@media (max-width: 767px){
  h1{
    font-size: 11vw;
  }
}

</style>
