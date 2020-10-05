<template>
  <div class="member-list">

    <SearchOptions />

    <div class="section">
      <v-data-table
        :headers="tHead"
        :items="tData"
        search
      >
        <template v-slot:item.joinDate="{item}">
          <div class="joinDate">{{item.joinDate}}</div>
        </template>
        <template v-slot:item.detail="{item}">
          <v-btn text @click="$router.push('/totalOrder/detail')" class="outline">{{item.detail}}</v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import SearchOptions from '@/components/searchOptions.vue';

export default {

  components: {
    SearchOptions
  },

  data(){
    return{
      tHead:[
        {text:'번호', align:'left', sortable:true, value:'number'},
        {text:'이름', align:'left', sortable:true, value:'name'},
        {text:'휴대폰', align:'left', sortable:true, value:'phone'},
        {text:'지역', align:'left', sortable:true, value:'address'},
        {text:'총 주문건수', align:'left', sortable:true, value:'totalOrder'},
        {text:'총 주문금액', align:'left', sortable:true, value:'totalPrice'},
        {text:'가입일', align:'left', sortable:true, value:'joinDate'},
        {text:'메모', align:'left', sortable:true, value:'memberMemo'},
        {text:'상세정보', align:'right', sortable:true, value:'detail'},

      ],
      tData:[
        {
          number:1,
          name:'박수민',
          phone:'010-8525-4561',
          address:'부산시 북구',
          totalOrder:'23건',
          totalPrice:'134,500 원',
          joinDate:'2020-08-15',
          memo:'',
          detail:'상세보기',
        },
        {
          number:2,
          name:'박수민',
          phone:'010-8525-4561',
          address:'부산시 북구',
          totalOrder:'23건',
          totalPrice:'134,500 원',
          joinDate:'2020-09-14',
          memo:'',
          detail:'상세보기',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.joinDate{
  padding:10px 0;
}
</style>