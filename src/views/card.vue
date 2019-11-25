<template>
  <div id="card" class="card_reg">
    <Header :title="titlemsg"></Header>
    <br />
    <br />
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="22">
        <div class="card_ma">
          <img src="@/assets/h66.png" class="card_img" />
          <div class="card_f1">河北东软电子就诊卡</div>
          <div class="card_f2">
            <img src="@/assets/h67.png" class="card_img1" @click="getMa" />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <span class="card_h99">
          使用说明：就诊前请点击卡面上的二维码并出示给医生
        </span>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
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
    getMa() {
      let that = this;
      this.$ajax
        .get("/api/v1/ecard")
        .then(res => {
          window.console.log(res);
          window.console.log(res.data);
          window.console.log(res.data.vid);
          var arr = Object.keys(res.data);
          if (arr.length > 0) {
            //申领过
            this.$router.push("/ma");
          } else {
            //未申领过
            this.$router.push("/cardbag");
          }
        })
        .catch(function(error) {
          if (error.response) {
            window.console.log("AAA" + error.response.data.message);
            // window.console.log("BBB" + error.response.status);
            that.$router.push("/cardbag");
            // window.console.log("ACCCsAA" + error.response.headers);
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
.card_ma {
  width: 607px;
  height: 305px;
  background: linear-gradient(
    90deg,
    rgba(114, 173, 251, 1) 0%,
    rgba(76, 128, 244, 1) 100%
  );
  border-radius: 21px;
  // background-image: url();
  position: relative;
}
.card_img {
  width: 607px;
  height: 305px;
}
.card_f1 {
  width: 360px;
  height: 40px;
  font-size: 40px;
  font-family: zihun100hao-fangfangxianfengti, zihun100hao;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  position: absolute;
  left: 50px;
  top: 35px;
}
.card_f2 {
  position: absolute;
  left: 480px;
  top: 35px;
}
.card_h99 {
  width: 576px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 30, 30, 1);
  line-height: 33px;
}
.card_img1 {
  width: 77px;
  height: 77px;
}
</style>
