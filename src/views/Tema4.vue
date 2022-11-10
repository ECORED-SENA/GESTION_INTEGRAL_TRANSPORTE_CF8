<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 4
      h1 Matriz de decisión: exportación

    img(data-aos="fade-down-left")(src="@/assets/curso/tema4/imagen1.jpg")
    p.my-5(data-aos="fade-down-right") Es un gráfico que refleja la relación entre cierta información sensible para la toma de decisiones, permitiendo analizar e identificar los datos de forma conjunta. Esta herramienta es muy empleada para la planificación con calidad y para seleccionar un producto o un servicio, ya que se comparan las características, los objetivos, y procesos entre varias alternativas.
    .row.mb-4.align-items-center(data-aos="fade-down-left")
      .col-xxl-1.col-xl-1.col-lg-1.col-md-1.col-sm-2.col-2
        .row
          .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-6.col-8
            img.p-0.p-sm-0.p-xl-1.p-xxl-2(src="@/assets/curso/tema1/fondo3.svg")
      .col-xxl-9.col-xl-9.col-lg-9.col-md-9.col-sm-10.col-10.ps-0
        h4.mb-0.ms-0.margentitulo Elementos
    p.mb-5 A continuación, se presentan los elementos más representativos que caracterizan a las matrices de decisión:
    .row.justify-content-around.mb-5
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-12.fondo14.p-5.sombratarjeta.mb-4.sizetarjeta2
        .row.justify-content-center.mb-4
          .col-md-6.col-sm-4.col-4
            figure
              img.imgsize2.m-auto(src='@/assets/curso/tema4/imagen2.svg')
          
        h4.text-center Estrategias
        p.text-center Se presentan las variables controladas de las alternativas que son comparables.
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-12.fondo17.p-5.sombratarjeta.mb-4.sizetarjeta2
        .row.justify-content-center.mb-4
          .col-md-6.col-sm-4.col-4
            figure
              img.imgsize2.m-auto(src='@/assets/curso/tema4/imagen3.svg')
          
        h4.text-center Estados de la naturaleza
        p.text-center Se presentan las variables no controladas, es decir aquellos sucesos en los que no se puede influir (tiempos de aduana, desastres naturales en zonas de riesgo o determinadas épocas). 
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-12.fondo18.p-5.sombratarjeta.mb-4.sizetarjeta2
        .row.justify-content-center.mb-4
          .col-md-6.col-sm-4.col-4
            figure
              img.imgsize2.m-auto(src='@/assets/curso/tema4/imagen4.svg')
          
        h4.text-center Probabilidades
        p.text-center Se presenta a manera de porcentaje o indicador la posibilidad de que alguna de las variables no controladas pueda suceder.
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-12.fondo19.p-5.sombratarjeta.mb-4.sizetarjeta2
        .row.justify-content-center.mb-4
          .col-md-6.col-sm-4.col-4
            figure
              img.imgsize2.m-auto(src='@/assets/curso/tema4/imagen5.svg')
          
        h4.text-center Resultados
        p.text-center Una vez finalizada y evaluada cada alternativa se comparan los resultados para ahí si tomar la decisión más conveniente.

    .row.ampliar.fondo20.justify-content-center.px-5.align-items-center
      p.my-5 Ejemplo de matriz de decisión:
      .col-xxl-8.col-xl-8.col-lg-8.col-md-12.mb-md-5.mb-3(data-aos="fade")
        .tabla-c
          table
            tr.bordetabla1
              <td class="bordetabla1" colspan="4">
                h3.text-center Traslado de artesanías Socotá - puerto de Barranquilla
              </td>
            tr.fondo23
              td.bordetabla1
                h4.text-center Medio de transporte
              td.bordetabla1 
                h4.text-center Aéreo
              td.bordetabla1
                h4.text-center Terrestre
              td.bordetabla1
                h4.text-center Fluvial
            tr.fondotransparente
              td.bordetabla1
                p Bloqueos por invierno
              td.bordetabla1 
                p.text-center Cierre de aeropuertos
              td.bordetabla1
                p.text-center Derrumbes en guaduas
              td.bordetabla1
                p.text-center Atrapamientos o golpes
            tr.fondotransparente
              td.bordetabla1
                p Probabilidad de bloqueos
              td.bordetabla1
                p.text-center 5%
              td.bordetabla1
                p.text-center 10%
              td.bordetabla1
                p.text-center 3%
            tr.fondotransparente
              td.bordetabla1
                p Tiempo empleado días 
              td.bordetabla1
                p.text-center 1
              td.bordetabla1
                p.text-center 2
              td.bordetabla1
                p.text-center 2
            tr.fondotransparente
              td.bordetabla1
                p Costo invertido 
              td.bordetabla1
                p.text-center 5'000.000
              td.bordetabla1
                p.text-center 2'500.000
              td.bordetabla1
                p.text-center 2'200.000

      .col-xxl-4.col-xl-4.col-lg-4.col-md-12.mb-5(data-aos="fade") 
        p Con la matriz de decisión anterior, la más conveniente de acuerdo con la necesidad del cliente que se prioriza en costo y en tiempo, será el transporte fluvial.     
</template>

<script>
export default {
  name: 'Tema4',
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
