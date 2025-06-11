<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Manejo Sanitario en la Producción de Leche




    
    <!-- BLOQUE  -->
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Enfermedades de control oficial del ganado bovino



      
    <!-- BLOQUE  -->
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Tabla de enfermedades de control oficial




    <!-- BLOQUE  -->
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Enfermedades Comunes en Sistemas de Lechería




    <!-- BLOQUE  -->
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Plan sanitario del hato




    <!-- BLOQUE  -->
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Uso responsable de medicamentos veterinarios




    <!-- BLOQUE  -->
    Separador
    #t_7_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.6 Registro de tratamientos veterinarios




    <!-- BLOQUE  -->
    Separador
    #t_7_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.7 Pruebas de control de mastitis




</template>

<script>
export default {
  name: 'Tema7',
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
