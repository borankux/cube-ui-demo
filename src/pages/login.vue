<template>
  <div class="page">
    <navbar @back="goBack" title="登录"/>
    <div class="box">
      <cube-input
        placeholder="请输入手机号"
        class="npt"
        autocomplete="false">
        <template slot="prepend">
          <span class="label">账号</span>
        </template>
      </cube-input>

      <cube-input
        placeholder="请输入密码"
        class="npt"
        :eye="eye"
        autocomplete="false"
        type="password">
        <template slot="prepend">
          <span class="label">密码</span>
        </template>
      </cube-input>

      <div class="button-holder">
        <cube-button :primary="true" type="primary">登录</cube-button>
        <cube-button  style="margin-top: 20px;" :light="true">注册</cube-button>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from '../widgets/navbar'
    export default {
        name: "login",
        components: {
            Navbar
        },
        data () {
            return {
                eye:{
                    open :false
                },
            }
        },
        methods: {
            goBack() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
  .box {
    margin: 20px auto;
    padding: 20px;
  }

  .box .npt{
    margin-top: 10px;
  }

  .label {
    color: #777;
    height: 40px;
    line-height: 40px;
    border-radius: 3px 0 0 3px;
    font-size: 0.8em;
    width: 50px;
    text-align: center;
  }

  .button-holder {
    margin-top: 20px;
  }
</style>
