<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Sangrado
    .row.justify-content-md-center.align-self-center.m-5
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Jo8osXCK5sc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
           
    .row.justify-content-md-center.mb-4
      .col.col-lg-10
      
        .bloque-texto-d.color2.p-4
          .bloque-texto-d__texto
            i.fas.fa-quote-left
            h3.text-regular El sangrado es un área de seguridad que se debe añadir a cualquier diseño que tenga como finalidad una impresión y se realiza agregando unos milímetros a su tamaño; esto se hace para evitar que al cortar con la guillotina queden partes blancas en algún lado de la impresión dañando su estética. Por ejemplo, si el diseño en cuestión es un brochure, cuyo tamaño final será 15 x 10 cm, el tamaño que se debe mandar a imprenta debe ser 15,6 x 10,6 cm; de ese modo, se estará ampliando el diseño 3 mm por cada lado. Esos 3 mm serán el sangrado de diseño.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h4.mb-0 Espino (2017)

    .row.justify-content-md-center
      .col.col-lg-6
        p.mb-5
          figure.imgc.mb-5
            img(src='@/assets/tema3/img-1-1.svg', alt='Sangrado')
            figcaption Figura 15 - Uso correcto de sangría

      p.mb-5.p-5 Como se ve en la figura 14, el área en color magenta es el sangrado del documento y corresponde a una zona de 3 mm por cada lado, fuera del diseño final; es decir, estos 3 mm se perderán cuando se haga el corte en la guillotina con lo que se garantizará que no haya bordes blancos en la impresión final.

    #t_3_1.titulo-segundo.mb-5
      h2 3.1 ¿Cómo aplicar el sangrado a un diseño?

    p.mb-5 Una vez configurada el área de sangrado, esta se debe llenar con cualquier elemento que toque el borde del diseño, como por ejemplo en la figura 15.

    .row.justify-content-md-center
      .col.col-lg-9
        p.mb-5
          figure.imgc.mb-5
            img(src='@/assets/tema3/img-2.svg', alt='Sangrado')
            p.mt-1 Figura - 15 Uso correcto de sangria
    p.mb-5 En la parte izquierda de la figura 15 donde está la palabra NO se puede ver que la foto (área en color gris) llega justo al borde del diseño sin ocupar el área de sangrado; en ese caso está mal aplicado el sangrado y es lo que posteriormente causará problemas en el corte final. En la parte derecha (SÍ) se ve la manera correcta de utilizar el sangrado, es decir se lleva la imagen hasta el borde y el diseño hasta el área de sangrado y, de ese modo, cuando se corte por la línea negra será imposible que queden bordes blancos.


    #t_3_2.titulo-segundo.mb-5
      h2 3.2 ¿Cuánto debe medir el sangrado?
    
    .row.justify-content-around.align-items-centers  
      SlyderC.mb-5(:datos="datosSlyder3")
          
    
          

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder3: [
      {
        titulo: 'Área de sangrado',
        texto:
          'No hay una medida estándar para tal fin; sin embargo, lo habitual es dejar 2 o 3 mm que son suficientes en la mayoría de los casos; para trabajos que requieran troquelado, se suelen dejar entre 5 y 10 mm.',

        imagen: require('@/assets/tema3/img-3.svg'),
        leyendaImagen: 'Figura 16',
      },
      {
        titulo: 'Área de sangrado',
        texto:
          'El sangrado es un fundamento de preimpresión que debe conocer todo diseñador y aplicarlo correctamente ahorrará problemas y dolores de cabeza, tanto con la imprenta como con los clientes. <br><br>  Además, se puede determinar un área de sangrado para una pieza completa, desde que se configure el documento como se muestra en la siguiente figura.',
        imagen: require('@/assets/tema3/img-4.svg'),
      },
      {
        titulo: 'Área de sangrado',
        texto:
          'Ahora, se realizará un ejemplo con una pieza real con unos sencillos pasos:<br><br><div class="ul lista-ul--color"><li><i class="fas fa-caret-right"></i><p>Traer la imagen que cumplirá la función de fondo del anuncio a Adobe Illustrator en la ruta:<strong> Archivo – Colocar – Seleccionar imagen – Incrustar.</strong> </p></li></div><div class="ul lista-ul--color"><li><i class="fas fa-caret-right"></i><p>Ahora, se debe escalar la imagen teniendo en cuenta que llegue hasta la margen roja (sangrado) que se configuró inicialmente (figura 17).</p></li></div>',
        imagen: require('@/assets/tema3/img-5.svg'),
        leyendaImagen: 'Figura 17',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
