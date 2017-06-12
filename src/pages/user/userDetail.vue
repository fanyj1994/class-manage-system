<template>
  <div>
    <bread-crumb :crumbName="crumbName"></bread-crumb>
    <div id="content">
      <div class="jumpArea">
        <Form inline>
          <Form-item><Button type="primary">返回上一页</Button></Form-item>
          <Form-item><Button type="primary">更新课程视频</Button></Form-item>
          <Form-item><Button type="primary">课程安排</Button></Form-item>
          <Form-item><Button type="primary">更新状态</Button></Form-item>
        </Form>
      </div>
      <Table :columns="columns" :data="data" fixed="left"></Table>
    </div>
  </div>
</template>
<script>
import breadCrumb from '../../components/breadCrumb'
export default {
  data () {
    return {
      crumbName: ['用户管理', '用户详情', '/user/list'],
      columns: [
        {
          title: '用户姓名',
          key: 'name'
        },
        {
          title: '手机号码',
          key: 'tel'
        },
        {
          title: '当前状态',
          key: 'state'
        },
        {
          title: '课程数量',
          key: 'num'
        },
        {
          title: '注册时间',
          key: 'time'
        },
        {
          title: '用户头像',
          key: 'avatar'
        }
      ],
      data: [
        {
          name: 'Fungleo 带你 SEO 入门',
          tel: 'Fungleo',
          state: '新课程',
          num: 10,
          time: '2017-06-07',
          avatar: '头像'
        }
      ]
    }
  },
  components: {
    breadCrumb
  }
}
</script>
