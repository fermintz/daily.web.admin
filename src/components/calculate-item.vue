<template>
  <dl class="list-item">
    <dt @click="itemToggle">
      <div class="left">
        <v-icon :color="isActive ? '#01a1dd' : ''"
          >mdi-chevron-down-circle-outline</v-icon
        >
        <strong>박수민</strong>
        <span>(우리은행 1002 - 537 - 353918)</span>
      </div>
      <div class="right">
        <span>
          최종정산금액
        </span>
        <strong>1,243,500 원</strong>
        <v-btn text 
          @click.stop="calculate" 
          class="calculate-btn"
        >
          정산하기
        </v-btn>
      </div>
    </dt>
    <dd :class="isActive ? 'active' : 'close'">
      <div class="left">
        <span>
          <label>정산기간</label>
          <strong>2020.09.01 ~ 2020.09.15</strong>
        </span>
        <span>
          <label>기사명</label>
          <strong>박수민</strong>
        </span>

        <span>
          <label>연락처</label>
          <strong>010-8525-4561</strong>
        </span>
        <span>
          <label>입금정보</label>
          <strong>우리은행 1002-537-353918</strong>
        </span>
      </div>
      <div class="right">
        <div class="top">
          <div class="inLeft">
            <span>
              <label>주문건수</label>
              <strong>345건</strong>
            </span>
            <span>
              <label>주문금액</label>
              <strong>1,856,000 원</strong>
            </span>
          </div>
          <div class="inRight">
            <span>
              <label>추가결제금액</label>
              <strong>135,000 원</strong>
            </span>
            <span>
              <label>배송비</label>
              <strong>348,000 원</strong>
            </span>
          </div>
        </div>
        <div class="bottom">
          <span class="icon" style="margin-right:20px;">(</span>
          <span class="data">
            <label>전체매출액</label>
            <strong>2,126,000 원</strong>
          </span>
          <v-icon>mdi-minus</v-icon>
          <span class="data">
            <label>카드수수료(3.2%)</label>
            <strong>145,000 원</strong>
          </span>
          <span class="icon" style="margin-left:20px;">)</span>
          <v-icon>mdi-minus</v-icon>
          <span class="data">
            <label>서비스이용료(12%)</label>
            <strong>237,730 원</strong>
          </span>
          <v-icon>mdi-equal</v-icon>
          <span class="data">
            <label>최종정산금액</label>
            <strong>1,243,500 원</strong>
          </span>
        </div>
      </div>

      <BaseModal ref="calculateModal"/>
    </dd>
  </dl>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue';

export default {
  props: ["item"],
  components:{
    BaseModal
  },

  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    calculate() {
      this.$refs.calculateModal.show(true);
    },
    itemToggle() {
      this.isActive = !this.isActive
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  background: #fff;
  border: 1px solid #e2e2e2;
  margin-bottom: 10px;

  dt {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 15px;

    .left {
      display: flex;
      align-items: center;
      .v-icon {
        font-size: 28px;
        margin-right: 15px;
        color: #e2e2e2;
      }
      strong {
        font-weight: 500;
        margin-right: 5px;
      }
      span {
        font-size: 12px;
        color: #888;
        letter-spacing: 0;
      }
    }


    .right {
      position: relative;
      display: flex;
      align-items: flex-end;

      span {
        color: #888;
        font-size: 12px;
        margin-right: 15px;
      }
      strong {
        font-size: 20px;
        font-weight: 500;
        color: #d22828;
        letter-spacing: 0px;
      }

      .v-btn {
        position: relative;
        height: 34px;
        background: #01a1dd;
        color: #fff;
        margin-left: 15px;
        
      }
    }
  }

  dt:hover {
    background: #f8f8f8;
  }

  dd {
    display: flex;
    overflow: hidden;
    height: 0px;

    .left {
      flex: 3;
      padding: 20px;
      border-right: 1px solid #e2e2e2;
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 12px;
        label {
          color: #888;
        }
        strong {
          font-weight: 500;
          letter-spacing: 0;
        }
      }
      span:last-child {
        margin-bottom: 0px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      flex: 9;
      padding: 0 20px;

      .top {
        display: flex;
        align-items: flex-start;
        height: auto;
        padding: 15px 0;

        span {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          margin-bottom: 5px;
          label {
            font-size: 12px;
            color: #888;
          }
          strong {
            font-weight: 500;
            letter-spacing: 0;
          }
        }
        span:last-child {
          margin-bottom: 0px;
        }

        .inLeft {
          flex: 1;
          padding-right: 20px;
          border-right: 1px solid #e2e2e2;
        }
        .inRight {
          flex: 1;
          padding-left: 20px;
        }
      }

      .bottom {
        height: 100%;
        padding: 20px 0;
        border-top: 1px solid #e2e2e2;
        display: flex;
        align-items: center;
        justify-content: center;

        span.icon {
          color: #e2e2e2;
          font-size: 20px;
          font-family: "Roboto";
          font-weight: 600;
        }

        .v-icon {
          font-size: 20px;
          color: #c2c2c2;
          margin: 0 30px;
          border: 2px solid #e2e2e2;
          border-radius: 50%;
        }

        span.data {
          display: flex;
          flex-direction: column;
          align-items: center;

          label {
            font-size: 12px;
            color: #888;
          }
          strong {
            font-weight: 500;
            margin-top: 5px;
            letter-spacing: 0;
          }
        }
        span.data:last-child {
          strong {
            color: #d22828;
          }
        }
      }
    }
  }

  dd.active {
    border-top: 1px solid #e2e2e2;
    animation: slideDown 0.3s forwards;

    @keyframes slideDown {
      0% {
        height: 0px;
      }
      100% {
        height: 180px;
      }
    }
  }
  dd.close {
    border-top: 0px;
    animation: slideUp 0.3s forwards;

    @keyframes slideUp {
      0% {
        height: 180px;
      }
      100% {
        height: 0px;
      }
    }
  }
}
</style>
