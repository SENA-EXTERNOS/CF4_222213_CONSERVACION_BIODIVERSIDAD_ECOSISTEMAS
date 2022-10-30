<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span
            i.fas.fa-puzzle-piece
        h1 Actividad didáctica

    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/imagen-actividad-didactica-cf4.png", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-botones
          h2 Arrastrar y soltar
        p.mb-4 Lea detenidamente cada uno de los términos y definiciones, luego arrastre y suelte el término con la definición que corresponda. Para ello tenga en cuenta el componente formativo denominado #[strong  “Manejo y conservación del recurso hídrico”] y afiance los conocimientos adquiridos.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad_didáctica_CF4_T_Manejo y conservación del recurso hídrico - Storyline output/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
