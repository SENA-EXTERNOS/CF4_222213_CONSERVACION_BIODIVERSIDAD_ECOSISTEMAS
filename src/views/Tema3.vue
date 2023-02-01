<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo técnico y participativo

    p El monitoreo constante del recurso hídrico, garantiza verificar posibles alteraciones, hacer reconocimientos, mirar su comportamiento, entre otros procesos técnicos que son fundamentales; observe el siguiente video que le permitirá ahondar en el tema:

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //figcaption Video: Leyenda del video


    .row.mt-5
      h3 Instrumentos y elementos de monitoreo
      

      p La ejecución del monitoreo se da gracias al uso de instrumentos específicos que reportan el comportamiento del cuerpo de agua. Es importante tener en cuenta que existen diversas características y condiciones con base en el tipo de agua con que se trabaje (superficial, subterránea, residual), de esta forma se realizará una observación directa y, dependiendo de la fuente, se hará uso de herramientas que reporten los datos de interés. Dentro de estos instrumentos se tienen:
      
      .bloque-carrusel-tarjetas-tema3.mt-5.mb-5
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen1-carrusel-tema3.png' alt='AvatarTop')
              
            h4.texto-tarjetas-carrusel-tema3 Mira hidrométrica:
            p.texto-tarjetas-carrusel-tema3 instrumento que cuenta con una escala graduada para medir las fluctuaciones de agua en un punto determinado de corriente. Se instala sobre la orilla más próxima al sector profundo del cauce.
            p.texto-oculto-tarjetas-tema3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quos eveniet quia explicabo, est saepe nostrum, quasi quisquam voluptatum ut maxime porro. Quam ullam culpa rem accusamus totam vel. Obcaecati, elit



          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen2-carrusel-tema3.png' alt='AvatarTop')
            h4.texto-tarjetas-carrusel-tema3 Maxímetro:
            p.texto-tarjetas-carrusel-tema3 está asociado a la mira hidrométrica ya que permite establecer el nivel máximo alcanzado por la creciente.
            p.texto-oculto-tarjetas-tema3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia excepturi recusandae ex aut expedita dolorem vero beatae quos ducimus blanditiis illum, ullam asperiores animi? Ad obcaecati iusto dicta deleniti eius, elit. Quia excepturi recusandae ex aut expedita dolorem vero beatae quos ducimus blanditiis


          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
              
                img(src='@/assets/curso/temas/imagen3-carrusel-tema3.png' alt='AvatarTop')
            h4.texto-tarjetas-carrusel-tema3 Limnicontacto o sonda indicadora de nivel:
            p.texto-tarjetas-carrusel-tema3 permite la observación de niveles de pozos en aguas subterráneas. Es un dispositivo simple, constituido por una polea, un contrapeso y un flotador unidos por un cable o cuerda.
            h4.texto-tarjetas-carrusel-tema3 Limnicontacto de sonda luminosa: 
            p.texto-tarjetas-carrusel-tema3 presenta un dispositivo al final que al hacer contacto con el agua emite un impulso eléctrico iluminando una lámpara de señal.
            

          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen4-carrusel-tema3.png' alt='AvatarTop')
            h4.texto-tarjetas-carrusel-tema3 Sonda de presión: 
            p.texto-tarjetas-carrusel-tema3 realiza las mediciones a través de una célula capacitiva que mide la presión hidrostática de la columna de agua a través de una membrana de presión que la transforma en señal eléctrica.
            p.texto-oculto-tarjetas-tema3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam nesciunt modi, ratione dicta expedita vero. Sit eos tempore placeat adipisci est. Iusto fugiat, impedit sapiente provident repellat impedit sapiente provident repellat
            
            

            
          .tarjeta.color-tarjetas-carrusel-tema3.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen5-carrusel-tema3.png' alt='AvatarTop')
            
            h4.texto-tarjetas-carrusel-tema3 Limnígrafo mecánico: 
            p.texto-tarjetas-carrusel-tema3 es un equipo que registra los niveles de agua de forma continua. Se encuentra en una caja hermética, protegido de humedad y animales.
            h4.texto-tarjetas-carrusel-tema3 Limnígrafo digital: 
            p.texto-tarjetas-carrusel-tema3 consta de un decodificador, un panel de sensores y una antena con alimentación de batería. Reporta datos de forma casi inmediata mediante registro digital.
            p.texto-oculto-tarjetas-tema3 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
 


                   
    .row.mt-5
      h3 Manejo de registros
      
     
      .row
        .col-6
          figure
            img(src='@/assets/curso/temas/fondo-tarjeta1-manejo-registros.png').fondo-tarjeta1-manejo-registros
          p.texto1-manejo-registros-tema3 Con el objetivo de hacer un correcto uso de la información y tener un registro minucioso de los parámetros establecidos para la medición de cuerpos de agua, es importante y necesario contar con diferentes formatos que establezcan datos claves para ser evaluados. Dichos formatos deberán contar con una serie de datos de identificación (nombre, mes, año, código, nombre de corriente o río). También deben tener varias casillas para poder hacer registro la cantidad de veces necesarias según la temporización que le dé el observador.
        
        .col-6
          figure
            img(data-aos="fade-left")(src='@/assets/curso/temas/imagen1-manejo-registros-tema3.png').imagen1-manejo-registros-tema3

    
    
    .row.justify-content-around.align-items-center.mt-5

  
      .row
        .col-6

          figure
            img(src='@/assets/curso/temas/imagen-laboratorio-tema3.png')
        
        .col-6
          p Actualmente se cuenta con aplicaciones que gestionan lo que respecta al recurso. Está, por ejemplo, Creek Watch, que funciona para hacer seguimiento al agua en una determinada región. Por otro lado, también está la aplicación Backwater, que realiza el cálculo del perfil de la lámina de agua en un flujo constante. Open Channel Flow es otra aplicación que realiza el cálculo para vertederos y compuerta, y Fluid Mechanics es otra aplicación que representa gráficamente el nivel del agua.

          p Lo anterior permite afirmar que existen diferentes métodos e instrumentos para la recolección de información con respecto al recurso hídrico. Gestionarlo se hace una tarea fácil ya que se tiene al alcance, no solo la observación y el formato, sino también la tecnología que aporta en la determinación de dicha conducta. Es necesario que se inicie con la exploración de herramientas que permitan controlar el buen uso del recurso hídrico.

    .row.justify-content-around.align-items-center.mt-5
      
      .col-lg-10
        
        .cajon.color-acento-contenido.p-4
          
            p.bloque-texto-cajon-tema2.p-2 Recuerde indagar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
    

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
