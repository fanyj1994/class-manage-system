<template>
  <Menu theme="light" :open-names="['1']" type="flex" class="layout-left-menu" width="auto">
      <Menu-item name="1-1" class="toHome"><router-link to="/index"><Icon type="home"></Icon> 后台首页</router-link></Menu-item>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-book"></Icon>课程管理
      </template>
      <Menu-item name="2-1"><router-link to="/class/complete">已完成课程</router-link></Menu-item>
      <Menu-item name="2-2"><router-link to="/class/teach">待讲授课程</router-link></Menu-item>
      <Menu-item name="2-3"><router-link to="/class/review">待审核课程</router-link></Menu-item>
      <Menu-item name="2-4"><router-link to="/class/reject">被拒绝课程</router-link></Menu-item>
      <Menu-item name="2-5"><router-link to="/class/detail">课程详情</router-link></Menu-item>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-people"></Icon>用户管理
      </template>
      <Menu-item name="3-1"><router-link to="/user/list">用户列表</router-link></Menu-item>
      <Menu-item name="3-2"><router-link to="/user/review">待审核用户</router-link></Menu-item>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="pricetags"></Icon>TAGS 管理
      </template>
        <Menu-item name="4-1"><router-link to="/tag/list">Tags 列表</router-link></Menu-item>
        <Menu-item name="4-2"><router-link to="/tag/add">添加 Tags</router-link></Menu-item>
    </Submenu>
    <Submenu name="5">
      <template slot="title">
        <Icon type="chatboxes"></Icon>评论管理
      </template>
        <Menu-item name="5-1"><router-link to="/comment/review">待审核评论</router-link></Menu-item>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  data () {
    return {
      menuList: [
        {
          title: '课程管理',
          children: [
            {title: '已完成课程', router: '/class'},
            {title: '待讲授课程', router: ''}
          ]
        }
      ]
    }
  }
}
</script>
