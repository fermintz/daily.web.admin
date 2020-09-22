<template>
  <div class="pagination">
    <v-btn text>
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn text :class="{active: isActive}" v-for="item in 5" :key="item">
      {{item}}
    </v-btn>
    <v-btn text>
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props:[
    'data',
  ],
  data(){
    return{
      isActive:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination{
  margin-top:20px;
  text-align:center;

  .v-btn{
    min-width:30px;
    width:30px;
    height:30px;
    margin:0 2px;
    border:1px solid #e2e2e2;
    background:#fff;
    
    .v-icon{
      color:#c2c2c2;
      font-size:18px;
    }
  }
  .v-btn.active{
    border:1px solid #01a1dd;
  }
}
</style>