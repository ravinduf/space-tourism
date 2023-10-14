<template>
  <nav class="flex flex-row items-center justify-between h-[90px]">
    <img class="h-[48px] w-[48px]" src="../assets/shared/logo.svg"/>
    
    <div class="flex flex-row justify-around w-[50vw] h-[90px] px-4 bg-[#979797]/20">
      <routerLink to="/" class="link link--active">
        <span class="link__row">
          <span class="link--bold">00</span> Home
        </span>
      </routerLink>
      <routerLink to="/destination" class="link link--active">
        <span class="link__row">
          <span class="link--bold">01</span> Destination
        </span>
      </routerLink>
      <routerLink to="/crew" class="link link--active">
        <span class="link__row">
          <span class="link--bold">02</span> Crew
        </span>
      </routerLink>
      <routerLink to="/technology" class="link lg:mr-[150px] md:mr-[30px] link--active">
        <span class="link__row">
          <span class="link--bold">03</span> Technology
        </span>
      </routerLink>
    </div>
  </nav>
</template>

<style scoped>
.link {
  @apply text-white text-base font-barlow h-full flex flex-col justify-center  
}

.link--active {
  @apply hover:border-b-2 hover:border-b-white active:border-b-2 active:border-b-white
}
.link__row {
  @apply flex flex-row justify-between;
}
.link--bold {
  @apply font-bold mr-1
}

</style>