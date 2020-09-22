<template>
  <v-navigation-drawer
    width="220"
    app
  >
    <div class="navigation fill-height">
      <div class="logo-box">
        <div class="logo">
          <img src="@/assets/img/logo-w.png">
          <h2>데일리세탁</h2>
        </div>
      </div>
      <div class="list" v-for="(items, index) in drawer" :key="index">
        <NavigationItem :items="items"/>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import NavigationItem from '@/components/navigation-item.vue';

export default {
  components:{
    NavigationItem,
  },
  data(){
    return{
      
      drawer:[
        {
          name:'주문관리',
          icon:'mdi-text-box-outline',
          child:[
            {
              name:'전체주문내역'
            },
            {
              name:'주문취소내역'
            },
          ],
        },
        {
          name:'정산관리',
          icon:'mdi-cash-usd-outline',
          child:[
            {
              name:'정산예정내역',
              path:'/',
            },
            {
              name:'정산처리내역',
              path:'/calculate-end',
            }
          ],
        }
      ],
    }
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>

.navigation{
  background:#3b454f;
  border-left:1px solid #292929;
}

.logo-box{
  height:150px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:#323a43;

  .logo{
    text-align:center;
  
    h2{
      color:#fff;
      font-weight:400;
      font-size:18px;
    }
  }
}
.list{
  position:relative;
  color:#fff; 
  
}

</style>