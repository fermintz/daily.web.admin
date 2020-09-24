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
              <th>담당자</th>
              <td>박수민</td>
              <th>은행정보</th>
              <td>우리은행 1002-537-353-918</td>
            </tr>
          </table>
        </div>
        <div class="dataSection">
          <div class="table-top">
            <div class="number">
              주문 <strong>324</strong>건
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>주문일</th>
                <th>주문자</th>
                <th>결제금액</th>
                <th>추가결제금액</th>
                <th>배송비</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 10" :key="item">
                <td>2020년 9월 21일 13:45:21</td>
                <td>홍길동</td>
                <td>35,000 원</td>
                <td>3,000 원</td>
                <td>3,500 원</td>
              </tr>
            </tbody>
          </table>
          <v-pagination
            v-model="page"
            :length="5"
            style="margin-top:20px;"
            color="#01a1dd"
          />
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
      page:1
    }
  }
}
</script>

<style lang="scss" scoped>
  .dataInfo{
    margin-bottom:20px;
    table{
      border-spacing: 0;
      width:100%;
      border:1px solid #e2e2e2;
      border-right:0px;
      border-bottom:0px;
      th{
        width:130px;
        border-right:1px solid #e2e2e2;
        padding:10px;
        border-bottom:1px solid #e2e2e2;
        font-size:13px;
        text-align:left;
        font-weight:500;
        background:#f7fafb;
      }
      td{
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
        padding:10px;
      }
    }
  }

  .dataSection{

    .table-top{
      display:flex;
      align-items: center;
      height:40px;
      
      .number{
        strong{
          color:#d22828;
        }
      }
    }
  }

  .v-card-actions{
    background: #01a1dd;
  }
</style>