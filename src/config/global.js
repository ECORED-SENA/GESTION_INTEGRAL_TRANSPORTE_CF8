export default {
  global: {
    componenteFormativo: 'Presupuesto de la operación.',
    descripcionCurso:
      'Este componente tiene como propósito desarrollar habilidades necesarias para identificar, elaborar, verificar y ajustar los presupuestos desde su planeación, materialización y evaluación de resultados, destacando la importancia de estos dentro de cualquier tipo de trabajo, labor o proyecto a ejecutar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        titulo: 'Estructura tarifaria en el transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Regulación',
            hash: 'regulacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tarifas del transporte nacionales',
            hash: 'tarifasnal',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tarifas de transporte internacional',
            hash: 'tarifasinter',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Presupuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos de un presupuesto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ventajas de contar con un presupuesto',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Procedimientos de los presupuestos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: ' Tipos de presupuestos en empresas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Presupuesto en una cadena logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Actores y costos de la cadena logística',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Requerimientos del cliente',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Presentación de oferta de servicios',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Matriz de decisión: Exportación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },*/
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
  referencias: [
    {
      referencia:
        'Burbano, A. (2006). Costos y Presupuestos. (Ed. 7). Ediciones UNIANDES. ',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/14391/Gu%c3%ada%20pr%c3%a1ctica%20costeo%20de%20una%20exportaci%c3%b3n%20e%20importaci%c3%b3n%20%28002%29.pdf?sequence=5&isAllowed=y',
    },
    {
      referencia:
        'Diario del exportador. (2021). Cómo se calcula el flete en el transporte marítimo.',
      link:
        'https://www.diariodelexportador.com/2018/05/como-se-calcula-el-flete-en-el.html',
    },
    {
      referencia:
        'Grupo Bancolombia. (2021). Cadena Logística Internacional en exportaciones. ',
      link:
        'https://www.grupobancolombia.com/wps/portal/negocios/comercio-internacional/exportar/gestion-logistica-internacional-dfi/cadena-logistica',
    },
    {
      referencia:
        'Ministerio de transporte. (2021).  Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga SICE-TAC',
      link:
        'https://www.mintransporte.gov.co/publicaciones/359/sistema_de_informacion_de_costos_eficientes_para_el_transporte_automotor_de_carga_sicetac/',
    },
    {
      referencia:
        'Resolución 0315 de 2013. [Ministerio de Transporte]. Por la cual se adoptan unas medidas para garantizar la seguridad en el transporte público terrestre automotor y se dictan otras disposiciones. Febrero 6 de 2013.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=51704 ',
    },
    {
      referencia:
        'Resolución 378 de 2013. [Ministerio de Transporte]. Por la cual se aclara el artículo 3° de la Resolución 00315 del 6 de febrero de 2013. Febrero 15 de 2013.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=51800&dt=S',
    },
    {
      referencia:
        'Silvera Escudero, RE. Mendoza Valencia, DP. (2017). Costos Logísticos del Transporte Terrestre de Carga en Colombia. Edición 1. Barranquilla. Editorial Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Zonalogistica.  (2021). Normatividad Vigente en Transporte Terrestre de Carga. Zonalogistica.',
      link:
        'https://zonalogistica.com/herramientas/normatividad-vigente-en-transporte-terrestre-de-carga/',
    },
  ],
  glosario: [
    {
      termino: '<i>Brochure</i>',
      significado:
        'folleto, es una herramienta con la cual se presentan las características, naturaleza, datos, productos y servicios de una empresa, puede ser digital (web o pdf) o impresa.',
    },
    {
      termino: 'Cronograma',
      significado:
        'es una herramienta mediante la cual se refleja o representa el tiempo que ocupa el desarrollo de una lista de actividades organizadas preferiblemente en forma coherente y ordenada.',
    },
    {
      termino: 'Financiero',
      significado:
        'se relaciona a un aspecto relacionado a las finanzas, dinero o recursos de una empresa, institución, organización, o región.',
    },
    {
      termino: 'Flete',
      significado:
        'corresponde al precio que se cancela por el transporte de una carga.',
    },
    {
      termino: 'Inversión',
      significado:
        'corresponde al empleo de recursos para la producción de algo.',
    },
    {
      termino: 'Rubro',
      significado:
        'título que recibe un grupo financiero al cual se le asignan recursos económicos destinados a cierta actividad. Ejemplo: Rubro de equipos y mantenimiento.',
    },
    {
      termino: 'Pronóstico',
      significado:
        'es la estimación basada en datos de una situación que se puede presentar. Ejemplo: pronóstico del clima: lluvias torrenciales.',
    },
    {
      termino: 'Planeación',
      significado:
        'es una forma de tomar de decisiones anticipada, coordinada y organizada. Se usa para las actividades que requiere sincronía entre los recursos para lograr objetivos.',
    },
    {
      termino: 'Unitarización de la carga',
      significado:
        'consiste en agrupar y organizar mercancías con el fin de preservar su integridad durante las fases de un transporte: cargue, transporte, descargue y entrega.',
    },
  ],
  complementario: [
    {
      tema: 'Manual de comercio exterior',
      referencia:
        'Manual de comercio exterior (2021). Consultor Comercio Exterior.',
      tipo: 'Página web',
      link:
        'https://www.manualdecomercioexterior.com/2018/03/el-flete-aereo.html',
    },
    {
      tema: 'Manual de costos y presupuestos',
      referencia:
        'Viaña, L. (2014). Manual de costos y presupuestos. Institución Universitaria ITSA.',
      tipo: 'Manual',
      link: '/downloads/Anexo6_ManualCostosPresupuestos.pdf',
    },
    {
      tema: 'Guía práctica costeo de una exportación e importación.',
      referencia:
        'Cámara de comercio de Bogotá. (2019). Guía práctica costeo de una exportación e importación.',
      tipo: 'Cartilla',
      link: '/downloads/Anexo4_GuíaPracticaCosteo.pdf',
    },
    {
      tema: 'Guía practica para la elaboración de Presupuestos',
      referencia:
        'Sepúlveda, M. (2006). Guía practica para la elaboración de Presupuestos. [Tesis pregrado]',
      tipo: 'Tesis',
      link: '/downloads/Anexo7_Guia_practica_presupuesto.pdf',
    },
    {
      tema: 'Guía para la elaboración del Presupuesto: Operación e Inversión.',
      referencia:
        'Uniminuto. (). Guía para la elaboración del Presupuesto: Operación e Inversión.',
      tipo: 'Guía',
      link: '/downloads/Anexo8_GuiaElaboracionPresupuesto.pdf',
    },
    {
      tema: 'Tabla básica carga aérea.',
      referencia: 'TCC. (2021). Tabla básica carga aérea.',
      tipo: 'Página web',
      link: 'https://tcc.com.co/courier/paqueteria-productos-y-servicios/',
    },
    {
      tema: 'Cotización de transporte aéreo.',
      referencia: 'DHL. (2021). Cotización de transporte aéreo.',
      tipo: 'Página web',
      link:
        'https://www.dhl.com/co-es/home/nuestras-divisiones/transporte-de-envios/transporte-aereo/cotizacion-de-transporte-aereo.htm',
    },
    {
      tema:
        'Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga SICE-TAC',
      referencia:
        'Min.Transporte. (2021). Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga SICE-TAC',
      tipo: 'Simulador',
      link:
        'https://www.mintransporte.gov.co/publicaciones/359/sistema_de_informacion_de_costos_eficientes_para_el_transporte_automotor_de_carga_sicetac/  ',
    },
    {
      tema: 'Simulador de costos logísticos.',
      referencia: 'Procolombia. (2021). Simulador de costos logísticos. ',
      tipo: 'Simulador',
      link:
        'http://simuladordecostos.procolombia.co/dfi/master.html#/autenticacion ',
    },
    {
      tema: 'Elaboración de un presupuesto.',
      referencia:
        'GFERNANDEZ. (s.f.). Elaboración de un presupuesto. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hxqqN2KuE60&ab_channel=GFERNANDEZ',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zeidy Lilian Álvarez Álvarez',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnologías del transporte Bogotá DC.',
      },
      {
        nombre: 'Carolina Coca',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
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
        nombre: 'Sofía Suárez Suárez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
      {
        nombre: 'Daniel Polanco',
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
