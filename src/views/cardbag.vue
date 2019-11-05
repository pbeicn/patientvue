<template>
  <div id="card" class="card_reg">
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
        <span class="card_h3">我的卡包</span>
      </a-col>
      <a-col :span="5"></a-col>
    </a-row>
    <br />
    <br />
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="card_ma">
          <img src="@/assets/addcard.png" class="card_img" />
        </div>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
    <br />
    <br />
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <span class="card_f">当前卡包无卡片</span>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
    <br />
    <br />
    <a-row type="flex" justify="center" align="middle">
      <a-col :span="1"></a-col>
      <a-col :span="23" class="card_b3">
        <div class="card_b1">
          <table width="100%" height="100%">
            <tr>
              <td align="right" width="35%">
                <img src="@/assets/yjia.png" class="card_img1" />
              </td>
              <td width="10px"></td>
              <td align="left">
                <router-link to="/getcard">
                  <span class="card_f1">点击添加新的卡片</span>
                </router-link>
              </td>
            </tr>
          </table>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
.bg {
  background: rgb(153, 243, 7);
}
.bg1 {
  background: rgb(207, 215, 243);
}
.card_reg {
  height: 1334px;
  //   background: rgba(245, 245, 245, 1);
  position: relative;
}
.card_bottom_1 {
  height: 120px;
  background: rgba(0, 144, 255, 1);
  border-radius: 4px;
  font-size: 36px;
  font-family: PingFangSC-cardular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.card_head {
  text-align: left;
}
.card_input {
  height: 100px;
}
.card_h1 {
  width: 100vw;
  height: 128px;
  background: rgba(255, 255, 255, 1);
}
.card_h2 {
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-cardular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 144, 255, 1);
  line-height: 45px;
}
.card_h3 {
  width: 390px;
  height: 50px;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 800;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}
.card_img {
  width: 160px;
  height: 128px;
}
.card_f {
  width: 238px;
  height: 48px;
  font-size: 34px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: rgba(153, 153, 153, 1);
  line-height: 48px;
}
.card_b1 {
  width: 690px;
  height: 97px;
  border-radius: 8px;
  border: 1px solid rgba(57, 131, 229, 1);
}
.card_b2 {
  height: 97px;
}
.card_b3 {
  text-align: center;
}
.card_img1 {
  width: 48px;
  height: 48px;
}
.card_f1 {
  width: 272px;
  height: 48px;
  font-size: 34px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(57, 131, 229, 1);
  line-height: 48px;
}
</style>
