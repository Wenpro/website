<template>
  <nav>
    <img src="/img/Logo-Wenpro.webp">
  </nav>

  <div class="info">
    <b>
      Welkom bij Wenpro BV - Jouw Partner in Maatwerk Producten!
    </b>
    <br>
    <br>
    <p>
      Onze toewijding aan excellentie in vakmanschap, gecombineerd met geavanceerde productietechnologieën, stelt ons in staat om op maat gemaakte oplossingen te leveren voor diverse sectoren. Of het nu gaat om screendoeken, deurmatten of akoestische vilt producten, wij streven ernaar om jouw vraag te realiseren.
      <br>
      <br>
      Neem binnenkort eens een kijkje op de webshops en ontdek de veelzijdigheid van onze maatwerkoplossingen.
      <br>
      <br>
      Neem binnenkort eens een kijkje in ons webshops en ontdek de veelzijdigheid van onze maatwerkoplossingen. Of heb je misschien een specifiek idee wat nog in de ontwerpfase zit, wij denken graag mee en staan klaar om je te begeleiden door het proces en een product te leveren dat naadloos aansluit op jouw wensen.
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
        <p>Geopend vanaf 01-03-2024</p>
      </a>
    </div>



    <div class="shop-container">
      <a target="_blank" href="https://deurmatopmaat.com/">
        <img src="/img/Logo-Deurmat.webp" alt="logo screendoek">
        <p>Geopend vanaf 01-03-2024</p>
      </a>
    </div>

    <div class="shop-container">
    <a style="background: #2D572C" target="_blank" href="https://viltopmaat.nl/">
      <img style="width: 48%!important; margin: 0 auto; " src="/img/Logo-Vilt.webp" alt="logo screendoek">
      <p style="margin-top: .5rem">Geopend vanaf 01-03-2024</p>
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
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

nav img {
   width: 30rem;
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
  margin-top: 2rem;
}

.info {
  padding: 3rem 10rem;
  font-size: 1.2rem;
  line-height: 1.5;
  background: black;
  color: white;
}

@media screen and (max-width: 1435px) {
  .container {
    flex-direction: column;
  }

  nav img {
    width: 20rem;
  }

  .info {
    padding: 3rem 5rem;
  }
}

@media screen and (max-width: 470px) {
  .container .shop-container a {
    width: 15rem;
    height: 15rem;
  }

  .info {
    padding: 3rem 1.5rem;
  }
}



@media screen and (max-width: 380px) {
  .container .shop-container a {
    width: 10rem;
    height: 10rem;
  }
}
</style>
