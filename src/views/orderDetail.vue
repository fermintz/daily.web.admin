<template>
  <div class="orderDetail">
    <div class="detail-top">
      <div class="left">
        <span>
          <label>주문일시</label>
          <strong>2020년 9월 18일 09:34:12</strong>
        </span>
      </div>
      <div class="right">
        <v-btn text>
          <v-icon size="18" color="#c2c2c2">mdi-arrow-left</v-icon>
          <span>주문목록으로</span>
        </v-btn>
      </div>
    </div>
    <div class="orderState">
      <dl class="state">
        <dt>주문상태</dt>
        <dd>
          <div class="btns">
            <v-btn 
              outlined 
              v-for="(item, index) in ['주문확인','수거완료','세탁물확인','결제요청','작업완료','배송완료']" 
              :key="index"
              @click="isActive = index"
              :class="{active:isActive === index}"
            >
              {{item}}
            </v-btn>
          </div>
        </dd>
      </dl>
    </div>

    <div class="detail-info">
      <v-row>
        <v-col cols="12" md="8" class="pr-8">
          <dl>
            <dt>주문자정보</dt>
            <dd>
              <div class="inner">
                <table class="horizonTable">
                  <tr>
                    <th>주문자</th>
                    <td>홍길동</td>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <td>010-8525-4561</td>
                  </tr>
                  <tr>
                    <th>수거 주소지</th>
                    <td>부산광역시 금정구 부산대학로 63번길 2<br>과학기술연구동 201호</td>
                  </tr>
                  <tr>
                    <th>방문요청일</th>
                    <td>2020년 9월 21일</td>
                  </tr>
                  <tr>
                    <th>수거요청시간</th>
                    <td>오전</td>
                  </tr>
                  <tr>
                    <th>요청사항</th>
                    <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi omnis et commodi debitis officiis, eos error molestiae velit! Voluptatibus recusandae modi voluptates nesciunt aut quibusdam repellendus quo quos inventore porro.</td>
                  </tr>
                </table>
              </div>
            </dd>
          </dl>
          <dl class="partner">
            <dt>담당자</dt>
            <dd>
              <table class="horizonTable">
                <tr>
                  <th>담당자</th>
                  <td>박수민</td>
                </tr>
                <tr>
                  <th>전화번호</th>
                  <td>010-8525-4561</td>
                </tr>
                <tr>
                  <th>담당구역</th>
                  <td>부산광역시 금정구</td>
                </tr>
              </table>
            </dd>
          </dl>
        </v-col>
        <v-col cols="12" md="4">
          <dl class="credit-info">
            <dt>결제정보</dt>
            <dd>
              <span class="total">
                <label>총 주문금액</label>
                <strong>64,500 원</strong>
              </span>
              <span class="divider"/>
              <span>
                <label>상품합계</label>
                <strong>56,000 원</strong>
              </span>
              <span>
                <label>추가결제금</label>
                <strong>5,000 원</strong>
              </span>
              <span>
                <label>배송비</label>
                <strong>3,500 원</strong>
              </span>
            </dd>
            <dd class="card">
              <span>
                <label>결제카드</label>
                <strong>신한카드</strong>
              </span>
              <span>
                <label>카드번호</label>
                <strong>0981</strong>
              </span>
            </dd>
          </dl>

          <dl class="cancle-btns">
            <dt>결제취소</dt>
            <dd>
              <v-btn text style="margin-right:5px;">
                <span>부분주문취소</span>
              </v-btn>
              <v-btn text style="margin-left:5px;">
                <v-icon size="18" color="#d22828">mdi-close</v-icon>
                <span>전체주문취소</span>
              </v-btn>
            </dd>
          </dl>
        </v-col>
      </v-row>
    
      <dl class="orderProduct">
        <dt>주문상품</dt>
        <dd>
          <div class="dataSection">
            <v-data-table
              :headers="tHead"
              :items="tData"
            >
            </v-data-table>
          </div>
        </dd>
      </dl>

      <v-row>
        <v-col cols="8" class="pr-8">
          <dl class="orderProduct">
            <dt>검수완료</dt>
            <dd>
              <div class="dataSection">
                <v-data-table
                  :headers="tHead"
                  :items="tData"
                >
                </v-data-table>
              </div>
            </dd>
          </dl>
        </v-col>
        <v-col cols="4">
          <dl class="addPrice">
            <dt>추가결제정보</dt>
            <dd>
              추가사유<br>
              추가금액
            </dd>
          </dl>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isActive:0,
      tHead:[
        {text:'상품명', align:'left', sortable:true, value:'productName'},
        {text:'수량', align:'left', sortable:true, value:'amount'},
        {text:'가격', align:'left', sortable:true, value:'productPrice'},
        {text:'합계', align:'left', sortable:true, value:'totalPrice'},
      ],
      tData:[
        {
          productName:'와이셔츠',
          amount:'3',
          productPrice:3500,
          totalPrice:10500,
        },
        {
          productName:'정장바지',
          amount:'1',
          productPrice:5500,
          totalPrice:5500,
        },
        {
          productName:'티셔츠',
          amount:'1',
          productPrice:3000,
          totalPrice:3000,
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>

.detail-top{
  display:flex;
  align-items: center;
  height:50px;
  justify-content: space-between;
  background: #595959;
  margin-bottom:10px;
  padding:0 20px;

  .left{
    span{
      display:flex;
      align-items: center;
      color:#fff;
      label{margin-right:15px;}
      strong{font-weight:500;}
    }
  }
  .right{
    .v-btn{
      max-height:30px;
      background:#fff;
      margin-left:10px;
      .v-icon{margin-right:5px;}
    }
  }
}

.orderState{
  margin-bottom:10px;
  padding:20px;
  border:1px solid #e2e2e2;
  background:#fff;

 dl{
    margin-bottom:0px;
  }

  dl.state{
    .btns{
      display:flex;
      align-items: center;
      .v-btn{
        flex:1;
        margin-right:8px;
        border:1px solid #c2c2c2;
        color:#888;
      }
      .v-btn:last-child{
        margin-right:0px;
      }
      .v-btn.active{
        border:1px solid #01a1dd;
        color:#01a1dd;
      }
    }
  }
  dl.partner{
    
    dd{
      display:flex;
      align-items: flex-start;
      border:1px solid #e2e2e2;
      padding:15px;

      .picture{
        width:80px;
        height:80px;
        border:1px solid #e2e2e2;
        border-radius:4px;
        background:#f2f2f2;
        overflow:hidden;
      }

      .partner-info{
        flex:1;
        margin-left:15px;
        span{display:block;}
      }
    }
  }
}

.detail-info{
  padding:20px;
  background:#fff;
  border:1px solid #e2e2e2;  
}

dl{
  margin-bottom:40px;
  dt{
    margin-bottom:10px;
    font-size:16px;
    letter-spacing:-0.7px;
  }
}

dl.credit-info{
  dd{
    border:1px solid #e2e2e2;
    padding:20px;
    margin-bottom:10px;

    span{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:15px;
      font-size:13px;
      strong{
        font-weight:500;
      }
    }
    span:last-child{
      margin-bottom:0px;
    }

    span.total{
      strong{color:#d22828;font-size:16px;}
    }

    span.divider{
      display:block;
      height:1px;
      background:#e2e2e2;
      margin:20px 0;
    }
  }

  dd.card{background:#f8f8f8;}
  dd:last-child{margin-bottom:0px;}
}

dl.cancle-btns{
    dd{
      display:flex;
      align-items: center;
      padding:0px;
      border:0px;

      .v-btn{
        flex:1;
        border:1px solid #c2c2c2;
      }
    }
  }

dl.orderProduct{
  dd{
    border:1px solid #c2c2c2;
  }
}

dl.addPrice{
  dd{border:1px solid #e2e2e2;padding:20px;}
}

@media screen and(max-width:960px){
  .orderState{
    dl.state{margin-right:0px;margin-bottom:10px;}
  }
}

</style>