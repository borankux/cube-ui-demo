<template>
    <div class="page">
      <div class="profile-box">
        <img class="avatar" @click="gotoLogin" src="../assets/imgs/ic_user.png" alt="">
        <h2 @click="gotoLogin" class="name">登录/注册</h2>

        <div class="badge-holder">
          <div class="badge">
            <h1>125</h1>
            <h3>积分</h3>
          </div>

          <div class="badge">
            <h1>320</h1>
            <h3>浏览</h3>
          </div>

          <div class="badge">
            <h1>22</h1>
            <h3>收藏</h3>
          </div>
        </div>

        <div class="row">
          <i class="start cubeic-person"></i>
          <span>我的资料</span>
          <i class="end cubeic-arrow"></i>
        </div>

        <div class="row">
          <i class="start cubeic-mall"></i>
          <span>我的订单</span>
          <i class="end cubeic-arrow"></i>
        </div>


        <div class="row">
          <i class="start cubeic-setting"></i>
          <span>系统设置</span>
          <i class="end cubeic-arrow"></i>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "mine",
        data () {
            return {

            }
        },
        methods: {
            gotoLogin()
            {
                this.$router.push({
                    name: 'login'
                })
            }
        }
    }
</script>

<style scoped>
  .avatar {
    display: block;
    margin: 20px auto;
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 100px;
    padding: 10px;
  }

  .name {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5em;
    font-weight: bolder;
  }

  .row-list {
    margin-top: 20px;
  }

  .row {
    height: 50px;
    line-height: 50px;
  }

  .row .start {
    margin:0 20px;
    float: left;
    font-size: 1.5em;
  }

  .row .end {
    float: right;
    margin-right: 20px;
  }

  .badge-holder {
    margin: 20px;
    display: flex;
    justify-content: center;
  }


  .badge {
    margin: 10px 20px;
  }

  .badge h1 {
    text-align: center;
    font-size: 2em;
  }

  .badge h3 {
    text-align: center;
    margin-top: 5px;
  }
</style>
