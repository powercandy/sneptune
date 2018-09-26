<template>
  <div class="ad-controller">
    <div class="content">
      <el-row type="flex" class="content-top" justify="space-between">
        <el-col :span="8" class="account-info-box block-box">
          <el-row class="account-info">
            <el-col :span="8" class="avatar-box">
              <img :src="avatar" alt="用户头像">
            </el-col>
            <el-col class="account-name">
              <span>{{account}}</span>
            </el-col>
          </el-row>
          <p class="login-time">
            上次登录时间:2018/9/26 上午10:49:19
          </p>
        </el-col>
        <el-col :span="16" class="publish-box  block-box">
          <div class="publish-charts">
            <p><b>发布频率</b></p>
          </div>
        </el-col>
      </el-row>
      <div class="block-box hot-article">
        <p><b>热门文章</b></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class adController extends Vue {
  account: string = 'admin'
  avatar: string = 'https://secure.gravatar.com/avatar/a71767393008c230de03ae4ad6ba7840'
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 20px

.account-info-box
  height 300px
  
.block-box
  padding 20px
  border 1px solid #e9eaec
  border-radius 4px
  background-color #fff

.account-info
  height 80px
  .el-col
    height 100%
  .account-name
    font-size 32px
    color #2d8cf0
    line-height 80px

.login-time
  padding 30px 0
  font-size 14px

.publish-box
  height 300px
  margin-left 10px

.hot-article
  height 332px
  margin-top 10px

</style>
