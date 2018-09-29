<template>
  <div class="ad-classify-editor">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="分类名称" prop="title">
        <el-input placeholder="分类名称" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="缩略名" prop="thumb">
        <el-input placeholder="缩略名" v-model="formData.thumb"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort" class="sort-box">
        <el-input placeholder="排序" v-model="formData.sort"></el-input>
      </el-form-item>
      <el-form-item label="分类描述" prop="description">
        <el-input type="textarea" placeholder="分类描述" v-model="formData.description"></el-input>
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
export default class classifyEditor extends Vue {
  formData: any = {
    title: 'classifyEditor',
    thumb: 'sneptune',
    sort: '1',
    description: 'classifyEditorclassifyEditorclassifyEditor',
    slug: 'sneptune'
  }
  mounted () {
    if (!this.$route.query.slug) {
      this.formData = {
        title: '',
        thumb: '',
        sort: '',
        description: '',
        slug: ''
      }
    }   
  }
  // 提交信息
  onSubmit () {
    // console.log(this.formData)
  }
}
</script>

<style lang="stylus">
.ad-classify-editor
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
  .el-form-item__classify
    line-height 32px
  .sort-box
    width 20%
</style>
