<template>
  <section v-for="(item, index) in shops" class="slider__content">
    <article class="item" >
      <figure class="item__img">
        <img :src="item.img" :alt="item.name">
      </figure>
      <div class="item__info">
        <h5 class="item__info--title">{{item.name}}</h5>
        <p class="item__info--text">{{item.services}}</p>
        <p class="item__info--text">{{item.address}} <span class="bold">{{ item.city }}</span></p>
        <a class="item__info--text link" :href="item.callPhone">
          <img class="ico" src="/src/assets/img/ico-phone.svg" alt="Icono teléfono">
          <span>{{ item.phone }}</span>
        </a>
        <a  v-if="item.instagram != undefined" class="item__info--text link" :href="'https://www.instagram.com/' + item.instagram" target="_blank">
          <img  v-if="item.instagram != undefined" class="ico" src="/src/assets/img/ico-instagram.svg" alt="Icono instagram">
          <span v-if="item.instagram != undefined">@{{item.instagram}}</span>
        </a>
        <a v-if="item.web != undefined" :href="item.web" target="_blank" class="item__info--text link">
          <img class="icon" src="/src/assets/img/ico-web.svg" style="width: 24px;" alt="Icono web">
          <span>{{ item.web_short }}</span>
        </a>
      </div>
    </article>
    <aside class="slider__aside"> </aside>
  </section>
</template>

<script>
export default {
  name: "Carrousel",
  props: {
    value: {Number, default: 0, required: false}
  },
  data: function () {
    //local
    /*return {
      shops: [{
        "name":"Salón EMG",
        "services": "Peluquería ~ Estética ~ Maquillaje",
        "address": "Parque del Generalife, 04006, Av. del Mediterráneo, 248, 04006 ",
        "city": "ALMERÍA",
        "phone": "950 22 01 11",
        "callPhone": "tel:+34950220111",
        "instagram": "emgsalon",
        "img": "./src/assets/img/pelu-emg.jpg"
      },
        {
          "name":"Peluqueria Estilo Ros",
          "services": "Peluquería ~ Maquillaje ~ Uñas",
          "address": "Plaza Emigdio Gómez, 11, 04740",
          "city": "ROQUETAS DE MAR",
          "phone": "684 31 56 37",
          "callPhone": "tel:+34684315637",
          "instagram": "estiloros",
          "img": "./src/assets/img/pelu-ros.jpg"
        },
        {
          "name":"Mímate Peluquería y Estética",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle Estadio, 65, 04007",
          "city": "ALMERÍA",
          "phone": "950 26 04 47",
          "callPhone": "tel:+34950260447",
          "instagram": "mimate_salon",
          "img": "./src/assets/img/pelu-mimate.jpg"
        },
        {
          "name":"Ana Elvira Peluqueros",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle CalaBlanca, 1, 04009",
          "city": "ALMERÍA",
          "phone": "950 62 43 64",
          "callPhone": "tel:+34950624364",
          "instagram": undefined,
          "web": "https://www.anaelviraalmeria.es/",
          "web_short": "anaelviraalmeria.es",
          "img": "./src/assets/img/pelu-anaelvira.jpg"
        },
        {
          "name":"Peluquería Capri Peluqueros",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle Minero, 4, 04001",
          "city": "ALMERÍA",
          "phone": "950 23 62 01",
          "callPhone": "tel:+34950236201",
          "instagram": "capri_peluqueriayestetica",
          "img": "./src/assets/img/pelu-capri.jpg"
        },
        {
          "name":"ELLOS & ELLAS ALMERÍA",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle Guinea, 1, 04009",
          "city": "ALMERÍA",
          "phone": "950 14 18 64",
          "callPhone": "tel:+34950141864",
          "instagram": "ellosyellasalmeria",
          "img": "./src/assets/img/pelu-ellos.jpg"
        },
        {
          "name":"Mio´s Peluqueros",
          "services": "Peluquería ~ Maquillaje",
          "address": "Avenida Pablo Picasso, 63, 04740",
          "city": "ROQUETAS DE MAR",
          "phone": "950 32 32 21",
          "callPhone": "tel:+34950323221",
          "instagram": "miospeluqueros",
          "img": "./src/assets/img/pelu-mios.jpg"
        },
      ]
    }*/

    //PRO
    return {
      shops: [{
        "name":"Salón EMG",
        "services": "Peluquería ~ Estética ~ Maquillaje",
        "address": "Parque del Generalife, 04006, Av. del Mediterráneo, 248, 04006 ",
        "city": "ALMERÍA",
        "phone": "950 22 01 11",
        "callPhone": "tel:+34950220111",
        "instagram": "emgsalon",
        "img": "/assets/pelu-emg.jpg"
      },
        {
          "name":"Peluqueria Estilo Ros",
          "services": "Peluquería ~ Maquillaje ~ Uñas",
          "address": "Plaza Emigdio Gómez, 11, 04740",
          "city": "ROQUETAS DE MAR",
          "phone": "684 31 56 37",
          "callPhone": "tel:+34684315637",
          "instagram": "estiloros",
          "img": "/assets/pelu-ros.jpg"
        },
        {
          "name":"Mímate Peluquería y Estética",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle Estadio, 65, 04007",
          "city": "ALMERÍA",
          "phone": "950 26 04 47",
          "callPhone": "tel:+34950260447",
          "instagram": "mimate_salon",
          "img": "/assets/pelu-mimate.jpg"
        },
        {
          "name":"Ana Elvira Peluqueros",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle CalaBlanca, 1, 04009",
          "city": "ALMERÍA",
          "phone": "950 62 43 64",
          "callPhone": "tel:+34950624364",
          "instagram": undefined,
          "web": "https://www.anaelviraalmeria.es/",
          "web_short": "anaelviraalmeria.es",
          "img": "/assets/pelu-anaelvira.jpg"
        },
        {
          "name":"Peluquería Capri Peluqueros",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle Minero, 4, 04001",
          "city": "ALMERÍA",
          "phone": "950 23 62 01",
          "callPhone": "tel:+34950236201",
          "instagram": "capri_peluqueriayestetica",
          "img": "/assets/pelu-capri.jpg"
        },
        {
          "name":"ELLOS & ELLAS ALMERÍA",
          "services": "Peluquería ~ Estética ~ Maquillaje",
          "address": "Calle Guinea, 1, 04009",
          "city": "ALMERÍA",
          "phone": "950 14 18 64",
          "callPhone": "tel:+34950141864",
          "instagram": "ellosyellasalmeria",
          "img": "/assets/pelu-ellos.jpg"
        },
        {
          "name":"Mio´s Peluqueros",
          "services": "Peluquería ~ Maquillaje",
          "address": "Avenida Pablo Picasso, 63, 04740",
          "city": "ROQUETAS DE MAR",
          "phone": "950 32 32 21",
          "callPhone": "tel:+34950323221",
          "instagram": "miospeluqueros",
          "img": "/assets/pelu-mios.jpg"
        },
      ]
    }
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
    $('.owl-carousel').owlCarousel({
      items:1,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed:450,
      nav:true,
      //navText: ["<img src='/assets/pelu-arrow.svg'>","<img src='/assets/pelu-arrow.svg'>"],
      navText: ["<img src='/assets/pelu-arrow.svg'>","<img src='/assets/pelu-arrow.svg'>"],
      loop: true,
    });
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeUnmount() {
  },
  unmounted() {
  },
  errorCaptured() {
  }
}
</script>

