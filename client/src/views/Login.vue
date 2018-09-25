<template>
  <div class="login-page">
    <div class="title">
      <div class="title-text">
        sneptune
      </div>
    </div>
    <div class="form-box middle-center">
      <div>
        <div class="input-box">
          <svg class="icon" width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#eeb174" :d="loginIconPath.userIcon.path" /></svg>
          <input class="input-item" type="text" placeholder="用户名" v-model="account">
        </div>
        <div class="input-box">
          <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#eeb174" :d="loginIconPath.pswIcon.path" /></svg>
          <input class="input-item" type="text" placeholder="密码" v-model="password">
        </div>
        <div class="input-box" v-if="state === 'register'">
          <svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#eeb174" :d="loginIconPath.pswIcon.path" /></svg>
          <input class="input-item" type="text" placeholder="请再次输入密码">
        </div>
        <div class="btn-box">
          <span class="btn" @click="submitInfo">{{btnText}}</span>
        </div>
        <p class="other-tips">
          <span class="register-info">
            {{tipText}}<i @click="goRegister">{{reserveBtnText}}</i>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { loginIconPath } from '../assets/js/config'
@Component
export default class Login extends Vue {
  state: string = ''
  loginIconPath: object = loginIconPath
  account: string | number = ''
  password: string | number = ''
  get tipText (): string {
    let text = this.state === 'login'
      ? '已有账号，请'
      : '未有账号，请'
    return text
  }
  get btnText (): string {
    let text = this.state === 'login'
      ? '登录'
      : '注册'
    return text
  }
  get reserveBtnText ():string {
    let text = this.state === 'login'
      ? '注册'
      : '登录'
    return text
  }
  mounted () {
    this.state = this.$route.params.type || 'login'
  }
  submitInfo () {
    this.state === 'login'
      ? this.login()
      : this.register()
  }
  /* 提交登录或者注册信息 */
  login () {
    console.log('go Login')
    this.$api.login({
      account: this.account,
      password: this.password
    }).then((res: any) => {
      if (res.data.errno === 0) {
        alert(res.data.data.msg)
      }
    })
  }
  register () {
    console.log('go Register')
    this.$api.register({
      account: this.account,
      password: this.password
    }).then((res: any) => {
      if (res.data.errno === 0) {
        alert(res.data.data.msg)
      }
    })
  }
  /* 切换登录注册形态 */
  goRegister () {
    this.state = this.state === 'login' ? 'register' : 'login'
    this.password = ''
    this.$router.push(`/login/${this.state}`)
  }
}
</script>

<style lang="stylus" scoped>
.login-page
  position absolute
  width 100%
  height 100%
  overflow hidden
  left 0
  background-image linear-gradient(to top, #86377b 20%, #27273c 80%)

.title
  position fixed
  width 80%
  height 100px
  top 10%
  left 50%
  transform translateX(-50%)

.title-text
  font-size 60px
  color #fff
  text-shadow 0px -1px 4px white, 0px -2px 10px yellow, 0px -10px 10px #ff8000, 0px -18px 40px red

.icon
  vertical-align middle

.form-box
  width 20%
  min-width 230px
  height 40%
  background #ddd
  padding 20px
  text-align left

.input-box
  box-sizing border-box
  width 100%
  min-width 200px
  height 30px
  border 1px solid #fff
  background #fff
  border-radius 10px
  margin-top 20px
  padding 0 10px

.input-item
  box-sizing border-box
  min-width 150px
  height 100%
  padding-left 10px
  vertical-align middle

.btn-box
  width 100%
  height 30px
  text-align center
  margin-top 20px
  .btn
    display inline-block
    height 30px
    width 50%
    border-radius 10px
    line-height 30px
    background #fff
    &:hover
      cursor pointer

.other-tips
  text-align right
  margin-top 10px
.register-info
    font-size 12px
    margin-left 5px
    i
      color blue
      &:hover
        cursor pointer
</style>
