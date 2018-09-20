<template>
  <div class="demo-page">
    <span>输入：</span><input v-model="msg">
    <p>Data: <span class="blue">{{ msg }}</span></p>
    <p>computed msg: {{ computeMsg }}</p>
    <!-- <p>Filter msg: {{ msg | addNum }}</p> -->
    <p @click="greet" ref="clickElement">Greet</p>
    <!-- <demo-child :message="msg"/> -->
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Vue, Component, Watch } from 'vue-property-decorator'
import demoChild from '../components/demoChild.vue'
import mixin from '../assets/js/mixin'

// 注册路由钩子
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])
// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
  // 所有的组件选项都可以放在这里
  components: {
  demoChild
  },
  mixins: [mixin]
  })
// @Component
export default class Demo extends Vue {
  // 初始化data
  msg: string = '99'
  // 计算属性
  get computeMsg (): string {
    return this.msg + '123'
  }
  // 生命周期函数
  mounted () {
    console.log(1)
  }
  // methods方法
  greet (a) {
    console.log(this.msg)
    console.log(this.$refs.clickElement)
  }
  // 进入路由前执行的钩子
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  }
  // watch方法
  @Watch ('msg')
  onMsgChanged (val: string, oldVal: string) {
    console.log('val: ' + val + ';oldVal: ' + oldVal)
  }
}
</script>

<style lang="stylus" scoped>
.demo-page
  text-align left
.blue
  color blue
p
  margin-top 10px
  font-size 20px
</style>
