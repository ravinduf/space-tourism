<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// router.beforeEach((to, from, next) => {
//   console.log("to", to, "from", from, "next", next)
//   path.value = to.path
//   next()
// })

const showDropdown = ref(false)
const dropdown = ref(null)
const closeDropdown = (e) => {
  if (dropdown.value && !dropdown.value.contains(e.target) && !e.target.classList.contains('hamburger-icon')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', closeDropdown)
})
</script>
<template>
  <section class="lg:mt-10 hidden md:block md:mt-0 ">
    <div class="hidden lg:block relative top-11 left-[120px]  z-10 h-[1px] w-[34%] bg-[#979797]/50"></div>
    <nav class="flex flex-row items-center justify-between h-[90px] ">
      <img class="h-[48px] w-[48px] ml-8" src="../assets/shared/logo.svg" />

      <div class="flex flex-row justify-around w-[60vw] h-[90px] px-4 backdrop">
        <routerLink to="/" class="link ml-8" active-class="link--active">
          <span class="link__row">
            <span class="link--bold">00</span> Home
          </span>
        </routerLink>
        <routerLink to="/destination" class="link" active-class="link--active">
          <span class="link__row">
            <span class="link--bold">01</span> Destination
          </span>
        </routerLink>
        <routerLink to="/crew" class="link" active-class="link--active">
          <span class="link__row">
            <span class="link--bold">02</span> Crew
          </span>
        </routerLink>
        <routerLink to="/technology" class="link lg:mr-[150px] md:mr-[30px]" active-class="link--active">
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

      <img class="hamburger-icon" src="../assets/shared/icon-hamburger.svg" :class="{ 'hidden': showDropdown }"
        @click="showDropdown = !showDropdown" />
    </nav>
  </section>

  <div class="dropdown backdrop" :class="{ 'hidden': !showDropdown }">
    <!-- <div class="blur-[2px] bg-[#979797]/20 h-[99%] w-[99%] z-[-1] fixed top-0" ></div> -->
    <div class="flex flex-col items-end z-[90] h-full" ref="dropdown">

      <div class="flex flex-row justify-end">
        <img class="h-6 w-6 mr-5 mt-5 " src="../assets/shared/icon-close.svg" @click="showDropdown = !showDropdown" />
      </div>

      <div class="flex flex-col mt-16 w-[90%] ">
        <routerLink to="/" class="dropdown__link" active-class="dropdown__link--active">
          <span class="link--bold">00</span> Home
        </routerLink>
        <routerLink to="/destination" class="dropdown__link" active-class="dropdown__link--active">
          <span class="link--bold">01</span> Destination
        </routerLink>
        <routerLink to="/crew" class="dropdown__link" active-class="dropdown__link--active">
          <span class="link--bold">02</span> Crew
        </routerLink>
        <routerLink to="/technology" class="dropdown__link lg:mr-[150px] md:mr-[30px]"
          active-class="dropdown__link--active">
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
  @apply font-bold mr-2
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