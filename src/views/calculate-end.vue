<template>
  <div class="calculate-end">
    <div class="search-box">
        <div class="option">
          <div class="date">
            <v-menu
              v-model="datePicker"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field 
                  v-model="dateRangeText"
                  flat
                  dense
                  background-color="#fff"
                  hide-details
                  readonly
                  outlined
                  class="text-input"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  placeholder="날짜검색"
                />
              </template>
              <v-date-picker
                range
                v-model="dates" 
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="datePicker = false">Cancel</v-btn>
                <v-btn text color="primary" @click="datePicker = false">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </div>
          <div class="keyword">
            <v-text-field
              flat
              dense
              background-color="#fff"
              hide-details
              outlined
              class="text-input"
              prepend-inner-icon="mdi-magnify"
              placeholder="키워드 검색"
            />
          </div>
        </div>
        <v-btn text>
          <span>검색</span>
        </v-btn>
      </div>
    <div class="data-table"> 
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>정산완료일시</th>
            <th>정산대상기간</th>
            <th>서비스지역</th>
            <th>기사명</th>
            <th>주문건수</th>
            <th>입금계좌</th>
            <th>정산금액</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{item.completeDate}}</td>
            <td>{{item.calculateDate}}</td>
            <td>{{item.serviceArea}}</td>
            <td>{{item.partnerName}}</td>
            <td>{{item.orderNumber}} 건</td>
            <td>{{item.bankInfo}}</td>
            <td>{{item.calculatePrice}}</td>
            <td>{{item.memo}}</td>
          </tr>
        </tbody>
      </table>

      <Pagination data="tableData"/>
      
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/pagination.vue';


export default {
  components:{
    Pagination,
  },
  data(){
    return{
      dates: ['날짜검색' , ''],
      datePicker:false,
      tableData:[
        {
          completeDate:'2020.09.16 12:34:54',
          calculateDate:'2020.09.01 ~ 2020.09.15',
          serviceArea:'부산 금정구 장전1동',
          partnerName:'박수민',
          orderNumber:'345건',
          bankInfo:'우리은행 1002-537-353918',
          calculatePrice:2280000,
          memo:'-',
        },
        {
          completeDate:'2020.09.02 15:24:41',
          calculateDate:'2020.08.15 ~ 2020.08.31',
          serviceArea:'부산 금정구 장전1동',
          partnerName:'박수민',
          orderNumber:'345건',
          bankInfo:'우리은행 1002-537-353918',
          calculatePrice:2280000,
          memo:'-',
        },
        {
          completeDate:'2020.09.02 15:29:17',
          calculateDate:'2020.08.15 ~ 2020.08.31',
          serviceArea:'부산 금정구 장전1동',
          partnerName:'박수민',
          orderNumber:'345건',
          bankInfo:'우리은행 1002-537-353918',
          calculatePrice:2280000,
          memo:'-',
        },
      ]
    }
  },

  computed:{
    dateRangeText(){
      return this.dates.join(' ~ ')
    }
  }
}
</script>

<style lang="scss" scoped>

.search-box{
  display:flex;
  justify-content: space-between;
  background:#fff;
  padding:15px;
  border:1px solid #e2e2e2;
  border-bottom:0px;

  .option{
    display:flex;
    >div{margin-right:10px;}

    .text-input{
      font-size:12px;
      width:250px;
    }
  }

  .v-btn{
    background:#292929;
    color:#fff;
  }
}

.data-table{
  background:#fff;
  border:1px solid #e2e2e2;
  padding:15px;

  table{
    width:100%;
    border:1px solid #e2e2e2;
    border-top:1px solid #01a1dd;
    border-bottom:0px;
    border-right:0px;

    thead{
      th{
        border-bottom:1px solid #c2c2c2;
        border-right:1px solid #e2e2e2;
        padding:12px;
        font-weight:500;
        font-size:13px;
        text-align:left;
      }
    }
    tbody{
      tr:nth-child(2n){
        background:#f8f8f8;
      }
      td{
        text-align:left;
        border-bottom:1px solid #e2e2e2;
        border-right:1px solid #e2e2e2;
        letter-spacing: 0;
        padding:12px;
        font-size:12px;
      }
    }
  }

  .pagination{
    margin-top:20px;
    font-size:12px;
  }
}



</style>