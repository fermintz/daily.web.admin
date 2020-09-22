import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CalculateEnd from "../views/calculate-end.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      name:'정산예정내역'
    }
  },
  {
    path: "/calculate-end",
    name: "Calculate-end",
    component: CalculateEnd,
    meta:{
      name:'정산처리내역'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
