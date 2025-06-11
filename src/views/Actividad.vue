<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Conocimientos clave sobre Buenas Prácticas Ganaderas en Producción de leche bovina',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer los conocimientos sobre las Buenas Prácticas Ganaderas (BPG) aplicadas en la producción de leche bovina. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes razas de ganado se caracteriza por su alta producción lechera y bajo contenido graso?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Jersey</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Normando.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Holstein</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Blanco Orejinegro (BON).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad en Colombia es responsable de la certificación de las BPG?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Agricultura y Desarrollo Rural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Federación Colombiana de Ganaderos (FEDEGAN).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instituto Colombiano Agropecuario (ICA). ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organización Mundial de la Salud (OMS).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el principal objetivo de implementar Buenas Prácticas Ganaderas (BPG) en la producción de leche?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la cantidad de leche sin considerar su calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la inocuidad, calidad y trazabilidad de la leche.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir a los operarios por maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Minimizar costos de producción exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos NO es un principio del bienestar animal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libertad de expresar comportamiento natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libertad de dolor, miedo y angustia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Libertad de incomodidades físicas o térmicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libertad de sobrealimentación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de ordeño permite mayor ahorro de espacio en salas de ordeño pequeñas y anchas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tándem.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Paralela.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Espina de pescado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual en potrero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es uno de los principales contaminantes químicos en la leche cruda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pelo animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fragmentos plásticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salmonella spp.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Residuos de antibióticos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué infraestructura es obligatoria para garantizar el almacenamiento seguro de la leche según BPG?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tanque frío de acero inoxidable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pozo profundo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantinas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sala de ordeño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué resolución del ICA establece los requisitos para certificar predios productores de leche en BPG?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución 2674 de 2013.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolución 67449 de 2020.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolución 136 de 2020.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 1072 de 2015.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento es fundamental para reducir el riesgo de mastitis y garantizar la calidad higiénica de la leche?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de medicamentos sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ordeño al azar sin rutina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rutina adecuada de ordeño.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Alimentación excesiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una buena práctica recomendada para el manejo de estiércol en predios lecheros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dejarlo al aire libre en los potreros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enterrarlos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desecharlo en cuerpos de agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar compostaje controlado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
