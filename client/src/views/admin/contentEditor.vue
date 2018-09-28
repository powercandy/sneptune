<template>
  <div class="ad-content-editor">
    <el-form label-width="80px" :rules="rules" :model="formData">
      <el-form-item label="文章标题" prop="title">
        <el-input placeholder="文章标题" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="文章标识" prop="slug">
        <el-input placeholder="文章标识" v-model="formData.slug"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="classify">
        <el-select v-model="formData.classify" placeholder="请选择">
          <el-option
            v-for="item in classifyList"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="缩略图" prop="thumb">
        <el-input placeholder="缩略图" v-model="formData.thumb"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" prop="date">
        <el-date-picker
          v-model="formData.date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        <el-time-picker
          v-model="formData.time"
          placeholder="选择时间">
        </el-time-picker>
      </el-form-item>
      <el-form-item label="状态" porp="status">
        <el-radio v-model="formData.status" label="1">草稿</el-radio>
        <el-radio v-model="formData.status" label="2">发布</el-radio>
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-checkbox-group
          v-model="formData.tag"
          @change="handleCheckAllChange">
          <el-checkbox v-for="city in tagList" :label="city" :key="city" name="type">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <mavon-editor v-model="formData.mark" fontSize="12px" @change="markDownChange"/>
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
export default class contentEditor extends Vue {
  formData: any = {
    title: '',
    slug: '',
    classify: '',
    thumb: '',
    date: '',
    time: '',
    status: '',
    tag: [],
    mark: ''
  }
  rules: any = {
    title: [
      { required: true, message: '请输入标题', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    classify: [
      { required: true, message: '请选择分类', trigger: 'change' }
    ],
    date: [
      { required: true, message: '请选择发布时间', trigger: 'change' }
    ],
    tag: [
      { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
    ]
  }
  // 分类列表
  classifyList: Array<object> = [
    {
      id: '1',
      label: 'javascript'
    },
    {
      id: '2',
      label: 'css'
    }
  ]
  // 标签列表
  tagList: Array<string> = ['vue', 'react', 'typescript', 'node', 'css']
  // 监听选择的标签列表
  handleCheckAllChange () {
  }
  // 监听markdown输入
  markDownChange () {
  }
}
</script>

<style lang="stylus">
.ad-content-editor
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
  .el-date-editor
    margin-right 10px
  .el-radio__inner
    height 12px
  .el-radio__label
    height 12px
    font-size 12px

.required:before
  content: '*';
  display: inline-block;
  margin-right: 4px;
  line-height: 1;
  font-family: SimSun;
  font-size: 12px;
  color: #ed3f14;
</style>
