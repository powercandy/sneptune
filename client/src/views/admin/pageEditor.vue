<template>
  <div class="ad-page-editor">
    <el-form label-width="80px" :rules="rules" :model="formData">
      <el-form-item label="页面标题" prop="title">
        <el-input placeholder="页面标题" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="页面标识" prop="slug">
        <el-input placeholder="页面标识" v-model="formData.slug"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <mavon-editor v-model="formData.mark" fontSize="12px" @change="markDownChange"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {
  }
  })
export default class pageEditor extends Vue {
  formData: any = {
    title: '',
    slug: '',
    mark: ''
  }
  rules: any = {
    title: [
      { required: true, message: '请输入标题', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ]
  }
  // 监听markdown输入
  markDownChange () {
  }
  // 提交信息
  onSubmit () {
    // console.log(this.formData)
  }
}
</script>

<style lang="stylus">
.ad-page-editor
  background-color #fff
  padding 10px
  font-size 12px
  span
    font-weight normal
  .el-form-item__label
    font-size 12px
    line-height 32px
  .el-input__inner
    height 32px
  .el-input__icon
    line-height 32px
  .el-form-item__content
    line-height 32px

</style>
