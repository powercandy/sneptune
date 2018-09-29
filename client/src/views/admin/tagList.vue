<template>
  <div class="ad-tag">
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
export default class adTag extends Vue {
  searchLabel: string = '添加标签'
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
      title: 'tag',
      thumbnail: 'img',
      description: 'sm',
      sort: '1',
      article: '1',
      setting: '11',
      slug: 'one'
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
    this.$router.push('/tag/editor')
  }
  // 编辑内容
  editorExist (slug: string) {
    this.$router.push(`/tag/editor?slug=${slug}`)
  }
}
</script>

<style lang="stylus" scoped>
.ad-tag
  background-color #fff
  padding 10px
</style>
