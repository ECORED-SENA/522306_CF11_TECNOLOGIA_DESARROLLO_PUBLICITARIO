<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 El arte finalizado
 

    .row.justify-content-around.align-items-center
        
        .col-lg.justify-content-md-center.align-self-center
          
          p.mb-4 En el desarrollo de piezas gráficas intervienen varios actores; si bien el diseñador es el creador y el rol de mayor importancia en el proceso, es necesario entender que hay otros roles que también lo son. Así, se debe recordar que una pieza gráfica es un elemento del proceso de comunicación y que tiene como factores inherentes: un emisor, un código, un canal y un receptor; estos elementos implican que las piezas gráficas respondan a una serie de requisitos que permitan exponerlas de la forma más adecuada y comprensible garantizando que el mensaje no sufra ningún tipo de modificación.

        .col-12.col-lg-auto.justify-content-md-center.mb-4
          img(src="@/assets/tema1/img-1.svg")
    br
    br
    #t_1_1.titulo-segundo.mb-5
      h2 1.1  ¿Qué es el arte finalizado?
    br
    br

    .row.mb-5

      .col-12.col-lg-auto.justify-content-md-center.m-4 
        figure.imgc
          img(src='@/assets/tema1/img-2.svg', alt='Texto que describa la imagen')

      .col-lg.justify-content-md-center.align-self-center
        .cajon.color-primario.p-4.mb-4.fond1.row
          .col-lg.align-self-center
            p El llamado arte final en el diseño gráfico es un proceso que implica la revisión y la preparación de las piezas gráficas para el envío a los diferentes sistemas de impresión y de exposición en medios.

        p En la actualidad, el proceso de arte finalizado se realiza en métodos de impresión “directos a plancha” o CTP, como el formato PDF de Adobe, que es un formato digital que ya está listos para su envío a la imprenta, sin la necesidad de realizar retoques y otro tipo de intervenciones.
        br
        p Estos formatos han simplificado el envío de archivos gráficos a las empresas de impresión y el proceso de arte finalización que realiza el diseñador. Es importante entender que cada proyecto gráfico es distinto y requiere de un proceso de arte final particular, aunque existen algunas normas comunes en todos los diseños que hay que tener en cuenta antes de generar un PDF para impresión.

        br
       
       




  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
