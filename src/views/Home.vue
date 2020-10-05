<template>
  <div class="home">
    <div class="section state">
      <v-row>
        <v-col
          :cols="2" 
          v-for="(item, index) in ['접수완료','수거중','세탁중','배송중','주문취소','추가결제요청']"
          :key="index"
        >
          <dl v-ripple>
            <dt>
              <span>{{item}}</span>
              <v-icon>mdi-chevron-right-circle</v-icon>
            </dt>
            <dd>
              <strong>24</strong>
              <span>건</span>
            </dd>
          </dl>
        </v-col>
      </v-row>
    </div>

    <div class="section">
      <dl class="order-chart">
        <dt>
          <h4>주문통계</h4>
          <div>
            <span class="today">
              <label>오늘 주문</label>
              <strong>10건</strong>
            </span>
            <span class="week">
              <label>이번주 주문</label>
              <strong>132건</strong>
            </span>
          </div>
        </dt>
        <dd>
          <LineChart :chartData="chartData" :options="options" />
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/chart/line.vue';

export default {
  components:{
    LineChart,
  },
  data(){
    return{
      chartData: {
        labels:[
          '1일', '2일', '3일', '4일','5일','6일','7일','8일','9일'
        ],
        datasets:[
          {
            label:'일자별 주문',
            backgroundColor:'rgba(227,0,118,0.1)',
            borderColor:'rgba(225,0,118,1)',
            borderWidth:1,
            data:[
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      },
      options: {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                stacked: true
            }]
        },
      }
    }
  },
  methods:{
    getRandomInt(){
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style lang="scss" scoped>

.section{
  h4{
    font-size:18px;
    font-weight:500;
    letter-spacing: -0.7px;
  }
}

.order-chart{
  dt{
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom:10px;

    span{
      margin-left:30px;
      label{margin-right:10px;}
      strong{font-weight:500;}
    }
    span.today{
      strong{color:#01a1dd;}
    }
    span.week{
      strong{color:#d22828;}
    }
  }
  dd{

  }
}

.state{
  padding:0;

  .row{
    padding:0;
    margin:0;
  }
  
  .col{
    padding:0;
    border-right:1px solid #e2e2e2;
  }

  dl{
    padding:15px;
    dt{
      display:flex;
      align-items: center;
      justify-content: flex-start;
      .v-icon{
        color:#e2e2e2;
        margin-left:10px;
        font-size:20px;
      }
    }

    dd{
      margin-top:5px;
      text-align:right;

      strong{
        font-size:24px;
        color:#E13D7A;
        font-weight:600;
      }
      span{margin-left:5px;}
    }
  }

  dl:hover{
    cursor: pointer;
    dt{
      .v-icon{
        color:#01a1dd;
      }
    }
  }
  .col:last-child{
    border-right:0px;

  }
}

</style>

