<template>
  <div class="calculate-end">

    <SearchOptions />

    <div class="section">
      <v-data-table
        :headers="tHead"
        :items="tData"
        loading="#01a1dd"
        loader-height="1"
      >
        <template v-slot:item.orderNumber = "{item}">
          <a @click="calculateList">
            {{item.orderNumber}}
          </a>
        </template>
        <template v-slot:item.memo = "{ item }">
          <v-hover v-slot:default="{ hover }">
            <div class="tooltip">
              <div class="tooltip-box" v-show="hover">
                {{item.memo}}
              </div>
                <v-icon :color="hover ? '#01a1dd' : ''">mdi-card-text</v-icon>
            </div>
          </v-hover>
        </template>
      </v-data-table>
    </div>

    <CalculateList ref="calculateList"/>
  </div>
</template>

<script>
import SearchOptions from '@/components/searchOptions.vue';
import CalculateList from '@/components/modal/calculateList.vue';


export default {
  components: {
    SearchOptions,CalculateList
  },
  data() {
    return {
      dates: ["날짜검색", ""],
      datePicker: false,
      page: 1,
      tHead:[
        {text:'정산완료일시', align:'start', sortable:true,value:'completeDate'},
        {text:'정산대상기간', align:'start', sortable:true,value:'calculateDate'},
        {text:'담당자', align:'start', sortable:true,value:'partnerName'},
        {text:'주문건수', align:'start', sortable:true,value:'orderNumber'},
        {text:'입금계좌정보', align:'start', sortable:true,value:'bankInfo'},
        {text:'메모하기', align:'start',sortable:true,value:'memo'}
      ],
      tData:[
        {
          completeDate:'2020.09.21 12:34:53',
          calculateDate:'2020.09.01 ~ 2020.09.15',
          partnerName:'홍길동',
          orderNumber:135,
          bankInfo:'우리은행 1002-537-353918',
          memo:'등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다'
        },
        {
          completeDate:'2020.09.21 12:11:12',
          calculateDate:'2020.09.01 ~ 2020.09.15',
          partnerName:'김두한',
          orderNumber:128,
          bankInfo:'우리은행 1002-735-221918',
          memo:'등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다 등록된 메모가 없습니다'
        }
      ],
    };
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
    padding:10px;
    right:100%;
    margin-right:10px;
    bottom:0;
    z-index:99999;
    border-radius:4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
  }
}

</style>
