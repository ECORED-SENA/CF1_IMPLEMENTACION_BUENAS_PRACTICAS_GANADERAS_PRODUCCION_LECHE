<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Empresa ganadera bovina de leche

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una <strong>empresa ganadera bovina de leche</strong> es una unidad económica y productiva organizada que combina diversos factores —tierra, mano de obra, capital y tecnología— con el fin de <strong>producir leche destinada al mercado</strong>. Esta empresa se constituye como centro de control y toma de decisiones, operando bajo principios técnicos, sanitarios, ambientales y sociales, de acuerdo con los lineamientos de las <strong>Buenas Prácticas Ganaderas (BPG)</strong>.
    
    .row.justify-content-center.mb-5
      .col-xl-10.espacio___movil_1(data-aos="zoom-in")
        p.mb-0.estilo___caja_4 Gracias a la diversidad de <strong>pisos térmicos en Colombia</strong>, que abarcan desde el nivel del mar hasta zonas de páramo, este tipo de empresa puede adoptar distintos sistemas de producción, utilizando razas especializadas en leche o de doble propósito, adaptadas a las condiciones climáticas del país.
    
    .fondo___img
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img14.svg' style="max-width: 90px").m-auto
                h4.mb-3 Enfoque BPG
                p.mb-0 Garantiza <strong>inocuidad, calidad y sostenibilidad</strong> de la producción.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img15.svg' style="max-width: 90px").m-auto
                h4.mb-3 Riesgos que minimiza
                p.mb-0 Impactos sobre la <strong>salud animal</strong>, el <strong>medio ambiente</strong> y el <strong>consumidor</strong>.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img16.svg' style="max-width: 90px").m-auto
                h4.mb-3 Componentes clave
                p.mb-0 Bienestar animal, bioseguridad, manejo responsable de residuos, cumplimiento de normativas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img17.svg' style="max-width: 90px").m-auto
                h4.mb-3 Sistemas de producción
                p.mb-0 Adaptados a pisos térmicos y al uso de razas especializadas o de doble propósito.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img18.svg" style="max-width: 66px").m-auto
          .col
            h3 Situación actual en Colombia (2024)

    .fondo___color_2
      .px-5
        .row.align-items-center.mb-5.m-0.estilo___caja_5(data-aos="zoom-in")
          .col-xl
            p.mb-3 Según el Censo Pecuario Nacional 2024, realizado por el Instituto Colombiano Agropecuario (ICA):
            <ul class="fa-ul estilo___ul">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Total de animales: 29.194.104 bovinos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Número de predios: 638.941.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Variación anual: Disminución del 1,5% respecto a 2023.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img.ajuste___img(src='@/assets/curso/temas/img19.jpg', alt="" style="max-width: 550px").m-auto

        p.mb-4.espacio___movil_1 La actividad ganadera bovina en Colombia presenta una alta concentración territorial, especialmente en determinadas regiones del país.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Distribución por departamentos
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Departamento
                    th Porcentaje de predios
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Boyacá
                    td 13 %
                  tr
                    td.ajuste-border-tabla Cundinamarca
                    td 12 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Antioquia
                    td 10 %
                  tr
                    td.ajuste-border-tabla Nariño
                    td 7 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Santander
                    td 6 %
                  tr
                    td.ajuste-border-tabla Córdoba
                    td 5 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla Tolima
                    td 4 %

        p.mb-0.espacio___movil_1 Estos siete departamentos concentran el 57 % del total de predios ganaderos del país, siendo zonas clave para la producción bovina nacional.              
                      
    <!-- BLOQUE 1 -->
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Producción y dinámica económica del sector lácteo en Colombia (2024)
    
    p.mb-4 La <strong>producción de leche</strong> sigue siendo un pilar fundamental en la economía agropecuaria colombiana. En 2024, se registraron avances significativos tanto en volumen de producción como en dinámica comercial y generación de empleo.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Crecimiento del sector agropecuario
                p.mb-0 Aumento del <strong>5,5 %</strong> en el primer trimestre de 2024, mostrando un fuerte dinamismo en la economía nacional.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img21.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Producción de leche cruda
                p.mb-0 Alcanzó los <strong>7.712 millones de litros</strong>, con un incremento notable respecto a 2023.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Acopio industrial
                p.mb-0 La industria acopió más de <strong>3.300 millones de litros</strong>, equivalente al <strong>46,6 %</strong> de la producción total.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Exportaciones de lácteos
                p.mb-0 Se exportaron <strong>12.285 toneladas netas</strong>, lo que representa un crecimiento del <strong>141,5 %</strong> respecto a 2023.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Empleo en el sector lácteo
                p.mb-0 Genera alrededor de <strong>705.000 empleos</strong>, consolidándose como uno de los sectores con mayor impacto social.
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img25.png', alt='' style="max-width: 500px").m-auto
    
    .row.align-items-center.estilo___caja_6.m-0.mb-5(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img26.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        h4 Censos Pecuarios Nacional
        p.mb-0 Para obtener información <strong>detallada por municipio y departamento</strong>, se pueden consultar los informes interactivos y las tablas de población bovina disponibles en el sitio web del <strong>Instituto Colombiano Agropecuario (ICA)</strong>, accediendo al siguiente enlace:
      .col-xl-2.espacio___movil_3
        a.boton.color-acento-botones.texto-negro(href="https://www.ica.gov.co/areas/pecuaria/servicios/epidemiologia-veterinaria/censos-2016/censo-2018" target="_blank")
          span Ir sitio web
          i.fas.fa-link
    
    p.mb-5 Es importante señalar que existen diferentes formas de organización dentro de las empresas ganaderas de leche. Un modelo común es el de empresa familiar, donde los flujos financieros y productivos están integrados dentro del núcleo familiar.

    .row.justify-content-center.mb-5.espacio___movil_1
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Diagrama de flujo en la empresa familiar
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img27.svg', alt='Diagrama de flujo sobre la empresa familiar que representa las relaciones entre producción, caja y familia mediante flechas que indican flujos financieros y flujos en especie.').m-auto

    p.mb-5.espacio___movil_1 El otro modelo más común corresponde a una <strong>producción comercial</strong>, habitualmente en régimen de integración o perteneciente a un grupo empresarial que decide la continuidad del proceso observando la <strong>cuenta de pérdidas y ganancias</strong>. Son frecuentes en producciones como cerdo industrial, avicultura, cebaderos de terneros, explotaciones lecheras de alta tecnología, etc.

    .row.justify-content-center.mb-5.espacio___movil_1
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Diagrama de flujo en la producción comercial
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img28.svg', alt='Diagrama de flujo sobre la producción comercial que muestra las conexiones entre producción comercial, caja de explotación y accionistas mediante flujos financieros y flujos en especie.').m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img18.svg" style="max-width: 66px").m-auto
      .col
        h3 Funciones
      
    .fondo___color_3
      .px-5
        p.mb-5 La función de la empresa ganadera bovina en este caso es la <strong>producción de leche</strong>, de acuerdo al sistema productivo ejercido por la unidad productiva. En el caso de Colombia se utilizan dos sistemas:
        .row.justify-content-center
          .col-xl-10
            .row.espacio___movil_1
              .col-xl-6(data-aos="zoom-in")
                .tarjeta--boton.p-5.h-100.estilo___caja_7
                  .row.justify-content-center.mb-3
                    .col
                      figure.d-none.d-xl-block.mb-3
                        img(src='@/assets/curso/temas/img30.png', alt="" style="max-width: 400px").m-auto
                  h3 Especializado
                  p.mb-0 Representa el 30 % de las cabezas de ganado, aporta el 50 % de la producción nacional. Ubicado en zonas de trópico alto (clima frío), cerca de centros poblados. Utiliza razas Bos taurus (europeas), alimentación con suplementos, ordeño mecánico, producción alta, los machos son descartados tempranamente.

              .col-xl-6.espacio___movil_3(data-aos="zoom-in")
                .tarjeta--boton.p-5.h-100.estilo___caja_8
                  .row.justify-content-center.mb-3
                    .col
                      figure.d-none.d-xl-block.mb-3
                        img(src='@/assets/curso/temas/img31.png', alt="" style="max-width: 400px").m-auto
                  h3 Doble propósito
                  p.mb-0 Representa el 70 % del hato. Predomina en zonas bajas tropicales y apartadas. Razas cruzadas entre <em>Bos indicus</em> y <em>Bos taurus</em>. Alimentación extensiva con forrajes, crías permanecen con la madre hasta el destete. Sistema ampliamente usado por la resistencia de los animales.

        <!-- BLOQUE 2 -->
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Infraestructura
        
        p.mb-5 Las explotaciones ganaderas presentan particularidades <strong>biológicas, socioculturales y económicas</strong> que las diferencian de otros sectores productivos. A pesar de estas especificidades, se rigen, como cualquier otra empresa, por el criterio de <strong>costo/beneficio</strong>. La empresa ganadera lechera puede entenderse como un <strong>sistema dinámico de organización</strong>, en constante evolución, donde el espacio productivo — aunque finito y exclusivo en un momento determinado — puede <strong>ampliarse o contraerse con el tiempo</strong>.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.espacio___movil_1(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img32.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la forma más común de empresa ganadera lechera es la <strong>de tipo familiar</strong>, donde el productor no solo dirige la explotación, sino que también participa directamente en las labores operativas. Los miembros del núcleo familiar (esposa, hijos, etc.) suelen desempeñar un papel clave en la ejecución de tareas. Sus ingresos o beneficios provienen directamente de la empresa, ya sea en forma de dinero o mediante el consumo propio de los productos generados.

    p.mb-5.espacio___movil_1 Para garantizar la <strong>sostenibilidad, calidad del producto y competitividad</strong>, estas explotaciones deben incorporar las <strong>Buenas Prácticas Ganaderas (BPG)</strong>, establecidas por el <strong>Instituto Colombiano Agropecuario (ICA)</strong> mediante la Resolución <strong>0002341 de 2007</strong>. Las BPG son fundamentales para asegurar:

    .row.justify-content-center.mb-5.espacio___movil_1
      .col-xl-7
        .row.align-items-center.estilo___caja_9.m-0(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul">
              <li class="mb-2 mt-3"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>La inocuidad de la leche.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>El bienestar animal.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>La salud pública.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>La protección del medio ambiente.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img.ajuste___img(src='@/assets/curso/temas/img33.png', alt="" style="max-width: 300px").m-auto
    
    p.mb-5.espacio___movil_1 Estas prácticas exigen el cumplimiento de <strong>condiciones específicas</strong> en infraestructura, bioseguridad, higiene y manejo de residuos, representando tanto un desafío como una oportunidad, especialmente para las empresas familiares.

    .fondo___slider.mb-5.espacio___movil_1
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Establos / Corrales
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Buen drenaje, limpieza diaria, sombra adecuada.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Espacio mínimo de 6 m² por bovino adulto.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Libre de objetos peligrosos.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Sala de ordeño
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Área cerrada o delimitada.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Pisos antideslizantes y lavables.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Buena ventilación e iluminación.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Agua potable disponible.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img35.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Zona de almacenamiento de leche
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Tanques fríos de acero inoxidable.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Enfriamiento inmediato de la leche a menos de 4 °C.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Área cubierta e higienizada.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img36.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Alojamientos y servicios para el personal
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Servicios sanitarios, duchas, lavamanos con jabón y toallas desechables.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Accesos controlados.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img37.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Manejo de estiércol y residuos
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Compostaje, biodigestores o trincheras cubiertas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Evitar contaminación del agua y proliferación de vectores.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img38.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Manejo del agua
                <ul class="fa-ul estilo___ul">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Uso exclusivo de agua potable para consumo animal, lavado de equipos y limpieza general.</li>
                </ul> 
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Cercas y delimitación
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Delimitación física completa.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Control de ingreso de vehículos y personas.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img40.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Zonas de cuarentena y enfermería
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Espacios diferenciados.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Fácil limpieza.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Acceso restringido.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img41.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img18.svg" style="max-width: 66px").m-auto
      .col
        h3 Tipos de salas de ordeño mecánico

    .fondo___color_4.mb-5
      .px-5
        .row.align-items-center.mb-5
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src='@/assets/curso/temas/img43.png', alt="" style="max-width: 400px").m-auto
          .col-xl.estilo___caja_10(data-aos="fade-left")
            p.mb-0 Las salas de ordeño cuentan con <strong>elementos básicos</strong> como las unidades de la máquina de ordeño (pezoneras, colectores, tubos y gomas) y los <strong>elementos inmovilizadores</strong> que aseguran que la vaca no se mueva durante el proceso.
        
        p.mb-5.espacio___movil_1 La <strong>disposición estructural</strong> de estos elementos determina el tipo de sala de ordeño. A lo largo del tiempo, estas estructuras han evolucionado en función del <strong>manejo</strong>, el <strong>número de animales</strong> y el <strong>tiempo dedicado por vaca</strong>.

        .bg--img_03
          .row.h-100.align-items-center
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
                .row(titulo="Tándem").ajuste-cajaAcordion
                  p.mb-4 Las vacas se colocan una detrás de otra. Se ordeñan y salen por una puerta lateral o hacia delante. Acceso lateral del operario a la ubre. Permite una inspección minuciosa, pero es más lento y se ordeñan menos animales por turno.
                .row(titulo="Espina de pescado").ajuste-cajaAcordion
                  p.mb-0  Las vacas se colocan en diagonal respecto al foso. Entrada y salida sencillas. Acceso lateral del operario. Ocupa más espacio por puesto. Fue el tipo más común, pero ha sido reemplazado por sistemas más eficientes.
                .row(titulo="Paralela").ajuste-cajaAcordion
                  p.mb-0 Las vacas están una al lado de otra, perpendiculares al foso. Mayor aprovechamiento del espacio. Acceso posterior del operario a la ubre. Se requiere alimento para incentivar la entrada. Ideal para salas anchas y de poco fondo.
                .row(titulo="Rotativa").ajuste-cajaAcordion
                  p.mb-4 Plataforma circular móvil. Las vacas miran hacia el centro, y sus ubres quedan hacia el exterior. Reduce el desplazamiento del operario. Requiere ajustar la velocidad de giro al número de animales y al tiempo de preordeño. Puede tener disposición en paralelo o espina de pescado.
                .row(titulo="Brete a la par").ajuste-cajaAcordion
                  p.mb-0  Ordeño paralelo sin necesidad de fosa. Sistema de cubículos para ordeño individualizado. Facilita el manejo de vacas y terneros. Ofrece comodidad, eficiencia y menor inversión. Fácil instalación. 
                .row(titulo="Robot de ordeño").ajuste-cajaAcordion
                  p.mb-0 Sistema de ordeño automático (<em>Automatic Milking System</em>, AMS). El ordeño se realiza sin intervención humana. Las vacas entran y salen voluntariamente. Automatiza el proceso y mejora la comodidad del animal y la eficiencia operativa.
            .col-xl-auto
              figure(data-aos="fade-left").d-none.d-xl-block
                img(src="@/assets/curso/temas/img44.png", alt="" style="width: 382px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img18.svg" style="max-width: 66px").m-auto
      .col
        h3 Tipos de salas de ordeño mecánico 
    
    p.mb-5 La <strong>elección de una u otra sala</strong> dependerá de varios factores:

    .row.mb-5.espacio___movil_1
      .col-xl-4(data-aos="zoom-in")
        .estilo___caja_11.h-100
          .row.justify-content-center.mb-3
            .col-7
            h5.mb-4 Tamaño de la explotación
            p.mb-0 A mayor número de vacas, más grande debe ser la sala de ordeño.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_12.h-100
          .row.justify-content-center.mb-3
            .col-7
            h5.mb-4 Dimensiones del espacio disponible
            p.mb-0 Si ya existe una estructura, puede ser más rentable reconstruir que adaptar.
      .col-xl-4.espacio___movil_3(data-aos="zoom-in")
        .estilo___caja_13.h-100
          .row.justify-content-center.mb-3
            .col-7
            h5.mb-4 Limitantes operativas
            p.mb-0 Tiempo, mano de obra y presupuesto disponible para invertir.
    
    p.mb-5 En general, las <strong>salas rotativas</strong> o <strong>paralelas</strong> son las más eficientes en cuanto al <strong>tiempo total de ordeño por vaca</strong>. Cuanto menos tiempo pasen las vacas en la sala de espera y ordeño, <strong>menos se estresarán</strong> y <strong>más tiempo tendrán para descansar o alimentarse</strong>, lo cual mejora directamente su <strong>confort, salud y productividad</strong>.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img18.svg" style="max-width: 66px").m-auto
      .col
        h3 Ordeño en potrero: requisitos adicionales según BPG
    
    p.mb-5 En muchas regiones ganaderas de Colombia, especialmente en sistemas de <strong>pastoreo extensivo</strong>, el ordeño se realiza en <strong>potrero</strong> o campo abierto. A pesar de su carácter tradicional y rural, este sistema <strong>también debe cumplir</strong> con los estándares de inocuidad y bienestar establecidos por las <strong>Buenas Prácticas Ganaderas (BPG)</strong>. Los requisitos para el ordeño en potrero son:
    
    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Ubicación
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Terrenos con <strong>pendiente mínima y buen drenaje</strong> para evitar encharcamientos y acumulación de estiércol.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Superficie de ordeño
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Área despejada, libre de vegetación alta o residuos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Se recomienda <strong>corral portátil</strong> o estructura semipermanente.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Higiene de las ubres
                <ul class="fa-ul estilo___ul">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Lavado y desinfección de pezones con <strong>agua potable y solución antiséptica</strong>, tanto <strong>antes como después</strong> del ordeño.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Manejo del ordeñador
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Uso de ropa limpia, botas, gorro.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Lavado de manos con agua potable y jabón antes del ordeño.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Equipos
                <ul class="fa-ul estilo___ul">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Uso de baldes, mallas, filtros y tarros de <strong>material sanitario</strong> (acero inoxidable o aluminio anodizado), <strong>limpios y desinfectados</strong>.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img49.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Transporte de la leche
                <ul class="fa-ul estilo___ul">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Transporte inmediato en <strong>termos o tarros sellados y limpios</strong> hacia punto de enfriamiento o recolección.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Tiempo máximo: <strong>2 horas</strong>.</li>
                </ul> 
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Sombra y protección
                <ul class="fa-ul estilo___ul">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Uso de <strong>carpas, lonas o árboles</strong> para proporcionar sombra a animales y operarios.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-4 Registro
                <ul class="fa-ul estilo___ul">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Registro diario de <strong>producción y eventos sanitarios</strong>.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-hat-cowboy-side color___li"></i></span>Seguimiento de animales en tratamiento para evitar consumo de su leche.</li>
                </ul>
              .col-lg-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
