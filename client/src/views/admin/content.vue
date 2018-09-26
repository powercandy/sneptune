<template>
  <div class="ad-content">
    <div>
      <el-row type="flex" justify="space-between">
        <el-col :span="18">
          <el-button type="primary" size="small" class="publish-btn btn">+&nbsp;发布文章</el-button>
        </el-col>
        <el-col :span="6">
          <el-row type="flex" justify="space-around">
            <el-col :span="14">
              <el-input v-model="searchText" placeholder="关键字" class="search-input"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" size="small" class="search-btn btn">查询</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="table-box">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        header-row-class-name="table-rows-name"
        cell-class-name="cellName">
        <el-table-column prop="title" width="250" label="文章名称"></el-table-column>
        <el-table-column prop="classify" width="300" label="分类"></el-table-column>
        <el-table-column prop="read" width="100" label="阅读量" class-name="text-center">
          <template slot-scope="scope">
            <p class="column-read">
              <span>{{ scope.row.read }}</span>
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="publish" width="200" label="发布时间"></el-table-column>
        <el-table-column prop="setting" label="操作"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class adContent extends Vue {
  searchText: any = ''
  get tableData (): any {
    let array: any = []
    let data = {
      title: 'javascript',
      classify: 'tech',
      read: '0',
      publish: '2018/9/20 下午5:59:42',
      setting: '11'
    }
    for (let i = 0; i < 8; i++) {
      array.push(data)
    }
    return array
  }
  tableLabel: Array<Object> = [
    {
      label: '文章名称',
      prop: 'title',
      width: '250'
    },
    {
      label: '分类',
      prop: 'classify',
      width: '300'
    },
    {
      label: '阅读量',
      prop: 'read',
      width: '100'
    },
    {
      label: '发布时间',
      prop: 'publish',
      width: '200'
    },
    {
      label: '操作',
      prop: 'setting',
      width: '150'
    }
  ]
  cellName (e) {
    console.log(e)
  }
}
</script>

<style lang="stylus">
.ad-content
  background-color #fff
  padding 10px
  tr.table-rows-name
    th
      background #f8f8f9

.search-input
  input
    height 32px

.table-box
  margin-top 20px

.text-center
  .cell
    text-align center


</style>

