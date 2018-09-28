<template>
  <div class="ad-content">
    <ad-search :searchLabel="searchLabel" @editorContent=editorContent></ad-search>
    <ad-table v-if="array.length"
    :dataArray="array"
    :labelArray="tableLabel">
    </ad-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import adTable from '../../components/admin/adTable.vue'
import adSearch from '../../components/admin/adSearch.vue'
@Component({
  components: {
  adTable,
  adSearch
  }
  })
export default class adContent extends Vue {
  searchLabel: string = '发布文章'
  tableLabel: Array<object> = [
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
  totalData: number = 38
  array: Array<object> = []
  maxPageNumber: number = 10
  currentPage: number = 1
  tableArray: any = []
  mounted () {
    let data: any = {
      title: 'contentList',
      classify: 'tech',
      read: '0',
      publish: '2018/9/20 下午5:59:42',
      setting: '11'
    }
    for (let i = 0; i < this.totalData; i++) {
      if (i > 9 && i <= 19) {
        let data2: any = Object.assign({}, data)
        data2.title = data.title + '-1'
        this.array.push(data2)
      } else if (i > 19 && i <= 29) {
        let data3: any = Object.assign({}, data)
        data3.title = data.title + '-2'
        this.array.push(data3)
      } else if (i > 29) {
        let data4: any = Object.assign({}, data)
        data4.title = data.title + '-3'
        this.array.push(data4)
      } else {
        this.array.push(data)
      }
    }
  }
  cellName (e: any) {
    console.log(e)
  }
  editorContent () {
    this.$router.push('/content/editor')
  }
}
</script>

<style lang="stylus" scoped>
.ad-content
  background-color #fff
  padding 10px
  font-size 12px

</style>
