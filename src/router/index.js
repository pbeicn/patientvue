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
  },
  {
    path: "/card",
    name: "card",
    component: () => import(/* webpackChunkName: "about" */ "../views/card.vue")
  },
  {
    path: "/cardbag",
    name: "cardbag",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cardbag.vue")
  },
  {
    path: "/ma",
    name: "ma",
    component: () => import(/* webpackChunkName: "about" */ "../views/ma.vue")
  },
  {
    path: "/getcard",
    name: "getcard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/getcard.vue")
  },
  {
    path: "/sicklist",
    name: "sicklist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/sicklist.vue")
  },
  {
    path: "/sickinfo",
    name: "sickinfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/sickinfo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
