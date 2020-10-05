<template>
  <v-app>
    <Navigation />
    <v-main>
      <div class="header">
        <div v-show="this.$route.name === 'home'" />
        <div class="category" v-show="this.$route.name !== 'home'">
          <v-icon class="homeIcon">mdi-home</v-icon>
          <v-icon class="arrow">mdi-chevron-right</v-icon>
          <span>{{$route.meta.cate}}</span>
          <v-icon class="arrow">mdi-chevron-right</v-icon>
          <span class="active">{{$route.meta.name}}</span>
        </div>
        <div class="btns">
          <v-btn outlined>로그아웃</v-btn>
        </div>
      </div>
      <div class="contents fill-height">
        <h2 v-show="this.$route.name !== 'home'">
          {{this.$route.meta.name}}
        </h2>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/navigation.vue';

export default {
  components: {
    Navigation
  },

};
</script>


<style lang="scss" scoped>

.header{
  position:absolute;
  display:flex;
  padding:0 15px;
  flex:1;
  height:50px;
  background:#fff;
  border-bottom:1px solid #e2e2e2;
  justify-content: space-between;
  width:100%;
  align-items: center;

  .category{
    .v-icon.homeIcon{font-size:20px;color:#c2c2c2;;}
    .v-icon.arrow{font-size:18px;color:#c2c2c2;margin:0 15px;}
    span{font-size:13px;color:#888}
    span.active{color:#292929;font-weight:500}
  }

  .btns{
    .v-btn{
      height:30px;
      font-size:12px;
      background:#292929;
      color:#fff;
    }
  }
}



</style>