<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color
      .px-5
        .row.align-text-center.mb-5
          .col-xl
            p.mb-0 La ganadería bovina lechera es una actividad fundamental en la economía agropecuaria de Colombia, ya que no solo representa una fuente de alimento y empleo para miles de familias rurales, sino que también cumple un papel clave en la seguridad alimentaria del país. En este contexto, las Buenas Prácticas Ganaderas (BPG) surgen como un conjunto de lineamientos técnicos y normativos orientados a garantizar la calidad, la trazabilidad y la inocuidad de la leche, asegurando al mismo tiempo el bienestar de los animales y la sostenibilidad de los sistemas productivos.
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/intro/img1.svg', alt="" style="max-width: 85px").m-auto

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.espacio___movil_1(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este componente formativo ofrece una guía integral sobre los principios, fundamentos y requerimientos de las BPG en la producción de leche bovina. A lo largo del contenido se abordan temáticas claves como el manejo sanitario, la infraestructura adecuada, la gestión ambiental, la seguridad laboral y la aplicación de normativas vigentes. Además, se detallan las implicaciones del bienestar animal y las exigencias técnicas que deben cumplir los predios ganaderos para acceder a certificaciones que validen sus procesos ante el mercado nacional e internacional.
        
        p.mb-0.estilo___caja_1.espacio___movil_1(data-aos="zoom-in") La implementación de las BPG no solo permite mejorar la productividad y competitividad del sector lechero, sino que también contribuye a proteger la salud pública, reducir el impacto ambiental y fortalecer la reputación del productor frente a consumidores cada vez más exigentes. Por ello, este documento se convierte en una herramienta esencial para técnicos, aprendices y productores interesados en adoptar un enfoque responsable, moderno y sostenible en la ganadería de leche bovina.
            
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
