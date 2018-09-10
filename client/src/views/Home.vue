<template>
  <div class="home">
    <nav class="home-nav">
      <div class="back-home">
          Home
      </div>
      <div class="nav-list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      list: ['Dashboard', 'Dashboard', 'Dashboard', 'Dashboard', 'Dashboard', 'Dashboard']
    }
  }
})
</script>

<style lang="stylus" scoped>
.home
  position absolute
  top 0
  left 0
  width 100%
  height 100%

.home-nav
  width 214px
  height 100%
  background-color rgba(78, 84, 108, 1)

.back-home
  width 214px
  height 78px
  color #fff
  background-color rgba(85, 92, 120, 1)
  font-size 18px
  line-height 78px
  text-align center

.nav-list
  padding-left 40px
  padding-top 40px
  color rgba(45, 209, 172, 1)
  text-align left
  font-size 14px
  line-height 35px

</style>
