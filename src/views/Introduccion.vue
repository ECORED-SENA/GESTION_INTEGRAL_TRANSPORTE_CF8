<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark i
      h1 Introducción
    .row.justify-content-center
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12 
        p Cuando una persona desarrolla o piensa crear un negocio, siempre busca obtener una ganancia; como dice el viejo adagio: <i>“nadie hace pan para vender pan”</i>. Es indispensable, que se conozca a profundidad el costo real de los recursos que intervienen dentro de la elaboración, manufactura, promoción y venta final, tal como ya se pudo visualizar en el tema de costos operativos. Al identificar claramente los costos, viene el presupuesto, es decir, “cuánto se va a invertir para…”. 
        p A continuación, se identificará la importancia de establecer el presupuesto de un proyecto, negocio u organización, ya que, aunque tengan finalidades o misiones diferentes, la complejidad de establecer o proyectar correctamente un presupuesto puede ser el éxito o fracaso de dicha inversión. Solo aquellos que establecen correctamente un presupuesto, obtendrán los resultados esperados, 
          span.text-bold el éxito de una buena planeación
          span , ejecución y valoración de un presupuesto está en identificar cada uno de los aspectos contemplados para la producción de sus metas, a través de un centro de costos y proyectar las ganancias o utilidades de la organización.
      .col-xxl-6.col-xl-6.col-lg-6.col-md-12   
        img(src='@/assets/curso/intro/imagen1.jpg')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
