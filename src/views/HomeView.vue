<template>
  <nav>
    <img src="/img/Logo-Wenpro.webp">
  </nav>

  <div class="info">
    <b>
      Welkom bij Wenpro BV
    </b>
    <p style="font-size: small; font-style: oblique;">Passie voor maatwerk productie</p>
    <br>
    <p>
      Onze toewijding aan excellentie in vakmanschap, gecombineerd met geavanceerde productietechnologieën, stelt ons in staat om op maat gemaakte oplossingen te leveren voor diverse sectoren. Of het nu gaat om screendoeken, deurmatten of akoestische vilt producten, wij streven ernaar om jouw opdracht met de hoogste precisie en kwaliteit te realiseren.
      <br>
      <br>
      Heeft u zakelijk interesse omtrent de mogelijkheden voor samenwerking, neem dan gerust contact met ons op voor de mogelijkheden.
      <br>
      <br>
      <a style="color: #045788" href="mailto:klantenservice@wenpro.nl">klantenservice@wenpro.nl</a>
      <br>
      <br>
      Wenpro B.V. <br>
      Buitenes 10 (zijkant pand, ingang Esakker) <br>
      7951 SR Staphorst <br>
    </p>
  </div>
  <h1 class="shops-title">Onze webshops:</h1>
  <div class="container">
    <div class="shop-container">
      <a style="background: #045788" target="_blank" href="https://screendoekopmaat.nl/">
        <img style="padding-bottom: 1rem" src="/img/Logo-Screendoek.webp" alt="logo screendoek">
      </a>
    </div>



    <div class="shop-container">
      <a target="_blank" href="https://deurmatopmaat.com/">
        <img src="/img/Logo-Deurmat.webp" alt="logo screendoek">
      </a>
    </div>

    <div class="shop-container">
    <a style="background: #2D572C" target="_blank" href="https://viltopmaat.nl/">
      <img style="width: 48%!important; margin: 0 auto; " src="/img/Logo-Vilt.webp" alt="logo screendoek">
      <p style="margin-top: .5rem">Coming soon</p>
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
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;
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
  gap: 4rem;
}

.container .shop-container {
   display: flex;
   justify-content: center;
 }

.container .shop-container a {
  transition: box-shadow, transform .3s;
  width: 18rem;
  height: 18rem;
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
  padding: 1rem;
  margin-top: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container .shop-container a:hover, a:focus {
  box-shadow: 0 0 18px rgba(0, 0, 0, .2);
  transform: translateY(-0.20em);
}

.container img {
   width: 100%;
  padding-bottom: .5rem;
   object-fit: contain;
 }

.shops-title {
  text-align: center;
  font-size: 2rem;
  margin-top: 6rem;
}

.info {
  padding: 0 25rem 3rem 25rem;
  font-size: 1.1rem;
  line-height: 1.5;
  background: black;
  color: white;
  margin-top: -2.5rem;
}

@media screen and (max-width: 2000px){
  .info {
    padding: 0 20rem 3rem 20rem;
  }

  .shops-title {
    margin-top: 8rem;
  }
}

@media screen and (max-width: 1800px){
  .info {
    padding: 0 15rem 3rem 15rem;
  }
}

@media screen and (max-width: 1600px){
  .info {
    padding: 0 12rem 3rem 12rem;
  }

  .shops-title {
    margin-top: 3rem;
  }
}


@media screen and (max-width: 1435px) {
  .container {
    flex-direction: column;
  }

  nav img {
    width: 20rem;
  }

  .info {
    padding: 0 10rem 3rem 10rem;
  }
}

@media screen and (max-width: 470px) {
  .container .shop-container a {
    width: 15rem;
    height: 15rem;
  }

  .info {
    padding: .5rem 1.5rem 2rem 1.5rem;
  }
}



@media screen and (max-width: 380px) {
  .container .shop-container a {
    width: 10rem;
    height: 10rem;
  }
}
</style>
