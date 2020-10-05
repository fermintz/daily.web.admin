<template>
  <v-dialog
    v-model="visible"
    max-width="400"
  >
    <v-card>
      <v-card-title>{{this.title}}</v-card-title>
      <v-card-text>{{this.description}}</v-card-text>
      <v-card-actions class="btns">
        <v-spacer />
        <v-btn text @click="show(false)" class="cancle">취소</v-btn>
        <v-btn text @click="show(false)" class="ok">확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import ModalMixin from "@/mixins/modal.js";

export default {
  props:[
    'title', 'description'
  ],
  mixins: [ModalMixin],
  data(){
    return{
      page:1
    }
  }
}
</script>

<style lang="scss" scoped>
.btns{
  background:#f2f2f2;

}
</style>