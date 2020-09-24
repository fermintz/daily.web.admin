<template>
  <div class="calculate-end">

    <SearchOptions />

    <div class="dataSection">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>정산완료일시</th>
            <th>정산대상기간</th>
            <th>기사명</th>
            <th>주문건수</th>
            <th>입금계좌</th>
            <th>정산금액</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>2020.09.21 12:34:53</td>
            <td>2020.09.01 ~ 2020.09.15</td>
            <td class="partner">{{ item.name }}</td>
            <td class="order-number">
              <a @click="calculateList">324 건</a>
            </td>
            <td>우리은행 1002-537-353918</td>
            <td>1,357,000 원</td>
            <td>
              <v-hover v-slot:default="{ hover }">
                <div class="tooltip">
                  <div class="tooltip-box" v-show="hover">
                  안녕하세요 반갑습니다 하하하하하하하 히히히히히히 호호호호
                  </div>
                    <v-icon :color="hover ? '#01a1dd' : ''">mdi-card-text</v-icon>
                </div>
              </v-hover>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination
        data="tableData"
        :nowPage="page"
        :totalPage="totalData.length"
        @change-page="pageChangeEvent($event)"
      />
    </div>

    <CalculateList ref="calculateList"/>
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "@/components/pagination.vue";
import SearchOptions from '@/components/searchOptions.vue';
import CalculateList from '@/components/modal/calculateList.vue';
import { chunk } from "lodash";

export default {
  components: {
    Pagination, SearchOptions,CalculateList
  },
  data() {
    return {
      dates: ["날짜검색", ""],
      datePicker: false,
      tableData: [],
      totalData: [],
      page: 1,
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "/api/contacts",
      params: {
        pageno: 1,
        pagesize: 100,
      },
    })
      .then((res) => {
        console.log(res.data.contacts);
        this.totalData = chunk(res.data.contacts, 20);
        this.tableData = this.totalData[0];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  methods: {
    pageChangeEvent(page) {
      this.page = page;
      this.tableData = this.totalData[page - 1];
    },
    calculateList() {
      this.$refs.calculateList.show(true);
    },
  }
};
</script>

<style lang="scss" scoped>
.dataSection {
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 15px;
  margin-top:10px;

  .pagination {
    margin-top: 20px;
    font-size: 12px;
  }

  .tooltip{
    position:relative;

    .tooltip-box{
      position:absolute;
      background:#fff;
      border:1px solid #e2e2e2;
      width:300px;
      padding:15px;
      right:100%;
      margin-right:10px;
      top:0px;
      z-index:9;
      border-radius:4px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
  }

  
}
</style>
