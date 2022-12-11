<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 3
      h1 Presupuesto en una cadena logística
    .bloque-texto-g.fondo15.p-3.p-sm-4.p-md-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez comprendido el contexto de los presupuestos y su importancia dentro de las empresas, se profundiza en los presupuestos dentro de la cadena de logística, donde se involucra directamente el transporte. Cabe resaltar que es indispensable comprender que dependiendo del producto o servicio que se preste, la relación entre la cadena logística y sus costos pueden variar, sin embargo, son constantes los siguientes aspectos a la hora de requerir solventar la necesidad de trasladar una carga a un cliente específico, ya que de ellos depende directamente la planeación de la propuesta o el presupuesto a ofrecer, para atender dicho requerimiento del cliente. 
    p.my-5(data-aos="fade-down-right") A continuación, se exponen los aspectos a considerar en la cadena de transporte ya que afectan directamente los costos en una cadena de suministro:
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade-down-left")
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/fig1.svg', alt='Costos en una cadena de suministro')
          .tarjeta.fondo12.p-3(x="33%" y="23%" numero="1")
            .h5.mb-2 1. Aprovisionamiento 
            p Este costo hace referencia al precio de tener el producto terminado, es decir el valor que se invirtió para producirlo y terminarlo, sin intermediarios. 
          .tarjeta.fondo12.p-3(x="36.8%" y="43.3%" numero="2")
            .h5.mb-2 2. Almacenaje
            p Es el costo del uso de un espacio para guardar el producto, en el tiempo en que dura reservado para su transporte y posterior entrega. Puede haber almacenaje al terminarlo de producir y antes de entregar a su destinatario. Este costo está conformado por valores como uso de un bien inmueble, servicios, climatización, etc. 
          .tarjeta.fondo12.p-3(x="50.8%" y="55%" numero="3")
            .h5.mb-2 3. Transporte interno
            p Es el transporte que se emplea de forma interna, es decir antes de ser entregado a su cliente final. Ejemplo: traslado de mercancías desde fábrica hasta almacén de cadena. 
          .tarjeta.fondo12.p-3(x="63%" y="44.5%" numero="4")
            .h5.mb-2 4. Transporte externo
            p Es el costo asociado al transporte del cliente final. Este costo puede ser subcontratado o propio, dependiendo de la capacidad de la empresa. 
          .tarjeta.fondo12.p-3(x="67.6%" y="23%" numero="5")
            .h5.mb-2 5. Costos por baja calidad o devoluciones
            p Es importante considerar este costo ya que, si el cliente no está de acuerdo con el producto por defectuoso o porque no cumple con las expectativas de compra, el vendedor deberá considerar acarrear con este y volver a entregar el producto. Normalmente se considera un porcentaje de pérdidas, sobre los demás costos para incluir este valor.
    .row.justify-content-center.my-4
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
          img(src='@/assets/curso/tema3/imagen2.jpg')
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        p La cadena logística es fundamental en la <i>Gestión logística internacional</i>, porque permite la planeación y el seguimiento constante y estratégico del proceso para la distribución de los productos o materias primas necesarias para las operaciones, dando origen a las exportaciones e importaciones que son las relaciones comerciales con otros países y fortalecimiento de la economía del país.
        p Para que esta gestión sea eficiente es indispensable que los costos y los tiempos de transporte sean reducidos, porque este valor incluye en costo final del producto, se debe recordar que, a nivel internacional, se compite con productos similares. Si su costo es elevado y su tiempo de entrega es poco eficiente, no entrará a competir. 
    .row.justify-content-center
      .col-xxl-3.col-xl-3.col-lg-3.col-md-8.col-sm-8.col-10.mb-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/imagen3.jpg')
      .col-xxl-9.col-xl-9.col-lg-9.col-md-12(data-aos="fade-down-right")
        p Las recomendaciones a la hora de programar una entrega al exterior son:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.fondo15
              span 1
            | Seleccionar un operador logístico confiable, facilitando la gestión ante los demás actores de la cadena logística. 
          li 
            .lista-ol--cuadro__vineta.fondo15
              span 2
            | Negociar claramente el transporte con el cliente, no se puede dar valores de venta sin considerar este costo, porque en gran medida el costo y el tiempo favorecen o no la selección de los productos para los clientes finales.
          li 
            .lista-ol--cuadro__vineta.fondo15
              span 3
            | Responsabilidades claras en la negociación, es indispensable conocer los diferentes roles o papeles que cumplen los actores de la cadena de logística, porque es necesario definir los alcances de cada individuo y las implicaciones comerciales que trae el no cumplimiento de sus obligaciones comerciales. 
    p.mb-5(data-aos="fade-down-right") La cadena logística se puede afectar por cada individuo, por eso se debe coordinar y gestionar correctamente la actuación de cada individuo, un ejemplo de cadena logística se puede visualizar a continuación:
    h3.text-center.mb-4(data-aos="fade-down-left") Cadena Logística en Comercio Internacional
    figure
      img(data-aos="fade-down-right")(src='@/assets/curso/tema3/fig2.svg')
      figcaption Nota. Grupo Bancolombia (2021).
    separador
    #t_3_1.titulo-segundo.colorsubtitulo(data-aos="fade-down-right")
      h2 3.1 Actores y costos de la cadena logística
    p.mb-5(data-aos="fade-down-left") Los actores son aquellas empresas o individuos que hacen parte de la cadena logística y que juegan un papel importante en la relación comercial de la misma. Los principales actores son:

    SlyderA(data-aos="fade-down-right").fondoslider.p-5(tipo="b")
      .row.justify-content-center
        .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4.mb-md-0
          h4 Exportador
          p Es quien presta el servicio de envío de la mercancía y debe garantizar que el producto cumpla con las normas, certificaciones requeridas para su comercialización a nivel nacional e internacional. y con los requisitos del cliente. En el Incoterms, se define al responsable de gestionar el transporte de carga para que llegue al sitio acordado con el cliente. Debe tramitar toda la documentación necesaria para la exportación y realizar el proceso de empaque.
      
        .col-xxl-6.col-xl-6.col-lg-6.col-md-11
          figure
            img(src='@/assets/curso/tema3/slider1.jpg')
      .row.justify-content-center
        .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4.mb-md-0
          h4 Importador
          p Gestiona con ayuda del operador logístico el tema relacionado al transporte, debe informar  todos aquellos procesos o procedimientos en los que se verá inmersa la comercialización o exportación del producto, como entidades involucradas, restricciones, recomendaciones, costos, agentes aduaneros, seguros, normas y leyes que rigen la relación comercial del producto. Debe gestionar los documentos para la llegada y nacionalización de la carga.
        .col-xxl-6.col-xl-6.col-lg-6.col-md-11
          figure
            img(src='@/assets/curso/tema3/slider2.jpg')
      .row.justify-content-center
        .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4.mb-md-0
          h4 Operador logístico
          p Es quien realiza la gestión de administrar y controlar las operaciones logísticas necesarias en la comercialización de productos como aliado estratégico de las empresas productoras y comercializadoras de materias primas o productos. 
          span.text-bold Las funciones más representativas son:  
          span el procesamiento de pedidos, manejo de materias, embalaje y desconsolidación, almacenamiento, control de inventarios y servicio postventa de los productos. Son quienes definen las necesidades de la cadena logística, considerando los términos establecidos por el Incoterms: transporte de productos, embalaje, cargue y descargue, establecimiento de rutas y medios de transporte y controles de la calidad. Deben garantizar la eficiencia de la operación sin incurrir en sobrecostos o retrasos en la misma.
      
        .col-xxl-6.col-xl-6.col-lg-6.col-md-11
          figure
            img(src='@/assets/curso/tema3/slider3.jpg')
      .row.justify-content-center
        .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4.mb-md-0
          h4 Agentes de aduanas
          p Son los representantes de la entidad del gobierno que inspecciona las mercancías, informa de los tributos que incurren en la comercialización o nacionalización de los productos o mercancías, generan los documentos necesarios para la legalización de la carga, valida el cumplimiento de pagos, requisitos y normas establecidas para la comercialización. 
        .col-xxl-6.col-xl-6.col-lg-6.col-md-11
          figure
            img(src='@/assets/curso/tema3/slider4.jpg')
    p.my-5(data-aos="fade-down-right") Los costos asociados al proceso de exportación van de la mano con el tiempo, una vez teniendo claros los términos de Negociación internacional INCOTERMS 2020 y teniendo el valor del producto en la fábrica del país origen, se deben considerar los siguientes costos:

    .row.mb-4.align-items-center(data-aos="fade-down-left")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo Costos en el país origen de la exportación
    p(data-aos="fade-down-right") Son los costos en los que incurre el vendedor desde que el producto sale de su fábrica hasta el puerto o terminal por donde se va a desplazar dentro del mismo país. Los aspectos asociados a este costo son: empaque, embalaje, documentación, unitarización, manipulación local, seguros, transporte a nivel nacional, almacenaje, cargue, descargue, documentación aduanera, gastos bancarios, agentes. 
    p.mb-5 A continuación, se presenta la tabla 2 que resume los costos relacionados para que se use de referencia.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade-down-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Matriz de costos y tiempos en el país exportador
        figure
          img(src="@/assets/curso/tema3/tabla2.png")
          figcaption Nota. Cámara de Comercio de Bogotá (2019).
  
    .row.my-4.align-items-center
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2(data-aos="fade-down-right")
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0(data-aos="fade-down-left")
        h4.mb-0.ms-0.margentitulo Costos del tránsito internacional
    p.mb-5(data-aos="fade-down-right") Son aquellos costos en los que incurre el vendedor o comprador (según el caso) desde el terminal o puerto hasta el sitio de recepción de la mercancía en el país importador. Corresponden a manipulación al embarque, seguro, trasporte, almacenaje, desembarque y agentes del país importador. En la siguiente tabla 3, se resumen los costos mencionados a manera de referencia.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade-down-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3. 
          span Matriz de costos y tiempos en el tránsito internacional
        figure
          img(src="@/assets/curso/tema3/tabla3.png")
          figcaption Nota. Cámara de Comercio de Bogotá (2019). 
    p.my-5(data-aos="fade-down-right") En los costos que se involucran en el flete internacional y considerando el modo de transporte, se encuentran recargos que influyen en el valor final de la transacción, a continuación en la tabla 4 se indican los principales recargos y su identificación en el contexto internacional.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade-down-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4. 
          span Recargos más utilizados en el transporte internacional
        figure
          img(src="@/assets/curso/tema3/tabla4.png")
          figcaption Nota. Cámara de Comercio de Bogotá (2019). 
    .row.my-4.align-items-center
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2(data-aos="fade-down-right")
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0(data-aos="fade-down-left")
        h4.mb-0.ms-0.margentitulo Costos en el país destino o importador
    p.my-5(data-aos="fade-down-right") Son los costos en los que incurre el importador desde el puerto o terminal destino en su país y dentro del territorio hasta el punto de entrega final, ver tabla 5.
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-12(data-aos="fade-down-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5. 
          span Matriz de costos y tiempos en el país importador
        figure
          img(src="@/assets/curso/tema3/tabla5.png")
          figcaption Nota. Cámara de Comercio de Bogotá (2019).
    p.my-5(data-aos="fade-down-left") En la siguiente imagen, se presenta de forma gráfica separada los tres tipos de costos en los que se involucra una carga al querer transportarse de forma nacional o internacional. 
    img(data-aos="fade-down-right").mb-5.nomostrar(src='@/assets/curso/tema3/fig3.svg')
    img(data-aos="fade-down-right").mb-5.nomostrar4(src='@/assets/curso/tema3/fig3-1.svg')
    img(data-aos="fade-down-left").mb-5.nomostrar4(src='@/assets/curso/tema3/fig3-2.svg')
    img(data-aos="fade-down-right").mb-5.nomostrar4(src='@/assets/curso/tema3/fig3-3.svg')
    p.my-5(data-aos="fade-down-left") Una vez analizados los costos por separado, se procede a realizar el balance final de costos, el cual se sugiere validar mediante la lista de chequeo, verificable en la tabla 6:

    .row.justify-content-around.align-items-center(data-aos="fade-down-right")
      .col-xxl-7.col-xl-7.col-lg-8.col-md-12
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-center
            .col-4.col-sm-3.col-lg-2.py-1.py-lg-2
              img.p-2(src="@/assets/curso/tema3/icono1.svg")
            .col-md-10.col-sm-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.pt-2.pt-lg-4
                  h3.mb-1 Tabla 6
                  p Lista de chequeo de los costos involucrados en un proceso de exportación- importación. 
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('downloads/lista_de_chequeo.pdf')" target="_blank")
                    span.text-dark Ver mas
    separador
    #t_3_2.titulo-segundo.colorsubtitulo(data-aos="fade-down-left")
      h2 3.2 Requerimientos del cliente
    p.mb-4(data-aos="fade-down-right") Los aspectos que dan origen y naturaleza a una organización o empresa dependen realmente de los clientes, la calidad de ese servicio será la pauta para que sus clientes permanezcan fieles a realizar las relaciones comerciales que se requieran, por tal razón es importante conocer al cliente y entender de forma clara los requerimientos de este. 
    .row.justify-content-center
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12.mb-4(data-aos="fade-down-right")
        p Para conocer al cliente es importante la predicción de las conductas y la comunicación, estos son los aspectos más relevantes para evaluar la oferta que se presenta. Los requerimientos del cliente se realizan mediante un pedido, la empresa u organización deberá tener procesos claros, para definir las acciones que acompañan los requerimientos, estas son:
        img(src="@/assets/curso/tema3/imagen4.jpg")
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12(data-aos="fade-down-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo10")
          .row.justify-content-center(titulo="El pedido")
            .col-md-3.col-sm-4.col-4.mb-4.mb-md-0.ps-0.ps-sm-5
              img(src="@/assets/curso/tema3/icono2.svg")
            .col-md-9.col-sm-8.col-12.mb-4.mb-md-0
              p Los clientes deben tener conocimiento de los servicios y productos que se ofertan de forma clara y directa, normalmente en las páginas web o por medio de <i>brochure</i> se dan a conocer esos aspectos. El cliente es quien dice lo que necesita.
          .row.justify-content-center(titulo="La cotización u oferta de servicios")
            .col-md-3.col-sm-4.col-4.mb-4.mb-md-0.ps-0.ps-sm-5
              img(src="@/assets/curso/tema3/icono3.svg")
            .col-md-9.col-sm-8.col-12.mb-4.mb-md-0
              p Una vez el cliente menciona la necesidad el empresario o representante realiza la cotización de los servicios, considerando los costos de operación y administración, que previamente la empresa u organización ha establecido. Por medio de la oferta de servicios se le sugieren las alternativas para solventar la necesidad del cliente, las cuales varían de acuerdo con el medio y modo que más le convenga al cliente.
          .row.justify-content-center(titulo="La entrega")
            .col-md-3.col-sm-4.col-4.mb-4.mb-md-0.ps-0.ps-sm-5
              img(src="@/assets/curso/tema3/icono4.svg")
            .col-md-9.col-sm-8.col-12.mb-4.mb-md-0
              p Las condiciones de entrega se establecen en la cotización, porque allí se acuerda el destino de la carga y se acuerda el costo del transporte acorde con el medio y modo elegido por el cliente.
          .row.justify-content-center.align-items-center(titulo="La facturación")
            .col-md-3.col-sm-4.col-4.mb-4.mb-md-0.ps-0.ps-sm-5
              img(src="@/assets/curso/tema3/icono5.svg")
            .col-md-9.col-sm-8.col-12.mb-4.mb-md-0
              p Dentro de la factura, se reflejan los aspectos que hacen parte del servicio, impuestos, pagos y demás que se acuerden previamente. 
          .row.justify-content-center(titulo="El pago")
            .col-md-3.col-sm-4.col-4.mb-4.mb-md-0.ps-0.ps-sm-5
              img(src="@/assets/curso/tema3/icono6.svg")
            .col-md-9.col-sm-8.col-12.mb-4.mb-md-0
              p Se acuerda con el cliente la forma de pago, en algunas compañías se paga por medio de cuentas de cobro y eso significa una rotación de alrededor de 45 días del dinero. A veces se cancela anticipadamente algún porcentaje de la negociación y el saldo en cierto tiempo de entrega de los productos, esto facilita el cubrimiento de los costos operativos para el funcionamiento de la empresa. Lo importante es tener organizada la cartera y los responsables de la contabilidad al frente del control.
    p.mb-5(data-aos="fade-down-right") Respecto a la gestión de los clientes en las empresas es importante resaltar ciertas actividades que se requieren tener presentes:
    SlyderF(data-aos="fade-down").my-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.fondo14.p-4.sizetarjeta1.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema3/slider2-1.svg')
        p.text-bold.text-center Solicitud de documentos del cliente
        p.text-center Dentro de este paso se considera solicita documentos como RUT y cámara de comercio, para conocer el registro de la empresa-cliente, antigüedad, representación legal, datos de contacto y demás relevantes para la posterior expedición de la factura de venta.

      .tarjeta.fondo14.p-4.sizetarjeta1.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema3/slider2-2.svg')
        p.text-bold.text-center Registro de información de clientes
        p.text-center Es importante establecer una base de datos que respalde el seguimiento a los clientes, los tiempos de atención a sus requerimientos, invitaciones a ferias, congresos, capacitaciones, charlas o demás incentivos que consideren en la gestión comercial.

      .tarjeta.fondo14.p-4.sizetarjeta1.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema3/slider2-3.svg')
        p.text-bold.text-center Verificación de la existencia y legalidad
        p.text-center Es importante validar esta información para posibles reclamaciones por pagos o situaciones legales que se puedan presentar por incumplimientos de lo acordado en la negociación.
      .tarjeta.fondo14.p-4.sizetarjeta1.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema3/slider2-4.svg')
        p.text-bold.text-center Encuestas de satisfacción
        p.text-center Proceso para medir y controlar la satisfacción de los clientes en los aspectos relevantes del servicio.
      .tarjeta.fondo14.p-4.sizetarjeta1.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema3/slider2-5.svg')
        p.text-bold.text-center Registro de quejas y reclamos
        p.text-center Control que se hace sobre las quejas que pueden presentar los clientes, se debe hacer seguimiento e incluir las mejoras necesarias en los planes de mejoramiento de la empresa. 
    separador
    #t_3_3.titulo-segundo.colorsubtitulo(data-aos="fade-down-right")
      h2 3.3 Presentación de oferta de servicios
    p(data-aos="fade-down") Una vez la empresa tiene organizada la información referente a los servicios que ofrece es indispensable considerar todos los gastos en los que puede incurrir el cliente a la hora de requerir un servicio, recordando que dentro de este aspecto se encuentran incluidos los resultados del análisis previo de los costos de operación y administración, directos e indirectos.
    p.mb-5(data-aos="fade-down-right") Los siguientes aspectos son importantes a considerar:
    figure(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UgqnP2wcLFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
