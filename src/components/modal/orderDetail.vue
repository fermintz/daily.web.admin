<template>
  <v-dialog
    v-model="visible"
    width="960"
  >
    <v-card>
      <v-card-title>
        주문 상세보기
      </v-card-title>
      <v-card-text>
        <ul class="detail-info">
          <li>주문자정보</li>
          <li>주문상품목록</li>
          <li>취소/환불 정보</li>
          <li>결제정보</li>
          <li>상담메모</li>
        </ul>
      </v-card-text>
      <v-card-actions style="background:#01a1dd">
        <v-spacer></v-spacer>
        <v-btn text dark>
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModalMixin from "@/mixins/modal.js";

export default {
  mixins: [ModalMixin],
  data(){
    return{
      page:1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>