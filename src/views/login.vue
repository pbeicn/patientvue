<template>
  <div id="login">
    <div class="login_h1">
      <br />
      <br />
      <br />
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="6">
          <img src="@/assets/hz1.png" height="50px" border="1" />
        </a-col>
        <a-col :span="15">
          <div class="login_h3">欢迎使用就诊问诊</div>
        </a-col>
      </a-row>
      <br />
      <br />
      <br />
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="24">
          <a-input
            v-model="logininfo.username"
            size="large"
            class="login_input"
            placeholder="身份证号码"
          />
        </a-col>
      </a-row>
      <br />
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="24">
          <a-input
            v-model="logininfo.password"
            size="large"
            type="password"
            class="login_input"
            placeholder="请输入登录密码，注意大小写"
          />
        </a-col>
      </a-row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="24">
          <button type="button" class="login_h5">
            <span class="login_h6" @click="plogin">登录</span>
          </button>
        </a-col>
      </a-row>
      <div style="text-align: center;widows: 100%;">
        <br />
        <br />
        <div class="login_h7" style="text-align: center;widows: 100%;">
          还没有账号，点击
          <router-link to="/reg" style="color: #108EE9">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "ss",
      logininfo: {
        grant_type: "password",
        client_id: "practice",
        client_secret: "neuqsoft2019",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    plogin() {
      this.$ajax
        .post("/oauth/token", this.$qs.stringify(this.logininfo))
        .then(res => {
          window.console.log(res);
          sessionStorage.setItem(
            "access_token",
            "bearer" + res.data.access_token
          );
          this.$router.push("/main");
        })
        .catch(res => {
          window.console.log(res);
        });
    }
  }
};
</script>
<style lang="less" scoped>
input::-webkit-input-placeholder {
  color: #d9d9d9;
  font-size: 36px;
}
.bg {
  background: rgb(153, 243, 7);
}
.login_input {
  height: 100px;
  font-size: 36px;
}
.login_h1 {
  background: rgba(255, 255, 255, 1);
}

.login_h2 {
  width: 100%;
  height: 70px;
  font-size: 50px;
  font-family: PingFangSC-Semibold, PingFangSC;
  font-weight: 600;
  color: rgba(66, 77, 90, 1);
  line-height: 70px;
}

.login_h3 {
  width: 100%;
  height: 70px;
  font-size: 50px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(66, 77, 90, 1);
  line-height: 70px;
}

.login_h4 {
  /* width: 160px; */
  height: 100px;
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(180, 190, 198, 1);
  line-height: 145px;
}

.login_h5 {
  width: 90%;
  height: 80px;
  background: rgba(0, 144, 255, 1);
  border-radius: 38px;
}

.login_h6 {
  width: 68px;
  height: 48px;
  font-size: 34px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 48px;
}

.login_h7 {
  width: 100%;
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 40px;
}
</style>
