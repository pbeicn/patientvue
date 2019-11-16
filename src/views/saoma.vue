<template>
  <div id="reg" class="reg_reg">
    <Header :title="titlemsg"></Header>
    <a-row type="flex" justify="space-around" class="reg_h1" align="middle">
      <a-col :span="1"></a-col>
      <a-col :span="5" class="reg_head">
        <span class="reg_h3">二维码</span>
      </a-col>
      <a-col :span="18">
        <a-input
          v-model="ma"
          size="large"
          class="login_input"
          value="18461783365189632"
          placeholder="请输入医生二维码"
        />
      </a-col>
    </a-row>
    <div class="reg_bottom">
      <table width="100%" border="0">
        <tr>
          <td width="15%"></td>
          <td align="center" class="reg_bottom_1" @click="confirmDoc">确认</td>
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
      titlemsg: "扫码登录",
      ma: "18461783365189632",
      tipinfo: ""
    };
  },
  methods: {
    confirmDoc() {
      let that = this;
      this.$ajax
        .get("/api/v1/register/" + this.ma)
        .then(res => {
          window.console.log(res);
          this.tipinfo = "挂号成功：排队号--" + res.data.queueNum;
          this.success();
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            window.console.log("AAA" + error.response.data.message);
            that.tipinfo = error.response.data.message;
            that.error();
            window.console.log("BBB" + error.response.status);
            window.console.log("ACCCsAA" + error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            window.console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            window.console.log("Error", error.message);
          }
          window.console.log(error.config);
        });
    },
    success() {
      this.$success({
        title: "成功提示",
        // JSX support
        content: this.tipinfo
      });
    },
    error() {
      this.$error({
        title: "错误提示",
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
  top: 35%;
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
