<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade-left")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Conservación del agua

    .imagen-fondo-introduccion
      .banner-principal.mb-5(
        :style="{'background-image': `url(${require('@/assets/curso/temas/imagen1-fondo-tema2.png')})`}"
      )
      
        .row.banner-principal__row

          .col-lg-8.col-xxl-6.ps-5.ps-sm-6.py-4.banner-principal__info
            
            p.p-2.texto-introduccion El agua garantiza el sostenimiento de la vida de cualquier especie. Es un recurso finito y por ende es necesario promover un uso responsable y velar todo el tiempo por su conservación. En países con alta población se incrementan los niveles de su demanda, por eso se ocasionan alteraciones en el ecosistema debido al impacto que genera el ser humano en su afán por abastecerse. Lo anterior hace que sea imprescindible aprender a darle un uso sostenible y no acabar con la oportunidad de aprovechamiento que el agua brinda al planeta Tierra. 
            br

          .col-md.col-lg-4
            img(src="@/assets/curso/temas/imagen1-tema2 .png").imagen1-tema2
        
    separador
      
    .row.justify-content-center.mb-4
      
      #manejo_y_uso_sostenible_del_agua
      .titulo-segundo.color-acento-contenido
        h2 2.1  Manejo y uso sostenible del agua

      p Continuar con un uso insostenible del agua tendrá un impacto negativo en la cantidad y la calidad ya que se reducirá la eficiencia y aumentará la contaminación; así, las generaciones futuras se verán amenazadas por la poca disponibilidad de cuencas hídricas, factor que estancará las dinámicas de crecimiento económico propuestas por el desarrollo sostenible.
      
      br
      br
      br
      br
      br
      br
      br
      
      

      .row.justify-content-center.mb-5.bloque-tarjetas-tema2
        .col-lg-11.position-relative
          //h3.mb-4.text-center.txt--purpura Elementos determinantes para el análisis - CAC 
          .avatar
            figure
              img(src="@/assets/curso/temas/imagen-llave-agua-tema2.1.png", alt="alt").imagen-llaveagua-tema2
          .crd.crd--avatarHorizontal.crd--first.py-4.tarjeta1-conectadas-tema2
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/imagen-problematica-tema2.1.png", alt="alt").img100.figura1-tarjetas-conectadas-tema2
              .col
                h5.texto-tarjetas-conectadas-tema2 Problemática
                p.texto-tarjetas-conectadas-tema2 Actualmente la escasez de agua afecta a más del 40% de la población mundial, mientras que otro tanto de la población vive en cuencas en las que la demanda supera la oferta y por tanto se presenta un déficit hídrico. (Minambiente, s.f.) Estos valores son reportados por el Programa de las Naciones Unidas para el Desarrollo (PNUD) con miras a buscar estrategias para generar un manejo adecuado de las fuentes hídricas superficiales, subterráneas y los ecosistemas.
          .crd.crd--avatarHorizontal.py-4.tarjeta2-conectada-tema2
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/imagen-analisis-tema2.1.png", alt="alt").img100.figura1-tarjetas-conectadas-tema2
              .col
                h5.texto-tarjetas-conectadas-tema2 Análisis
                p.texto-tarjetas-conectadas-tema2 Un buen manejo del agua significaría que se diera un flujo ambiental adecuado en el que se regresara al medio ambiente en buen estado para que pudiera ser utilizada nuevamente. Ello significa que es necesario emplear una cantidad adecuada ligada con la disponibilidad y reserva que se debe mantener en las fuentes hídricas con la calidad idónea para ser aprovechada; es decir, con propiedades fisicoquímicas (pH, turbidez, temperatura, etc.) en condiciones normales para el consumo de los seres vivos. Sostener las anteriores condiciones para garantizar la disponibilidad futura del agua requiere de planes de acción inmediatos que busquen una óptima gestión pensando en la demanda y la oferta actual y con proyección a las necesidades del futuro.
          .crd.crd--avatarHorizontal.crd--last.py-4.tarjeta3-conectadas-tema2
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/imagen-solucion-tema2.1.png", alt="alt").img100.figura1-tarjetas-conectadas-tema2
              .col
                h5.texto-tarjetas-conectadas-tema2 Solución
                p.texto-tarjetas-conectadas-tema2 Los planes de gestión deben iniciar por campañas de sensibilización de la población, en las cuales se resalte la importancia de cuidar el agua desde casa, en tareas sencillas del hogar como el lavado, el uso personal como la ducha y en actividades cotidianas que aporten a la preservación y cuidado. De igual forma es necesario que las actividades de tipo industrial reorganicen el consumo, ya sea para tareas de riego o simplemente para la elaboración de productos; por ello es importante considerar la reutilización de aguas lluvia, pensar en programas de agricultura sostenible con la recaptación de aguas y encaminarse en procesos investigativos que fomenten el acceso al agua potable para toda la población.

    br
    br
    br

    .row.justify-content-around.align-items-center(data-aos="flip-right")
      .col-10
        .row.justify-content-around.align-items-center.color-mitad-bloque-texto-destacado-tema2

          .col-5  
            figure
              img(src='@/assets/curso/temas/imagen-boque-texto-destacado-tema2.png', alt="alt").img100.imagen-bloque-texto-destacado-tema2
          
          .col-7
            .bloque-texto-destacado-tema2.p-3
              h4 Uso sostenible del agua
              p.mb-0 El agua es un recurso fundamental para la vida, no obstante, en muchas ocasiones se hace un uso indiscriminado que a futuro se verá reflejado en sequías, enfermedades, inseguridad alimentaria, deforestación y un sinnúmero de consecuencias que desde ya podemos empezar a mitigar con pequeñas acciones como las señaladas a continuación.

    br
    br
    .row.justify-content-around.align-items-center

          figure
            img(src='@/assets/curso/temas/imagen-acciones-para-practicar.png', alt="alt").imagen-fondo-acciones-practicar-tema2

          p Veamos algunas acciones que podemos empezar a practicar desde casa y desde la industria:
          br
          .col-6
              h4 Desde casa:

              ul.lista-ul--color
                li 
                  i.fas.fa-circle
                  | Tiempo máximo en la ducha: 4 minutos
                li 
                  i.fas.fa-circle
                  | Cerrar el grifo durante el cepillado de los dientes
                li 
                  i.fas.fa-circle
                  | Depositar en la cisterna una botella de 1 L colmada de arena
                li 
                  i.fas.fa-circle
                  | Regar el jardín con aspersores y en horas de la mañana
                li 
                  i.fas.fa-circle
                  | Aprovechar el agua de enjuague de la lavadora
                li 
                  i.fas.fa-circle
                  | Depositar residuos en contenedores adecuados
             
          .col-6
            figure
              img(src='@/assets/curso/temas/lavarse-manos-jabon.png', alt="alt").img100.imagen-bloque-texto-destacado-tema2
    br
    .row.justify-content-around.align-items-center

        
        .col-6
          figure
            img(src='@/assets/curso/temas/imagen-desde-la-industria.png', alt="alt").img100.imagen-bloque-texto-destacado-tema2

        .col-6
            h4 Desde la industria:

            ul.lista-ul--color
              li 
                i.fas.fa-circle
                | Captar, tratar y aprovechar agua lluvia
              li 
                i.fas.fa-circle
                | Contar con una disposición adecuada de aguas residuales (no a fuentes hídricas)
              li 
                i.fas.fa-circle
                | Elaboración de materias primas a partir de agua reciclada
              li 
                i.fas.fa-circle
                | Establecer límites de consumo con tendencia a la baja anual
              li 
                i.fas.fa-circle
                | Adquirir baterías de baño ahorradoras
              li 
                i.fas.fa-circle
                | Implementar la agricultura eficiente con sistemas de riego de aprovechamiento de agua
    
    br
    br
    br

    .row.justify-content-around.align-items-center
      
      .col-lg-10
        
        .cajon.color-acento-contenido.p-4
          
            p.bloque-texto-cajon-tema2.p-1 Teniendo en cuenta lo anterior, en 2015 la Organización de las Naciones Unidas adoptó los Objetivos de Desarrollo Sostenible (ODS), específicamente el objetivo seis que plantea: “Garantizar la disponibilidad de agua, su gestión sostenible y el saneamiento para todos”. Y que establece para 2030 “[…] aumentar sustancialmente la eficiencia en el consumo de agua para todos los sectores y lograr una extracción y un abastecimiento sostenible del agua dulce para hacer frente a la escasez y reducir sustancialmente el número de personas que la padecen” (Minambiente, 2018). Así mismo, en el plan de desarrollo ambiental en Colombia se establecen programas de ahorro y uso eficiente del agua con el fin de valorarla, reducir el consumo inadecuado y reutilizarla.
            
    br
    br
    br
    br
    
    
    .row.justify-content-around.align-items-center

      p Veamos a continuación los diferentes programas de ahorro y uso eficiente del agua que se han establecido a través del tiempo:
      p El desarrollo de los programas de ahorro y uso eficiente inicia hacia 1974. Año tras año los programas se han ido actualizando hasta lo que rige en la actualidad; en el gráfico se puede observar su evolución:
      
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/imagen-infografia-puntocaliente.png', alt='Texto que describa la imagen')
            //figcaption Leyenda de la imagen

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="8%" y="44%" numero="1")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente En el año 1974 nace el Código Nacional de Recursos Naturales Renovables mediante el Decreto – Ley 2811 en el que se establece regular la conducta humana respecto al ambiente y los recursos naturales renovables y las relaciones que surgen del aprovechamiento de los mismos.               

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="8%" y="68%" numero="2")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente En los años 1977 y 1978, mediante los decretos 1449 y 1541, respectivamente, se fija la regulación en cuanto al manejo de cauces de agua y el impacto de sustancias contaminantes en las mismas. Así se reiteran las disposiciones y lineamientos del Código Nacional de Recursos Naturales Renovables.

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="8%" y="90%" numero="3")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente Posteriormente, en el año 2015, se dispone el Decreto Único Reglamentario 1076 del sector Ambiente y Desarrollo Sostenible con el fin de compilar y racionalizar las normas de carácter reglamentario que lo rigen, incluyendo las disposiciones del Decreto 1541 de 1978.

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="37.5%" y="49%" numero="4")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente En el año 1997 se expide la Ley 373 en la que se formaliza el programa para el “Uso eficiente y ahorro del agua” con el fin de regular todo plan ambiental regional y municipal enfocado hacia tal sentido

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="37.5%" y="68%" numero="5")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente En el año 2002, el Ministerio de Ambiente, Vivienda y Desarrollo Territorial, desde su Dirección Sectorial, publicó la “Guía de ahorro y uso eficiente del agua”, en la que se presentan las Estrategias AYUEDA para generar una producción más limpia en pro de la preservación del recurso hídrico.

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="37.5%" y="90%" numero="6")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente En el año 2010 el Viceministerio de Ambiente publicó la política nacional para la Gestión integral del recurso hídrico (PNGIRH), con el fin de instituir los objetivos, estrategias, metas, indicadores y líneas de acción estratégica para el manejo del recurso hídrico en el país en un lapso de doce años.


        .tarjeta.tarjetas-info-punto-caliente.p-3(x="67%" y="44%" numero="7")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente Teniendo en cuenta todos los instrumentos normativos hasta esa fecha (2010), el Ministerio de Ambiente y Desarrollo Sostenible elaboró un diagnóstico del grado de implementación de la guía para el período 2012-2016, identificando que es necesaria la actualización teórica con base en lineamientos nacionales e internacionales.

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="67%" y="68%" numero="8")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente En este orden de ideas, en el año 2018 se expiden el Decreto 1090 y la Resolución 1257 que compila el Decreto 1076 de 2015 en lo relacionado con el programa para el uso eficiente y ahorro de agua y su aplicación en los entes territoriales responsables. 

        .tarjeta.tarjetas-info-punto-caliente.p-3(x="67%" y="90%" numero="9")
          //.h5.mb-2 titulo
          p.texto-tarjetas-punto-caliente Para continuar con el programa, en ese mismo año el Departamento Nacional de Planeación (DNP) mediante el Consejo Nacional de Política Económica y Social (CONPES 3934) elaboró la Política de Crecimiento Verde, que tiene como propósito impulsar hacia 2030 el aumento de la productividad y la competitividad económica del país, así como asegurar el uso sostenible de la riqueza natural (DNP, 2018).

    separador
    br

    .row.justify-content-around.align-items-center

      #tecnicas_de_conservacion
      .titulo-segundo.color-acento-contenido
        h2 2.2 Técnicas de conservación

      p Teniendo en cuenta el déficit de agua que se presenta en algunas regiones es necesario buscar alternativas que permitan acceder al recurso para satisfacer necesidades productivas, ecosistémicas y humanas, para ello se aplican unas técnicas, que se describen a continuación, para favorecer la conservación:
      

      figure
        img(src='@/assets/curso/temas/imagen-fondo-slider-tema2.png').imagen-fondo-slider-tema2
      

      .slyderB_bg_01.px-5.py-3.mb-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="01")
                h4.ps-4 Cosecha (<i>water harvesting</i>):
                //h4.ps-4 <i>Cosecha (water harvesting):</i>
                p.ps-4.mb-0 movimiento ancestral que se da mediante la captación, retención, almacenamiento y regulación de agua lluvia con el fin de crear una reserva disponible para las actividades agrícola, ganadera y doméstica. A fin de poner en práctica la técnica es necesario acondicionar el espacio en el cual se va a realizar la recogida y el depósito, dependiendo de la disposición final que se le dará al recurso. Es posible obtener el agua de los techos de las construcciones, en invernaderos, en las parcelas mediante láminas o lonas de plástico aprovechando la inclinación del terreno, en zanjas de infiltración y en reservorios semitechados.
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/imagen1-slider-tema2.png')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="02")
                h4.ps-4 Captación de aguas atmosféricas:
                p.ps-4.mb-0 consiste en la retención de masas de aire con niebla mediante dispositivos conocidos como atrapanieblas. La efectividad de la técnica depende de la temperatura y la humedad del lugar, por ello se puede ejecutar de forma pasiva y activa. Al hablar del método pasivo es claro que no se requiere consumo de energía, es de muy bajo costo y se puede dar en regiones con humedad cercana al 90%, mientras que el método activo se da en regiones con humedad cercana al 60% y requiere de condensadores que generan consumo de energía y por ende el incremento de los costos. (Bautista, et al. (s.f.).
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/imagen2-slider-tema2.png')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="03")
                h4.ps-4 Reforestación: 
                p.ps-4.mb-0 el objetivo es recuperar los acueductos naturales mediante la plantación de árboles en zonas deforestadas recientemente. Para llevarla a cabo de manera correcta es necesario determinar un estudio del suelo y las condiciones climáticas de la zona, definir la especie compatible para el terreno e implementar un método de plantación no invasivo.
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/imagen3-slider-tema2.png')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
              .number(data-number="04")
                h4.ps-4 Preservación de rondas hídricas: 
                p.ps-4.mb-0 es necesario mantener las dinámicas hidrológicas que se dan en los cuerpos de agua, por ello se genera el acotamiento de las zonas de acuerdo con la ubicación geográfica, la influencia en el ecosistema y el beneficio que obtiene la población. De esta manera se delimita el terreno según “la línea de marea máxima”, el cauce permanente y el funcionamiento físico-biótico, para luego determinar la estrategia de manejo ambiental con base en la preservación, la restauración y el uso sostenible.
            .col-6.col-lg-4
              figure
                img(src='@/assets/curso/temas/imagen4-slider-tema2.png')

    separador
    br
    .row.justify-content-around.align-items-center
      
      #diseno_de_estructuras
      .titulo-segundo.color-acento-contenido
        h2 2.3 Diseño de estructuras
      br
      figure
          img(src='@/assets/curso/temas/imagen-fondo-diseno-estructuras.png').imagen-fondo-diseno-de-estructuras

      .row.bloque-diseno-de-estructuras
        .col-8
          p.p-4 #[strong  Para un adecuado manejo y conservación del recurso hídrico se tiene en cuenta una amplia variedad de técnicas y estrategias que buscan promover alternativas de solución a las problemáticas de las comunidades, estas se enmarcan en los ]
            span.etiqueta #[strong "Programas para el uso eficiente y ahorro del agua (PUEAA)" programas a los que deben acceder los usuarios como herramienta en la conformación de planes y proyectos que tengan dentro de sus objetivos el manejo de aguas.]
            | Hay que mencionar también que los entes gubernamentales ambientales del país han construido manuales que le facilitan a la población en general ubicarse en un contexto real con respecto al uso del recurso, buscando sensibilizar y reglamentar el consumo y su aprovechamiento. Así se fomenta la implementación de estructuras híbridas en las que se plantea la utilización de materiales tanto orgánicos como inertes para darle un manejo óptimo a las aguas superficiales y subterráneas bajo parámetros de calidad y sostenibilidad. Dichas estructuras se encuentran inmersas en los planes de manejo ambiental que presentan las entidades encargadas, en donde se plantea el esqueleto de la fuente a impactar con las convenciones y procedimientos a seguir para garantizar un tratamiento acorde con la normativa vigente emitida por el Ministerio de Ambiente y Desarrollo Sostenible.

        .col-4
          figure
          img(src='@/assets/curso/temas/imagen-diseno-estructuras.png').imagen-diseno-de-estructuras

      
          

</template>

<script>
import Separador from '../../node_modules/ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema2',
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
