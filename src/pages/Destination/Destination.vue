<script setup>
import { ref } from 'vue';

import PageHeading from '../../components/PageHeading.vue';
import { destinations } from "./destinations"

const destination = ref(destinations.moon)

const DestinationKeys = {
  mars: 'mars',
  moon: 'moon',
  europa: 'europa',
  titan: 'titan'
}

const checkSelectedDestination = (key) => {
  if (destination.value.key === key) {
    return true
  }
  return false
}

const changeDestination = (key) => {
  if (key) {
    destination.value = destinations[key]
  }
}
</script>

<template>
  <div class="body"></div>
  <PageHeading heading="pick your destination" headingNum="01"/>

  <div class="flex flex-col items-center lg:flex-row lg:gap-[10rem] lg:justify-center">
    <div class="w-[170px] md:w-[300px] lg:w-[445px] mt-10 ">
      <img :src="destination.img" class="w-max h-max" />
    </div>

    <div class="flex flex-col items-center lg:w-[445px]  lg:items-start">
      <div class="uppercase text-sm md:text-base w-2/3 md:w-[40%] lg:w-full flex flex-row justify-around lg:justify-start lg:gap-10 mt-5 md:mt-14 font-barlow">
        <span class="destinationSelect"
          :class="{ 'destinationSelect--active': checkSelectedDestination(DestinationKeys.moon) }"
          @click="changeDestination(DestinationKeys.moon)">moon</span>
        <span class="destinationSelect"
          :class="{ 'destinationSelect--active': checkSelectedDestination(DestinationKeys.mars) }"
          @click="changeDestination(DestinationKeys.mars)">mars</span>
        <span class="destinationSelect"
          :class="{ 'destinationSelect--active': checkSelectedDestination(DestinationKeys.europa) }"
          @click="changeDestination(DestinationKeys.europa)">europa</span>
        <span class="destinationSelect"
          :class="{ 'destinationSelect--active': checkSelectedDestination(DestinationKeys.titan) }"
          @click="changeDestination(DestinationKeys.titan)">titan</span>
      </div>

      <div class="w-4/5 md:w-3/4 lg:w-full text-center lg:text-left mt-6 pb-10 md:pb-20 lg:pb-14 border-b-2 border-b-[#383B4B] ">
        <div class="text-[56px] md:text-[80px] lg:text-[100px] font-bellefair uppercase">{{ destination.key }}</div>
        <div class="font-barlow text-[15px] md:text-base lg:text-lg text-primaryLightBlue tracking-widest">{{
          destination.description }}</div>
      </div>

      <div
        class="w-4/5 lg:w-full flex flex-col items-center mt-10 lg:mt-8 uppercase mb-16 md:mb-8 lg:mb-0 space-y-8 md:space-y-0 md:flex-row md:justify-around lg:justify-start lg:gap-8">
        <div class="space-y-2 md:space-y-0 text-center lg:text-left">
          <div class="destinationTravel__heading">avg. distance</div>
          <div class="destinationTravel__value">{{ destination.avg_distance }}</div>
        </div>
        <div class="space-y-2 md:space-y-0 text-center lg:text-left">
          <div class="destinationTravel__heading">est. travel time</div>
          <div class="destinationTravel__value">{{ destination.est_travel_time }}</div>
        </div>
      </div>
    </div>
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

.destinationSelect {
  @apply pb-2 cursor-pointer hover:border-b-[3px] hover:border-b-white tracking-[0.2em];
}

.destinationSelect--active {
  @apply border-b-white border-b-[3px]
}

.destinationTravel__value {
  @apply text-[28px] font-bellefair
}

.destinationTravel__heading {
  @apply text-sm font-barlow tracking-widest text-primaryLightBlue
}
</style>