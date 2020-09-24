<template>
  <div class="calculate">
    <div class="loding" v-show="false">
      <v-progress-circular 
        indeterminate
        color="#01a1dd"
        size="60"
        width="4"
      />
      <p>
        <span>요청 내용을 처리하고 있습니다</span>
        <span>잠시만 기다려주세요</span>
      </p>

    </div>
    <div class="list">
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
      <div class="no-list" v-show="items.length === 0">
        ※ 처리할 정산건이 없습니다
      </div>
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
      loading: true,
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
  mounted() {
    setTimeout(() => this.loading = false, 5 * 1000);
  }
};

</script>

<style lang="scss" scoped>


.loding{
  position:absolute;
  width:100%;
  top:50%;
  transform: translateY(-50%);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
  p{
    padding:0px;margin:0px;
    margin-top:30px;
    span{
      display:block;
      font-size:18px;
      line-height:26px;
      color:#292929;
    }
  }
  
}

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

.no-list{
  border:1px solid #e2e2e2;
  padding:20px;
  background: #fff;;
}
</style>
