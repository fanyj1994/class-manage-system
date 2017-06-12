<template>
  <div>
    <bread-crumb :crumbName="crumbName"></bread-crumb>
    <div id="content" class="updatePwd">
      <Col span="8">
      <Form label-width="100" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <Form-item label="旧密码" prop="oldPwd">
          <Input type="password" v-model="formCustom.oldPwd"></Input>
        </Form-item>
        <Form-item label="新密码" prop="newPwd">
          <Input type="password" v-model="formCustom.newPwd"></Input>
        </Form-item>
        <Form-item label="确认密码" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
          <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
        </Form-item>
      </Form>
      </Col>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.formCustom.passwdCheck !== '') {
          this.$refs.formCustom.validateField('passwdCheck');
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'));
      } else if (value !== this.formCustom.newPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    const validateNewPwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入新密码'));
      }
      // 模拟异步验证效果
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error('请输入数字值'));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error('必须年满18岁'));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
    };

    return {
      crumbName: ['', '更改密码',''],
      formCustom: {
        oldPwd: '',
        newPwd: '',
        passwdCheck: ''
      },
      ruleCustom: {
          oldPwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          newPwd: [
            { validator: validateNewPwd, trigger: 'blur' }
          ]
        }
      }
    },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
