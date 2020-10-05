import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Calculate from "../views/calc/calculate.vue";
import CalculateEnd from "../views/calc/calculate-end.vue";
import Login from "../views/login.vue"
import DefaultLayout from "../layout/default.vue";
import TotalOrder from "../views/order/totalOrder.vue";
import OrderDetail from "../views/order/detail.vue";
import AddRequest from "../views/order/addRequest.vue";
import Partners from "../views/partner/partners.vue";
import PartnerAdd from "../views/partner/partner-add.vue";
import MemberList from "../views/member/member-list.vue";

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
          name:'추가결제요청',
        }
      },
      {
        path: "/partners",
        name: "partners",
        component: Partners,
        meta:{
          cate:'파트너관리',
          name:'파트너 목록',
        }
      },
      {
        path: "/partner-add",
        name: "partner-add",
        component: PartnerAdd,
        meta:{
          cate:'파트너관리',
          name:'파트너 등록',
        }
      },
      {
        path: "/member-list",
        name: "member-list",
        component: MemberList,
        meta:{
          cate:'회원관리',
          name:'회원목록',
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
