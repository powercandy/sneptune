<template>
  <div class="blog">
    <!-- 头部 -->
    <div class="header">
      <div class="back-home">
        <span>sneptune</span>
      </div>
    </div>
    <!-- 导航列表 -->
    <div class="nav-list">
      <ul>
        <li class="list-item" v-for="(item, index) in listOne" :key="index">
          <svg t="1536318100201" class="iconfont" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2068" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path :d="item.path" fill="#8a8a8a" p-id="2069"></path></svg>
          <span class="icon-text">{{item.text}}</span>
        </li>
      </ul>
    </div>
    <!-- 主体内容 -->
    <div class="blog-content">
      <div class="banner">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536552137928&di=423b6b547effae8628709edfbb3abb9d&imgtype=0&src=http%3A%2F%2F04.imgmini.eastday.com%2Fmobile%2F20180719%2F4b1b929abe7f286d3557a3e372745f5e_wmk.jpeg" alt="">
      </div>
      <div class="content-title">
        <span>Every Interaction’s posts</span>
      </div>
      <div class="content-item">
        <p class="author">Every Interaction</p>
        <div class="title-box">
          <p class="title">UX Design Top 10 Articles of The Year (v.2017)</p>
          <div class="line"></div>
        </div>
        <p class="keys">UX Design Top 10 Articles of The Year (v.2017)</p>
        <div class="item-pic">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536552137928&di=423b6b547effae8628709edfbb3abb9d&imgtype=0&src=http%3A%2F%2F04.imgmini.eastday.com%2Fmobile%2F20180719%2F4b1b929abe7f286d3557a3e372745f5e_wmk.jpeg" alt="">
        </div>
        <div class="item-icon">
          <span class="pointer">+1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { listOne } from '../assets/js/config'
export default Vue.extend({
  data () {
    return {
      list: ['Home', 'Collections', 'Communites', 'Profile', 'People', 'Setting', 'Send Feedback', 'Help'],
      listOne: listOne
    }
  }
})
</script>

<style lang="stylus" scoped>
.blog
  position absolute
  top 0
  left 0
  width 100%
  height 1200px
  background-color rgba(230, 230, 230, 1)

.header
  position relative
  width 100%
  height 64px
  background #fff

.back-home
  position absolute
  left 50px
  height 64px
  line-height 64px
  font-size 18px

.nav-list
  position absolute
  top 64px
  left 0
  width 160px
  padding-left 20px
  color rgba(64, 64, 64, 1)
  font-size 12px
  text-align left

.list-item
  margin-top 20px

.iconfont
  display inline-block
  width 20px
  height 20px
  vertical-align middle

.icon-text
  display inline-block
  height 20px
  line-height 20px
  vertical-align middle
  margin-left 10px

.blog-content
  position absolute
  top 64px
  left 350px

.banner
  width 800px
  height 400px
  img
    width 100%
    height 100%

.content-title
  text-align left
  margin-top 38px
  margin-bottom 25px
  font-size 12px

.content-item
  border-box box-sizing
  width 468px
  font-size 12px
  text-align left
  background #fff
  .author
    height 36px
    line-height 36px
    padding 0 15px
    font-size 12px
  .title-box
    margin-top 16px
    padding 0 15px
    font-size 14px
  .line
    margin-top 15px
    border-bottom 2px solid #ddd
  .keys
    margin 15px 0
    padding 0 15px
    font-size 20px
  .item-icon
    padding 15px
    span
      display inline-block
      width 36px
      height 36px
      line-height 36px
      text-align center
      border-radius 50%
      background #ddd
.item-pic
  img
    width 468px
    height 215px
</style>
