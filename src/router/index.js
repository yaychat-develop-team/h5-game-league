import {
    createRouter,
    createWebHashHistory,
  } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
  },
 
];

const router = createRouter({
  history: createWebHashHistory('/crystal-quest/'),
  routes: routes,
});

export default router;