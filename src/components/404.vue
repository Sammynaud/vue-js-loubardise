<template>
  <div class="backgroundcolor">
      <img src="~@/components/img/error404.png">
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
  background-color: rgb(237, 252, 254);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}

</style>
