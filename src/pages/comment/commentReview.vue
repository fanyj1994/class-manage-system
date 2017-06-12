<template>
  <div>
    <bread-crumb :crumbName="crumbName"></bread-crumb>
    <div id="content">
      拒绝的课程
      <Row>
        <Col span="24">
          <search :inputVal="searchVal"></search>
        </Col>
      </Row>
      <Row>
        <Table border :columns="columns" :data="data"></Table>
      </Row>
    </div>
  </div>
</template>
<script>
import breadCrumb from '../../components/breadCrumb'
import Search from '../../components/search'
export default {
  data () {
    return {
      crumbName: ['课程管理', '被拒绝课程', '/class/complete'],
      searchVal: [
        ['课程标题', '讲师姓名', '课程状态'],
        ['已完成', '待讲授', '待审核', '被拒绝']
      ],
      columns: [
        {
          title: '姓名',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ]);
          }
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                      this.show(params.index)
                  }
                }
              }, '通过审核'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '拒绝审核')
            ]);
          }
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: '用户信息',
        content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1);
    }
  },
  components: {
    breadCrumb,
    Search
  }
}
</script>
