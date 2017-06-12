<template>
  <div class="loginwrap">
    <Row>
      <h1>康瑞德课程管理系统</h1>
      <Card style="width: 340px">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <Col justify="center">
          <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username" style="width: 300px"></Input>
          </Form-item>
        </Col>
        <Col>
          <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password" style="width: 300px"></Input>
          </Form-item>
        </Col>
        <Col>
          <Form-item>
            <Button type="primary" @click="handleSubmit('formInline')" style="width: 300px">登录</Button>
          </Form-item>
        </Col>
        </Form>
      </Card>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
          this.$router.push('/index')
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    }
  }
}
</script>
