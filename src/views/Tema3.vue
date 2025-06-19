<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Buenas Prácticas Ganaderas en la producción de bovinos de leche

    .fondo___color_5
      .px-5
        .row.align-items-center.mb-5
          .col-xl
            p.mb-3 Las <strong>Buenas Prácticas Ganaderas (BPG)</strong> en la producción de leche bovina son un conjunto de acciones, procedimientos y normas técnicas implementadas en el primer eslabón de la cadena láctea, orientadas a garantizar la <strong>inocuidad, calidad y trazabilidad</strong> de la leche, al tiempo que se protege el <strong>bienestar animal</strong>, el <strong>medio ambiente</strong> y la <strong>salud del personal</strong> vinculado al proceso productivo.
            p.mb-0.estilo___caja_2(data-aos="fade-right") Estas prácticas comprenden aspectos como el <strong>manejo sanitario y nutricional del ganado</strong>, el <strong>control del uso de medicamentos veterinarios</strong>, la <strong>correcta recolección, almacenamiento y transporte</strong> de la leche, y la <strong>gestión de residuos y efluentes</strong>. Su aplicación permite minimizar los <strong>riesgos biológicos, físicos y químicos</strong> asociados a la producción primaria de alimentos de origen animal, contribuyendo así a la <strong>seguridad alimentaria y a la salud pública</strong>.
          .col-xl-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/temas/img54.png", alt="" style="max-width: 400px").m-auto
        
        p.mb-0.espacio___movil_1 De acuerdo con el <strong>Instituto Colombiano Agropecuario (ICA)</strong>, las BPG constituyen un sistema de <strong>aseguramiento de la inocuidad</strong> en producción primaria, enfocado en la <strong>prevención y control de peligros sanitarios</strong> generados en el predio, los cuales podrían comprometer la salud del consumidor final. Además, las BPG fomentan la <strong>producción sostenible</strong>, la <strong>eficiencia técnica</strong> y la <strong>apertura a mercados nacionales e internacionales</strong> cada vez más exigentes.

        <!-- BLOQUE 1 -->
        Separador
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Objetivos
        
        p.mb-5.espacio___movil_1 Los principales objetivos de las BPG en la producción de leche bovina son:

    .row.justify-content-center.m-0.espacio___movil_1
      .col-xl-10
        .row.align-items-center.estilo___caja_14(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Garantizar la inocuidad y calidad de la leche destinada al consumo humano.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Proteger la salud pública mediante la prevención de enfermedades zoonóticas y el control del uso de medicamentos veterinarios.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Promover el bienestar animal, asegurando condiciones adecuadas de alojamiento, manejo, salud y nutrición.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Reducir el impacto ambiental de las actividades ganaderas.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Fortalecer la competitividad del sector lechero mediante el cumplimiento de normas nacionales e internacionales.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Mejorar la trazabilidad de los productos lácteos desde el origen hasta el consumidor final.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block              
              img.ajuste___img(src="@/assets/curso/temas/img55.jpg", alt="" style="max-width: 400px").m-auto
      
    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Beneficios

    p.mb-5 A continuación, se presentan los múltiples beneficios de implementar Buenas Prácticas Ganaderas en la ganadería bovina lechera, destacando su impacto positivo en la productividad, la salud pública, el medio ambiente y el bienestar animal.

    .row.justify-content-center.espacio___movil_1
      .col-xl-10
        .row.align-items-center.estilo___caja_15(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img.img-tema1-bloque5(src="@/assets/curso/temas/img56.png" style="max-width: 220px").m-auto
          .col-xl
            h4.mb-4 Lo invitamos a escuchar el siguiente <em>Podcast</em>:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Beneficios de las Buenas Prácticas Ganaderas en la producción lechera bovina"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    <!-- BLOQUE 3 -->
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Componentes
    
    .fondo___color_6
      .px-5
        p.mb-5 Los componentes que integran las BPG están divididos en <strong>temáticas de gran importancia</strong>, desarrolladas a través de los <strong>requisitos necesarios para su implementación</strong>.
        .row.justify-content-center
          .col-xl-10
             .bg--img_03
              .row.h-100.align-items-center
                .col-xl
                  AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
                    .row(titulo="Requisitos sanitarios: sanidad animal y bioseguridad").ajuste-cajaAcordion
                      <ul class="fa-ul estilo___il">
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Vacunación y enfermedades de control oficial.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Actividades de prevención y control.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Delimitación de predio.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Registro de ingresos y salidas.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Manejo de mortalidad.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Identificación de los animales.</li>
                      </ul>
                    .row(titulo="Plan de saneamiento").ajuste-cajaAcordion
                      <ul class="fa-ul estilo___il">
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Acceso a fuentes de contaminación.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Clasificación de residuos y basuras.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Disposición de envases de insumos agropecuarios.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Fuentes de agua y tanques de almacenamiento.</li>
                      </ul> 
                    .row(titulo="Uso de medicamentos veterinarios y alimentación animal").ajuste-cajaAcordion
                      <ul class="fa-ul estilo___il">
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Inspección de insumos.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Prohibición de sustancias prohibidas y medicamentos vencidos.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Uso de medicamentos formulados según rotulado.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Medicamentos de control especial.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Registro oficial de tratamientos veterinarios.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Respeto del tiempo de retiro y periodo de carencia.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Uso de promotores de crecimiento con registro ICA.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Prohibiciones en la alimentación animal.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Disposición temporal de agujas.</li>
                      </ul>
                    .row(titulo="Bienestar animal y del personal").ajuste-cajaAcordion
                      <ul class="fa-ul estilo___il">
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Evitar maltrato y dolor en los animales.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Agua de bebida a voluntad y alimentación en condiciones higiénicas.</li>
                        <li class="mb-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Bebederos limpios y en buen estado.</li>
                        <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Personal entrenado según sus funciones.</li>
                      </ul>
                .col-xl-auto
                  figure(data-aos="fade-left").d-none.d-xl-block
                    img(src="@/assets/curso/temas/img58.png", alt="" style="width: 382px").m-auto

        <!-- BLOQUE 4 -->
        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Aplicación de las BPG
        
        p.mb-5 Para aplicar las <strong>Buenas Prácticas Ganaderas (BPG)</strong> en la producción de leche bovina, es necesario intervenir diversos aspectos de la unidad productiva, tales como:

    .row.justify-content-center.mb-5.espacio___movil_1
      .col-xl-8
        .row.align-items-center.estilo___caja_9.m-0(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2 mt-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>La <strong>infraestructura</strong>.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Los <strong>procesos y procedimientos</strong>.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Los <strong>planes, registros y documentos</strong>.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>El <strong>manejo integral del sistema</strong>.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img.ajuste___img(src='@/assets/curso/temas/img59.jpg', alt="" style="max-width: 300px").m-auto

    p.mb-5.espacio___movil_1 Estas intervenciones <strong>no requieren grandes inversiones económicas</strong>, sino principalmente <strong>tiempo y disposición</strong> por parte de los productores y del personal involucrado, para que los cambios generen un efecto positivo. La correcta aplicación de las BPG genera <strong>múltiples beneficios</strong> para las unidades productivas, como:

    .row.justify-content-center.espacio___movil_1
      .col-xl-10
        .row.align-items-center.m-0.estilo___caja_5(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2 mt-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Eficiencia en sistemas productivos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Mejora indicadores productivos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Optimización de recursos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Organización de procesos y procedimientos.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img.ajuste___img(src='@/assets/curso/temas/img60.jpg', alt="" style="max-width: 550px").m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Marco Legal en Colombia

    p.mb-5 La implementación de las BPG en la producción de leche en Colombia está respaldada por un conjunto de normas emitidas por autoridades nacionales. Entre las más relevantes se encuentran:

    .row.justify-content-center.espacio___movil_1
      .col-xl-8
        .row.mb-3
          .col-xl-6(data-aos="zoom-in")
            .estilo___caja_16.p-5.h-100
              .row.justify-content-center.mb-3
                .col-xl
                  h4 Resolución ICA 067449 de 2020
                  p.mb-0 Establece los requisitos que deben cumplir los predios lecheros para obtener la certificación BPG, protegiendo la salud humana, el ambiente, el bienestar y sanidad animal.
          .col-xl-6.espacio___movil_3(data-aos="zoom-in")
            .estilo___caja_16.p-5.h-100
              .row.justify-content-center.mb-3
                .col-xl
                  h4 Decreto 1500 de 2007
                  p.mb-0 Define el sistema de <strong>inspección, vigilancia y control</strong> en la producción de carne y leche para consumo humano.
        .row.mb-3
          .col-xl-6(data-aos="zoom-in")
            .estilo___caja_16.p-5.h-100
              .row.justify-content-center.mb-3
                .col-xl
                  h4 Resolución 2674 de 2013
                  p.mb-0 Regula los <strong>requisitos sanitarios</strong> para la producción y comercialización de alimentos, incluyendo la leche.
          .col-xl-6.espacio___movil_3(data-aos="zoom-in")
            .estilo___caja_16.p-5.h-100
              .row.justify-content-center.mb-3
                .col-xl
                  h4 Ley 1774 de 2016
                  p.mb-0 Reconoce a los animales como <strong>seres sintientes</strong> y promueve su protección, alineándose con principios de bienestar animal.
              
        .row.align-items-center.m-0.estilo___caja_16(data-aos="zoom-in")
          .col-xl
            h4 Lineamientos de Política para la Ganadería Bovina Sostenible 2022 - 2050
            p.mb-0 Establece una hoja de ruta para modernizar la ganadería hacia sistemas <strong>sostenibles, bajos en emisiones</strong> y adaptados al cambio climático.

    <!-- BLOQUE 6 -->
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Criterios de cumplimiento y listas de chequeo
    
    p.mb-5 Los <strong>criterios de cumplimiento</strong> se derivan de los componentes establecidos para las BPG. Estos criterios se estructuran en <strong>listas de chequeo</strong>, que funcionan como herramientas para:

    .row.align-items-center.mb-5.m-0.espacio___movil_1
      .col-xl-7
        .row.align-items-center.estilo___caja_9.m-0(data-aos="fade-right")
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2 mt-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Diagnóstico inicial.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Evaluación periódica.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Monitoreo continuo de la aplicación de las buenas prácticas.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img.ajuste___img(src='@/assets/curso/temas/img61.jpg', alt="" style="max-width: 300px").m-auto
      .col-xl-5.estilo___caja_17.espacio___movil_3(data-aos="fade-left")
        p.mb-0 Las listas están <strong>diseñadas por especie y tipo de producción</strong>, y discriminan aspectos específicos de la labor especializada. Su desarrollo y aplicación están a cargo del <strong>Instituto Colombiano Agropecuario (ICA)</strong>, como ente regulador responsable de verificar el cumplimiento de la normativa.
    
    .row.align-items-center.estilo___caja_6.m-0.mb-5.espacio___movil_1(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img26.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        h4 Lista de chequeo de predios productores de leche
        p.mb-0 Una de las herramientas clave es la <strong>Forma 3-852 V. 6</strong>, que corresponde a la lista de chequeo para la <strong>producción ganadera en bovinos tipo leche</strong>. Esta lista permite evaluar el grado de implementación de las BPG en los predios y sirve de guía técnica tanto para productores como para técnicos del ICA.
      .col-xl-2.espacio___movil_3
        a.boton.color-acento-botones.texto-negro(href="https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/LISTADO-DE-PREDIOS-CERTIFICADOS-EN-BPG/Forma-3-852-lista-de-chequeo-leche-version-2-0-2014.pdf.aspx" target="_blank")
          span Ir sitio web
          i.fas.fa-link
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img18.svg" style="max-width: 66px").m-auto
      .col
        h3 Organismos involucrados

    .fondo___color_7
      .px-5
        p.mb-5 Diversas entidades, tanto a nivel <strong>nacional</strong> como <strong>internacional</strong>, participan en la <strong>promoción, regulación y certificación</strong> de las Buenas Prácticas Ganaderas (BPG) en la producción de leche bovina.
        
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span A nivel nacional (Colombia)
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Entidad
                    th Funciones principales
                tbody
                  tr
                    td.ajuste-border-tabla Instituto Colombiano Agropecuario (ICA)
                    td.texto-left Autoridad sanitaria que reglamenta y certifica las BPG.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Ministerio de Agricultura y Desarrollo Rural (MADR)
                    td.texto-left Formula políticas y apoya la adopción de BPG.
                  tr
                    td.ajuste-border-tabla Ministerio de Salud y Protección Social
                    td.texto-left Vigila la inocuidad alimentaria en la cadena láctea.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Agrosavia
                    td.texto-left Desarrolla tecnologías y capacita en temas de producción sostenible.
                  tr
                    td.ajuste-border-tabla Invima
                    td.texto-left Inspecciona y regula la calidad sanitaria de los productos lácteos procesados.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Fedegán / Fondo Nacional del Ganado (FNG)
                    td.texto-left Promueven programas de capacitación y asistencia técnica en BPG.
        
        .row.justify-content-center
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span A nivel internacional (Organismos)
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Organización
                    th Funciones principales
                tbody
                  tr
                    td.ajuste-border-tabla FAO (Organización de las Naciones Unidas para la Agricultura y la Alimentación)
                    td.texto-left Promueve las BPG como herramientas para garantizar la seguridad alimentaria y sostenibilidad.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Codex Alimentarius
                    td.texto-left Establece normas internacionales sobre higiene de los alimentos, incluyendo la producción de leche.

</template>

<script>
export default {
  name: 'Tema3',
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
