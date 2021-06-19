<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Resolución de imágenes

    .row.justify-content-md-center.mb-4
      .col-lg.justify-content-md-center.align-self-center
        p En muchos momentos se hacen varias versiones de las imágenes que se destinan a la impresión para hacer publicaciones en redes sociales o refuerzo de las campañas a través de e-mail; aunque en ocasiones las piezas gráficas no deben ser de tamaño pequeño. Por ejemplo, un artista gráfico o que debe producir impresiones de fotografías grandes para una galería, requiere una resolución lo más alta posible; sin embargo, puede que cuente con archivos de baja calidad y deba mejorar su resolución. 
        p Hacer que una imagen tenga alta resolución es indispensable para el desarrollo de trabajos gráficos y para ello, los programas de edición que existen en la actualidad permiten aumentar la resolución hasta un cierto punto, sin comprometer la calidad de la imagen. 
        p.mb-5 #[strong A continuación, se ofrece un ejemplo de cómo hacer que una imagen tenga una mayor resolución sin arriesgar la calidad de la misma, teniendo en cuenta estos pasos:]

      .col-12.col-lg-auto.justify-content-md-center.mb-4 
          figure.imgc.img-300
          img(src='@/assets/tema4/img-1.svg', alt='¿Qué es la sobreimpresión y reserva de objetos?')


    .row.justify-content-md-center.mb-4
      .col.col-lg-10
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Resolución de imagen").pt-3
            .col-md-12.mb-4.mb-md-0
              figure
                img(src='@/assets/tema4/img-2.svg', alt='Texto que describa la imagen')
              br
              p.text-small  Figura 18 - resolución de imagen
             
              p Primero, abrir la imagen en #[strong Photoshop – Imagen – Tamaño de Imagen.]
          
           

          .row(numero="2" titulo="Remuestrear")
            .col-md-12.mb-4.mb-md-0
            
              p.text-small.mb-3  Ahora, hay que asegurarse de que en esta ventana desplegable esté seleccionada la casilla Remuestrear (figura 19).
              figure
                img(src='@/assets/tema4/img-3.svg', alt='Texto que describa la imagen')
              br
              p.text-small.mb-3  Figura 19 - Remuestrear
         
              p En la resolución aparece 72 ppp, este valor se debe cambiar a 300 que es la resolución óptima.
             
              p Siempre que se cambie la resolución, las dimensiones de los píxeles se ajustarán de manera acorde, pero la anchura y altura de la imagen seguirán siendo las mismas. De hecho, la cantidad total de píxeles puede aumentar sustancialmente y esto hará que lo haga el tamaño del archivo de la imagen. 


    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Color Lab
      
    .row.justify-content-md-center.mb-4
      .col.col-lg-10      
        p.mb-5 El sistema de “Color Lab” permite realizar de otra forma el realce de los detalles de una imagen. 
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Ventana Color Lab").pt-3
            .col-md-12.mb-4.mb-md-0
              figure
                img(src='@/assets/tema4/img-4.svg', alt='Ventana Color Lab')
              br
              p.text-small.mb-3  Figura 20 - Ventana Color Lab

              .ul.lista-ul--color
                li 
                  i.fas.fa-caret-right
                  p Para habilitarlo, hay que dirigirse a la pestaña #[strong Imagen], hacer clic en #[strong Modo] y luego elegir #[strong Color Lab.]
          
                li 
                  i.fas.fa-caret-right
                  p Se debe tener habilitada la ventana de #[strong Canales] (figura 20).
             
          
           

          .row(numero="2" titulo="Luminosidad Color Lab").pt-3
            .col-md-12.mb-4.mb-md-0
              figure
                img(src='@/assets/tema4/img-5.svg', alt='Ventana Color Lab')
              br
              p.text-small.mb-3  Figura 21 - Luminosidad Color Lab
              
              p Dentro del modo #[strong Color Lab], debe haber cuatro canales visibles. Solo es necesario que esté habilitado el canal #[strong Luminosidad] (figura 21), por lo que se deben desactivar los otros canales haciendo clic sobre el icono “ojo” de cada uno. 
         
          .row(numero="3" titulo="Enfoque suavizado").pt-3
            .col-md-12.mb-4.mb-md-0
              figure
                img(src='@/assets/tema4/img-6.svg', alt='Enfoque suavizado')
              br
              p.text-small.mb-3  Figura 22 - Enfoque suavizado
              
              p A continuación, se debe mejorar el canal “Luminosidad” con el filtro #[strong Enfoque suavizado] y para ello, en la pestaña #[strong Filtros] hacer clic en #[strong Enfoque suavizado] para abrir el cuadro de diálogo del filtro (figura 22). Lo recomendado es aumentar la #[strong Cantidad] a, por lo menos, el 110%, mantener #[strong Radio] en 12.4 px y habilitar la opción #[strong Quitar para desenfoque gaussiano.]
                      
          .row(numero="4" titulo="Resultado enfoque suavizado").pt-3
            .col-md-12.mb-4.mb-md-0
              figure
                img(src='@/assets/tema4/img-7.svg', alt='Resultado enfoque suavizado')
              br
              p.text-small  Figura 23 - Resultado enfoque suavizado
              
              p En esencia, el filtro #[strong Enfoque suavizado] enfatiza los detalles más pequeños dentro de la imagen, sin afectar de manera negativa la calidad de esta.                  
          


          

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
