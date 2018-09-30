<template>
  <div class="ad-message-page">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="GitHub">
        <el-input v-model="formData.github"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="formData.qq"></el-input>
      </el-form-item>
      <el-form-item label="微博">
        <el-input v-model="formData.weibo"></el-input>
      </el-form-item>
      <el-form-item label="知乎">
        <el-input v-model="formData.zhihu"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class adMessage extends Vue {
  formData: any = {
    account: 'admin',
    email: '17600112740@163.com',
    github: 'powercandy',
    qq: '871956478',
    weibo: 'sneptune',
    zhihu: 'sneptune',
    id: ''
  }
}
</script>

<style lang="stylus">
.ad-message-page
  padding 10px
  background-color #fff
  font-size 12px
  .el-input__inner
    height 32px
</style>
