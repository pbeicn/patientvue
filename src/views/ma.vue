<template>
  <div id="ma" class="ma_b">
    <a-row type="flex" justify="space-around" class="card_h1" align="middle">
      <a-col :span="6">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="2"></a-col>
          <a-col :span="2">
            <router-link to="/">
              <font-awesome-icon icon="angle-left" class="card_h2" />
            </router-link>
          </a-col>
          <a-col :span="20" class="card_head">
            <router-link to="/main">
              <span class="card_h2">返回</span>
            </router-link>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="13">
        <span class="card_h3">就诊卡</span>
      </a-col>
      <a-col :span="5"></a-col>
    </a-row>
    <br />
    <br />
    <br />
    <br />
    <a-row type="flex" justify="center">
      <a-col :span="1"></a-col>
      <a-col :span="22">
        <div class="ma_img">
          <table height="100%" width="100%">
            <tr>
              <td class="ma_h1">河北东软电子就诊卡</td>
            </tr>
          </table>
        </div>
      </a-col>
      <a-col :span="1"></a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <a-col :span="1"></a-col>
      <a-col :span="22">
        <div class="ma_h2">
          <table height="100%" width="100%" border="0">
            <tr class="ma_h7">
              <td align="center">
                <div id="qrCode" ref="qrCodeDiv" class="ma_h3" v-html="imgn"></div>
              </td>
            </tr>
            <tr class="ma_h6">
              <td align="center">
                <div class="ma_h4" v-html="macode"></div>
              </td>
            </tr>
            <tr class="ma_h6">
              <td align="center">
                <font-awesome-icon icon="redo" class="ma_h8" />
                <span v-html="hello" @click="getMa"></span>
                <span class="ma_h5">每分钟自动更新，点击手动刷新</span>
                <span class="ma_h9" @click="getMa">刷新</span>
              </td>
            </tr>
            <tr class="ma_h6">
              <td align="center"></td>
            </tr>
          </table>
        </div>
      </a-col>
      <a-col :span="1"></a-col>
    </a-row>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      name: "",
      macode: "",
      hello: "&nbsp;&nbsp;",
      imgn: "",
      tipinfo: ""
    };
  },
  created() {
    setInterval(() => {
      this.checkstatus();
    }, 10000);
  },
  methods: {
    checkstatus() {
      this.$ajax
        .get("/api/v1/card")
        .then(res => {
          window.console.log(res);
          window.console.log(res.data.state);
          // if (res.data.state != "waiting") {
          //   this.tipinfo = "医生已扫描,请就诊";
          //   this.success();
          // }
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
    },
    error() {
      this.$error({
        title: "错误提示",
        content: this.tipinfo
      });
    },
    getMa() {
      new QRCode(this.$refs.qrCodeDiv, {
        text: ""
      });
      this.$ajax
        .post("/api/v1/card")
        .then(res => {
          window.console.log(res);
          this.$ajax
            .get("/api/v1/card")
            .then(res => {
              window.console.log(res);
              this.macode = res.data.code;
              new QRCode(this.$refs.qrCodeDiv, {
                text: res.data.code,
                colorDark: "#333333", //二维码颜色
                colorLight: "#ffffff", //二维码背景色
                correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
              });
            })
            .catch(function(error) {
              if (error.response) {
                window.console.log("AAA" + error.response.data.message);
              } else if (error.request) {
                window.console.log(error.request);
              } else {
                window.console.log("Error", error.message);
              }
              window.console.log(error.config);
            });
        })
        .catch(function(error) {
          if (error.response) {
            window.console.log("AAA" + error.response.data);
            // window.console.log("BBB" + error.response.status);
            // window.console.log("ACCCsAA" + error.response.headers);
          } else if (error.request) {
            window.console.log(error.request);
          } else {
            window.console.log("Error", error.message);
          }
          window.console.log(error.config);
        });
    }
  },
  mounted() {
    this.$ajax
      .post("/api/v1/card")
      .then(res => {
        window.console.log(res);
        this.$ajax
          .get("/api/v1/card")
          .then(res => {
            window.console.log(res);
            this.macode = res.data.code;
            new QRCode(this.$refs.qrCodeDiv, {
              text: res.data.code,
              colorDark: "#333333", //二维码颜色
              colorLight: "#ffffff", //二维码背景色
              correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
            });
          })
          .catch(function(error) {
            if (error.response) {
              window.console.log("AAA" + error.response.data.message);
            } else if (error.request) {
              window.console.log(error.request);
            } else {
              window.console.log("Error", error.message);
            }
            window.console.log(error.config);
          });
      })
      .catch(function(error) {
        if (error.response) {
          window.console.log("AAA" + error.response.data);
          // window.console.log("BBB" + error.response.status);
          // window.console.log("ACCCsAA" + error.response.headers);
        } else if (error.request) {
          window.console.log(error.request);
        } else {
          window.console.log("Error", error.message);
        }
        window.console.log(error.config);
      });
  },
  destroyed() {
    clearInterval();
  }
};
</script>
<style lang="less" scoped>
.ma_b {
  width: 750px;
  height: 1334px;
  background: rgba(16, 142, 233, 1);
}
.card_h1 {
  width: 100vw;
  height: 128px;
}
.card_h2 {
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-cardular, PingFang SC;
  font-weight: 400;
  color: white;
  line-height: 45px;
}
.card_h3 {
  width: 390px;
  height: 50px;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 800;
  color: white;
  line-height: 50px;
}
.ma_img {
  width: 686px;
  height: 98px;
  background-image: url(../assets/mam.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.ma_h1 {
  width: 360px;
  height: 56px;
  font-size: 40px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 56px;
  margin-top: 103px;
}
.ma_h2 {
  width: 686px;
  height: 804px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
}
.ma_h3 {
  width: 480px;
  height: 480px;
}
.ma_h4 {
  width: 384px;
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(25, 65, 98, 1);
  line-height: 45px;
}
.ma_h5 {
  width: 336px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 197, 197, 1);
  line-height: 33px;
}
.ma_h6 {
  height: 33px;
}
.ma_h7 {
  height: 500px;
}
.ma_h8 {
  width: 24px;
  height: 27px;
  color: #0090ff;
}
.ma_h9 {
  width: 336px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #0090ff;
  line-height: 33px;
}
</style>