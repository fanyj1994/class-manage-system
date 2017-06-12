<template>
  <div>
    <bread-crumb :crumbName="crumbName"></bread-crumb>
    <div id="content">
      <Table :columns="columns" border :data="data" fixed="left"></Table>
    </div>
  </div>
</template>
<script>
import breadCrumb from '../../components/breadCrumb'
export default {
  data () {
    return {
      crumbName: ['Tags 管理', 'Tag 列表', '/tag/list'],
      columns: [
        {
          title: '编号',
          key: 'id'
        },
        {
          title: 'Tags',
          key: 'tag'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                    type: 'primary',
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
              }, '查看'),
              h('Button', {
                props: {
                    type: 'error',
                    size: 'small'
                },
                on: {
                    click: () => {
                        this.remove(params.index)
                    }
                }
              }, '删除')
            ]);
          }
        }
      ],
      data: [
        {
          id: '1',
          tag: '理工'
        },
        {
          id: '2',
          tag: '文史'
        },
        {
          id: '3',
          tag: '社科'
        }
      ]
    }
  },
  components: {
    breadCrumb
  }
}
</script>
