<template>
  <div class="body"></div>

  <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:w-[75%] lg:mx-auto mt-4 md:mt-20 lg:mt-[30vh]">
    <div class="w-4/5 md:w-[60%] lg:w-[36%] text-center lg:text-left ">
      <div class="text-base md:text-2xl lg:text-3xl font-barlow text-primaryLightBlue tracking-widest uppercase">So, you want to
        travel to</div>
      <div class="text-7xl md:text-[150px] font-bellefair uppercase my-4 md:my-5">Space</div>
      <div class="font-barlow text-[15px] lg:text-lg md:text-base text-primaryLightBlue md:tracking-widest">Let’s face it; if you
        want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!</div>
    </div>

    <div
      class="mt-[160px] md:mt-[220px] lg:mt-10 w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:h-[274px] lg:w-[274px] bg-white text-[#0B0D17] flex flex-col font-bellefair text-2xl lg:text-3xl uppercase justify-center items-center rounded-full">
      <span>
        Explore
      </span>
    </div>
  </div>
</template>

<style scoped>
.body {
  /* background-image: url("../assets/home/background-home-desktop.jpg"); */
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;

  @apply bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover lg:bg-center
}
</style>