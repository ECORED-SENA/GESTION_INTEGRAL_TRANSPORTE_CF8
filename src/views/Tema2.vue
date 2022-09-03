<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 2
      h1 Presupuestos
    .row.justify-content-center
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12(data-aos="fade-down-left")
        p Cuando una organización desea proyectar su presupuesto, lo hace preferiblemente para un año, a eso se le conoce como 
          span.resaltado.text-bold “presupuesto maestro”
          span ; si la empresa ya tiene varios años trabajando y ha organizado bien sus gastos o costos de operación, se hace más sencillo la proyección de las metas para el año siguiente, ya que hay aspectos de orden económico que le dan las pautas como la inflación, los ajustes anuales de salarios mínimos, los índices de ingreso bruto nacionales de sectores económicos, incrementos particulares de ciertos productos para elaboración o materia prima, costos de importación o exportación, etc. 
          p El presupuesto maestro contempla todo el presupuesto de la organización de forma macro; cada área o departamento puede tener su propio presupuesto y responder por el uso adecuado, para el cumplimiento de las metas, esto facilita la consolidación ya que cada uno de los departamentos, cuenta con la información necesaria para calcularlos. 
          p El presupuesto maestro es el horizonte o la pauta económica motora para el crecimiento de la organización, está compuesto por los presupuestos operacional y financiero Se caracteriza por tener la capacidad de integrar y coordinar en términos financieros las metas de la organización.
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema2/imagen1.jpg')
    p.my-5 Los presupuestos maestros se definen basados en: 
    //-tarjetas slide nuevo
    .row.justify-content-center.mb-5(data-aos="fade-up-right")
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/imagen2.jpg")
          .crd_hover_txt--body.text-center.nuevosize1.nuevocolor1
            h4.mb-3 Metas específicas
            p.mb-0 Son los anhelos del empresario y donde desea llevar su producción. Si se tiene claro lo que se desea hacer hay un fin o un propósito claro para materializar.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/imagen3.jpg")
          .crd_hover_txt--body.text-center.nuevosize1.nuevocolor1
            h4.mb-3 Planear las metas
            p.mb-0 No solo es necesario saber para dónde se quiere llegar, sino también lo que se necesita para lograrlo, es decir los recursos que se estiman o se van a requerir.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/imagen4.jpg")
          .crd_hover_txt--body.text-center.nuevosize1.nuevocolor1
            h4.mb-3 Validar resultados periódicamente
            p.mb-0.me-5 Es importante comparar el gasto proyectado con el real, de forma periódica para verificar qué tan acertadas son las proyecciones. Normalmente este resultado se refleja en los informes de Gestión por cada área y se consolida en uno solo desde el punto de vista financiero.
    separador
    #t_2_1.titulo-segundo.colorsubtitulo(data-aos="fade-down-right")
      h2 2.1 Elementos de un presupuesto
    p.mb-5(data-aos="fade-down-left") Los elementos principales de los presupuestos son variables, considerando la actividad económica, pero como mínimo, para poder planear un presupuesto se requiere:
    .row.justify-content-center
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12(data-aos="fade-down-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo10")
          .row(titulo="Descripción del ítem")
            .col-md-12.mb-4.mb-md-0.ps-5
              p.ms-4 Dentro de los presupuestos es importante establecer por grandes grupos los ítem a considerar, por ejemplo: Materia prima, que es lo que se requiere para la producción; transporte, valor medible de acuerdo con recorridos necesarios. Nómina, se refiere al pago necesario de personal o mano de obra. 
          .row(titulo="Demostrar los objetivos")
            .col-md-12.mb-4.mb-md-0.ps-5
              p.ms-4 Es importante visualizar los objetivos como la meta de proyección, deben tener la información documentada y ser medibles, para poderlos comparar. Cada objetivo debe estar propuesto de forma particular para validar el cumplimiento. Ejemplo: ventas de mil millones de pesos anuales.
          .row(titulo="Medición del desempeño")
            .col-md-12.mb-4.mb-md-0.ps-5
              p.ms-4 Se relaciona con los rendimientos de lo proyectado y lo ejecutado, por ejemplo: se presupuestó para marzo un gasto general de 100 millones de pesos y se gastaron 102 millones, en este caso se analiza qué un imprevisto afectó la cifra, este debe  tener una razón  justificada y documentada, por ejemplo: una reparación adicional de un vehículo o una adecuación por daños en infraestructura.
          .row(titulo="Sustento en las tendencias")
            .col-md-12.mb-4.mb-md-0.ps-5
              p.ms-4 La información que ha sido documentada en el pasado es un muy buen soporte, ya que refleja la experiencia adquirida, por ende, es importante validar lo que sucede y compararlo con el pasado, para analizar profundamente las variables de los aspectos que intervienen. 
              p.ms-4 Por ejemplo: el año pasado en una fábrica con 10 trabajadores se produjeron 180 camisetas, este año al comprar la máquina de corte, se contrataron 10 trabajadores, pero se produjeron 540 camisetas. La conclusión, se capitalizó, es decir incrementó su patrimonio y mejoró su producción.
          .row(titulo="Resumen de oportunidad")
            .col-md-12.mb-4.mb-md-0.ps-5
              p.ms-4 Se crea un resumen que brinda la información relevante del desempeño económico. Por ejemplo:  la rentabilidad obtenida en negocios efectuados en los últimos 6 meses.
          .row(titulo="Rubros")
            .col-md-12mb-4.mb-md-0.ps-5
              p.ms-4 Son aquellos grupos de costos que se tienen características específicas o destinos particulares dentro de un presupuesto. Por ejemplo, un rubro puede ser “gastos de administración” el dinero destinado a compra de insumos de papelería.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-8.col-8.col-sm-8(data-aos="fade-down-right")
        img(src="@/assets/curso/tema2/imagen5.jpg")
    p.mt-5(data-aos="fade-down-right") En conclusión, los elementos de los presupuestos definen y reflejan los aspectos financieros y económicos medibles que la empresa debe controlar. 
    separador
    #t_2_2.titulo-segundo.colorsubtitulo(data-aos="fade-down-left")
      h2 2.2 Ventajas de contar con un presupuesto 
    p(data-aos="fade-down-right") Todas las personas que piensan emprender un proyecto o planear alguna situación que requiere recursos para materializarla, debe programar su presupuesto. Desde un viaje familiar hasta una gran empresa. 
    p(data-aos="fade-down-left") El presupuesto maestro permite representar el detalle de los gastos que se presentan en la operación de una empresa, representando el total de ingresos y gastos. Las ventajas de contar con este recurso son:

    TabsB.color-acento-contenido.mb-5.modificaricono(data-aos="fade-down-right")
      .py-4.py-md-5(titulo="Reduce el gasto" :icono="require('@/assets/curso/tema2/tab1.svg')")
        .row.justify-content-center
          .col-xxl-5.col-xl-5.col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema2/imagen6.jpg')
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4.mb-md-0.ps-5.mt-4.mt-lg-0
            h4 Reduce el gasto 
            p Cuando se hace un seguimiento a los gastos, es fácil determinar cuáles de éstos, son innecesarios o cuáles se pueden reducir, por eso es indispensable conocerlos a fondo, para identificarlos y poder tomar decisiones. Por ejemplo, en los planes de telefonía celular se pueden reducir las mensualidades,  ya que por competencia algunos operadores ofrecen descuentos por planes empresariales. 

      .py-4.py-md-5(titulo="Planeación" :icono="require('@/assets/curso/tema2/tab2.svg')")
        .row.justify-content-center
          .col-xxl-5.col-xl-5.col-lg-5.col-md-10.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema2/imagen7.jpg') 
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.ps-5.mt-4.mt-lg-0
            h4 Planeación
            p Planear los gastos permite:
            ul.lista-ul.ms-5.ms-sm-4
              li 
                i.fas.fa-angle-right
                | Resolver los compromisos económicos o deudas.
              li
                i.fas.fa-angle-right
                | Tener una buena experiencia en el pago de cuentas,
              li
                i.fas.fa-angle-right
                | Disponer de un respaldo en caso de que se requiera comprar maquinaria o ampliación 
            p Ser organizado en los pagos y planearlos abre puertas a la parte financiera.        
        
      .py-4.py-md-5(titulo="Administración de recursos" :icono="require('@/assets/curso/tema2/tab3.svg')")
        .row.justify-content-center
          .col-xxl-5.col-xl-5.col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema2/imagen8.jpg')
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4.mb-md-0.ps-5.mt-4.mt-lg-0
            h4 Administración de recursos
            p Conocer detalladamente los ingresos y gastos, permite administrar de forma adecuada los recursos priorizando las necesidades, de forma equitativa y coherente.
      .py-4.py-md-5(titulo="Ahorros e inversión" :icono="require('@/assets/curso/tema2/tab4.svg')")
        .row.justify-content-center
          .col-xxl-5.col-xl-5.col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema2/imagen9.jpg')
          .col-xxl-7.col-xl-7.col-lg-7.col-md-12.mb-4.mb-md-0.ps-5.mt-4.mt-lg-0
            h4 Ahorros e inversión
            p Al conocer el rendimiento y ganancias, es posible pensar en ampliar la empresa, adquirir equipos que mejoren la producción, guardar dinero para temporadas de baja rentabilidad.
            p Otra forma de ganar dividendos es la inversión en la bolsa, para la compra de acciones que generen ingresos adicionales.  Es importante asesorarse, para conocer el funcionamiento de los fondos de inversión.
    separador
    #t_2_3.titulo-segundo.colorsubtitulo(data-aos="fade-down-right")
      h2 2.3 Procedimientos de los presupuestos
    p.mb-5(data-aos="fade-down") A continuación, se presentan los pasos a seguir para la formulación o planeación, ejecución, seguimiento y liquidación o balance de presupuestos, para que de forma ordenada se pueda establecer la articulación y concordancia de este.
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2 Formulación y planeación
    .row.justify-content-center
      .col-xxl-5.col-xl-5.col-lg-5.col-md-12(data-aos="fade-down-left")
        p En este paso, los departamentos o áreas de la organización o empresa establecen el 
          span.resaltado.text-bold “plan anual de trabajo”
          span y programan los rubros necesarios para el cumplimiento de sus propósitos o metas, formulan los planes y proyectos de cada departamento o área,  realizan el análisis de las ejecuciones de los años anteriores para estimar sobre cifras reales la proyección, consideran las recomendaciones de años anteriores como lecciones aprendidas,  identifican los ingresos y egresos para la operación y funcionamiento,  distribuyen los ingresos que financian los gastos necesarios para la operación de forma equilibrada; programan  los recursos durante el tiempo previsto. Finalmente, se presenta para aprobación de la junta directiva o a quien sea delegado por la empresa para tal fin.
      .col-xxl-7.col-xl-7.col-lg-7.col-md-12(data-aos="fade-down-right") 
        img(src="@/assets/curso/tema2/imagen10.jpg")
    .row.my-4.align-items-center
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2(data-aos="fade-down-left")
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0(data-aos="fade-down-right")
        h3.mb-0.ms-0.margentitulo2 Elaboración de presupuestos
    p.mb-5(data-aos="fade-down-left") Para un agente o actor que labora en una empresa dedicada al transporte es fundamental que pueda realizar las actividades que dan origen al presupuesto, ejecutarlo y posteriormente controlarlo, por lo tanto, desde la elaboración se debe plantear correctamente para que se logre el éxito de la operación y del negocio. A continuación, se presentan los pasos más relevantes para la elaboración de un presupuesto: 
    AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta fondo10")
      .row(titulo="Examinar los ingresos de la operación")
        .col-md-12.mb-4.mb-md-0.ps-5
          p.ms-4 No podemos comenzar a elaborar un proyecto, sin antes tener en cuenta los ingresos que se perciben por la actividad económica que se desarrolla en la organización, esto corresponde específicamente a todo dinero que ingresa, por inversión de socios o por el mismo desarrollo de la actividad. 
          p.ms-4 Se sugiere que este control se haga mensualmente para que sean la base de las proyecciones siguientes, que son el presupuesto.
          p.ms-4 Para comprender mejor el contexto se presenta la siguiente situación: 
          p.ms-4 En la Empresa “Jilk” se realizaron 500 entregas de paquetes en el sector zona centro del país, que sumaron 
            span.text-bold $4.000.000 
            span millones de pesos. 600 paquetes en la zona norte que sumaron 
            span.text-bold $4.800.000. 
            span Además, por bodegas alquiladas en zona industrial, captaron 
            span.text-bold $5.000.000. 
            span Lograron conseguir una inversión de uno de los socios por 
            span.text-bold $25.000.000 
            span con los cuales van a hacer arreglos locativos. El total de ingresos para dicho mes es de 
            span.text-bold $38.000.000.
          p.ms-4 Como se puede observar en el ejemplo, los ingresos no solo corresponden a la operación, sino a otras actividades que generan renta o ingresos a la empresa. Sumando este total de ingresos se conoce 
            span.text-bold el dinero disponible para el presupuesto del siguiente mes.  
      .row(titulo="Claridad en costos fijos y variables")
        .col-md-12.mb-4.mb-md-0.ps-5
          p.ms-4 Ahora se debe determinar la ganancia neta, esta se obtiene:
          .row.justify-content-center.align-items-center.my-5
            .col-md-10
              img(src="@/assets/curso/tema2/fig1.svg")
            .col-md-2
              p.text-center Incluyen todos aquellos gastos en que incurre una empresa para su operación.
          p.ms-4 Es importante que hoy en día, las empresas implementen un software que permita el seguimiento adecuado a los costos, por 
            span.text-bold “centros de costos” 
            span a medida que se van utilizando, se ingresan y se determinan por su tipo, por ejemplo: 
            span.text-bold personal, combustibles, servicios, capacitaciones.
          p.ms-4 En caso de que la empresa no cuente con un sistema de información que recopile y haga de forma adecuada el seguimiento a los costos, es necesario por lo menos durante un mes, establecer el costo de lo necesario para la operación, registrando uno a uno los costos y luego se valida cuáles son fijos y variables. Así, al determinar la producción e inversión generada durante el mes, se establece el balance  y se identifica la materialización de las metas. 
      .row(titulo="Considerar recursos para imprevistos")
        .col-md-12.mb-4.mb-md-0.ps-5
          p.ms-4 Dentro de los presupuestos, es recomendable establecer una reserva para los imprevistos, se pueden determinar como un porcentaje sobre el presupuesto total o con el histórico de imprevistos, que se hayan generado por circunstancias similares en la operación. 
          p.ms-4 Para una empresa de transporte se debe considerar improvistos que afecten la operación, por ejemplo:
          .row.justify-content-center.mt-5.ms-4.ps-4.ms-md-0.ps-md-0
            .col-lg-10
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img.imgsize(src='@/assets/curso/tema2/fig2.svg')
                .tarjeta.fondo11
                  .p-md-4.ps-0.py-4.pe-3
                    h2 Derrumbes en cierta época del año
                    p esto genera  demoras en las entregas y es necesario trasladar la carga con ayuda de arrieros de la zona. En este caso, se conoce la temporada de lluvias y lo que ha sucedido anteriormente, esto sería un imprevisto.
          p.ms-4 La suma de los imprevistos no gastados con el tiempo puede ser acumulables y se pueden utilizar como recursos para inversión o crecimiento del patrimonio.
      .row(titulo="Estado de ingresos y egresos")
        .col-md-12.mb-4.mb-md-0.ps-5
          p.ms-4 Este proceso se reconoce con varios nombres: 
            span.text-bold estado financiero, estado de ingresos y egresos, estado de resultados, estado de ingresos y gastos, estado de rendimientos, estado de ganancias y pérdidas, estado de ingresos operativos y gastos
            span ; independiente de su denominación, se entiende como al balance de los movimientos financieros generados en un mes, donde se especifican los dineros que ingresan y salen del flujo de recursos. 
          p.ms-4 Se refleja en cifras los ingresos y egresos durante un período determinado, por tipos de gastos y tipos de ingresos.
      .row(titulo="Resumir el presupuesto")
        .col-md-12.mb-4.mb-md-0.ps-5
          p.ms-4 El resumen corresponde a la generación de un plan que integra, consolida y coordina en términos financieros las operaciones realizadas y los recursos empleados para desarrollarlas, durante un tiempo determinado. Es reflejo de las cifras resumidas para fácil interpretación y comprensión de los directivos.
    .row.my-4.align-items-center(data-aos="fade-down-left")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2 Ejecución del presupuesto
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-left")
        p El presupuesto deberá comenzar el día 1 de enero de cada año, para facilidades en el control y por cambios en las vigencias presupuestales. El dinero de cada año es independiente, es conveniente elaborar el plan cada año por separado. 
        p Las personas encargadas de realizar las movidas presupuestales asignarán a cada departamento los recursos solicitados para su ejecución, y podrá hacerse de forma parcial mensual o anual. Todos los movimientos, pagos inversiones y compras deberán hacerse bajo la autorización del presupuesto anual. En caso tal de surgir cambios, deberán justificarse adecuadamente.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        img(src="@/assets/curso/tema2/imagen11.jpg")
    .row.justify-content-center.mt-5.ms-4.ps-4.ms-md-0.ps-md-0(data-aos="fade-down-right")
      .col-lg-8.col-md-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imgsize(src='@/assets/curso/tema2/fig3.svg')
          .tarjeta.fondo12
            .p-sm-4.ps-0.py-4.pe-3
              p.text-bold Sabías que: 
              p Durante la ejecución es indispensable asignar los gastos a partidas coordinadas desde los costos, para conocer y medir si lo ejecutado corresponde a lo proyectado.
    .row.my-4.align-items-center(data-aos="fade-down-right")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2 Seguimiento del presupuesto
    p.mb-5(data-aos="fade-down-left") En esta sección, es donde se realiza la comparación entre las metas u objetivos planteados al inicio, con los recursos ejecutados, es decir lo que se planeó versus lo que se ejecutó. Este seguimiento se puede realizar de forma periódica, para tomar acciones a tiempo de forma semanal o mensual, y al final del año.  Este proceso hace parte de la gestión presupuestal y como todo seguimiento pretende evaluar constantemente la ejecución.
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12.mb-4(data-aos="fade-down-left")
        img(src="@/assets/curso/tema2/imagen12.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12(data-aos="fade-down-right")
        .cajon.color-secundario.fondo13.p-3.mb-3
          p.mb-0 Los ítems para considerar para el seguimiento deben ser los mismos de la planeación y se mide a través de indicadores.
        p La metodología más empleada para el seguimiento es a través de los informes de gestión presupuestaria. Estos informes pueden ser elaborados por diferentes áreas o departamentos, y reflejan la realidad de la ejecución de los presupuestos. La supervisión constante del logro de las metas es el propósito principal de este paso, y es el instrumento más adecuado para validar la eficacia y eficiencia de la ejecución de los fines institucionales.
    p.mb-5(data-aos="fade-down") Los encargados de realizar la supervisión en la ejecución del presupuesto serán los que realicen las respectivas recomendaciones para mejorar los aspectos necesarios.
    .row.my-4.align-items-center(data-aos="fade-down-left")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-1.col-2
        .row
          .col-xxl-9.col-xl-9.col-lg-9.col-md-11.col-sm-12.col-9
            img(src="@/assets/curso/tema1/fondo2.jpg")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-7.col-sm-10.col-10.ps-0
        h3.mb-0.ms-0.margentitulo2 Liquidación o balance final
    img(data-aos="fade-down-right")(src="@/assets/curso/tema2/imagen13.jpg")
    p.my-5(data-aos="fade-down-left") Este ejercicio se debe realizar una vez finalizada la partida del año, es decir con el cierre de inventarios y demás pagos. Algunas empresas tienen cierres antes de finalizar diciembre, para evitar gastar dinero de otra vigencia con gastos ocasionados en el presente. En este paso, es indispensable hacer un análisis detallado de la ejecución, para validar el cumplimiento y las fallas presentadas. En algunas entidades estatales, la no ejecución de presupuestos genera un castigo, disminuyendo el valor asignado para evitar que no sea usado. 
    separador
    #t_2_4.titulo-segundo.colorsubtitulo(data-aos="fade-down-right")
      h2 2.4 Tipos de presupuestos en empresas
    p.my-5 Existen varios tipos de presupuestos que pueden contener información o estructura semejante, pero que dependiendo de la actividad económica y finalidad de este, se presenta de forma particular. A continuación se pueden conocer:
    SlyderF(data-aos="fade").my-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.fondo14.p-4.sizetarjeta.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema2/slider1.svg')
        p.text-bold.text-center Presupuesto de flujo de caja
        p.text-center Es el más empleados en negocios pequeños. Se caracteriza por tener una delimitación de tiempo a un mes y se desglosan los ingresos y gastos. Sirve para comprobar si el negocio es viable o no. 

      .tarjeta.fondo14.p-4.sizetarjeta.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema2/slider2.svg')
        p.text-bold.text-center Presupuesto de producción
        p.text-center Se emplea en negocios cuya finalidad es la compraventa y se reflejan detalles de la producción relevantes para tomar decisiones. 

      .tarjeta.fondo14.p-4.sizetarjeta.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema2/slider3.svg')
        p.text-bold.text-center Presupuesto maestro
        p.text-center Es empleado por grandes empresas, por medio de éste, se obtienen valores globales de los ítems, su planeación es anual.
      .tarjeta.fondo14.p-4.sizetarjeta.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema2/slider4.svg')
        p.text-bold.text-center Presupuesto de ventas
        p.text-center Es familiar al presupuesto de flujo de caja, allí se detallan las cantidades y se reflejan los beneficios obtenidos por ventas realizadas. 
      .tarjeta.fondo14.p-4.sizetarjeta.mb-3
        .row.justify-content-center.mb-3
          .col-xxl-6.col-xl-6.col-lg-6.col-md-4.col-sm-4.col-5
            img(src='@/assets/curso/tema2/slider5.svg')
        p.text-bold.text-center Presupuesto operativo
        p.text-center Es el presupuesto con el que se puede provisionar la empresa para su operación. Es importante considerar variables que afecten la operación, así no dependan de la empresa, pero permiten no fallar en la estimación  

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
