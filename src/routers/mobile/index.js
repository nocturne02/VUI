import VueRouter from "vue-router";

import Login from "#/login/Login.vue";

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login }
  ]
});

export default router;
