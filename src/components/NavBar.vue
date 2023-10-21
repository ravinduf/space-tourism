<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const path = ref("/");
const pathMap = {
  home: '/',
  destination: '/destination',
  crew: '/crew',
  technology: '/technology'
}

router.beforeEach((to, from, next) => {
  console.log("to", to, "from", from, "next", next)
  path.value = to.path
  next()
})

const showDropdown = ref(false)
</script>
<template>
  <section class="lg:mt-10 hidden md:block md:mt-0 ">
    <nav class="flex flex-row items-center justify-between h-[90px] ">
      <img class="h-[48px] w-[48px] ml-4" src="../assets/shared/logo.svg" />

      <div class="flex flex-row justify-around w-[50vw] h-[90px] px-4 backdrop">
        <routerLink to="/" class="link" :class="{ 'link--active': pathMap.home === path }">
          <span class="link__row">
            <span class="link--bold">00</span> Home
          </span>
        </routerLink>
        <routerLink to="/destination" class="link" :class="{ 'link--active': pathMap.destination === path }">
          <span class="link__row">
            <span class="link--bold">01</span> Destination
          </span>
        </routerLink>
        <routerLink to="/crew" class="link" :class="{ 'link--active': pathMap.crew === path }">
          <span class="link__row">
            <span class="link--bold">02</span> Crew
          </span>
        </routerLink>
        <routerLink to="/technology" class="link lg:mr-[150px] md:mr-[30px]"
          :class="{ 'link--active': pathMap.technology === path }">
          <span class="link__row">
            <span class="link--bold">03</span> Technology
          </span>
        </routerLink>
      </div>
    </nav>
  </section>

  <section class="block md:hidden pt-3 px-3">
    <nav class="flex flex-row justify-between items-center p-3">
      <img class="h-[40px] w-[40px]" src="../assets/shared/logo.svg" />

      <img class="" src="../assets/shared/icon-hamburger.svg" :class="{ 'hidden': showDropdown }"
        @click="showDropdown = !showDropdown" />
    </nav>
  </section>

  <div class="dropdown backdrop" :class="{ 'hidden': !showDropdown }">
    <!-- <div class="blur-[2px] bg-[#979797]/20 h-[99%] w-[99%] z-[-1] fixed top-0" ></div> -->
    <div class="flex flex-col items-end z-[90] h-full">

      <div class="flex flex-row justify-end">
        <img class="h-6 w-6 mr-5 mt-5 " src="../assets/shared/icon-close.svg" @click="showDropdown = !showDropdown" />
      </div>

      <div class="flex flex-col mt-16 w-[90%] ">
        <routerLink to="/" class="dropdown__link" :class="{ 'dropdown__link--active': pathMap.home === path }">
          <span class="link--bold">00</span> Home
        </routerLink>
        <routerLink to="/destination" class="dropdown__link"
          :class="{ 'dropdown__link--active': pathMap.destination === path }">
          <span class="link--bold">01</span> Destination
        </routerLink>
        <routerLink to="/crew" class="dropdown__link" :class="{ 'dropdown__link--active': pathMap.crew === path }">
          <span class="link--bold">02</span> Crew
        </routerLink>
        <routerLink to="/technology" class="dropdown__link lg:mr-[150px] md:mr-[30px]"
          :class="{ 'dropdown__link--active': pathMap.technology === path }">
          <span class="link--bold">03</span> Technology
        </routerLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply text-white text-base font-barlow h-full flex flex-col justify-center hover:border-b-2 hover:border-b-white transition-colors duration-500 ease-in-out
}

.link--active {
  @apply border-b-2 border-b-white
}

.link__row {
  @apply flex flex-row justify-between;
}

.link--bold {
  @apply font-bold mr-1
}

.backdrop {
  /* backdrop-filter: blur(40.7742px); */
  @apply backdrop-blur-2xl bg-[#ffffff0a]
}

.dropdown {
  /* Note: backdrop-filter has minimal browser support */
  @apply h-[100vh] w-[60vw] absolute right-0 top-0
}


.dropdown__link {
  @apply text-lg my-3 font-barlow z-10 text-white
}

.dropdown__link--active {
  @apply border-r-4 border-r-white transition-colors duration-500 ease-in-out z-20
}
</style>