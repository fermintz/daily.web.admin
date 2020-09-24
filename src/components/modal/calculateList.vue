<template>
  <v-dialog
    v-model="visible"
    max-width="960"
  >
    <v-card>
      <v-card-title>
        정산 상세보기
      </v-card-title>
      <v-card-text>
        <div class="dataInfo">
          <table>
            <tr>
              <th>정산완료일시</th>
              <td>2020.09.21 12:34:54</td>
              <th>정산기간</th>
              <td>2020.09.01 ~ 2020.09.15</td>
            </tr>
            <tr>
              <th>은행정보</th>
              <td>우리은행 1002-537-353-918</td>
              <th>담당자</th>
              <td>박수민</td>
            </tr>
          </table>
        </div>
        <div class="dataSection">
          <v-data-table
            :headers="tHead"
            :items="tData"
            loding="#01a1dd"
            loader-height="2"
          >
          </v-data-table>
        </div>
      </v-card-text>
      <v-card-actions style="background:#01a1dd">
        <v-spacer></v-spacer>
        <v-btn text dark @click="show(false)">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from "@/mixins/modal.js";

export default {
  mixins: [ModalMixin],
  data(){
    return{
      page:1,
      tHead:[
        {text:'주문일', align:'start', sortable:true, value:'userOrderDate'},
        {text:'주문자', align:'start', sortable:true, value:'userName'},
        {text:'주문금액', align:'start', sortable:true, value:'orderPrice'},
        {text:'추가금액', align:'start', sortable:true, value:'addPrice'},
        {text:'배송비', align:'start', sortable:true, value:'deliveryPrice'},
      ],
      tData:[
        {
          userOrderDate:'2020년 9월 21일 13:45:22',
          userName:'홍길동',
          orderPrice:54000,
          addPrice:5000,
          deliveryPrice:3500,
        },
        {
          userOrderDate:'2020년 9월 19일 12:25:54',
          userName:'궁예',
          orderPrice:34000,
          addPrice:5000,
          deliveryPrice:3500,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .dataInfo{
    margin-bottom:30px;

    table{
      table-layout: fixed;
      border-spacing: 0;
      width:100%;
      border:1px solid #e2e2e2;
      border-right:0px;
      border-bottom:0px;

      th{
        width:150px;
        height:40px;
        border-bottom:1px solid #e2e2e2;
        font-size:12px;
        text-align:left;
        font-weight:500;
        background:#f8f8f8;
        vertical-align: top;
        padding:10px;
      }
      td{
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
        padding:10px;
      }
    }
  }
  .v-card-actions{
    background: #01a1dd;
  }
</style>