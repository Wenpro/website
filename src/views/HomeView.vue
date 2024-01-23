<template>
  <nav>
    <img src="/img/Logo-Wenpro.webp">
  </nav>
  <h1 class="shops-title">Onze webshop:</h1>
  <div class="container">
    <div class="shop-container">
      <a target="_blank" href="https://screendoekopmaat.nl/">
        <img src="/img/Logo-Screendoek.webp" alt="logo screendoek">
        <p>Geopend vanaf 01-02-2024</p>
      </a>
    </div>



    <div class="shop-container">
      <a target="_blank" href="https://deurmatopmaat.com/">
        <img src="/img/Logo-Deurmat.webp" alt="logo screendoek">
        <p>Geopend vanaf 02-02-2024</p>
      </a>
    </div>

    <div class="shop-container">
    <a target="_blank" href="https://viltopmaat.nl/">
      <img style="width: 48%!important;" src="/img/Logo-Vilt.webp" alt="logo screendoek">
      <p style="margin-top: .5rem">Geopend vanaf 02-02-2024</p>
    </a>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style lang="css" scoped>
nav {
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

nav img {
   width: 20rem;
   aspect-ratio: 3/2;
   object-fit: contain;
 }

.container {
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
}

.container .shop-container {
   display: flex;
   justify-content: center;
 }

.container .shop-container a {
  transition: box-shadow, transform .3s;
  width: 25rem;
  background: black;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  padding: 1rem;
}

.container .shop-container a:hover, a:focus {
  box-shadow: 0 0 18px rgba(0, 0, 0, .2);
  transform: translateY(-0.20em);
}

.container img {
   width: 100%;
   object-fit: contain;
 }

.shops-title {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
}

@media screen and (max-width: 470px) {
  .container .shop-container a {
    width: 20rem;
  }
}



@media screen and (max-width: 380px) {
  .container .shop-container a {
    width: 15rem;
  }
}
</style>
