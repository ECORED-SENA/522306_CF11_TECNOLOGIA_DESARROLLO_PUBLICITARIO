<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Troqueles

    
    .row.justify-content-md-center.align-self-center.m-3.mb-5
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/zIXVQlNU6AU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Troqueles
 

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
