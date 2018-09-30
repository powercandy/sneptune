<template>
  <div class="ad-modify-page">
    <el-form label-width="80px" :model="formData" :rules="rules">
      <el-form-item label="账号" prop="account">
        <el-input v-model="formData.account" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPsd">
        <el-input v-model="formData.oldPsd"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPsd">
        <el-input v-model="formData.newPsd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPsd">
        <el-input v-model="formData.confirmPsd"></el-input>
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
export default class adModifyPsd extends Vue {
  formData: any = {
    account: 'admin',
    oldPsd: '',
    newPsd: '',
    confirmPsd: '',
    id: ''
  }
  rules: any = {
    oldPsd: { required: true, message: '请输入旧密码', trigger: 'blur' },
    newPsd: { required: true, message: '请输入新密码', trigger: 'blur' },
    confirmPsd: { required: true, message: '请再次输入新密码', trigger: 'blur' }
  }
}
</script>

<style lang="stylus">
.ad-modify-page
  padding 10px
  background-color #fff
  font-size 12px
  .el-input__inner
    height 32px
    width 40%
</style>
