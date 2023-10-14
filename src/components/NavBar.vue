<script setup>
import { ref, onMounted, onUpdated } from 'vue';
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
  console.log("to",to, "from",from, "next", next)
  path.value = to.path
  next()
})
// const path = ref(paths.home)
// onUpdated(() => {
// })
</script>
<template>
  <section class="relative top-10">
    <nav class="flex flex-row items-center justify-between h-[90px] ">
      <img class="h-[48px] w-[48px]" src="../assets/shared/logo.svg" />

      <div class="flex flex-row justify-around w-[50vw] h-[90px] px-4 bg-[#979797]/20">
        <routerLink to="/" class="link" :class="{'link--active': pathMap.home === path}">
          <span class="link__row">
            <span class="link--bold">00</span> Home
          </span>
        </routerLink>
        <routerLink to="/destination" class="link" :class="{'link--active': pathMap.destination === path}">
          <span class="link__row">
            <span class="link--bold">01</span> Destination
          </span>
        </routerLink>
        <routerLink to="/crew" class="link" :class="{'link--active': pathMap.crew === path}">
          <span class="link__row">
            <span class="link--bold">02</span> Crew
          </span>
        </routerLink>
        <routerLink to="/technology" class="link lg:mr-[150px] md:mr-[30px]" :class="{'link--active': pathMap.technology === path}">
          <span class="link__row">
            <span class="link--bold">03</span> Technology
          </span>
        </routerLink>
      </div>
    </nav>
  </section>
</template>

<style scoped>
.link {
  @apply text-white text-base font-barlow h-full flex flex-col justify-center hover:border-b-2 hover:border-b-white 
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
</style>