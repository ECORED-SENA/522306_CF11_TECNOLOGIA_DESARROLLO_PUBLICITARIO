export default {
  global: {
    componenteFormativo: 'Artefinalización de piezas gráficas',
    descripcionCurso:
      'El arte final en diseño es el proceso de revisión y preparación de un trabajo gráfico para enviarlo correctamente a la imprenta. Es un paso previo a la impresión y reproducción de cualquier encargo gráfico. De un arte final bien realizado, dependerá el resultado bueno o malo del proyecto (Adesing Perú, s.f.).',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },

      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El arte finalizado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es el arte finalizado?',
            hash: '#t_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Colores de impresión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conversión de imágenes RGB – CMYK',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Reservas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Barniz UV',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sangrado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Cómo aplicar el sangrado a un diseño?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '¿Cuánto debe medir el sangrado?',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Resolución de imágenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Color Lab',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tipografías empleadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Troqueles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Formato final',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
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
  referencias: [
    {
      referencia:
        'Adesing Perú. (s.f.). Cómo preparar trabajos de diseño gráfico para imprenta. ',
      link:
        'https://adelossantos.wordpress.com/2012/10/22/como-preparar-trabajos-de-diseno-grafico-para-imprenta/ ',
    },
    {
      referencia: 'Cevagraf. (2013). Sobreimpresión, reserva y reventado.',
      link: 'https://www.cevagraf.coop/blog/sobreimpresion-y-reserva/ ',
    },
    {
      referencia:
        'El estudio. (2018). Cómo preparar un arte final antes de enviar a imprenta.',
      link:
        'https://elestudio.com/como-preparar-un-arte-final-antes-de-enviar-imprenta',
    },
    {
      referencia:
        'Espino, N. (2017). ¿Qué es el sangrado (o sangre) en diseño gráfico?',
      link: 'https://nachoespino.com/diseno/que-es-el-sangrado/',
    },
    {
      referencia:
        'Imagen Digital. (2006). Principios de la impresión en colores.',
      link: 'http://www.gusgsm.com/principios_de_la_impresion_en_colores ',
    },
    {
      referencia:
        'Reimers Design. (s.f.). Pequeño diccionario del diseñador. Consultado el 17 de junio de 2020.',
      link: 'https://cutt.ly/VyDzeWh',
    },
  ],
  glosario: [
    {
      termino: 'Arte final',
      significado:
        'Es el proceso de revisión y preparación de un trabajo gráfico para enviarlo correctamente a la imprenta.',
    },
    {
      termino: 'Boceto',
      significado:
        'Esquema o proyecto que contiene solamente los rasgos principales de una obra artística o técnica.',
    },
    {
      termino: 'Curva Bézier',
      significado:
        'En aplicaciones de dibujo, es una línea curva entre dos puntos de control. Cada punto es una pequeña base de datos, o vector, que almacena información como su grosor, color, medida y dirección.',
    },
    {
      termino: 'Diseño',
      significado:
        'Actividad creativa que tiene por fin proyectar objetos que sean útiles y estéticos.',
    },
    {
      termino: 'Ilustración vectorial',
      significado:
        'Concepto vinculado a la imagen digital (compuesta por mapa de bits), aunque se compone de elementos geométricos independientes que se combinan para crear dibujos y figuras más complejas.',
    },
    {
      termino: 'Línea de corte',
      significado:
        'Líneas que indican la medida del formato acabado (papel). Pequeñas líneas que indican por donde guillotinar un trabajo una vez impreso.',
    },
    {
      termino: 'Paleta de colores',
      significado:
        'Conjunto de colores disponibles para ser utilizados en una imagen. Es una de las herramientas de diseño gráfico elementales, ya que se utiliza para crear combinaciones de colores que trabajen bien juntos.',
    },
    {
      termino: 'Reserva',
      significado:
        'Parte posterior de una hoja de papel; la hoja del lado izquierdo es la vuelta del pliego impreso. Espacio libre que se deja en un fondo para insertar otro elemento o para dejarlo en blanco. En acabado de superficie, técnica que se emplea para el recubrimiento parcial del impreso.',
    },
    {
      termino: 'Tipografía',
      significado:
        'Representación gráfica del lenguaje que estudia las diferentes categorías de letras, las familias, los recursos, su legibilidad. El arte y la técnica de imprimir a partir de caracteres alfabéticos realzados y fundidos en bloques de metal.',
    },
    {
      termino: 'Sangrado',
      significado:
        'En tipografía, la sangría desplaza la línea o líneas de introducción de un texto con determinados caracteres blancos o espacios.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
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
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor-Experto temático',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Quindío',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },

      {
        nombre: 'Andrea Velásquez Torres',
        cargo: 'Apoyo experto temático',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Quindío',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Durán López',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },

      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
