<template>
  <div class="addRequest">
    <div class="dataSection">
      <v-data-table
        :headers="tHead"
        :items="tData"
      >
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tHead:[
        {text:'요청일시', align:'start', sortable:true, value:'date'},
        {text:'주문자', align:'start', sortable:false, value:'userName'},
        {text:'수거주소', align:'start', sortable:false, value:'userAddress'},
        {text:'요청사유', align:'start', sortable:false, value:'requestText'},
        {text:'요청금액', align:'start', sortable:true, value:'requestPrice'},
        {text:'담당자', align:'start', sortable:false, value:'partnerName'},
      ],
      tData:[
        {
          date:'2020-09-20 13:45:12',
          userName:'홍길동',
          userAddress:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티',
          requestText:'와이셔츠 세탁 오염이 심해 고급세탁을 진행하였습니다',
          requestPrice:4500,
          partnerName:'김용희',
        },
        {
          date:'2020-09-19 15:32:45',
          userName:'이성계',
          userAddress:'부산광역시 동래구 온천로 24-1',
          requestText:'고급세탁진행',
          requestPrice:5500,
          partnerName:'왕건',
        },
        {
          date:'2020-09-21 19:21:11',
          userName:'박수민',
          userAddress:'부산광역시 북구 구남언덕로 15 3층',
          requestText:'고객이 요청하신 상품 외 다른 상품 추가',
          requestPrice:3500,
          partnerName:'김두한',
        }
      ],
    }
  },
};

</script>

<style lang="scss" scoped>
.dataSection{padding:20px;}
</style>
