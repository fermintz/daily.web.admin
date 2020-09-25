import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Calculate from "../views/calculate.vue";
import CalculateEnd from "../views/calculate-end.vue";
import Login from "../views/login.vue"
import DefaultLayout from "../layout/default.vue";
import TotalOrder from "../views/totalOrder.vue";
import AddRequest from "../views/addRequest.vue";
import OrderDetail from "../views/orderDetail.vue";

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
        path: "/",
        name: "home",
        component: Home,
        meta:{
          cate:'메인',
          name:'메인화면',
        }
      },
      {
        path: "/totalOrder",
        name: "totalOrder",
        component: TotalOrder,
        meta:{
          cate:'주문관리',
          name:'전체주문내역',
        },
      },
      {
        path:"/totalOrder/detail",
        name:"orderDetail",
        component: OrderDetail,
        meta:{
          cate:'주문관리',
          name:'상세보기',
        },
      },
      {
        path: "/addRequest",
        name: "addRequest",
        component: AddRequest,
        meta:{
          cate:'주문관리',
          name:'추가요청내역',
        }
      },
      {
        path: "/calculate",
        name: "calculate",
        component: Calculate,
        meta:{
          cate:'정산관리',
          name:'정산예정내역',
        }
      },
      {
        path: "/calculate-end",
        name: "calculate-end",
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
