<template>
  <div id="reg" class="reg_reg">
    <Header :title="titlemsg"></Header>
    <a-row type="flex" justify="space-around" class="reg_h1" align="middle">
      <a-col :span="1"></a-col>
      <a-col :span="5" class="reg_head">
        <span class="reg_h3">姓名</span>
      </a-col>
      <a-col :span="18">
        <a-input
          v-model="user.name"
          size="large"
          class="login_input"
          placeholder="请填写本人真实姓名"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" class="reg_h1" align="middle">
      <a-col :span="1"></a-col>
      <a-col :span="5" class="reg_head">
        <span class="reg_h3">身份证号</span>
      </a-col>
      <a-col :span="18">
        <a-input
          v-model="user.idcard"
          size="large"
          class="login_input"
          placeholder="请填写身份证号码"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" class="reg_h1" align="middle">
      <a-col :span="1"></a-col>
      <a-col :span="5" class="reg_head">
        <span class="reg_h3">手机号</span>
      </a-col>
      <a-col :span="18">
        <a-input
          v-model="user.mobile"
          size="large"
          class="login_input"
          placeholder="请填写手机号码"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" class="reg_h1" align="middle">
      <a-col :span="1"></a-col>
      <a-col :span="5" class="reg_head">
        <span class="reg_h3">验证码</span>
      </a-col>
      <a-col :span="10">
        <a-input size="large" class="login_input" placeholder="请输入验证" />
      </a-col>
      <a-col :span="8">
        <span class="reg_ma">获取验证码</span>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" class="reg_h1" align="middle">
      <a-col :span="1"></a-col>
      <a-col :span="5" class="reg_head">
        <span class="reg_h3">设置密码</span>
      </a-col>
      <a-col :span="18">
        <a-input
          v-model="user.password"
          type="password"
          size="large"
          class="login_input"
          placeholder="请输入密码"
        />
      </a-col>
    </a-row>
    <div class="reg_bottom">
      <table width="100%" border="0">
        <tr>
          <td width="15%"></td>
          <td align="center" class="reg_bottom_1" @click="regPatient">确认</td>
          <td width="15%"></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
export default {
  components: { Header },
  data() {
    return {
      titlemsg: "注册",
      name: "ss",
      user: {
        name: "",
        idcard: "",
        mobile: "",
        password: "",
        roles: "1"
      },
      tipinfo: ""
    };
  },
  methods: {
    regPatient() {
      window.console.log(this.user);
      this.$ajax
        .put("/api/v1/register/user", this.user)
        .then(res => {
          window.console.log(res);
          this.tipinfo = res.data.message;
          this.success();
        })
        .catch(res => {
          window.console.log(res);
        });
    },
    success() {
      this.$success({
        title: "成功提示",
        // JSX support
        content: this.tipinfo
      });
    }
  }
};
</script>
<style lang="less" scoped>
input::-webkit-input-placeholder {
  color: #d9d9d9;
  font-size: 30px;
}
.bg {
  background: rgb(153, 243, 7);
}
.bg1 {
  background: rgb(207, 215, 243);
}
.login_input {
  height: 80px;
  font-size: 30px;
}
.reg_reg {
  height: 1334px;
  background: rgba(245, 245, 245, 1);
  position: relative;
}
.reg_bottom {
  position: absolute;
  top: 85%;
  text-align: center;
  width: 100vw;
}
.reg_bottom_1 {
  height: 120px;
  background: rgba(0, 144, 255, 1);
  border-radius: 4px;
  font-size: 36px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.reg_head {
  text-align: left;
}
.reg_input {
  height: 100px;
}
.reg_ma {
  height: 48px;
  font-size: 34px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 144, 255, 1);
  line-height: 48px;
}
.reg_h1 {
  width: 100vw;
  height: 128px;
  background: rgba(255, 255, 255, 1);
}
.reg_h2 {
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 144, 255, 1);
  line-height: 45px;
}
.reg_h3 {
  width: 390px;
  height: 50px;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 800;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}
</style>
