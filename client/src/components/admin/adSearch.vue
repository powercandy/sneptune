<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="18">
      <el-button type="primary" size="small" class="publish-btn btn">+&nbsp;{{searchLabel}}</el-button>
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class adSearch extends Vue {
  @Prop(String) searchLabel!: string
  searchText: string = ''
}
</script>

<style lang="stylus">
.search-input
  input
    height 32px
</style>
