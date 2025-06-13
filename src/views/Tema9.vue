<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Normativa en Seguridad y Salud en el Trabajo

    .fondo___color_8
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.estilo___caja_2(data-aos="fade-right")
            p.mb-0 La seguridad y salud en el trabajo es una actividad multidisciplinaria orientada a la promoción del bienestar físico, mental y social de los trabajadores, y a la prevención de accidentes y enfermedades laborales. En la ganadería de leche, estas medidas son fundamentales para proteger al personal expuesto a diversos riesgos propios del entorno rural.
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img138.png", alt="" style="width: 382px").m-auto
    
        <!-- BLOQUE 1 -->
        #t_9_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.1 Concepto y normativa aplicable
        
        p.mb-5 En Colombia, existe un conjunto normativo amplio que regula las condiciones mínimas que deben cumplir los empleadores para garantizar la seguridad de sus trabajadores. A continuación, se listan las principales normas que componen este marco legal:

        .row.justify-content-center
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 8.
              span Normas del marco legal 
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Norma
                    th Contenido principal
                tbody
                  tr
                    td.ajuste-border-tabla Ley 1010 de 2006
                    td.texto-left Prevención y sanción del acoso laboral.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Resolución 1401 de 2007
                    td.texto-left Reglamenta la investigación de incidentes y accidentes laborales.
                  tr
                    td.ajuste-border-tabla Resolución 2346 de 2007
                    td.texto-left Regula las evaluaciones médicas ocupacionales.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Resolución 2646 de 2008
                    td.texto-left Trata sobre riesgos psicosociales en el trabajo.
                  tr
                    td.ajuste-border-tabla Resolución 652 de 2012
                    td.texto-left Establece el Comité de Convivencia Laboral.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Resolución 312 de 2019
                    td.texto-left Define los Estándares Mínimos del SG-SST.
                  tr
                    td.ajuste-border-tabla Decreto 1072 de 2015
                    td.texto-left Decreto Único del Sector Trabajo, integra obligaciones del SG-SST.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Resolución 1409 de 2012
                    td.texto-left Reglamento para trabajos en altura.
                  tr
                    td.ajuste-border-tabla Decreto-Ley 1295 de 1994
                    td.texto-left Organización del Sistema de Riesgos Laborales.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Resolución 1792 de 1990
                    td.texto-left Límites permisibles de exposición al ruido.
                  tr
                    td.ajuste-border-tabla Resolución 2013 de 1986
                    td.texto-left Reglamenta los comités de medicina, higiene y seguridad industrial.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Resolución 2400 de 1979
                    td.texto-left Disposiciones generales sobre higiene y seguridad en los lugares de trabajo.

    <!-- BLOQUE 2 -->
    Separador
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 9.2 Riesgos laborales en la ganadería de leche
    
    p.mb-5 Las actividades en la producción lechera exponen a los trabajadores a una serie de riesgos físicos, químicos, biológicos y psicosociales. Identificar estos riesgos es el primer paso para prevenir accidentes y enfermedades ocupacionales.

    .fondo___img
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img139.svg' style="max-width: 90px").m-auto
            h4.mb-3 Mecánico
            p.mb-0 Uso de equipos y herramientas; instalaciones con terrenos irregulares.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img140.svg' style="max-width: 90px").m-auto
            h4.mb-3 Ergonómico
            p.mb-0 Movimientos repetitivos, carga de peso, posturas prolongadas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img141.svg' style="max-width: 90px").m-auto
            h4.mb-3 Biológico
            p.mb-0 Contacto con fluidos, estiércol, zoonosis.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img142.svg' style="max-width: 90px").m-auto
            h4.mb-3 Locativo
            p.mb-0 Caídas en pasillos, corrales o salas de ordeño.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img143.svg' style="max-width: 90px").m-auto
            h4.mb-3 Físico
            p.mb-0 Exposición a ruidos, vibraciones y temperaturas extremas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img144.svg' style="max-width: 90px").m-auto
            h4.mb-3 Eléctrico
            p.mb-0 Manipulación de cercas eléctricas o conexiones defectuosas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img145.svg' style="max-width: 90px").m-auto
            h4.mb-3 Químico
            p.mb-0 Uso de agroquímicos sin protección adecuada.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img146.svg' style="max-width: 90px").m-auto
            h4.mb-3 Psicosocial
            p.mb-0 Estrés por carga laboral, monotonía, violencia laboral.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img147.svg' style="max-width: 90px").m-auto
            h4.mb-3 Público
            p.mb-0 Amenazas externas al predio o comunidad rural.

        <!-- BLOQUE 3 -->
        Separador
        #t_9_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 9.3 Indumentaria necesaria en ganadería de leche
        
        p.mb-5 Para mitigar los riesgos mencionados, el uso de Elementos de Protección Personal (EPP) es indispensable. A continuación, se presentan los principales elementos requeridos:

    .row.mb-3.espacio___movil_1
      .col-xl-4(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Guantes de hule o caucho
          p.mb-0 Protección frente a agentes biológicos y limpieza de corrales.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Guantes de carnaza
          p.mb-0 Evitan abrasiones y golpes en el manejo de animales.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Guantes de nitrilo reutilizables
          p.mb-0 Manipulación higiénica de productos lácteos.
    
    .row.mb-3
      .col-xl-4(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Guantes desechables
          p.mb-0 Asistencia a partos o animales enfermos.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Botas de caucho de caña alta
          p.mb-0 Protección frente a humedad, barro y pisotones.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Zapatos o botas de seguridad
          p.mb-0 Prevención de golpes, cortes, electricidad o deslizamientos.
    
    .row.mb-3
      .col-xl-4(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Gafas de seguridad
          p.mb-0 Evitan salpicaduras químicas o residuos orgánicos en los ojos.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Tapones u orejeras
          p.mb-0 Protección frente a ruido constante o de alta intensidad.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Casco de seguridad
          p.mb-0 Previene golpes por objetos caídos o contacto con cables.
    
    .row.mb-3
      .col-xl-4(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Respirador N-95
          p.mb-0 Filtro mecánico para partículas de productos químicos o biológicos.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Respirador autónomo
          p.mb-0 Trabajo en espacios confinados como silos.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Arnés y línea de vida
          p.mb-0 Protección en trabajos en altura.
    
    .row
      .col-xl-4(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Overol antifluidos
          p.mb-0 Protección integral ante agentes físicos y biológicos.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Ropa adecuada
          p.mb-0 Según el clima: ropa clara y ligera para calor, abrigo para frío o impermeable en lluvia.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_24.h-100
          h4 Delantal plástico
          p.mb-0 Para labores que impliquen contacto directo con fluidos animales.

</template>

<script>
export default {
  name: 'Tema9',
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
