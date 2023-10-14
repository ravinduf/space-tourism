import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue"
import Destination from "./pages/Destination.vue"
import Crew from "./pages/Crew.vue"


const routes = [
  { path: '/', component: Home },
  { path: '/destination', component: Destination },
  { path: '/crew', component: Crew },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})