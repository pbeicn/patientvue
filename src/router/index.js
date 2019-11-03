import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import(/* webpackChunkName: "about" */ "../views/reg.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import(/* webpackChunkName: "about" */ "../views/main.vue")
  },
  {
    path: "/saoma",
    name: "saoma",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/saoma.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
