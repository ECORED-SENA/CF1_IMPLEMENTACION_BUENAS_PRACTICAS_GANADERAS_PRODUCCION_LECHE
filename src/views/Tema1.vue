<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ganado bovino de leche

    .fondo___color_1
      .px-5
        .row.align-items-center.mb-5
          .col-xl
            p.mb-3 El ganado bovino de leche está compuesto por diversas razas especializadas en la producción de leche. Estas razas han sido seleccionadas genéticamente a lo largo del tiempo por su capacidad para transformar el alimento en grandes volúmenes de leche de alta calidad, tanto en rendimiento (litros) como en composición (grasa, proteína y sólidos totales).
            p.mb-0.estilo___caja_2(data-aos="fade-right") Este tipo de ganado se cría en sistemas productivos orientados específicamente a la extracción de leche destinada al consumo humano y al procesamiento industrial. Por ello, su manejo requiere prácticas técnicas, sanitarias, ambientales y económicas eficientes, que garanticen tanto el bienestar animal como la inocuidad del alimento producido.
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img1.png', alt="" style="max-width: 400px").m-auto
        
        p.mb-5.espacio___movil_1 Las principales razas lecheras —como Holstein, Jersey y Girolando— presentan diferencias significativas en tamaño, producción diaria, calidad de la leche y adaptabilidad al clima. Estas características deben considerarse al seleccionar la raza más adecuada, según el tipo de sistema productivo (intensivo, extensivo o mixto) y las condiciones agroecológicas de cada región.

        .row.align-items-center
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src='@/assets/curso/temas/img3.png', alt="" style="max-width: 400px").m-auto
          .col-xl
            p.mb-0.estilo___caja_3.espacio___movil_1(data-aos="fade-left") “El ganado lechero moderno es el resultado de generaciones de mejoramiento genético y adaptación, lo que permite obtener animales altamente productivos en leche, pero también más sensibles al manejo, al clima y a la nutrición”. — FAO, Manual de Producción Lechera Tropical, 2020.

    <!-- BLOQUE 1 -->
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Principales razas de ganado de leche en Colombia

    p.mb-4 A continuación se describen las razas más representativas de ganado lechero en Colombia, cada una con características particulares en cuanto a producción, adaptabilidad y uso productivo. Estas diferencias permiten su aprovechamiento en diversos sistemas (intensivo, semi-intensivo o extensivo) y condiciones agroecológicas del país.

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Holstein
                p.mb-1 <strong>Origen:</strong> Europa (Países Bajos, Alemania).
                p.mb-1 <strong>Color:</strong> Blanco con manchas negras o rojas.
                p.mb-1 <strong>Producción:</strong> Muy alta (hasta 40 L/día).
                p.mb-1 <strong>Características:</strong> Común en climas templados (Cundinamarca, Nariño, Boyacá), leche con buen rendimiento y bajo contenido graso (~3.6%), alta demanda nutricional, sensible al calor.
                p.mb-0 <strong>Usos:</strong> Sistemas intensivos o semi-intensivos.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Jersey
                p.mb-1 <strong>Origen:</strong> Isla de Jersey (Reino Unido).
                p.mb-1 <strong>Color:</strong> Marrón claro, ojos grandes.
                p.mb-1 <strong>Producción:</strong> Media (15 - 25 L/día).
                p.mb-1 <strong>Características:</strong> Leche con alto contenido graso (hasta 5.5%), ideal para quesos, eficiente en consumo de forraje.
                p.mb-0 <strong>Usos:</strong> Climas frescos, sistemas mixtos.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Normando
                p.mb-1 <strong>Origen:</strong> Francia.
                p.mb-1 <strong>Color:</strong> Blanco con manchas rojizas o marrón claro.
                p.mb-1 <strong>Producción:</strong> 15 - 25 L/día (doble propósito).
                p.mb-1 <strong>Características:</strong> Buena conformación muscular (carne + leche), adaptado a zonas montañosas.
                p.mb-0 <strong>Usos:</strong> Producción familiar, lechería de doble propósito.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 <em>Gyr</em> Lechero
                p.mb-1 <strong>Origen:</strong> India (cebú).
                p.mb-1 <strong>Color:</strong> Blanco con manchas rojas o marrón, orejas largas, giba.
                p.mb-1 <strong>Producción:</strong> 10 - 20 L/día.
                p.mb-1 <strong>Características:</strong> Alta resistencia al calor y enfermedades, temperamento dócil.
                p.mb-0 <strong>Usos:</strong> Sistemas tropicales, cruzamientos (costas y Llanos).
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Girolando
                p.mb-1 <strong>Origen:</strong> Brasil (cruce Holstein x Gyr).
                p.mb-1 <strong>Color:</strong> Variado (negro, blanco, rojizo).
                p.mb-1 <strong>Producción:</strong> 20 - 35 L/día.
                p.mb-1 <strong>Características:</strong> Buena adaptación al trópico, combina producción alta con rusticidad.
                p.mb-0 <strong>Usos:</strong> Zonas cálidas, pastoreo rotacional (Antioquia, Córdoba, Meta).
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Blanco Orejinegro (BON)
                p.mb-1 <strong>Origen:</strong> Colombia (raza criolla).
                p.mb-1 <strong>Color:</strong> Blanco con orejas y extremidades negras.
                p.mb-1 <strong>Producción:</strong> Baja (5 - 10 L/día).
                p.mb-1 <strong>Características:</strong> Alta resistencia a enfermedades, buena fertilidad, valor genético.
                p.mb-0 <strong>Usos:</strong> Sistemas extensivos, conservación de razas criollas.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
