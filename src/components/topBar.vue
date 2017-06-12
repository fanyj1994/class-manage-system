<template>
  <header class="layout-header">
    <div class="brand">
      <img src="../images/logo.png" height="30" width="30" alt="">
      <h1><router-link to="/index">康瑞德课程管理系统</router-link></h1>
    </div>
    <div class="register">
      <Dropdown>
        <a href="javascript:void(0)" class="account">
          <img src="../../dist/avatar.png" height="30" width="30" alt="">
            Fan<Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
          <Dropdown-item><router-link to="/updatepwd">修改密码</router-link></Dropdown-item>
          <Dropdown-item><router-link to="/" @click="logout">退出登录</router-link></Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$router.push('/')
      this.$api.get('logout', null, re => {
        this.$router.push('/')
      })
    }
  }
}
</script>
