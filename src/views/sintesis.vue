<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-titulo-sexto
      h4.texto-titulo-sintesis Conservación de la biodiversidad y los ecosistemas.
      p.texto-titulo-sintesis Síntesis: manejo y conservación del recurso hídrico

    br

    p.mb-5 Después de terminar es necesario revisar esta síntesis de todo lo que se trató para tener una mirada resumida de su ruta de conocimiento a través de este componente formativo.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/imagen-sintesis-Cf4.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis-cf4.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
