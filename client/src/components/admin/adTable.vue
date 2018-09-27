<template>
  <div class="table-box">
    <el-table
      :data="tableData"
      border
      style="100%"
      header-row-class-name="table-rows-name">
    <el-table-column :prop="item.prop" :width="item.width" :label="item.label" class-name="text-center" v-for="(item,index) in labelArray" :key="index">
      <template slot-scope="scope">
        <p v-if="item.prop !== 'setting'">
          <span>{{ scope.row[item.prop] }}</span>
        </p>
        <p v-else>
          <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
        </p>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10, 20]"
      :page-size="maxPageNumber"
      @size-change="changeSize"
      :total="dataArray.length"
      :current-page="currentPage"
      @current-change="getCurrentPage">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
@Component
export default class adTable extends Vue {
  @Prop() dataArray!: any
  @Prop() labelArray!: any
  tableArray: any = []
  maxPageNumber: number = 10
  currentPage: number = 1
  get tableData (): Array<object> {
    let array: Array<object> = []
    if (!this.tableArray.length) {
      return []
    }
    for (let i = 0; i < this.tableArray.length; i++) {
      if (this.tableArray[i].currentPage === this.currentPage) {
        array = this.tableArray[i].data
      }
    }
    return array
  }
  mounted () {
    this.pagination()
  }
  pagination () {
    let totalPage = Math.ceil(this.dataArray.length/this.maxPageNumber)
    let array:any = []
    for (let i = 0; i < totalPage; i++) {
      if (i === 0) {
        array.push({
          currentPage: i+1,
          data: this.dataArray.slice(0, this.maxPageNumber)
        })
      } else {
        array.push({
          currentPage: i + 1,
          data: this.dataArray.slice(i * this.maxPageNumber, i * this.maxPageNumber + this.maxPageNumber)
        })
      }
    }
    this.tableArray = array
  }
  changeSize (size: number) {
    this.maxPageNumber = size
    this.pagination()
  }
  getCurrentPage (page: number) {
    this.currentPage = page
  }
}
</script>

<style lang="stylus">
.table-box
  margin-top 20px
  tr.table-rows-name
    th
      background #f8f8f9
  .el-table td, .el-table th
    padding 10px 0
    font-size 12px

.el-pagination
  text-align center
  margin-top 20px

.text-center
  .cell
    text-align center
</style>
