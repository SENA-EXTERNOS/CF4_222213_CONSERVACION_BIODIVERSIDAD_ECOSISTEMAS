export default {
  global: {
    componenteFormativo: 'Manejo y conservación del recurso hídrico.',
    descripcionCurso:
      'El desarrollo natural del ecosistema permite acceder al recurso hídrico como fuente de vida. Al reconocer su importancia se establecen los métodos de manejo, conservación y monitoreo con el fin de promover su uso responsable en el marco del desarrollo sostenible del país.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-decorativo1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ecosistemas estratégicos',
        desarrolloContenidos: true,
        subMenu: [],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Conservación del agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Manejo y uso sostenible del agua',
            hash: 'manejo_y_uso_sostenible_del_agua',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de conservación',
            hash: 'tecnicas_de_conservacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diseño de estructuras',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Monitoreo técnico y participativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Instrumentos y elementos de monitoreo',
            hash: 'instrumentos_y_elementos_de_monitoreo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Manejo de registros',
            hash: 'manejo_de_registros',
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
      tema: '2.1. Manejo y uso sostenible',
      referencia:
        'Corte Constitucional. (18 de diciembre de 1974). Decreto 2811. Por el cual se dicta el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente. ',
      tipo: 'Norma',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1551',
    },
    {
      tema: '2.1. Manejo y uso sostenible',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010). Política Nacional para la Gestión Integral del Recurso Hídrico. ',
      tipo: 'Política',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Politica-nacional-Gestion-integral-de-recurso-Hidrico-web.pdf',
    },
    {
      tema: '2.2. Técnicas de conservación',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Guía técnica de criterios para el acotamiento de las rondas hídricas en Colombia.',
      tipo: 'Guía',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/02/GUIA-PARA-EL-ACOTAMIENTO-DE-LAS-RONDAS-HIDRICAS-VF.pdf',
    },
    {
      tema: '2.2. Técnicas de conservación',
      referencia:
        'Agencia de Cooperación Internacional del Japón. (2015). Guía Técnica para cosechar el agua de lluvia.',
      tipo: 'Guía',
      link:
        'https://www.jica.go.jp/project/ecuador/001/materials/ku57pq000011cym2-att/water_harvest_sp.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aforos',
      significado:
        'hace referencia al llenado a completitud de un líquido o sólido en un recipiente determinado.',
    },
    {
      termino: 'Aguas superficiales',
      significado:
        'son las aguas que circulan sobre la superficie del suelo. El agua superficial se produce por la escorrentía generada a partir de las precipitaciones o por el afloramiento de aguas subterráneas. ',
    },
    {
      termino: 'Comunidad biótica',
      significado:
        'agrupamiento de poblaciones que viven en un hábitat físico determinado.',
    },
    {
      termino: 'Cuerpos lénticos',
      significado:
        'son cuerpos de agua que permanecen en un mismo lugar, sin correr ni fluir.',
    },
    {
      termino: 'Cuerpos lóticos',
      significado:
        'son cuerpos de agua en donde el movimiento del agua es predominante en una dirección.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'es la capacidad de satisfacer las necesidades actuales de la humanidad sin comprometer el tiempo futuro.',
    },
    {
      termino: 'Fitoplancton',
      significado:
        'conjunto de organismos acuáticos que tienen capacidad fotosintética y viven dispersos en el agua.',
    },
    {
      termino: 'Frailejón',
      significado:
        'planta de la familia de las compuestas. Alcanza hasta dos metros de altura, crece en los páramos, tiene hojas anchas, gruesas y aterciopeladas, y flor de un color amarillo oro.',
    },
    {
      termino: 'Hábitat',
      significado:
        'espacio que reúne las condiciones y características físicas y biológicas necesarias para la supervivencia y reproducción de una especie.',
    },
    {
      termino: 'Plantas halófilas',
      significado:
        'son un tipo de planta tolerante a la sal, ya que sus raíces están en contacto directo con el agua salada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bautista, A., Tovar, J. y Mancilla, O. (s.f.). ¿Puede utilizarse el agua atmosférica para el consumo doméstico y universal? [Archivo PDF]. Agro Productividad.',
      link:
        'https://revista-agroproductividad.org/index.php/agroproductividad/article/download/459/339/778',
    },
    {
      referencia:
        'Bautista, A., Mendoza, M., Cruz, F., Álvarez, C. y Duarte, H. (2018). Potencial de Captura de Agua Atmosférica en el Noroeste de México. Interciencia, 43(10), 711-715.',
      link:
        'https://www.redalyc.org/journal/339/33957861007/html/#:~:text=La%20captura%20de%20agua%20atmosf%C3%A9rica%20es%20una%20tecnolog%C3%ADa%20simple%20y,et%20al.%2C%202012',
    },
    {
      referencia:
        'Cerquera, K. (2022). Los ecosistemas más importantes de Colombia. Fundación Red de Árboles.',
      link:
        'https://www.reddearboles.org/noticias/nwarticle/556/1/LosecosistemasmsimportantesdeColombia',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). Uso Eficiente y Ahorro del Agua.',
      link:
        'https://www.minambiente.gov.co/gestion-integral-del-recurso-hidrico/uso-eficiente-y-ahorro-del-agua/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Guía técnica de criterios para el acotamiento de las rondas hídricas en Colombia.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/02/GUIA-PARA-EL-ACOTAMIENTO-DE-LAS-RONDAS-HIDRICAS-VF.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2019). 10 ecosistemas para enamorarse de Colombia.',
      link:
        'https://www.minambiente.gov.co/bosques-biodiversidad-y-servicios-ecosistemicos/10-ecosistemas-para-enamorarse-de-colombia/#:~:text=En%20nuestro%20pa%C3%ADs%20convergen%2091,arrecifes%20coralinos%20y%20pastos%20marinos',
    },
    {
      referencia:
        'Novillo, C. (2022). ¿Cuáles son los ecosistemas de Colombia? Ecología verde',
      link:
        'https://www.ecologiaverde.com/cuales-son-los-ecosistemas-de-colombia-2012.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
