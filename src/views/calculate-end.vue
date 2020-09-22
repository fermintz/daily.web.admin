<template>
  <div class="calculate-end">
    <div class="search-box">
      <div class="option">
        <div class="date">
          <v-text-field 
            flat
            dense
            background-color="#f2f2f2"
            hide-details
            outlined
            class="text-input"
            prepend-inner-icon="mdi-calendar"
          />
        </div>
        <div class="keyword">
          <v-text-field
            flat
            dense
            background-color="#f2f2f2"
            hide-details
            outlined
            class="text-input"
            prepend-inner-icon="mdi-alpha-k-circle-outline"
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
          </tr>
        </thead>
        <tr>
          <td>2020.09.16 12:34:54</td>
          <td>2020.09.01 ~ 2020.09.15</td>
          <td>부산 금정구 장전1동</td>
          <td>박수민</td>
          <td>345건</td>
          <td>우리은행 1002-537-353918</td>
          <td>2,280,000원</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.search-box{
  display:flex;
  justify-content: space-between;
  background:#fff;
  padding:10px;
  border:1px solid #e2e2e2;
  margin-bottom:10px;

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
  padding:20px;
  background:#fff;
  border:1px solid #e2e2e2;
  table{
    width:100%;
    th{font-weight:500;}
    td{text-align:center;letter-spacing: 0;}
  }
}

</style>