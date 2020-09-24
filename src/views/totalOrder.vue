<template>
  <div class="totalOrder">
    <SearchOptions />    

    <div class="dataSection">
      <div class="table-options">
        <div class="list-number">
          검색결과 <strong>24</strong>건
        </div>
        <div class="range-btns">
          <v-btn text>정렬</v-btn>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>상태</th>
            <th>접수일자</th>
            <th>주문자</th>
            <th>수거주소</th>
            <th>수거희망일</th>
            <th>요청사항</th>
            <th>담당자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 20" :key="item">
            <td>세탁중</td>
            <td>2020-09-20 13:45:12</td>
            <td>박수민</td>
            <td>부산시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티</td>
            <td>2020년 9월 22일 오전수거</td>
            <td>수거용 비닐봉지 가져다주세요</td>
            <td>김용희</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> <!-- totalOrder -->
</template>

<script>
import SearchOptions from '@/components/searchOptions.vue';

export default {
  components:{
    SearchOptions,
  },
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