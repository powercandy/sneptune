<template>
  <el-container class="admin-main">
    <el-aside :width="asideWidth">
      <div class="aside-header">
        aside-header
      </div>
      <ul>
        <li v-for="(item, index) in asideList" :key="index" @click="selectContent(item.path)">
          <i :class="['el-icon', item.icon]"></i>
          <span v-show="hideFlag">{{item.name}}</span>
        </li>
      </ul>
    </el-aside>
    <el-container>
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col>
            <i class="el-icon-menu spread-btn" @click="hideAside"></i>
          </el-col>
          <el-col class="el-col-right">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                {{account}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <img class="avatar" src="https://secure.gravatar.com/avatar/a71767393008c230de03ae4ad6ba7840" alt="用户头像">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="message">个人资料</el-dropdown-item>
                <el-dropdown-item command="modifyPsd">修改密码</el-dropdown-item>
                <el-dropdown-item command="login">退出后台</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(i, k) in _breadcrumbArray" :key="k">{{i}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class adMain extends Vue {
  asideList: Array<object> = [
    {
      name: '控制台',
      icon: 'el-icon-star-off',
      path: 'controller'
    },
    {
      name: '内容管理',
      icon: 'el-icon-edit-outline',
      path: 'content'
    },
    {
      name: '页面管理',
      icon: 'el-icon-edit',
      path: 'page'
    },
    {
      name: '评论管理',
      icon: 'el-icon-menu',
      path: 'comment'
    },
    {
      name: '分类管理',
      icon: 'el-icon-menu',
      path: 'classify'
    },
    {
      name: '标签管理',
      icon: 'el-icon-menu',
      path: 'tag'
    },
    {
      name: '系统设置',
      icon: 'el-icon-setting',
      path: 'setting'
    }
  ]
  hideFlag: Boolean = true
  asideWidth: String = '12.5%'
  account: string = 'admin'
  breadcrumbArray: any = {
    controller: '控制台',
    content: '内容',
    page: '页面',
    comment: '评论',
    classify: '分类',
    tag: '标签',
    setting: '设置',
    list: '列表',
    editor: '编辑'
  }
  get _breadcrumbArray () {
    let array: [] = []
    let breads: any = this.$route.path.split('/')
    breads.forEach(v => {
      if (this.breadcrumbArray[v]) {
        array.push(this.breadcrumbArray[v])
      }
    })
    console.log(array)
    return array
  }
  selectContent (path: string) {
    this.$router.push(path)
  }
  hideAside () {
    this.hideFlag = !this.hideFlag
    this.hideFlag
      ? this.asideWidth = '12.5%'
      : this.asideWidth = '5%'
  }
  handleCommand (command: string) {
    this.$router.push(command)
  }
}
</script>

<style lang="stylus" scoped>
.admin-main
  position absolute
  left 0
  top 0
  width 100%
  height 100%

.el-header
  background #B3C0D1
  color #333
  text-align left
  line-height 60px
  .spread-btn
    cursor pointer
    font-size 24px
    &:hover
      color #2d8cf0
  .el-dropdown-link
    cursor pointer
    &:hover
      color #2d8cf0

.el-col-right
  text-align right

.avatar
  width 40px
  height 40px
  border-radius 50%
  vertical-align middle
  margin-left 10px

.el-aside
  background #464c5b
  color rgba(255,255,255,.7)
  height 100%
  cursor pointer
  .aside-header
    height 60px
    background-color #5b6270
    line-height 60px
    text-align center
  li
    padding 24px
    font-size 14px
    text-align left
    &:hover
      color #fff

.el-icon
  margin-right 6px

.el-main
  background-color #E9EEF3
  color #333
  .el-breadcrumb
    padding-bottom 20px
</style>
