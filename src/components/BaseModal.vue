<template>
  <v-dialog 
    v-model="visible"
    max-width="420"
  >
    <v-card>
      <v-card-title>
        정산하기
      </v-card-title>
      <v-card-text class="mt-3">
        <dl class="bank">
          <dt>계좌번호</dt>
          <dd>우리은행 1002-537-353918</dd>
        </dl>
        <dl class="price">
          <dt>정산예정금액</dt>
          <dd>1,243,500 원</dd>
        </dl>

        <dl class="textInput">
          <dt><v-icon>mdi-check-circle</v-icon>정산금액</dt>
          <dd>
            <v-text-field
              dense 
              type="number" 
              hide-details
              flat
              filled
              height="40"
              placeholder="정산금액을 입력해주세요"
              color="#01a1dd"
              background-color="#f2f2f2"
            />
          </dd>
        </dl>

        <dl class="textInput">
          <dt><v-icon>mdi-check-circle</v-icon>정산예정금액</dt>
          <dd>
            <v-textarea 
              placeholder="메모입력" maxlength="200" 
              flat 
              filled
              counter
              color="#01a1dd"
              background-color="#f2f2f2"
            />
          </dd>
        </dl>        
      </v-card-text>
      <v-card-actions class="v-card-btns">
        <v-spacer></v-spacer>
        <v-btn text color="rgba(255,255,255,0.6)">취소</v-btn>
        <v-btn text>완료</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from "@/mixins/modal.js";

export default {
  mixins: [ModalMixin],
};
</script>

<style lang="scss" scoped>
dl{
  display:flex;
  justify-content: space-between;
  font-size:13px;
  margin-bottom:20px;

  dt{
    display:flex;
    align-items: center;
    color:#999;
    font-weight:400;
    .v-icon{font-size:18px;margin-right:5px;color:#01a1dd;}
  }
  dd{
    color:#292929;
    font-weight:500;
  }
}
dl.price{
  dd{color:#d22822}
}

dl.textInput{
  flex-direction: column;
  dt{margin-bottom:5px;}
  dd{
    .v-text-field{font-size:13px;}
  }
}

.v-card-btns{
  background:#01a1dd;

  .v-btn{
    font-size:14px;color:#fff;
  }
}
</style>
