<template>
  <div class="searchOptions">
    <div class="inputForm">
      <dl class="keyword">
        <dt>검색어</dt>
        <dd>
          <span class="select">
            <v-menu
              v-model="keywordSelect"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <div class="selected">
                  <input 
                    v-model="keywordSelected"
                    type="text"
                    readonly
                    v-on="on"
                    v-bind="attrs"
                  >
                  <v-icon>mdi-chevron-down</v-icon>
                </div>
              </template>
              <div class="selectOption">
                <v-list>
                  <v-list-item
                    dense
                    v-for="item in keywordOption" 
                    :key="item" 
                    @click="keywordSelected = item, keywordSelect = false"
                    class="v-list-item"
                    style="font-size:12px"
                  >
                    {{item}}
                  </v-list-item>
                </v-list>
              </div>
            </v-menu>
          </span>
          <span class="input">
            <input type="text" class="textInput">
          </span>
        </dd>
      </dl>
      <dl class="date">
        <dt>기간</dt>
        <dd>
          <span class="input">
            <v-menu
              v-model="datePicker"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <input
                  type="text"
                  v-model="dateRangeText"
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker range v-model="dates">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="datePicker = false"
                  >Cancel</v-btn
                >
                <v-btn text color="primary" @click="datePicker = false">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </span>
          <span class="quick-btns">
            <v-btn-toggle borderless mandatory>
              <v-btn text>오늘</v-btn>
              <v-btn text>어제</v-btn>
              <v-btn text>3일</v-btn>
              <v-btn text>7일</v-btn>
              <v-btn text>15일</v-btn>
              <v-btn text>1개월</v-btn>
              <v-btn text>3개월</v-btn>
            </v-btn-toggle>
          </span>
        </dd>
      </dl>
      <dl class="cate">
        <dt>
          주문상태
        </dt>
        <dd>
          <span class="check">
            <input type="checkbox" checked>
            <label>전체</label>
          </span>
          <span class="check">
            <input type="checkbox" checked>
            <label>접수완료</label>
          </span>
          <span class="check"> 
            <input type="checkbox" checked>
            <label>수거중</label>
          </span>
          <span class="check">
            <input type="checkbox" checked>
            <label>세탁중</label>
          </span>
          <span class="check">
            <input type="checkbox" checked>
            <label>배송중</label>
          </span>
          <span class="check">
            <input type="checkbox" checked>
            <label>배송완료</label>
          </span>
          <span class="check">
            <input type="checkbox" checked>
            <label>주문취소</label>
          </span>
        </dd>
      </dl>
    </div> <!-- inputForm -->

    <div class="btns">
      <v-spacer></v-spacer>
      <v-btn text class="search">검색</v-btn>
      <v-btn text class="reset">초기화</v-btn>
    </div>
  </div> <!-- searchOptions -->
</template>

<script>
export default {
  data(){
    return{
      dates:["",""],
      datePicker:false,
      keywordSelect:false,
      keywordSelected:'주문자명',
      keywordOption:['주문자명','담당자명','지역명']
    }
  },
  computed:{
    dateRangeText(){
      return this.dates.join(" ~ ")
    }
  }
}
</script>

<style lang="scss" scoped>

.searchOptions{

  background:#fff;
  border:1px solid #e2e2e2;

  .inputForm{
    padding:15px;

    dl{
      display:flex;
      align-items: center;

      dt{
        display:flex;
        align-items: center;
        width:100px;
        height:40px;
        font-size:13px;
        font-weight:500;
        border-right:1px solid #01a1dd;
        margin-right:20px;
      }
      dd{
        display:flex;
        flex:1;
        align-items: center;
        height:40px;
        .v-select{font-size:12px;}
        .v-text-field{font-size:12px;
          
        }
        span{
          display:block;margin-right:10px;
        }
        span.input{
          input{
            border:1px solid #c2c2c2;
            height:28px;
            border-radius:4px;
            padding:0 5px;
            background:#fff;
          }
        }
        span.slect{
          padding:0;
          margin:0
        }
        .selected{
          position: relative;
          display:flex;
          align-items: center;
          input{
            padding:0 5px;
            border:1px solid #c2c2c2;
            height:28px;
            border-radius:4px;
            font-size:12px;
            background:#fff;
          }
          .v-icon{
            position:absolute;
            right:5px;
            font-size:18px;
            color:#c2c2c2;
          }
        }

        .selectOption{
          .v-list{
            border-radius:4px; 
          }
        }
      }
    }
    dl.keyword{
      dd{
        span.input{
          input{width:180px;}
        }
      }
    }
    dl.date{
      dd{
        span.input{
          input{
            width:200px;
            font-size:12px;
            text-align: center;
          }
        }
        span.quick-btns{
          border:1px solid #c2c2c2;
          border-radius:4px;
          .v-btn{
            height:26px;
            border-right:1px solid #c2c2c2;
            font-size:12px;
          }
          .v-btn:last-child{border-right:0px;}
        }
      }
    }
    dl:last-child{margin-bottom:0px;}

    dl.cate{
      span.check{
        display:flex;
        align-items: center;
        margin-right:30px;
        input{width:16px;height:16px;margin-right:5px;}
        label{font-size:12px;letter-spacing: 0;}
      }
    }
  }

  .btns{
    display:flex;
    justify-content: flex-end;
    align-items: center;
    padding:10px;
    border-top:1px solid #e2e2e2;

    .v-btn{
      width:80px;
      height:34px;
      margin-left:5px;
      border-radius:4px;
    }
    .v-btn.search{
      background:#292929;
      color:#fff;
    }
    .v-btn.reset{
      border:1px solid #c2c2c2;
      background:#fff;
    }
  }
}



</style>
