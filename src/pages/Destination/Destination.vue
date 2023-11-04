<template>
  <div class="body"></div>
    <div class="uppercase font-barlow text-base text-center mt-3">
      <span class="text-[#4d5056]">01</span> pick your destination
    </div>
</template>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;

  @apply bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover lg:bg-center
}
</style>