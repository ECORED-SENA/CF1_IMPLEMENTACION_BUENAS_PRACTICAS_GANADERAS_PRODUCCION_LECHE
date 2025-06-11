export default {
  global: {
    Name:
      'Conceptualización en buenas prácticas ganaderas para bovinos en la producción de leche',
    Description:
      'Este componente formativo aborda la implementación de Buenas Prácticas Ganaderas en la producción de leche bovina, enfocándose en la sanidad, bienestar animal, inocuidad, sostenibilidad y cumplimiento normativo. Proporciona herramientas para optimizar procesos productivos, garantizar la calidad de la leche y fortalecer la competitividad del sector, promoviendo sistemas ganaderos responsables, eficientes y ambientalmente sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ganado bovino de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principales razas de ganado de leche en Colombia',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Empresa ganadera bovina de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Producción y dinámica económica del sector lácteo en Colombia (2024)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Infraestructura',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Buenas Prácticas Ganaderas en la producción de bovinos de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Beneficios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Componentes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aplicación de las BPG',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Marco Legal en Colombia',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Criterios de cumplimiento y listas de chequeo',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bienestar animal en bovinos de leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de bienestar animal',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Las Cinco Libertades del Bienestar Animal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Prácticas aplicadas al manejo de bovinos de leche',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Bienestar Animal en el marco legal colombiano',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Importancia del bienestar animal en la producción lechera',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo del hato lechero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de manejo del hato lechero',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Condiciones de alojamiento del ganado lechero',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Rutinas de trabajo',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Inocuidad de la leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Principios',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Procesos de transformación',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Calidad de la leche cruda',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Impacto en la Salud Humana',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Contaminantes',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Manejo Sanitario en la Producción de Leche',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Enfermedades de control oficial del ganado bovino',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tabla de enfermedades de control oficial',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Enfermedades Comunes en Sistemas de Lechería',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Plan sanitario del hato',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Uso responsable de medicamentos veterinarios',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Registro de tratamientos veterinarios',
            hash: 't_7_6',
          },
          {
            numero: '7.7',
            titulo: 'Pruebas de control de mastitis',
            hash: 't_7_7',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Gestión Ambiental en la Producción de Leche según la Certificación en Buenas Prácticas Ganaderas (BPG)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Beneficios Ambientales de la Certificación BPG',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Buenas prácticas en el uso del agua',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Manejo de estiércol',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Manejo de residuos orgánicos y peligrosos',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Buenas prácticas ambientales en la finca lechera',
            hash: 't_8_5',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Normativa en Seguridad y Salud en el Trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Concepto y normativa aplicable',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Riesgos laborales en la ganadería de leche',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Indumentaria necesaria en ganadería de leche',
            hash: 't_9_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de implementación',
      referencia:
        'Tafur Garzón, M. & Nieto, A. (2011). Las Buenas Prácticas Ganaderas en la Producción de Leche. ICA - MADR.',
      tipo: 'Cartilla',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/2259/44962_60380.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Plan de implementación',
      referencia:
        'Uribe F., Zuluaga, A. F., Valencia L., Mugueitio, E. & Ochoa L. (2011). Manual Buenas prácticas ganaderas en la producción de leche.',
      tipo: 'Manual',
      link: 'https://www.mag.go.cr/bibliotecavirtual/L01-11110.pdf   ',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'es el estado físico y mental de los animales con relación a las condiciones en las que vive y muere (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'son todas aquellas medidas sanitarias, procedimientos técnicos y normas de manejo que se aplican de forma permanente, con el propósito de prevenir la entrada y salida de agentes infectocontagiosos en la unidad de producción primaria (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'prácticas recomendadas con el propósito de disminuir riesgos físicos, químicos y biológicos en la producción primaria de alimentos de origen animal que puedan generar riesgo a las personas promoviendo la sanidad, el bienestar animal y la protección del medio ambiente (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Criterios fundamentales',
      significado:
        'son aquellos criterios directamente vinculados con el cumplimiento de la normatividad oficial en materia sanitaria y de inocuidad en la producción primaria. Es obligatorio el cumplimiento del 100% de estos criterios para lograr la certificación en BPG (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Criterios mayores',
      significado:
        'son aquellos criterios cuyo cumplimiento están directamente relacionados con las condiciones necesarias para lograr la inocuidad en la producción primaria. Es obligatorio el cumplimiento de mínimo el 80 % de estos criterios para lograr la certificación (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Criterios menores',
      significado:
        'son aquellos criterios que, si bien no están relacionados directamente con la inocuidad de producción primaria, su cumplimiento contribuye a garantizar la inocuidad. Es obligatorio el cumplimiento de mínimo el 60 % de estos criterios para lograr la certificación (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Enfermedad de control oficial',
      significado:
        'las enfermedades de control oficial son aquellas que son priorizadas por el ICA debido a su importancia zoonótica o que tienen un impacto económico por ser limitantes para el comercio nacional y/o internacional (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'es la garantía de que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con el uso al que se destina (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Leche anormal',
      significado:
        'corresponde al producto que presenta alteraciones de diferente naturaleza en los componentes y las propiedades físico-químicas de la leche, que desencadenan problemas en la elaboración de derivados o en la calidad de los mismos (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Peligro',
      significado:
        'agente biológico, químico o físico presente en la leche, productos lácteos comestibles, que puede provocar un efecto adverso para la salud humana (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
    {
      termino: 'Predio de producción primaria',
      significado:
        'granja o finca destinada a la producción de animales en cualquiera de sus etapas de desarrollo (Resolución Instituto Colombiano Agropecuario ICA 67449 del 2020).',
    },
  ],
  referencias: [
    {
      referencia:
        'AGROSAVIA. (2022a). Diseño y adaptación de infraestructura para BPG en lechería tropical. AGROSAVIA.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2007). Decreto 1500 de 2007: Por el cual se establece el reglamento técnico para los requisitos sanitarios y de inocuidad en la producción, procesamiento y comercialización de carne y productos cárnicos comestibles. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Embrapa. (2019). Tecnologías para producción lechera en el clima cálido. EMBRAPA.',
      link: '',
    },
    {
      referencia:
        'FAO. (2020a). Bienestar animal: conceptos y aplicaciones en América Latina. ',
      link: '',
    },
    {
      referencia:
        'FAO. (2020b). Buenas prácticas ganaderas para producción lechera en América Latina. FAO.',
      link: '',
    },
    {
      referencia:
        'Fedegán. (2021a). Manual de buenas prácticas ganaderas en leche. FEDEGÁN.',
      link: '',
    },
    {
      referencia:
        'ICA (Instituto Colombiano Agropecuario). (2012). Resolución 000017 de 2012: Reglamento técnico BPG producción leche cruda para consumo humano. ICA.',
      link: '',
    },
    {
      referencia:
        'ICA (Instituto Colombiano Agropecuario). (2020). Resolución 067449 de 2020: Por la cual se establecen los requisitos que deben cumplir los predios dedicados a la producción primaria de leche para obtener la certificación en Buenas Prácticas Ganaderas. ',
      link: '',
    },
    {
      referencia:
        'ICA (Instituto Colombiano Agropecuario). (2020). Resolución 136 de 2020: Por la cual se establecen los requisitos de manejo animal conforme a criterios de bienestar.  ',
      link: '',
    },
    {
      referencia:
        'ICA (Instituto Colombiano Agropecuario). (2023b). Manual técnico de bienestar animal para especies de producción.',
      link: '',
    },
    {
      referencia:
        'Ley 1774 de 2016. (2016). Por la cual se modifica el Código Civil y el Código Penal, y se dictan disposiciones en materia de maltrato animal. Diario Oficial, No. 49.934.',
      link: '',
    },
    {
      referencia:
        'MinAgricultura. (2022). Lineamientos de política pública para la ganadería bovina sostenible 2022–2050. Ministerio de Agricultura y Desarrollo Rural.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura. (2021a). Guía técnica para la implementación de BPG en empresas lecheras. Ministerio de Agricultura.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 2674 de 2013: Por la cual se establecen los requisitos sanitarios para la producción y comercialización de alimentos. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'OMSA (Organización Mundial de Sanidad Animal). (2023). Terrestrial Animal Health Code – Animal Welfare. ',
      link: 'https://www.woah.org/en/what-we-do/animal-health-and-welfare/ ',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2017). Decreto 2113 de 2017: Por el cual se regula la trazabilidad y el bienestar durante el transporte de animales. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Tafur Garzón, M., & Nieto, A. (2011). Las buenas prácticas ganaderas en la producción de leche. ICA - MADR. ',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/2259/44962_60380.pdf ',
    },
    {
      referencia:
        'Toro Galvis, C. A., Bedoya Henao, G., Rodríguez Espinosa, H., Palacio Baena, L. G., & Silva Pérez, M. L. (2012). Manual para la certificación en buenas prácticas ganaderas en producción de leche. Universidad de Antioquia. ',
      link:
        'https://revistas.udea.edu.co/index.php/biogenesis/article/view/326139/20783422 ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
