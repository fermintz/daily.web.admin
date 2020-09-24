<template>
  <div class="totalOrder">
    <OrderDetail ref="orderDetail"/>
    <SearchOptions />    

    <div class="dataSection">
      <div class="table-top">
        <div class="number">
          검색결과 <strong>3</strong>건
        </div>
        <div class="align">
          -
        </div>
      </div>
      <v-data-table
        loading="#01a1dd"
        loader-height="1"
        :headers="tHead"
        :items="tData"
        :items-per-page="10"
      >
        <template v-slot:item.detail="{item}">
          <v-btn text @click="orderDetail" class="outline">{{item.detail}}</v-btn>
        </template>
      </v-data-table>
    </div>
  </div> <!-- totalOrder -->
</template>

<script>
import SearchOptions from '@/components/searchOptions.vue';
import OrderDetail from '@/components/modal/orderDetail.vue';

export default {
  data(){
    return{
      tHead:[
        {text:'상태', align:'start', sortable:false, value:'state'},
        {text:'접수일자', align:'start', sortable:true, value:'orderDate'},
        {text:'주문자', align:'start', sortable:false, value:'userName'},
        {text:'수거주소', align:'start', sortable:false, value:'userAddress'},
        {text:'수거희망일', align:'start', sortable:true, value:'requestDate'},
        {text:'요청사항', align:'start', sortable:false, value:'requestText'},
        {text:'주문금액', align:'start', sortable:true, value:'orderPrice'},
        {text:'담당자', align:'start', sortable:false, value:'partnerName'},
        {text:'상세보기', align:'start', sortable:false, value:'detail'},
      ],
      tData:[
        {
          state:'세탁중',
          orderDate:'2020-09-20 13:45:12',
          userName:'홍길동',
          userAddress:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티',
          requestDate:'2020년 9월 22일 오전수거',
          requestText:'수거용 비닐봉지 가져다 주세요',
          orderPrice:34500,
          partnerName:'김용희',
          detail:'상세보기',
        },
        {
          state:'세탁중',
          orderDate:'2020-09-19 15:32:45',
          userName:'이성계',
          userAddress:'부산광역시 동래구 온천로 24-1',
          requestDate:'2020년 9월 23일 오전수거',
          requestText:'-',
          orderPrice:57500,
          partnerName:'김용희',
          detail:'상세보기',
        },
        {
          state:'세탁중',
          orderDate:'2020-09-21 19:21:11',
          userName:'박수민',
          userAddress:'부산광역시 북구 구남언덕로 15 3층',
          requestDate:'2020년 9월 24일 오전수거',
          requestText:'문앞에 둘게요',
          orderPrice:19900,
          partnerName:'김용희',
          detail:'상세보기',
        }
      ],
    }
  },
  components:{
    SearchOptions,
    OrderDetail
  },
  methods:{
    orderDetail(){
      this.$refs.orderDetail.show(true)
    }
  }
}
</script>

<style lang="scss" scoped>


.dataSection{
  padding:20px;
  background:#fff;
  border:1px solid #e2e2e2;
  margin-top:10px;

  .table-options{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:20px;

    .list-number{
      strong{color:#d22828;font-weight:500;letter-spacing: 0;}
    }
    .range-btns{
      .v-btn{
        border:1px solid #c2c2c2;
        height:28px;
      }
    }
  }

}

</style>