<template>
  <div class="partner-add">
    <div class="section">
      <dl class="form">
        <dt>사업정보</dt>
        <dd>
          <ul>
            <li>
              <label>사업형태</label>
              <span>
                <select>
                  <option>세탁소</option>
                  <option>배달기사</option>
                  <option>셀프빨래방</option>
                </select>
              </span>
            </li>
            <li>
              <label>영업지역</label>
              <span>
                <input type="text">
              </span>
            </li>
            <li>
              <label>정산 계좌번호</label>
              <span>
                <input type="text" style="min-width:120px;margin-right:10px;" placeholder="은행명">
                <input type="text" placeholder="계좌번호 입력">
              </span>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="section">
      <dl class="form">
        <dt>개인정보</dt>
        <dd>
          <ul>
            <li>
              <label>이름</label>
              <span>
                <input type="text">
              </span>
            </li>
            <li>
              <label>전화번호</label>
              <span>
                <input type="text">
              </span>
            </li>
            <li>
              <label>거주지</label>
              <span>
                <input type="text">
              </span>
            </li>
            <li>
              <label>이메일</label>
              <span>
                <input type="text">
              </span>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.partner-add{
  .col{
    padding-top:0;
    padding-bottom:0;
  }

  div.section{
    border:1px solid #e2e2e2;
    background:#fff;
    padding:20px;
    margin-bottom:10px;
  }

  dl{
    dt{
      font-size:18px;
    }
    dd{
      margin-top:15px;
    }
  }

  .form{
    ul{
      padding:0px;
      border-top:1px solid #e2e2e2;
      padding-top:15px;
      li{
        display:flex;
        align-items: center;
        margin-bottom:15px;
        border-bottom:1px solid #e2e2e2;
        padding-bottom:15px;

        label{
          width:150px;
          font-size:13px;
        }
        span{
          flex:1;
          align-items: center;
          font-size:13px;

          select{
            border:1px solid #e2e2e2;
            padding:0 10px;
            height:32px;
            border-radius:4px;
            
          }

          input{
            min-width:320px;
            height:32px;
            border-radius:4px;
            border:1px solid #c2c2c2;
            padding:0 5px;
            font-size:13px;
          }

          textarea{
            width:100%;
            min-width:100%;
            min-height:100px;
            max-height:300px;
            border:1px solid #c2c2c2;
          }
        }
      }

      li:last-child{
        margin-bottom:0px;
        border-bottom:0;
      }
    }
  }
}

</style>