<template>
  <div class="ad-page">
    <ad-search :searchLabel="searchLabel" @editorContent="editorContent"></ad-search>
    <ad-table v-if="array.length"
    :dataArray="array"
    :labelArray="labelArray"
    @editorExist="editorExist">
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
export default class adPage extends Vue {
  searchLabel: string = '添加页面'
  array: Array<object> = []
  labelArray: Array<object> = []
  totalData: number = 38
  mounted () {
    this.labelArray = [
      {
        label: '页面名称',
        prop: 'title',
        width: '350'
      },
      {
        label: '阅读量',
        prop: 'read',
        width: '250'
      },
      {
        label: '发布时间',
        prop: 'publish',
        width: '250'
      },
      {
        label: '操作',
        prop: 'setting',
        width: ''
      }
    ]
    let data: any = {
      title: 'pageList',
      classify: 'css',
      read: '0',
      publish: '2018/9/20 下午5:59:42',
      setting: '11',
      slug: 'css'
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
  editorContent () {
    this.$router.push('/page/editor')
  }
  // 编辑内容
  editorExist (slug: string) {
    this.$router.push(`/page/editor?slug=${slug}`)
  }
}
</script>

<style lang="stylus" scoped>
.ad-page
  background-color #fff
  padding 10px
</style>
