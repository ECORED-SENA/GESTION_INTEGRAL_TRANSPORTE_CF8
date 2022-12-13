<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 1
      h1 Estructura tarifaria en el transporte
    .row(data-aos="fade-down-right")
      .col-xxl-12
        img(src='@/assets/curso/tema1/imagen1.jpg')
        p.my-5 Las tarifas son aquellos precios que pagan los usuarios o clientes por la prestación de un servicio, sin embargo, para evitar arbitrariedades de los prestadores, el Ministerio de Transporte en ejercicio de su función de dirección y tutela administrativa del sector y del Sistema Nacional del Transporte, con la Superintendencia de Transporte, tienen como  función  vigilar, inspeccionar y controlar la permanente, eficiente y segura prestación del servicio de transporte. Por ello establecen el marco normativo que se presenta a continuación.
    separador
    #regulacion.titulo-segundo.colorsubtitulo(data-aos="fade-down-left")
      h2 1.1 Regulación
    p.mb-5(data-aos="fade-down-right") La regulación del transporte procura a través de sus principios establecer el orden, mecanismo y lineamientos para el cobro por la prestación del servicio público. Las medidas regulatorias pueden generarse desde diferentes partes del Estado: 

    //-tarjetas slide nuevo
    .row.justify-content-center.mb-5(data-aos="fade-up-right")
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/t1a.jpg")
          .crd_hover_txt--body.text-center
            h4.mb-4 Rama legislativa
            p.mb-0 Mediante la publicación de leyes, decretos y normas que rijan o prohíban algún tipo de comportamiento.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/t2a.jpg")
          .crd_hover_txt--body.text-center
            h4.mb-4 Rama judicial
            p.mb-0 Mediante sentencias o jurisprudencia sobre casos particulares que hayan llegado a esa instancia.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/t3a.jpg")
          .crd_hover_txt--body.text-center
            h4.mb-4 Rama Rama ejecutiva
            p.mb-0.me-5 Mediante la aplicación de políticas macroeconómicas, fiscales o monetarias.
      .row.justify-content-center.mt-5
        .col-xxl-10.col-xl-10.col-lg-10.col-md-12.fondo1
          .row
            .col-xxl-2.col-xl-2.col-lg-2.col-md-0.col-sm-0.col-0.ps-5.pt-5
              img.nomostrar(src="@/assets/curso/tema1/pergamino.svg")
            .col-xxl-10.col-xl-10.col-lg-10.col-md-12.col-sm-12.col-12.p-3
              p.text-bold.mb-0 Normas vigentes
              p En el siguiente enlace se pueden consultar las normas vigentes en materia del transporte de carga,  que permiten  validar todas aquellas disposiciones gubernamentales frente al ejercicio de transporte de carga. Es importante resaltar que se incluyen los temas aduaneros, restricciones, documentos y demás relacionados.
              .row.justify-content-center
                .col-auto.ps-0.pe-3
                  a.anexo.mb-4.mb-lg-0(href="https://zonalogistica.com/herramientas/normatividad-vigente-en-transporte-terrestre-de-carga/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 Normas vigentes
    separador
    #tarifasnal.titulo-segundo.colorsubtitulo(data-aos="fade-down-right")
      h2 1.2 Tarifas del transporte nacional
    .row.justify-content-center
      .col-xxl-5.col-xl-5.col-lg-6.col-md-12(data-aos="fade-down-right")
        p Para el establecimiento de tarifas es importante considerar aspectos como Índice de Precios del Consumidor (IPC), que es un índice registrado por el Departamento Administrativo Nacional de Estadística (DANE), obtenido de los precios y cantidades consumidas, este se calcula mensual y anualmente. 
        p A continuación, se presentan las tarifas para pasajeros y carga, un resumen o recuento de los aspectos más relevantes para conocer la estructura de las tarifas en los diferentes servicios, considerando que todas las tarifas o fletes contienen costos operativos, seguros e impuestos.
      .col-xxl-7.col-xl-7.col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/imagen2.png")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img.p-0.p-xl-2(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2 Aspectos para el cálculo de tarifas
    p(data-aos="fade-down-right") Existen varias metodologías empleadas para determinar las tarifas del servicio, sin embargo, dentro de las más empleadas está el estudio de mercado, donde se determina lo que el cliente está dispuesto a pagar por el bien o el servicio.
    p.mb-5(data-aos="fade-down-left") Un ejemplo es el transporte metropolitano de Bucaramanga, en su estudio técnico para las tarifas del 2016, considera los siguientes aspectos: 
    TabsA.color-acento-botones.mb-5(data-aos="fade-down-right")
      .tarjeta.fondo22.px-4.pt-4(titulo="Comportamiento histórico")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/imagen3.jpg', alt='Texto que describa la imagen')

          .col-xl-6
            h4 Comportamiento histórico
            p Se realiza el análisis de las tarifas del servicio de transporte público,  en el radio de acción metropolitano, este dato hace referencia al valor pagado por los clientes para el transporte colectivo ordinario, el individual (taxi) y el masivo, desde los años 1998 hasta el 2015. 
            p La tarifa mínima está en el colectivo y la máxima en el individual, esto genera  unos topes en el mercado, y se puede identificar los precios que pueden pagar los clientes.
      
      .tarjeta.fondo22.px-4.pt-4(titulo="Proyección de salario mínimo")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/imagen4.jpg')
          .col-xl-6
            h4 Proyección de salario mínimo
            p Se realiza la revisión entre los años 1990 y  2015, se fija mediante una negociación colectiva entre los gremios productivos del país; un aspecto fundamental  que se considera es el costo de vida porque debe estar dispuesto para cubrir las necesidades básicas y tarifas de crecimiento económico del país. 

      .tarjeta.fondo22.px-4.pt-4(titulo="Estructura de costo de operación")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/imagen5.jpg')
          .col-xl-6
            h4 Estructura de costo de operación
            p Se tienen presentes los costos de las variables de operación  como: combustibles, lubricantes, llantas, salarios y prestaciones, servicios, mantenimientos; los costos fijos como la administración, rodamientos, impuestos, parqueadero y seguros.
            p Finalmente, el capital que genere rentabilidad. 
      
      .tarjeta.fondo22.px-4.pt-4(titulo="Tipo de vehículo")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/imagen6.jpg')
          .col-xl-6
            h4 Tipo de vehículo
            p Se consideran aspectos como la composición del parque automotor: marca, modelo; ya que se debe validar la capacidad, respaldo de garantías y calidad. 

      .tarjeta.fondo22.px-4.pt-4(titulo="Mantenimiento")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/imagen7.jpg')
          .col-xl-6
            h4 Mantenimiento
            p Debe estar programado y respaldado con los requerimientos de vehículos seguros, considerando:
            ul.lista-ul
              li.otrocolor 
                i.fas.fa-angle-right
                | La Resolución 315 de 2013. 
              li.otrocolor
                i.fas.fa-angle-right
                | El artículo 1 de la resolución 378 de 2013, artículos 1° Revisión técnico-mecánica, 2° Revisión y Mantenimiento de los vehículos, 3° Mantenimiento de vehículos y 4°. Protocolo de alistamiento.     
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/imagen8.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        p Como se puede evidenciar, independientemente de los datos, la metodología considera los aspectos más relevantes para la determinación del punto de equilibrio económico entre la oferta y la demanda, porque se consideran aspectos económicos que caracterizan a los usuarios y a los empresarios del transporte. Esta misma estructura puede emplearse para el transporte de carga, donde se pueden utilizar variables similares, en este caso los usuarios son los clientes y los transportadores son los operadores logísticos, sin embargo, la tarifa también presenta algunas variantes como los impuestos, aduanas, servicios en terminales, cargue y descargue, almacenajes y si el transporte de carga es nacional o internacional.
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img.p-0.p-xl-2(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2 Servicio de transporte de pasajeros
    p.mb-5(data-aos="fade-down-left") Los pasajeros se movilizan en varios modos de transporte, las tarifas pueden variar de acuerdo con la época en la que se realice, ya que la demanda varía en las distintas temporadas del año. Muchas empresas presentan descuentos para motivar a los usuarios a planear sus traslados con tiempo. A continuación, se puede observar cómo se realiza el análisis del pasaje según el transporte:

    TabsB.color-acento-contenido.mb-5.modificaricono(data-aos="fade-down-right")
      .py-4.py-md-5(titulo="Terrestre carretero" :icono="require('@/assets/curso/tema1/autobus-escolar.svg')")
        .row.justify-content-center
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4.mb-md-0
            h4 Terrestre carretero
            p Hay libertad tarifaria establecida por norma, esto quiere decir que las empresas tienen la 
              span.resaltado.text-bold libertad de cobrar dependiendo del servicio que prestan y la comodidad de su parque automotor. 
            p No es lo mismo trasladarse en un bus último modelo con baño y aire acondicionado, que trasladarse en un microbús con menos espacio en las sillas y sin acceso al baño. 
            p Así haya libertad tarifaria, hay límites y los usuarios pueden denunciar abusos. El Ministerio de Transporte dentro de su régimen tarifario ha establecido que el valor del mes, resulta de multiplicar el valor total de kilómetros ($/km) por kilómetros recorridos en el mes. Es decir, los costos totales de la operación y los kilómetros recorridos en el mes. El valor del pasajero se obtiene dividiendo el valor mensual entre el número de pasajeros movilizados al mes, son los parámetros que establecen los límites para el cobro de tarifas. 
            .row.justify-content-center.align-items-center.my-5
              .col-xxl-3.col-xl-3.col-lg-3.col-md-3.col-sm-3.col-4.pe-2
                span.mb-4.resaltado.text-bold Valor pasajero=
              .col-xxl-5.col-xl-5.col-lg-5.col-md-7.col-sm-7.col-8.ps-0
                .row
                  .col-xxl-12.ps-0
                    p.text-center.mb-0 
                      span.resaltado.text-bold Valor mensual
                    hr.my-0
                  .col-xxl-12.ps-0
                    p.text-center.mb-0
                      span.resaltado.text-bold Número de pasajeros al mes
          .col-xxl-5.col-xl-5.col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema1/imagen9.jpg')
      .py-4.py-md-5(titulo="Transporte aéreo" :icono="require('@/assets/curso/tema1/avion.svg')")
        .row.justify-content-center
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12
            h4 Transporte aéreo
            p Es el modo de transporte más costoso, porque los costos operativos de los vehículos son altos, el combustible requiere de más octanaje, es decir que posee otras propiedades adicionales al combustible normal.
            p La inversión para la infraestructura es mayor, ya que requiere áreas amplias y construcciones civiles complejas en sus terminales aéreas, especialmente en ciudades capitales y de conexión con diferentes rutas.
            p El costo de la tarifa del pasaje o precio de los tiquetes aéreos se basa en la gestión de ingreso, que está determinada por:
            .row.mb-5
              .col-md-3.col-sm-6.col-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img.sizeimg(src='@/assets/curso/tema1/aereo1.svg')
                  .tarjeta.fondoblanco
                    .p-4
                      p.text-center Precio del combustible

              .col-md-3.col-sm-6.col-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img.sizeimg(src='@/assets/curso/tema1/aereo2.svg')
                  .tarjeta.fondoblanco
                    .p-4
                      p.text-center.px-4 Seguros

              .col-md-3.col-sm-6.col-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img.sizeimg1(src='@/assets/curso/tema1/avion.svg')
                  .tarjeta.fondoblanco
                    .p-4
                      p.text-center Arriendo de aviones

              .col-md-3.col-sm-6.col-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img.sizeimg(src='@/assets/curso/tema1/aereo3.svg')

                  .tarjeta.fondoblanco
                    .p-4
                      p.text-center Tasas de cambio en el mercado 
          .col-xxl-5.col-xl-5.col-lg-5.col-md-10.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/avion.jpg') 
        
      .py-4.py-md-5(titulo="Transporte férreo de pasajeros" :icono="require('@/assets/curso/tema1/tren.svg')")
        .row.justify-content-center
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4.mb-md-0
            h4 Transporte férreo de pasajeros
            p De acuerdo con el Plan Maestro Ferroviario de 2018 a 2022, se están estructurando los proyectos relacionados al transporte mixto de pasajeros y carga, la verdad este sistema de transporte ha estado en declive y desuso, pero debido a los análisis de las ventajas que trae consigo su uso para el medio ambiente y la reducción de costos, el gobierno a través de concesiones y licitaciones ha favorecido presupuestos con este propósito. 
            p Para el caso de 
              span.resaltado.text-bold Regiotram de Occidente, 
              span quien tiene la concesión que conecta a los municipios de 
              span.resaltado.text-bold Funza, Mosquera y Facatativá con el Distrito Capital
              span , con una longitud aproximada de 40 km, la tarifa se proyecta que quede en $1.200, aún no se está implementando el transporte de pasajeros. 
        
          .col-xxl-5.col-xl-5.col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema1/tren.jpg')

    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img.p-0.p-xl-2(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-1
        h3.mb-0.ms-0.margentitulo2 Servicio de transporte de carga
    p.my-5(data-aos="fade-down-left") Para el transporte de carga, dependiendo del modo de transporte, varía la reglamentación y la determinación de los costos.
    .row.mb-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo Flete del transporte marítimo
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        p Este valor se establece con ayuda de tratados internacionales y se calcula teniendo en cuenta el peso y el volumen de la carga, arrojando un factor. Este factor se reconoce como 
          span.resaltado.text-bold factor de estiba (FE) = Volumen en m<sup>3</sup>/Toneladas métrica
          span . En el caso tal de que el factor supere la relación de 
          span.resaltado.text-bold 1m<sup>3</sup>/tm
          span , la naviera cobra por el volumen y no el peso.
        p Algunas mercancías son más densas que otras. Cabe resaltar que, la unidad de carga es un contendor <i>Full Container Load</i> (FCL) o Carga de Contenedor Completa, esto quiere decir que, si el cliente empleará el contendor completo, se puede negociar un costo por su uso. Se deben tener en cuenta los recargos, que son valores que pueden variar por temas operativos de los buques, como el combustible (costo varía de acuerdo con la región), ajustes por cambio de moneda, gastos por uso de terminales, que también varía por autonomía de los países. Los gastos que incluyen el valor final de la carga son:
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/imagen10.jpg")
    SlyderF(data-aos="fade-down-right").my-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.fondo4.p-4
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema1/slider1.svg')
        p.text-center Uso de instalaciones portuarias a la carga doméstica, al operador portuario marítimo, operador portuario terrestre.

      .tarjeta.fondo4.p-4
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema1/slider2.svg')
        p.text-center Servicios de operaciones terrestres Contenedores. 

      .tarjeta.fondo4.p-4
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema1/slider3.svg')
        p.text-center Servicios a la carga.
      .tarjeta.fondo4.p-4
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema1/slider4.svg')
        p.text-center Almacenaje de carga, contenedores, vehículos.
      .tarjeta.fondo4.p-4
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema1/slider5.svg')
        p.text-center Impuestos y permisos de aduana.
    .row.justify-content-center(data-aos="fade-down-right")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-11.col-11.fondo5
        .row.justify-content-center.align-items-center
          .col-xxl-1.col-xl-1.col-lg-2.col-md-2.col-sm-2.col-3.ps-4.ps-sm-4.ps-xl-0
            img(src='@/assets/curso/tema1/dinero.svg')
          .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-10.col-9
            h4.mt-4 Tarifas portuarias
            p.mt-3.ms-3 Los valores deben ser consultados en cada terminal portuaria, ya que las tarifas pueden variar debido a su tecnología, infraestructura y demanda.  En el siguiente documento podrás consultar un ejemplo de las tarifas portuarias del puerto de Cartagena
            .row.justify-content-center
              .col-xxl-8.col-xl-8.col-lg-8.col-md-8.col-sm-9.col-11
                a.anexo.mb-4(:href="obtenerLink('downloads/Anexo1_TarifasPortuarias.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Tarifas portuarias        
    .row.my-5.align-items-center(data-aos="fade-down-left")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo Flete del transporte férreo
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        p Este modo de transporte es más amigable con el medio ambiente, debido al bajo impacto de emisión de gases e intervención con el medio ambiente en la construcción de su infraestructura. Ofrece costos bajos para grandes embarques y baja accidentalidad, lo que se representa en eficiencia en la entrega de mercancías. La gran dimensión del tren reduce el costo de transporte ya que se aprovecha mejor el remolque por su infraestructura, el personal que interviene y el corte o resistencia del viento. En la resolución 184 de 2009 del Ministerio de Transporte en su Art. N°2, el valor que se cobra corresponde a un valor determinado ton/km considerando los tonelajes que se movilicen anualmente. Para determinar este valor se debe cotizar directamente con el concesionario.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/imagen11.jpg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo Flete del transporte aéreo
    p(data-aos="fade-down") Para el transporte de carga aéreo se considera el peso y el volumen de la carga, la tarifa básica para algunas empresas que prestan este servicio como TCC parten desde los 6 kg de peso como valor mínimo y cobran un valor por kg adicional en la carga. Dependiendo del origen y destino de la necesidad. Se pueden consultar aquí las tarifas vigentes de dicha empresa:

    //-tarjetas slide nuevo
    .row.justify-content-center.mb-5(data-aos="fade-up-right")
      .col-xxl-5.col-xl-5.col-lg-6.col-md-9.col-12.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/tcc.jpg")
          .crd_hover_txt--body.nuevocolor.nuevosize
            h4.mb-3.mt-1.text-center TCC
            .row.my-4
              .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-1
                img(src="@/assets/curso/tema1/imagen12.svg")
              .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-10.col-10.pt-4.pt-sm-0
                p.pe-5.me-2 Puede consultar aquí las tarifas vigentes de TCC: 
            .row.justify-content-center.px-0
              .col-auto.ps-0.pe-3
                a.anexo.mb-4.mb-lg-0(href="https://tcc.com.co/courier/paqueteria/productos-y-servicios/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.mb-0 Enlace <i>web</i> 
      .col-xxl-5.col-xl-5.col-lg-6.col-md-9.col-12.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/dhl.jpg")
          .crd_hover_txt--body.nuevocolor.nuevosize
            h4.mb-4.text-center DHL
            .row.mt-0
              .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-1
                img(src="@/assets/curso/tema1/imagen12.svg")
              .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-10.col-10
                p Es una empresa que presta el servicio de cotización en línea, donde el usuario podrá cotizar el servicio colocando los datos de la carga que necesita transportar y las características físicas como tamaño, peso y número de piezas, origen y destino con códigos postales cotizar el servicio.
            .row.justify-content-center.px-0
              .col-auto.ps-0.pe-3
                a.anexo.mb-4.mb-lg-0(href="https://www.dhl.com/co-es/home/nuestras-divisiones/transporte-de-envios/transporte-aereo/cotizacion-de-transporte-aereo.html" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.mb-0 Enlace <i>web</i> 
    p.my-5(data-aos="fade-down-left") El valor del flete se calcula teniendo en cuenta el peso de la carga:
    .row.justify-content-center(data-aos="fade-down-right")
      .col-md-6
        p.resaltado.text-center.text-bold.mb-0 Peso Volumen = largo x ancho x alto del embarque (m) x 166.667 m<sup>3</sup>.
    .row.justify-content-center.py-5.align-items-center(data-aos="fade-down-left")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12
        p La tarifa aérea tiene tres valores incluidos: Tarifa general de Carga: para cargas normales< a 45 kg, de cantidad >45 kg y mínimas. Tarifas preferenciales para mercancías de gran dimensión: 
        .row.align-items-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-2.col-2
            img.mb-4.p-1(src="@/assets/curso/tema1/icono1.svg")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-10.col-10
            h4 Clasificadas
            p Como equipajes no acompañados, papel, contenedores vacíos para transporte de animales, restos mortales.
            hr
        .row.align-items-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-2.col-2
            img.mb-5.p-1(src="@/assets/curso/tema1/icono2.svg")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-10.col-10
            h4.mb-5.mt-4 Tarifas mercancías específicas
            hr
        .row.align-items-center
          .col-xxl-2.col-xl-2.col-lg-2.col-md-2.col-sm-2.col-2
            img.mb-5.p-1(src="@/assets/curso/tema1/icono3.svg")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-10.col-10
            h4.mb-5.mt-4 Tarifa de carga unitarizada
            hr
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12
        img(src="@/assets/curso/tema1/imagen13.jpg")
    .row.mb-4.align-items-center
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo Transporte automotor de carga
    p(data-aos="fade-down-right") Para este sistema de transporte se cuenta con una plataforma interactiva, creada por el Ministerio de transporte conocida como SICE-TAC que es una herramienta del sistema de información para el transporte automotor de carga.

    .row.justify-content-center.mt-5(data-aos="fade-down-left")
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12.fondo1
        .row
          .col-xxl-2.col-xl-2.col-lg-2.col-md-0.col-sm-0.col-0.ps-5.pt-3
            img.nomostrar(src="@/assets/curso/tema1/slider1.svg")
          .col-xxl-10.col-xl-10.col-lg-10.col-md-12.col-sm-12.col-12.p-3
            p A continuación podrás ingresar al Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga SICE-TAC
            .row.justify-content-center
              .col-xxl-5.col-xl-5.col-lg-5.col-md-6.col-sm-6.col-6.ps-0.pe-3
                a.anexo.mb-4.mb-lg-0(href="https://www.mintransporte.gov.co/publicaciones/359/sistema_de_informacion_de_costos_eficientes_para_el_transporte_automotor_de_carga_sicetac/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p.mb-0.text-bold Enlace <i>web</i>

    p.my-5(data-aos="fade-down-right") A través del observatorio de transporte de carga y las asociaciones gremiales del sector, en una mesa técnica validaron y actualizaron la herramienta donde se establecieron variables, componentes y costos para parametrizar de forma más adecuada la herramienta considerando las diferentes configuraciones vehiculares y los diferentes tipos de carga: Contenerizada, general, refrigerada y gráneles sólidos, permitiendo 12 combinaciones así como se observa en la tabla 1:
    .titulo-sexto.color-acento-contenido(data-aos="fade-down-left")
      h5 Tabla 1. 
      span Posibilidades de construcción de costos de referencia en SICE TAC 2,0
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-down-right")
      .tabla-b__header.fondo6.text-white
        h4.mb-0 POSIBILIDADES DE CONSTRUCCIÓN DE COSTOS DE REFERENCIA EN SICE TAC 2,0
      table
        caption.fondo7 Nota. Ministerio de transporte. (2021).  
        tr.fondo9
          th.bordetabla
            h4.text-center Configuración / Tipo de carga 
          td.bordetabla 
            h4.text-center C2 
            h4.text-center SENCILLO
          td.bordetabla 
            h4.text-center C3
            h4.text-center Dobletroque
          td.bordetabla 
            h4.text-center C2S2
            h4.text-center Minimula
          td.bordetabla
            h4.text-center C2s3
          td.bordetabla
            h4.text-center C3s2
          td.bordetabla
            h4.text-center C3s3
        tr.fondo7
          td.bordetabla General
          td.bordetabla.text-center X
          td.bordetabla.text-center X
          td.bordetabla.text-center X
          td.bordetabla.text-center X
          td.bordetabla.text-center X
          td.bordetabla.text-center X
        tr.fondo8
          td.bordetabla Contenedor
          td.bordetabla 
          td.bordetabla 
          td.bordetabla.text-center X
          td.bordetabla
          td.bordetabla 
          td.bordetabla.text-center X
        tr.fondo7
          td.bordetabla Refrigerada
          td.bordetabla.text-center X
          td.bordetabla.text-center X
          td.bordetabla
          td.bordetabla
          td.bordetabla.text-center X
          td.bordetabla.text-center X
        tr.fondo8
          td.bordetabla.bordetablaabajo Gráneles Sólidos
          td.bordetabla.bordetablaabajo.text-center X
          td.bordetabla.bordetablaabajo.text-center X
          td.bordetabla.bordetablaabajo 
          td.bordetabla.bordetablaabajo 
          td.bordetabla.bordetablaabajo.text-center X
          td.bordetabla.bordetablaabajo.text-center X

    p(data-aos="fade-down-left") Lo anterior hace referencia a las necesidades que más se presentan en el transporte de carga, es decir, si el cliente requiere alguna de estas posibilidades, el valor tarifario será determinado por dicha herramienta. 
    separador
    #tarifasinter.titulo-segundo.colorsubtitulo(data-aos="fade-down-right")
      h2 1.3 Tarifas de transporte internacional 
    p(data-aos="fade-down") Quien regula y establece los lineamientos para las negociaciones del transporte de carga internacional es la 
      span.resaltado.text-bold Cámara de Comercio internacional
      span , a través de los términos que reflejan el contrato de compraventa internacional de mercancías y sus condiciones de entrega. 
    p(data-aos="fade-down-left") Para la realización de cotizaciones de transporte internacional, el gobierno nacional ha creado un simulador de costos denominado 
      span.resaltado.text-bold Procolombia
      span , para poder realizar la simulación se requiere tener de forma clara la siguiente información:
    .row.justify-content-center.my-5
      .col-xxl-2.col-xl-2.col-lg-2.col-md-4.col-sm-4.col-6.px-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema1/fig1.svg")
        h4.mt-4.text-center Informe del embarque
        ul.lista-ul.ms-5.ms-sm-4
          li.otrocolor  
            i.fas.fa-angle-right
            | Cantidades
          li.otrocolor 
            i.fas.fa-angle-right
            | Peso
          li.otrocolor 
            i.fas.fa-angle-right
            | Volumen
      .col-xxl-2.col-xl-2.col-lg-2.col-md-4.col-sm-4.col-6.px-0(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/fig2.svg")
        h4.mt-4.text-center.mx-3 Origen y destino de carga 
      .col-xxl-2.col-xl-2.col-lg-2.col-md-4.col-sm-4.col-6.px-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema1/fig3.svg")
        h4.mt-4.text-center Cotizaciones
        ul.lista-ul.ms-5.ms-sm-4
          li.otrocolor  
            i.fas.fa-angle-right
            | Agencia de aduana
          li.otrocolor 
            i.fas.fa-angle-right
            | Agencia de carga
      .col-xxl-2.col-xl-2.col-lg-2.col-md-4.col-sm-4.col-6.px-0(data-aos="fade-down-right")
        img(src="@/assets/curso/tema1/fig4.svg")
        h4.mt-4.text-center Documentación
        ul.lista-ul.ms-5.ms-sm-4
          li.otrocolor 
            i.fas.fa-angle-right
            | Certificaciones
          li.otrocolor 
            i.fas.fa-angle-right
            | Permisos
      .col-xxl-2.col-xl-2.col-lg-2.col-md-4.col-sm-4.col-6.px-0(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/fig5.svg")
        h4.mt-4.text-center Costos bancarios
        ul.lista-ul.ms-5.ms-sm-4
          li.otrocolor  
            i.fas.fa-angle-right
            | Tasas de interés
          li.otrocolor 
            i.fas.fa-angle-right
            | Comisiones

    p.my-5(data-aos="fade-down-right") Dentro de este simulador es indispensable contar con la información completa requerida por la plataforma:
    .row.my-4.align-items-center(data-aos="fade-down-left")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img.p-0.p-xl-2(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2 Productos
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
          p Se refiere a las necesidades que como comerciante requiere transportar, exportar o importar, allí se deberá incluir un catálogo de los productos y las unidades comerciales que son discreción del empresario, las unidades de carga a emplear estándar o si desea agregar nuevas unidades. Cabe resaltar que de acuerdo con el tipo de carga o producto a transportar pueden variar los documentos requeridos por la aduana o de orden ambiental y los tiempos de espera en los terminales. 
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src="@/assets/curso/tema1/imagen14.jpg")
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img.p-0.p-xl-2(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2  Costos de la DFI
    img(data-aos="fade-down")(src="@/assets/curso/tema1/imagen15.jpg")
    p.mt-5(data-aos="fade") Corresponden a los costos asociados a la Distribución Física Internacional en torno a situar el producto en el mercado internacional, con los términos preestablecidos de la negociación en el Incoterms. Estos costos varían por el país exportador, las rutas de tránsito internacional y el país importador. Cada país tiene políticas y monedas diferentes, por ende, sus costos son distintos. Esta información deberá ser suministrada por el usuario de la plataforma incluyendo los costos asociados. 
</template>
<script>
export default {
  name: 'Tema1',
  components: {},
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
