<template>
  <v-navigation-drawer width="220" app mobile-breakpoint="0" :permanent="true">
    <div class="navigation fill-height">
      <div class="logo-box" @click="$router.push('/')" v-ripple>
        <div class="logo">
          <img src="@/assets/img/logo-w.png" />
          <h2>데일리세탁</h2>
        </div>
      </div>
      <div class="list" v-for="(items, index) in drawer" :key="index">
        <NavigationItem
          :items="items"
          :index="index"
          :isActive="openMenuIndex === index"
          @activeChange="openMenuIndex = $event"
        />
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import NavigationItem from "@/components/navigation-item.vue";

export default {
  components: {
    NavigationItem,
  },
  data() {
    return {
      openMenuIndex: 0,
      drawer: [
        {
          name: "주문관리",
          icon: "mdi-text-box-outline",
          child: [
            {
              name: "전체주문내역",
              path: "/totalOrder",
            },
            {
              name: "접수완료",
              path: "/",
            },
            {
              name: "수거중",
              path: "/",
            },
            {
              name: "세탁중",
              path: "/",
            },
            {
              name: "배송중",
              path: "/",
            },
            {
              name: "주문취소",
              path: "/",
            },
            {
              name: "추가결제요청",
              path: "/addRequest",
            },
          ],
        },
        {
          name: "파트너관리",
          icon: "mdi-briefcase",
          child: [
            {
              name: "파트너 목록",
              path: "/partners",
            },
            {
              name: "파트너 등록",
              path: "/partner-add",
            },
          ],
        },
        {
          name: "회원관리",
          icon: "mdi-account",
          child: [
            {
              name: "회원목록",
              path: "/member-list",
            },
          ],
        },
        {
          name: "정산관리",
          icon: "mdi-cash-usd-outline",
          child: [
            {
              name: "정산예정내역",
              path: "/calculate",
            },
            {
              name: "정산처리내역",
              path: "/calculate-end",
            },
          ],
        },
        {
          name: "통계",
          icon: "mdi-chart-bar",
          child: [
            {
              name: "매출내역",
              path: "/",
            },
            {
              name: "정산처리내역",
              path: "/",
            },
            {
              name: "정산처리내역",
              path: "/",
            },
            {
              name: "정산처리내역",
              path: "/",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.navigation {
  background: #3b454f;
  border-left: 1px solid #292929;
}

.logo-box {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #323a43;

  .logo {
    text-align: center;

    img {
      height: 60px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 18px;
    }
  }
}
.list {
  position: relative;
  color: #fff;
}
</style>
