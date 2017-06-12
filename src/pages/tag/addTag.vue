<template>
  <div>
    <bread-crumb :crumbName="crumbName"></bread-crumb>
    <div id="content">
      <Tag v-for="item in tags" :key="item" :name="item" closable @on-close="handleClose2">{{ item  }}</Tag>
      <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
    </div>
  </div>
</template>
<script>
import breadCrumb from '../../components/breadCrumb'
export default {
  components: {
    breadCrumb
  },
  data () {
    return {
      crumbName: ['Tags 管理', '添加标签', '/tag/list'],
      tags: ['理工', '文史', '地理', '数学'],
      formItem: {
        textarea: ''
      }
    }
  },
  methods: {
    handleAdd () {
      if (this.tags.length) {
        this.tags.push(this.tags[this.tags.length - 1]);
      } else {
        this.tags.push(0);
      }
    },
    handleClose2 (event, name) {
      const index = this.tags.indexOf(name);
      this.tags.splice(index, 1);
    }
  }
}
</script>
