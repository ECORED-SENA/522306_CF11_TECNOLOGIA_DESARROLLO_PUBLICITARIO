<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Formato final

    .row.justify-content-md-center.mb-4
      .col-lg.justify-content-md-center.align-self-center
        
        p.mb-5 Para realizar impresiones de piezas gráficas, el archivo recomendado será siempre el PDF, este suele ser el favorito teniendo en cuenta que impide que se realicen cambios en textos y tamaños cuando se abre en otro equipo; sin embargo, Adobe Illustrator ofrece una excelente opción para tomar todos los elementos que componen un diseño (imágenes, tipografías, etc.) por medio de la opción #[strong Empaquetar.]

      .col-12.col-lg-auto.justify-content-md-center.mb-4 
          figure.imgc.img-300
          img(src='@/assets/tema7/img-1.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')


    .row.justify-content-md-center.mb-4
      .col.col-lg-10
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Empaquetar").pt-3
            .col-md-12.mb-4.mb-md-0
              figure
                img(src='@/assets/tema7/img-2.svg', alt='Empaquetar')
              br
              p.text-small  Figura 30 - Empaquetar
             
              p Así, la opción Archivo – Empaquetar le ofrece la posibilidad de recopilar todo lo que incluyó en el diseño y crear un archivo completo en caso de que deba enviar el archivo fuente (figura 30).
          
           

          .row(numero="2" titulo="Elementos empaquetados")
            .col-md-12.mb-4.mb-md-0
            

              figure
                img(src='@/assets/tema7/img-3.svg', alt='Elementos empaquetados')
              br
              p.text-small  Figura 31 - Elementos empaquetados
         
              p De esta manera, se crea una carpeta con el nombre y ubicación que se le haya asignado al archivo al guardarlo, conteniendo los elementos presentes en él, dando la posibilidad de editarlo o simplemente revisarlo en otro equipo (figura 31).



          

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
