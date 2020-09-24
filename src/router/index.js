import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CalculateEnd from "../views/calculate-end.vue";
import Login from "../views/login.vue"
import DefaultLayout from "../layout/default.vue";
import TotalOrder from "../views/totalOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path:"/",
    name:'default',
    component: DefaultLayout,
    children:[
      {
        path: "/totalOrder",
        name: "totalOrder",
        component: TotalOrder,
        meta:{
          cate:'주문관리',
          name:'전체주문내역',
        }
      },
      {
        path: "/",
        name: "home",
        component: Home,
        meta:{
          cate:'정산관리',
          name:'정산예정내역',
        }
      },
      {
        path: "/calculate-end",
        name: "Calculate-end",
        component: CalculateEnd,
        meta:{
          cate:'정산관리',
          name:'정산처리내역',
        }
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
