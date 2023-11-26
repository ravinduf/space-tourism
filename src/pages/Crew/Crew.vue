<script setup>
import { ref } from 'vue';
import PageHeading from '../../components/PageHeading.vue';
import { crew } from './crew'

const crewMember = ref(crew.commander)

const crewMemberKeys = {
  pilot: 'pilot',
  commander: 'commander',
  specialist: 'specialist',
  engineer: 'engineer',
}
const changeCrewMember = (crewMemberKey) => {
  crewMember.value = crew[crewMemberKey]
}

const checkSelectedCrewMember = (key) => {
  if (crewMember.value.key === key) {
    return true
  }
  return false
}
</script>
<template>
  <div class="body"></div>
  <PageHeading heading="meet your crew" headingNum="02" />
  <!-- <h1>Crew</h1> -->

  <div class="flex flex-col justify-center items-center mt-10 w-[90%] 
      md:flex-col-reverse md:w-[70%] mx-auto md:justify-between md:h-full 
      lg:w-[83%] lg:h-full lg:flex-row-reverse lg:mt-0 lg:items-stretch">
    <div class="w-full mt-6 md:mt-8 md:h-full lg:mt-0">
      <div class="w-fit h-fit mx-auto ">
        <img :src="crewMember.img" :alt="crewMember.designation" class="h-[222px]  md:h-[532px] lg:h-[540px] w-auto md:mt-8 lg:mt-0">
      </div>
      <div class="border-b-2 border-b-[#383B4B] w-full h-full mb-8 md:hidden md:border-none md:mt-10 md:h-full md:mb-0"></div>
    </div>

    <div
      class="w-full text-center tracking-widest md:tracking-wider md:flex md:flex-col-reverse lg:text-left ">

      <div class="flex flex-row w-1/4 justify-between mx-auto mb-5 md:mt-8 lg:ml-0 lg:mt-32 lg:mb-14">
        <div class="crewSelector" @click="changeCrewMember(crewMemberKeys.commander)"
          :class="{ 'crewSelector--active': checkSelectedCrewMember(crewMemberKeys.commander) }"></div>

        <div class="crewSelector" @click="changeCrewMember(crewMemberKeys.specialist)"
          :class="{ 'crewSelector--active': checkSelectedCrewMember(crewMemberKeys.specialist) }"></div>

        <div class="crewSelector" @click="changeCrewMember(crewMemberKeys.pilot)"
          :class="{ 'crewSelector--active': checkSelectedCrewMember(crewMemberKeys.pilot) }"></div>

        <div class="crewSelector" @click="changeCrewMember(crewMemberKeys.engineer)"
          :class="{ 'crewSelector--active': checkSelectedCrewMember(crewMemberKeys.engineer) }"></div>
      </div>
      <div>
        <h3 class="font-bellefair text-base uppercase text-[#787a7f] md:text-2xl md:mb-4 lg:mb-4">{{ crewMember.designation }}
        </h3>
        <h1 class="font-bellefair text-2xl uppercase mb-4 md:text-[40px] md:mb-6">{{ crewMember.name }}</h1>
        <p class="font-barlow text-[15px] text-primaryLightBlue md:text-base ">{{ crewMember.description }}</p>

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
  opacity: 0.5;

  @apply bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover
}

.crewSelector {
  @apply bg-[#464950] h-[10px] w-[10px] rounded hover:bg-[#c4c4c4] transition-colors cursor-pointer
}

.crewSelector--active {
  @apply bg-white
}
</style>