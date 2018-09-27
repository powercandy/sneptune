<template>
  <div class="ad-classify">
    <ad-search :searchLabel="searchLabel"></ad-search>
    <ad-table v-if="array.length"
    :dataArray="array"
    :labelArray="labelArray">
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
export default class adClassify extends Vue {
  searchLabel: string = '添加分类'
  array: Array<object> = []
  labelArray: Array<object> = []
  totalData: number = 38
  mounted () {
    this.labelArray = [
      {
        label: '分类名称',
        prop: 'title',
        width: '200'
      },
      {
        label: '缩略名',
        prop: 'thumbnail',
        width: '200'
      },
      {
        label: '分类描述',
        prop: 'description',
        width: '200'
      },
      {
        label: '排序',
        prop: 'sort',
        width: '100'
      },
      {
        label: '文章数量',
        prop: 'article',
        width: '100'
      },
      {
        label: '操作',
        prop: 'setting',
        width: ''
      }
    ]
    let data: any = {
      title: 'classifyList',
      thumbnail: 'img',
      description: 'sm',
      sort: '1',
      article: '1',
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
}
</script>

<style lang="stylus" scoped>
.ad-classify
  background-color #fff
  padding 10px
</style>
