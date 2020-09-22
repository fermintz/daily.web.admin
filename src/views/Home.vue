<template>
  <div class="home">
    <div class="list-top">
      <div class="number">
        미정산 건수 <span>24</span> 건
      </div>
      <div class="tip">
        ※전체매출액 = (주문금액 + 추가결제금액 + 배송비)
      </div>
    </div>  

    <div class="list-items" v-for="(item, index) in items" :key="index">
      <CalculateItem :item="item"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CalculateItem from '@/components/calculate-item.vue';

export default {
  name: "Home",
  components: {
    CalculateItem,
  },

  data(){
    return{
      items:[
        {
          name:'first'
        },
        {
          name:'second'
        },
        {
          name:'second'
        },
        {
          name:'second'
        },
        {
          name:'second'
        }
      ]
    }
  },
};

</script>

<style lang="scss" scoped>
.list-top{
  display:flex;
  justify-content: space-between;
  align-items: center;
  font-size:14px;
  margin-bottom:10px;

  .number{
    span{color:#d22828;}
  }
  .tip{
    color:#888;
    font-size:12px;
  }
}
</style>
