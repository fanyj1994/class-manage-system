<template>
  <Card id="searchArea" dis-hover>
    <Form :model="formItem" :label-width="80" inline>
      <Form-item :label="inputVal[0][0]">
        <Input v-model="formItem.inputItem1" placeholder="请输入"></Input>
      </Form-item>
      <Form-item :label="inputVal[0][1]">
        <Input v-model="formItem.inputItem2" placeholder="请输入"></Input>
      </Form-item>
      <Form-item :label="inputVal[0][2]">
        <Select v-model="formItem.select" placeholder="请选择">
          <Option v-for="option in inputVal[1]" value="beijing">{{option}}</Option>
        </Select>
      </Form-item>
      <Form-item>
        <Button type="primary">搜索</Button>
      </Form-item>
    </Form>
  </Card>
</template>
<script>
export default {
  data () {
    return {
      formItem: {
        inputItem1: '',
        inputItem2: '',
        select: ''
      }
    }
  },
  props: [
    'inputVal'
  ]
}
</script>
<style scoped>
.ivu-btn {
  margin-left: -55px;
}
</style>
