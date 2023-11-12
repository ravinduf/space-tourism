<script setup>
import { stringifyQuery } from 'vue-router';


defineProps({
  heading: String,
  headingNum: String,
})
</script>
<template>
  <div
    class="uppercase font-barlow text-base md:text-xl lg:text-[28px] text-center md:text-left md:ml-9 lg:ml-[8rem] mt-3 md:mt-8 tracking-[0.2em] ">
    <span class="text-[#4d5056] mr-2 font-extrabold">{{ headingNum }}</span> {{ heading }}
  </div>
</template>
<style scoped></style>