<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Colores de impresión

    p.mb-4 Sobre este tema se debe tener presente lo siguiente para conocer en mayor medida todo lo relacionado con el color y que se explicarán en detalle:

    #t_2_1.titulo-segundo
      h2 2.1  Conversión de imágenes RGB – CMYK
      
    p.mb-4 Como es sabido, el modo de color usado para impresión es CMYK; sin embargo, es común encontrar fotografías en modo RGB, por lo cual se hace necesario realizar la conversión de la siguiente forma:

    .row.justify-content-around.align-items-center.p-5
      SlyderC.mb-5(:datos="datosSlyder1")
    
    Separador

    #t_2_2.titulo-segundo.mb-5
      h2 2.2  Reservas
    
    h3.mb-5 ¿Qué es la sobreimpresión y reserva de objetos?
    .row
      .col-12.col-lg-auto.justify-content-md-center.m-4 
        figure.imgc
          img(src='@/assets/tema2/img-5.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')

      .col-lg.justify-content-md-center.align-self-center
        p.mb-4 A continuación, se describe este tema, basado en lo indicado por Cevagraf (2013) y se ilustra esta parte con un ejemplo real realizado en Adobe Illustrator.
        p.mb-4 La reserva se utiliza cuando debe superponerse un objeto a otro; por ejemplo, cuando se desea imprimir un objeto en primer plano sobre un fondo, en este caso se puede elegir entre dos opciones:
      
    
    .row.justify-content-md-center.align-self-center.mb-5
      .col-6.flex
        .fond2
          .col-lg-auto.col-12.justify-content-md-center.align-self-center.p-4.m-3
            br
            br
            h4.text-center.text-center.mb-4 Sobreimpresión
            figure.imgc.mb-5.img-300
              img(src='@/assets/tema2/img-6.svg', alt='¿Sobreimpresión?')
            br
            p.mb-4.text-center Imprimir el objeto directamente sobre el fondo.
      .col-6.flex
        .fond2
          .col-lg-auto.col-12.justify-content-md-center.align-self-center.p-4.m-3
            br
            br
            h4.text-center.text-center.mb-4 Reserva
            figure.imgc.mb-5.img-300
              img(src='@/assets/tema2/img-7-1.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')
            br
            p.mb-4.text-center Dejar un hueco con la forma que identifica a ese objeto e imprimirlo sobre el espacio en blanco en el área vacía, esta es la reserva (figura 5).

    h3.titulo-tercero.mb-3 La sobreimpresión
    p.mb-5 Como se observa en la figura 5, en la parte de “sobreimpresión”, el objeto del primer plano se imprime sobre el objeto de fondo generando un nuevo color debido a la mezcla de las tintas de los dos objetos que se superponen. Ahora bien, la sobreimpresión se realiza sobre los objetos de fondo; por lo tanto, se imprime una tinta sobre otra.

    h3.titulo-tercero.mb-3 La reserva
    p En la misma figura 5, pero en “reserva”, el objeto tendrá el color que se le ha asignado en el diseño digital sin alterarse el color, debido a que será impreso directamente en el papel en blanco porque se ha reservado el espacio para dicho fin.

    p.mb-5 En los programas actuales las reservas se crean por defecto facilitando el proceso de preprensa. Crear reservas es muy conveniente porque la superposición genera colores indeseados; sin embargo, la sobreimpresión puede utilizarse como un recurso para crear efectos especiales de mezcla o para evitar la aparición de huecos entre colores u objetos debidos a la falta de registro.
    .row.justify-content-md-center.align-self-center.m-3.mb-5
      figure.imgc.img-300
          img(src='@/assets/tema2/img-8-1.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')

    
    h3.titulo-tercero El trapping o reventado
      .row.justify-content-md-center.align-self-center.m-3.mb-5
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9yUYan3AdjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Barniz UV

    .row
      .col-12.col-lg-auto.justify-content-md-center.m-4 
        figure.imgc
          img(src='@/assets/tema2/img-9.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')

      .col-lg.justify-content-md-center.align-self-center
        p.mb-4 Este método de ‘barniz UV’ (tinta de secado con rayos ultravioleta), consiste en imprimir barniz en determinadas partes (totales o parciales a través de una reserva), para crear un efecto brillante, o con apariencia de relieve si se hace sobre una zona en particular como un logo o un texto; usado de forma creativa, el barniz UV refuerza una imagen y la resalta.

        p.mb-4 Para imprimir barniz UV se debe realizar la impresión de dos archivos por separado: el que contiene toda la pieza y aquel en el cual solo se dejan los elementos que llevará el barniz (reserva UV).

    .row.justify-content-around.align-items-center.p-5  
      SlyderC.mb-5(:datos="datosSlyder2")
      


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Imagen en Photoshop',
        texto: 'Abrir una imagen en Adobe Photoshop (figura 1).',

        imagen: require('@/assets/tema2/img-1.svg'),
        leyendaImagen: 'Figura 1',
      },
      {
        titulo: 'Modo RGB',
        texto:
          'Dar clic en <strong>Imagen – Modo</strong>, aquí se nota que, efectivamente, la imagen está en RGB (figura 2).',
        imagen: require('@/assets/tema2/img-2.svg'),
        leyendaImagen: 'Figura 2',
      },
      {
        titulo: 'Conversión a CMYK',
        texto:
          'Seleccionar <strong>Color CMYK</strong> y, a continuación, se abrirá la siguiente ventana, donde hará clic en <strong>Ok</strong> (figura 3).',
        imagen: require('@/assets/tema2/img-3.svg'),
        leyendaImagen: 'Figura 3',
      },
      {
        titulo: 'Modo CMYK',
        texto:
          'Aquí se evidencia que el modo de color de la imagen ha cambiado (figura 4).',
        imagen: require('@/assets/tema2/img-4.svg'),
        leyendaImagen: 'Figura 4',
      },
    ],

    datosSlyder2: [
      {
        titulo: 'Archivo UV',
        texto:
          '<div class="ul lista-ul--color"><li><i class="fas fa-caret-right"></i><p>En el archivo a imprimir se borrará lo que desea que tenga el barniz; es decir, dejará únicamente lo que no lleva el barniz y en el archivo UV quedará solamente lo que llevará el barniz (figura 11).</p></li></div><br>',

        imagen: require('@/assets/tema2/img-10.svg'),
        leyendaImagen: 'Figura 11',
      },
      {
        titulo: 'Color UV',
        texto:
          '<div class="ul lista-ul--color"><li><i class="fas fa-caret-right"></i><p>A continuación, los elementos que llevará el barniz deben ser convertidos a un color uniforme: creando una nueva muestra en el panel de <strong>muestras</strong>.</p></li></div><div class="ul lista-ul--color"><li><i class="fas fa-caret-right"></i><p>	Ahora, se debe marcar el <strong>tipo de color</strong> como <strong>tinta plana </strong>y el <strong>modo de color</strong> como CMYK y el nombre de la nueva muestra como “Color UV” para identificarlo fácilmente. Luego, se debe seleccionar el color que se quiere siempre y cuando sea un color al 100%, sin mezclas; por ejemplo, 100% cian o 100% magenta (figura 12).</p></li></div><br>',
        imagen: require('@/assets/tema2/img-11.svg'),
        leyendaImagen: 'Figura 12',
      },
      {
        titulo: 'Textos en contornos',
        texto:
          '<div class="ul lista-ul--color"><li><i class="fas fa-caret-right"></i><p>Se deben convertir todos los textos a contornos así: hacer clic <strong> en texto – crear contornos</strong> o por <strong>clic derecho – crear contornos.</strong></p></li></div> <div class="ul lista-ul--color"><li><i class="fas fa-caret-right"></i><p>	Por último, ambos archivos deben enviarse a la imprenta para ser procesados correctamente.</p></li></div><br>',
        imagen: require('@/assets/tema2/img-12.svg'),
        leyendaImagen: 'Figura 13',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
