<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Gestión Ambiental en la Producción de Leche según la Certificación en Buenas Prácticas Ganaderas (BPG)

    .fondo___color_8
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.estilo___caja_2(data-aos="fade-right")
            p.mb-0 La gestión ambiental es un componente esencial dentro del sistema de Buenas Prácticas Ganaderas (BPG) aplicado a la producción de leche. Su objetivo es garantizar la sostenibilidad del sistema productivo, reducir impactos negativos sobre el entorno y fomentar el uso eficiente de los recursos naturales. Al implementar prácticas responsables desde el predio, se mejora el rendimiento productivo, se fortalece el bienestar animal y se aumenta la aceptación del producto por parte de los consumidores y del mercado.
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img119.png", alt="" style="width: 382px").m-auto
    
        <!-- BLOQUE 1 -->
        #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.1 Beneficios Ambientales de la Certificación BPG

        p.mb-5 La certificación BPG incorpora prácticas orientadas a optimizar los recursos naturales, minimizar la contaminación, y mitigar los efectos del cambio climático, contribuyendo a la sostenibilidad del sistema lechero. A continuación se detallan sus principales beneficios:

        .row.justify-content-center
          .col-xl-10
             .bg--img_03
              .row.h-100.align-items-center
                .col-xl-auto
                  figure(data-aos="fade-left").d-none.d-xl-block
                    img(src="@/assets/curso/temas/img120.png", alt="" style="width: 382px").m-auto
                .col-xl
                  AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
                    .row(titulo="Uso eficiente de recursos").ajuste-cajaAcordion
                      p.mb-0 Aprovechamiento de aguas lluvias, uso racional del agua, rotación de potreros y conservación de la cobertura vegetal del suelo.
                    .row(titulo="Reducción del impacto ambiental").ajuste-cajaAcordion
                      p.mb-0 Manejo técnico de estiércol y aguas residuales para evitar la contaminación de suelos y fuentes hídricas.
                    .row(titulo="Mitigación del cambio climático").ajuste-cajaAcordion
                      p.mb-0 Mejora de eficiencia digestiva del ganado, reducción de GEI y establecimiento de sistemas silvopastoriles.
                    .row(titulo="Conservación de biodiversidad").ajuste-cajaAcordion
                      p.mb-0 Protección de corredores biológicos y cuerpos de agua, uso de especies nativas en cercas vivas y reforestación.
                    .row(titulo="Gestión de residuos peligrosos").ajuste-cajaAcordion
                      p.mb-0 Almacenamiento seguro y disposición adecuada de agroquímicos, medicamentos vencidos y otros residuos peligrosos conforme a normativas vigentes.
                
    <!-- BLOQUE 2 -->
    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Buenas prácticas en el uso del agua

    p.mb-5 El agua es un recurso vital para la producción lechera. Su uso adecuado y controlado es indispensable para asegurar la sostenibilidad ambiental y la calidad del producto. Las BPG promueven prácticas específicas que optimizan este recurso:

    .fondo___img
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img122.svg' style="max-width: 90px").m-auto
            h4.mb-3 Captación sostenible
            p.mb-0 Uso de fuentes autorizadas sin afectar caudales ecológicos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img123.svg' style="max-width: 90px").m-auto
            h4.mb-3 Almacenamiento seguro
            p.mb-0 Tanques limpios, cerrados y protegidos contra la contaminación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img124.svg' style="max-width: 90px").m-auto
            h4.mb-3 Medición y control de consumo
            p.mb-0 Medidores o registros periódicos para detectar fugas y promover el ahorro.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img125.svg' style="max-width: 90px").m-auto
            h4.mb-3 Reutilización de aguas grises
            p.mb-0 Aplicación en actividades no críticas, como riego o limpieza de corrales.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img126.svg' style="max-width: 90px").m-auto
            h4.mb-3 Tratamiento de aguas residuales
            p.mb-0 Uso de trampas de grasa, filtros y sedimentadores para evitar contaminación de fuentes hídricas.

        <!-- BLOQUE 3 -->
        Separador
        #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.3 Manejo de estiércol
        
        p.mb-5 El estiércol, aunque es un subproducto, puede transformarse en un recurso útil si se gestiona adecuadamente. El objetivo es minimizar su impacto ambiental y aprovecharlo como fertilizante orgánico:

    .fondo___img
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img127.svg' style="max-width: 90px").m-auto
            h4.mb-3 Recolección periódica
            p.mb-0 Previene malos olores, vectores y acumulaciones contaminantes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img128.svg' style="max-width: 90px").m-auto
            h4.mb-3 Almacenamiento seguro
            p.mb-0 En zanjas, pozos o plataformas impermeabilizadas y cubiertas para evitar lixiviación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img129.svg' style="max-width: 90px").m-auto
            h4.mb-3 Compostaje
            p.mb-0 Técnica que elimina patógenos y convierte el estiércol en abono útil para el suelo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img130.svg' style="max-width: 90px").m-auto
            h4.mb-3 Aplicación agronómica
            p.mb-0 Uso racional como fertilizante en momentos adecuados y sin riesgo de escorrentía.

        <!-- BLOQUE 4 -->
        Separador
        #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.4 Manejo de residuos orgánicos y peligrosos

        p.mb-5 La correcta separación y disposición de residuos es una obligación ambiental y sanitaria. Las BPG exigen un manejo diferenciado entre residuos orgánicos y peligrosos:
    
    .row.justify-content-center.espacio___movil_1
      .col-xl-10
        .row
          .col-xl-6(data-aos="zoom-in")
            .tarjeta--boton.p-5.h-100.estilo___caja_7
              .row.justify-content-center.mb-3
                .col
                  figure.d-none.d-xl-block.mb-3
                    img(src='@/assets/curso/temas/img131.png', alt="" style="max-width: 400px").m-auto
              h3 Orgánicos
              p.mb-0 Separación en la fuente, compostaje, almacenamiento en recipientes resistentes y cerrados.

          .col-xl-6.espacio___movil_3(data-aos="zoom-in")
            .tarjeta--boton.p-5.h-100.estilo___caja_8
              .row.justify-content-center.mb-3
                .col
                  figure.d-none.d-xl-block.mb-3
                    img(src='@/assets/curso/temas/img132.png', alt="" style="max-width: 400px").m-auto
              h3 Peligrosos
              p.mb-0 Identificación clara, almacenamiento en contenedores adecuados, entrega a gestores autorizados, uso de EPP por el personal.

    <!-- BLOQUE 5 -->
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Buenas prácticas ambientales en la finca lechera

    p.mb-5 Las fincas certificadas deben implementar un enfoque integral que combine productividad con conservación ambiental. Algunas prácticas clave incluyen:

    .row.mb-5.espacio___movil_1
      .col-xl-3(data-aos="zoom-in")
        .estilo___caja_23.h-100
          .row.justify-content-center.mb-3
            .col-xl
              figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                img(src='@/assets/curso/temas/img133.svg', alt="" style="max-width: 100px").m-auto
            h4.mb-4 Manejo integrado del paisaje
            p.mb-0 Combinar producción con zonas naturales que protejan biodiversidad y servicios ecosistémicos.
      .col-xl-3.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_23.h-100
          .row.justify-content-center.mb-3
            .col-xl
              figure.mb-4.d-none.d-xl-block(data-aos="fade-right")
                img(src='@/assets/curso/temas/img134.svg', alt="" style="max-width: 100px").m-auto
            h4.mb-4 Pastoreo rotacional
            p.mb-0 Permite recuperación de pasturas y mejora la estructura del suelo.
      .col-xl-3.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_23.h-100
          .row.justify-content-center.mb-3
            .col-xl
              figure.mb-4.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/img135.svg', alt="" style="max-width: 100px").m-auto
            h4.mb-4 Protección de ecosistemas
            p.mb-0 Cercar nacederos, humedales y laderas para conservar su valor ecológico.
      .col-xl-3.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_23.h-100
          .row.justify-content-center.mb-3
            .col-xl
              figure.mb-4.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/img136.svg', alt="" style="max-width: 100px").m-auto
            h4.mb-4 Reforestación
            p.mb-0 Uso de especies nativas para restaurar áreas degradadas y regular microclimas.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img18.svg" style="max-width: 66px").m-auto
      .col
        h3 Enfoque integral de gestión ambiental en la producción lechera
    
    p.mb-5 Un sistema de producción lechera ambientalmente responsable debe integrar todos estos elementos en un programa de gestión ambiental. Este enfoque incluye:

    .row.justify-content-center.mb-5.m-0.espacio___movil_1
      .col-xl-10
        .row.align-items-center.estilo___caja_20(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img137.jpg', alt="" style="max-width: 420px").m-auto
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Identificación y mitigación de impactos ambientales del sistema productivo.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Formación del personal en prácticas sostenibles.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Registro y monitoreo del uso de recursos naturales y generación de residuos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Articulación con políticas públicas y normativas ambientales nacionales.</li>
            </ul>
    
    p.mb-5.espacio___movil_1 A continuación, se presenta un video introductorio sobre la gestión ambiental y de calidad en la ganadería, donde se destacan prácticas sostenibles que promueven el cuidado del medio ambiente y mejoran la producción lechera.

    figure.espacio___movil_1(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rMypS6NiKCk" title="Gestión ambiental y de calidad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema8',
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
