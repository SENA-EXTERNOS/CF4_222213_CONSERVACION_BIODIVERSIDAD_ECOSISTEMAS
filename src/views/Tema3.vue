<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo técnico y participativo

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //figcaption Video: Leyenda del video


    separador
    br
    
    .row.justify-content-around.align-items-center

      #instrumentos_y_elementos_de_monitoreo
      .titulo-segundo.color-acento-contenido
        h2 3.1 Instrumentos y elementos de monitoreo
      

      p La ejecución del monitoreo se da gracias al uso de instrumentos específicos que reportan el comportamiento del cuerpo de agua. Es importante tener en cuenta que existen diversas características y condiciones con base en el tipo de agua con que se trabaje (superficial, subterránea, residual), de esta forma se realizará una observación directa y, dependiendo de la fuente, se hará uso de herramientas que reporten los datos de interés. Dentro de estos instrumentos se tienen:
      br
      
      .bloque-carrusel-tarjetas-tema3
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen1-carrusel-tema3.png' alt='AvatarTop')
            h4.texto-tarjetas-carrusel-tema3 Mira hidrométrica:
            p.texto-tarjetas-carrusel-tema3 instrumento que cuenta con una escala graduada para medir las fluctuaciones de agua en un punto determinado de corriente. Se instala sobre la orilla más próxima al sector profundo del cauce.
            br
            br
            br
            br
            br
            br
            br
            br
            br


          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen2-carrusel-tema3.png' alt='AvatarTop')
            h4.texto-tarjetas-carrusel-tema3 Maxímetro:
            p.texto-tarjetas-carrusel-tema3 está asociado a la mira hidrométrica ya que permite establecer el nivel máximo alcanzado por la creciente.
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br
            br


          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
              
                img(src='@/assets/curso/temas/imagen3-carrusel-tema3.png' alt='AvatarTop')
            h4.texto-tarjetas-carrusel-tema3 Limnicontacto o sonda indicadora de nivel:
            p.texto-tarjetas-carrusel-tema3 permite la observación de niveles de pozos en aguas subterráneas. Es un dispositivo simple, constituido por una polea, un contrapeso y un flotador unidos por un cable o cuerda.
            h4.texto-tarjetas-carrusel-tema3 Limnicontacto de sonda luminosa: 
            p.texto-tarjetas-carrusel-tema3 presenta un dispositivo al final que al hacer contacto con el agua emite un impulso eléctrico iluminando una lámpara de señal.
            br

          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen4-carrusel-tema3.png' alt='AvatarTop')
            h4.texto-tarjetas-carrusel-tema3 Sonda de presión: 
            p.texto-tarjetas-carrusel-tema3 realiza las mediciones a través de una célula capacitiva que mide la presión hidrostática de la columna de agua a través de una membrana de presión que la transforma en señal eléctrica.
            br
            br
            br
            br
            br
            br
            br
            br
            br

          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen5-carrusel-tema3.png' alt='AvatarTop')
            
            h4.texto-tarjetas-carrusel-tema3 Limnígrafo mecánico: 
            p.texto-tarjetas-carrusel-tema3 es un equipo que registra los niveles de agua de forma continua. Se encuentra en una caja hermética, protegido de humedad y animales.
            h4.texto-tarjetas-carrusel-tema3 Limnígrafo digital: 
            p.texto-tarjetas-carrusel-tema3 consta de un decodificador, un panel de sensores y una antena con alimentación de batería. Reporta datos de forma casi inmediata mediante registro digital.
            br
            br
            br
            br

                   
    br
    br
    br
    separador


    .row.justify-content-around.align-items-center

      #manejo_de_registros
      .titulo-segundo.color-acento-contenido
        h2 3.2 Manejo de registros
      
     
      .row
        .col-6
          figure
            img(src='@/assets/curso/temas/fondo-tarjeta1-manejo-registros.png').fondo-tarjeta1-manejo-registros
          p.texto1-manejo-registros-tema3 #[strong  Con el objetivo de hacer un correcto uso de la información y tener un registro minucioso de los parámetros establecidos para la medición de cuerpos de agua, es importante y necesario contar con diferentes formatos que establezcan datos claves para ser evaluados. Dichos formatos deberán contar con una serie de datos de identificación (nombre, mes, año, código, nombre de corriente o río). También deben tener varias casillas para poder hacer registro la cantidad de veces necesarias según la temporización que le dé el observador.]
        
        .col-6
          figure
            img(data-aos="fade-left")(src='@/assets/curso/temas/imagen1-manejo-registros-tema3.png').imagen1-manejo-registros-tema3

    br
    br
    br
    br
    
    
    .row.justify-content-around.align-items-center

  
      .row
        .col-6

          figure
            img(src='@/assets/curso/temas/imagen-laboratorio-tema3.png')
        
        .col-6
          p Actualmente se cuenta con aplicaciones que gestionan lo que respecta al recurso. Está, por ejemplo, Creek Watch, que funciona para hacer seguimiento al agua en una determinada región. Por otro lado, también está la aplicación Backwater, que realiza el cálculo del perfil de la lámina de agua en un flujo constante. Open Channel Flow es otra aplicación que realiza el cálculo para vertederos y compuerta, y Fluid Mechanics es otra aplicación que representa gráficamente el nivel del agua.
            br
            | Lo anterior permite afirmar que existen diferentes métodos e instrumentos para la recolección de información con respecto al recurso hídrico. Gestionarlo se hace una tarea fácil ya que se tiene al alcance, no solo la observación y el formato, sino también la tecnología que aporta en la determinación de dicha conducta. Es necesario que se inicie con la exploración de herramientas que permitan controlar el buen uso del recurso hídrico.

    br
    br 
    br
    br 

    .row.justify-content-around.align-items-center
      
      .col-lg-10
        
        .cajon.color-acento-contenido.p-4
          
            p.bloque-texto-cajon-tema2.p-2 Estimado aprendiz: el recurso hídrico es fundamental en los procesos naturales, biológicos y ecosistémicos; por esto  es necesario reconocer las características que tiene su uso sostenible y empezar a generar alternativas que disminuyan el consumo exagerado e irresponsable. Recuerde seguir explorando los temas aquí expuestos, es momento de tener conciencia respecto a este recurso e identificar los puntos importantes de manejo para poder predecir afectaciones medioambientales que dependan de la conducta del mismo. En este componente formativo se realiza un análisis frente a programas de monitoreo y seguimiento que faciliten el acceso a información coherente con respecto a las necesidades educativas ambientales actuales y los eventos hidrológicos que se puedan presentar. De igual manera, se describen algunos de los elementos que se utilizan en los planes de monitoreo, y cómo conducen a obtener una respuesta frente a la caracterización.
            p.p-2 ¡Éxitos en esta experiencia de aprendizaje!
    

</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema3',
  components: { Separador },
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
