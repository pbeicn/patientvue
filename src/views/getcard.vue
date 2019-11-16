<template>
  <div id="card" class="card_reg">
    <Header :title="titlemsg"></Header>
    <a-row>
      <a-col :span="24">
        <div class="card_ma">
          <img src="@/assets/hh2.png" class="card_img" />
        </div>
      </a-col>
    </a-row>
    <br />
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <span class="card_86">先扫码 再就诊</span>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
    <br />
    <table width="100%">
      <tr>
        <td align="center">
          <div class="card_85">
            <table width="100%" height="100%">
              <tr>
                <td align="left" width="5%"></td>
                <td align="left">
                  <div class="card_84">使用说明：就医、拿药一卡通，请在就诊前向医生出示 您的二维码。</div>
                </td>
                <td align="left" width="5%"></td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <br />
    <br />
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20" class="card_83">
        <input type="radio" name="optradio" />
        <span class="card_82">同意</span>
        <span class="card_81">《用户就医协议》</span>
      </a-col>
    </a-row>
    <br />
    <table width="100%">
      <tr>
        <td align="center">
          <div class="card_80">
            <table width="100%" height="100%">
              <tr>
                <td align="center">
                  <div class="card_79" @click="getC">立即领取</div>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
export default {
  components: { Header },
  data() {
    return {
      titlemsg: "就诊卡",
      ma: "18461783365189632",
      tipinfo: ""
    };
  },
  methods: {
    getC() {
      this.$ajax
        .post("/api/v1/ecard")
        .then(res => {
          window.console.log(res);
          this.tipinfo = "申领成功";
          this.success();
        })
        .catch(function(error) {
          if (error.response) {
            window.console.log("AAA" + error.response.data.message);
            window.console.log("BBB" + error.response.status);
            window.console.log("ACCCsAA" + error.response.headers);
          } else if (error.request) {
            window.console.log(error.request);
          } else {
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
  width: 100vw;
  height: 590px;
}
.card_86 {
  width: 267px;
  height: 56px;
  font-size: 40px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(25, 65, 98, 1);
  line-height: 56px;
}
.card_85 {
  width: 660px;
  height: 118px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(153, 153, 153, 0.2);
  border-radius: 8px;
}
.card_84 {
  width: 576px;
  height: 66px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 33px;
}
.card_83 {
  text-align: left;
}
.card_82 {
  width: 56px;
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(66, 66, 66, 1);
  line-height: 40px;
}
.card_81 {
  width: 524px;
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(16, 142, 233, 1);
  line-height: 40px;
}
.card_80 {
  width: 686px;
  height: 80px;
  background: rgba(0, 144, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(58, 118, 165, 1);
  border-radius: 8px;
}
.card_79 {
  width: 131px;
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 45px;
}
</style>
