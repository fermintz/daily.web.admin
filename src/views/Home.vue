<template>
  <div class="home">
    <v-row class="state">
      <v-col
        :cols="2" 
        v-for="(item, index) in ['접수완료','수거중','세탁중','배송중','주문취소','추가결제요청']"
        :key="index"
      >
        <dl class="section">
          <dt>
            <span>{{item}}</span>
            <strong>바로가기</strong>
          </dt>
          <dd>
            <strong>10</strong>
            <span>건</span>
          </dd>
        </dl>
      </v-col>
    </v-row>

    <div class="section">
      응?
    </div>
  </div>
</template>

<style lang="scss" scoped>

.state{
  padding:0 7.5px;
  .col{
    padding:0 5px;
  }

  dl{
    dt{
      display:flex;
      flex-direction: column;
      strong{
        font-size:11px;
        font-weight:normal;
        margin-top:2px;
        color:#01a1dd;
      }
    }
    dd{
      margin-top:10px;
      text-align:right;

      strong{
        font-size:24px;
        color:
      }
      span{margin-left:5px;}
    }
  }
}

</style>

