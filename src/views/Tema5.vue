<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Tipografías empleadas

    .row.justify-content-md-center.mb-4
      .col-lg.justify-content-md-center.align-self-center
        p.mb-5 En este punto del proceso de desarrollo de la pieza gráfica y el arte final de la misma para impresión, se debe tener claro que las tipografías utilizadas en el diseño no estarán instaladas en todos los computadores, por lo que se debe garantizar que los textos no tengan ninguna alteración al abrir los archivos en un equipo distinto a aquel del diseño.
        p.mb-5 Para esto, lo más recomendable es convertir todos los textos a contornos una vez hayan sido revisados y aprobados; esto con el fin de minimizar errores. Es recomendable, además, tener un archivo alterno con los textos en formato tipográfico para hacer correcciones posteriores si es del caso. El proceso de conversión de textos a contornos es sencillo: 
        p.mb-5
      .col-12.col-lg-auto.justify-content-md-center.mb-4 
          figure.imgc.img-300
          img(src='@/assets/tema5/img-1.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')

    .row.justify-content-md-center.mb-4
      .col-7.mb-5
        .col-12.col-lg-auto.justify-content-md-center.mb-4 
          figure.imgc.img-300
          img(src='@/assets/tema5/img-2.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')


      .col-5          
        .ul.lista-ul--color
          li 
            i.fas.fa-caret-right
            p Seleccionar el #[strong Texto] y hacer clic derecho, activar #[strong Crear contornos] o por el panel #[strong Texto – Crear contornos] (figura 24).
          
          li 
            i.fas.fa-caret-right
            p Así, el texto ya no será un elemento editable por medio de la herramienta de  #[strong Texto] sino, un vector.

          li 
            i.fas.fa-caret-right
            p Si por algún motivo no se realiza esta conversión en contornos, se debe conservar una carpeta con las fuentes utilizadas para enviarlas a las empresas donde estén realizando las impresiones y ser instaladas allí, esto como último recurso.          

          

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    //- datosssss
  }),
}
</script>

<style lang="sass" scoped></style>
