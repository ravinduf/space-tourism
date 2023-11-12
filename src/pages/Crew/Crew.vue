<script setup>
import PageHeading from '../../components/PageHeading.vue';



</script>
<template>
  <div class="body"></div>
  <PageHeading heading="meet your crew" headingNum="02"/>
  <!-- <h1>Crew</h1> -->
</template>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;

  @apply bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover lg:bg-center
}
</style>