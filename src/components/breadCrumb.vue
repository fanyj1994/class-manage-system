<template>
  <div class="layout-breadcrumb">
    <div class="welcome">欢迎访问康瑞德课程管理系统</div>
    <div class="breadCrumb">
      <Breadcrumb>当前位置：
        <Breadcrumb-item href="/index">
          <Icon type="ios-home-outline"></Icon> 后台首页
        </Breadcrumb-item>
        <Breadcrumb-item :href="crumbName[2]" v-if="crumbName[0]">
          {{crumbName[0]}}
        </Breadcrumb-item>
        <Breadcrumb-item v-if="crumbName[1]">
         {{crumbName[1]}}
        </Breadcrumb-item>
      </Breadcrumb>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['crumbName']
  }
</script>
