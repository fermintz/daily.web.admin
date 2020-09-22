<template>
  <v-app>
    <div class="login fill-height">
      <v-card
        width="380"
        class="login-card"
      >
        <div class="login-form">
          <div class="logo">
            <img src="@/assets/img/logo-w.png"/>
            <span>데일리세탁</span>
          </div>
          <v-text-field
            dense
            hide-details
            background-color="#fff"
            placeholder="아이디"
            prepend-inner-icon="mdi-account"
            class="text-input mb-4"
            outlined
            :error="false"
          />
          <v-text-field
            dense
            hide-details
            background-color="#fff"
            placeholder="비밀번호"
            prepend-inner-icon="mdi-key"
            class="text-input"
            outlined
            type="password"
            :error="false"
          />
  
          <v-btn text>
            로그인
          </v-btn>
        </div>

        <div class="refer">
          PAYOT CORPORATION
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>

.login{
  display:flex;
  justify-content: center;
  align-items: center;
  background:#3b454f;

  .login-card{
    border-radius:10px;
  }
  .login-form{
    padding:30px;

    .logo{
      text-align:center;
      margin-bottom:20px;
      img{height:70px;}

      span{
        display:block;
        font-size:16px;
        font-weight:500;
        margin-top:5px;
      }
    }

    .text-input{
      font-size:13px;
    }

    .v-btn{
      width:100%;
      background:#01a1dd;
      height:40px;
      margin-top:20px;
      color:#fff;
    }
  }

  .refer{
    padding:20px;
    background:#f2f2f2;
    text-align:center;
    font-size:11px;
    font-weight:400;
    font-family:'Roboto';
    color:#c2c2c2;
    letter-spacing:0;
  }

  
}
</style>