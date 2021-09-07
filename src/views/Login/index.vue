<template>
  <div class="login">
    <el-card>
      <div class="login-title">小微企业跨组织人才管理系统</div>
       <el-tabs v-model="activeName" @tab-click="handleClick">
         <el-tab-pane label="用户管理" name="first">
          <span>企业用户登录</span>
        <el-form  status-icon  ref="ruleForm">
        <el-form-item >
          <el-input
            type="text"
            placeholder="请输入用户名"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password"  placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
       
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <span>求职用户登录</span>

    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <span>管理员登录</span>
    </el-tab-pane>
  </el-tabs>
  </el-card>
  </div>
</template>

<script>
export default {
  // data() {
  //   //设置表单校验规则
  //   let validatorUserName = (rule, value, callback) => {
  //     //用户名规则
  //     if (value === "") {
  //       return callback(new Error("请输入用户名"));
  //     } else {
  //       callback();
  //     }
  //   };

  //   let validatorPwd = (rule, value, callback) => {
  //     //密码规则
  //     if (value === "") {
  //       return callback(new Error("请输入密码"));
  //     } else {
  //       callback();
  //     }
  //   };

  //   return {
  //     form: {
  //       //登录的表单项
  //       username: "",
  //       pwd: "",
  //     },
  //     rules: {
  //       //表单校验规则
  //       username: [{ validator: validatorUserName, trigger: "blur" }],
  //       pwd: [{ validator: validatorPwd, trigger: "blur" }],
  //     },
  //     state: true, //按钮状态，true为登录，false为注册
  //   };
  // },
  // methods: {
  //   submit(formName) {
  //     this.$refs[formName].validate((valid) => {
  //       if (valid) {
  //         this.$http({
  //           path: this.state ? "/users/login" : "/users/reg",
  //           method: "post",
  //           params: {
  //             username: this.form.username,
  //             pwd: this.form.pwd,
  //           },
  //         }).then((res) => {
  //           if (res.code === 200 && this.state) {
  //             localStorage.token = res.token;
  //             this.$router.push({
  //               path: "/admin",
  //             });
  //           }
  //           this.$message({
  //             message: res.msg,
  //             type: res.code === 200 ? "success" : "error",
  //           });
  //         });
  //       }
  //     });
  //   },
  //   changeState() {
  //     //改变登录按钮状态
  //     this.form = {
  //       username: "",
  //       pwd: "",
  //     };
  //   },
  // },
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
/* 登录页面背景图片样式 */
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/bg-01.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* el-card卡片组件样式 */
.el-card {
  width: 420px;
  height: 300px;
}
/* 登录标题样式 */
.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}
/* 登录按钮 */
.login-btn {
  text-align: right;
}
</style>
