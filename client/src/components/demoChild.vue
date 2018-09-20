<template>
  <div>
    <p>demo-children</p>
    <p>Props: <span class="props">{{message}}</span></p>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component
export default class demoChild extends Vue {
  // 组件属性，字符串类型；
  @Prop(String) message!: string
}
</script>

<style lang="stylus" scoped>
.props
  color red
</style>
