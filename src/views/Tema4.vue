<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Bienestar animal en bovinos de leche

    .fondo___color_8
      .px-5
        .row.align-items-center.mb-5.m-0
          .col-xl.estilo___caja_2(data-aos="fade-right")
            p.mb-0 El <strong>bienestar animal</strong> es un eje transversal en la producción lechera moderna. Su inclusión en las <strong>Buenas Prácticas Ganaderas (BPG)</strong> responde a criterios <strong>éticos, productivos y normativos</strong>. Animales que gozan de buenas condiciones de vida son más sanos, más productivos y generan alimentos más seguros. Además, permiten el acceso a <strong>mercados exigentes y socialmente responsables</strong>.
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img64.png", alt="" style="width: 382px").m-auto

        <!-- BLOQUE 1 -->
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Concepto de bienestar animal

        p.mb-5 El bienestar animal es el <strong>estado físico y mental</strong> de un animal en relación con las condiciones en que vive y muere. Según la <strong>Organización Mundial de Sanidad Animal (OMSA, antes OIE)</strong>, un animal está en bienestar cuando:

        .row.justify-content-center.mb-5.espacio___movil_1
          .col-lg-10
            .row.align-items-center
              .col-xl-4
                figure.d-none.d-xl-block(data-aos="fade-right")
                  img(src="@/assets/curso/temas/img65.jpg", alt="alt").m-auto
              .col-xl-8
                .bloque-texto-b.color-primario.mb-5(data-aos="fade-left")
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left
                    h3.mb-0 Está sano, cómodo, bien alimentado, seguro, puede expresar su comportamiento natural, y no sufre de dolor, miedo o angustia
                    i.fas.fa-quote-right
        
        p.mb-0 En la ganadería bovina de leche, esto implica diseñar sistemas de producción que respondan a las <strong>necesidades biológicas y comportamentales del animal</strong> durante todas las etapas de su vida productiva.

    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Las Cinco Libertades del Bienestar Animal

    p.mb-5 Propuestas por el <em>Farm Animal Welfare Council (FAWC)</em> del Reino Unido y reconocidas internacionalmente, las <strong>cinco libertades</strong> son:

    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4.color___tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img66.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Libre de hambre, sed y desnutrición
        p.mb-0 Acceso a agååua fresca y dieta que mantenga salud y vigor.
      .tarjeta.color-acento-botones.p-4.color___tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img67.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Libre de incomodidades físicas o térmicas
        p.mb-0 Condiciones adecuadas de refugio y descanso.
      .tarjeta.color-acento-botones.p-4.color___tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img68.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Libre de dolor, lesiones y enfermedades
        p.mb-0 Prevención, diagnóstico y tratamiento oportuno.
      .tarjeta.color-acento-botones.p-4.color___tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img69.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Libre para expresar comportamiento natural
        p.mb-0 Espacio suficiente y compañía de animales de su especie.
      .tarjeta.color-acento-botones.p-4.color___tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img70.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Espacio suficiente y compañía de animales de su especie.
        p.mb-0 Condiciones que eviten sufrimiento mental.
    
    p.mb-0.espacio___movil_1 Estas libertades han sido adoptadas como principios fundamentales por la <strong>FAO</strong> y la <strong>OMSA</strong>, y en Colombia forman parte de las regulaciones exigidas por el <strong>ICA</strong> y el <strong>Ministerio de Agricultura</strong> (ICA, 2023; MinAgricultura, 2022).

    <!-- BLOQUE 3 -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Prácticas aplicadas al manejo de bovinos de leche
    
    p.mb-5 A continuación, se describen prácticas alineadas con cada una de las cinco libertades, tal como deben implementarse en <strong>predios certificados en BPG</strong>:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Libre de hambre, sed y desnutrición
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Suministro diario de agua limpia en bebederos higiénicos y accesibles.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Dieta balanceada según edad, etapa productiva y condición corporal.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Monitoreo del consumo y condición corporal para prevenir desnutrición o sobrepeso.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Libre de temor y angustia
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Manejo sin gritos, golpes o uso de elementos eléctricos.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Traslados tranquilos y con personal capacitado.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Entrenamiento en etología y lectura del comportamiento.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Aplicación del <em>Low Stress Handling</em>.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Minimizar prácticas dolorosas o realizarlas con analgesia.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Libre de molestias físicas y térmicas
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Sombra natural o artificial en potreros y corrales.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Camas limpias, secas y mullidas (serrín, arena o colchonetas).</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Control de temperatura y humedad en establos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Densidad animal adecuada para evitar hacinamiento.</li>
                </ul> 
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Libre de dolor, lesión y enfermedad
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Programa sanitario con control de ecto y endoparásitos.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Vacunación y desparasitación periódicas.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Registros individuales de salud.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Atención oportuna ante signos de dolor o enfermedad.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Uso responsable de medicamentos veterinarios.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Libre de impedimentos de manifestar un comportamiento natural
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Espacio suficiente para caminar, pastar y descansar.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Agrupación según edad, tamaño o estado fisiológico.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Horarios estables para ordeño y alimentación.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Contacto con otros animales de la misma especie.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Bienestar Animal en el marco legal colombiano
    
    p.mb-5 En Colombia, el bienestar animal ha sido incorporado al marco normativo mediante diversas disposiciones:

    .fondo___color_9
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Marco legal colombiano
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Norma / Documento
                    th Contenido
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Ley 1774 de 2016
                    td.texto-left Reconoce a los animales como <strong>seres sintientes</strong> y tipifica el maltrato como delito.
                  tr
                    td.ajuste-border-tabla Resolución ICA 136 de 2020
                    td.texto-left Establece los requisitos de manejo animal conforme a criterios de bienestar.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Resolución ICA 067449 de 2020 
                    td.texto-left Condiciona la <strong>certificación BPG</strong> a la implementación de estándares de bienestar animal.
                  tr
                    td.ajuste-border-tabla Decreto 2113 de 2017
                    td.texto-left Regula la trazabilidad y el bienestar durante el transporte de animales.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Metodología de evaluación
                    td.texto-left Herramienta técnica para medir el bienestar en bovinos y bufalinos (anexo metodológico).
        
        p.mb-0 Estas normas se complementan con los <strong>lineamientos técnicos de la OMSA</strong> y del <strong>Codex Alimentarius</strong>, adoptados como referencia internacional por Colombia.  

        <!-- BLOQUE 5 -->
        Separador
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Importancia del bienestar animal en la producción lechera
        
        p.mb-5 El bienestar animal no solo es un imperativo <strong>ético</strong>, sino también <strong>productivo y económico</strong>. Sus beneficios son:

        .row.justify-content-center.m-0.espacio___movil_1
          .col-xl-10
            .row.align-items-center.estilo___caja_14(data-aos="zoom-in")
              .col-xl
                <ul class="fa-ul estilo___ul">
                  <li class="mb-1 mt-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Mejora la <strong>producción y calidad microbiológica</strong> de la leche.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Reduce la incidencia de <strong>enfermedades y costos veterinarios</strong>.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Incrementa la <strong>longevidad productiva</strong> de las vacas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Favorece el <strong>cumplimiento de normativas sanitarias</strong> y estándares de comercio internacional.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Aumenta la <strong>aceptabilidad social</strong> y la <strong>reputación del productor</strong>.</li>
                </ul>
              .col-xl-auto
                figure.d-none.d-xl-block              
                  img.ajuste___img(src="@/assets/curso/temas/img77.jpg", alt="" style="max-width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
