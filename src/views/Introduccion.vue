<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade-left")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .imagen-fondo-introduccion
      .banner-principal.mb-5(
        :style="{'background-image': `url(${require('@/assets/curso/temas/Imagen-fondo-introduccion.png')})`}"
      )
    
        .row.banner-principal__row

          .col-lg-8.col-xxl-6.ps-5.ps-sm-6.py-4.banner-principal__info
            
            p.p-2.texto-introduccion Apreciado aprendiz, bienvenido a este componente formativo, el cual está enfocado en el conocimiento de los diferentes ecosistemas estratégicos, los mecanismos de conservación del agua, las técnicas de conservación y el manejo sostenible de los recursos. Se hará un recorrido para estudiar las técnicas, parámetros, instrumentos y registros necesarios, al momento de aplicar el monitoreo del recurso hídrico. 

            p.p-2.texto-introduccion En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


          .col-md.col-lg-4
            img(src="@/assets/curso/temas/imagen-introduccion.svg").imagen-introduccion
    
    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/f0LrE7QMelo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
