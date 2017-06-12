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
      crumbName: ['课程管理', '课程详情', '/class/complete'],
      columns: [
        {
          title: '课程标题',
          key: 'name'
        },
        {
          title: '提交用户',
          key: 'user'
        },
        {
          title: '当前状态',
          key: 'state'
        },
        {
          title: '归属标签',
          key: 'tag'
        },
        {
          title: '课程简介',
          key: 'introduce'
        },
        {
          title: '课程文件',
          key: 'file',
          render: (h, params) => {
            return h('Upload',
            {
              props: {
                type: "drag",
                multiple: "multiple",
                action: "//jsonplaceholder.typicode.com/posts/"
              }
            },
            [
              h('div', {
                style: {
                  padding: '1rem'
                }
              },
              [
                h('Icon', {
                  props: {
                    type: "ios-cloud-upload",
                    size: 28,
                  },
                  style: {
                    color: '#3399ff'
                  }
                })
              ])
            ])
          }
        },
        {
          title: '课程视频',
          key: 'video',
          render: (h, params) => {
            return h('video', {
              props: {
                video: '',
                autoplay: 'autoplay',
                src: ''
              }
            })
          }
        }
      ],
      data: [
        {
          name: 'Fungleo 带你 SEO 入门',
          user: 'Fungleo',
          state: '新课程',
          tag: ['SEO', '搜索引擎优化'],
          introduce: '讲解 SEO 搜索引擎优化入门'
        }
      ]
    }
  },
  components: {
    breadCrumb
  }
}
</script>
