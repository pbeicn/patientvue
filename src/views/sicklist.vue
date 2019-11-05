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
        <span class="card_h3">就诊记录</span>
      </a-col>
      <a-col :span="5"></a-col>
    </a-row>
    <br />
    <br />
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <table width="100%" border="0">
          <tr>
            <td align="center">
              <div class="sick_img">
                <table width="80%" border="0">
                  <tr>
                    <td align="left" class="card_input"></td>
                  </tr>
                  <tr>
                    <td align="left" class="sick_h2">王小二</td>
                  </tr>
                  <tr>
                    <td align="left" class="sick_h3">130302********2510</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </a-col>
    </a-row>
    <br />
    <a-row type="flex" justify="center" v-for="(sick,index) in sicks" :key="sick.id">
      <a-col :span="24">
        <table width="100%" border="0">
          <tr>
            <td align="center">
              <div class="sick_h4">
                <table width="100%" border="0">
                  <tr>
                    <td align="left" class="sick_td1">
                      <div v-if="index==0" class="sick_h5"></div>
                      <div v-if="index==1" class="sick_h51"></div>
                      <div v-if="index==2" class="sick_h52"></div>
                    </td>
                    <td align="left" v-html="ma"></td>
                    <td align="left">
                      <div class="sick_h6">科室：心内科</div>
                      <div class="sick_divh"></div>
                      <div class="sick_h7">{{ sick.totalmoney }}￥</div>
                    </td>
                    <td align="right">
                      <div class="sick_h6">医生：蒋圣蓉</div>
                      <div class="sick_divh"></div>
                      <div class="sick_h7"></div>
                    </td>
                    <td align="right" width="30%" class="sp1">
                      <div class="sp2">
                        <img src="@/assets/4.png" class="card_i1" />
                      </div>
                      <div>
                        <font-awesome-icon
                          icon="angle-right"
                          class="card_m1"
                          @click="toSickInfo(sick.id)"
                        />
                      </div>
                      <div class="card_m2 sp3">{{ sick.endtime.substr(0,8) }}</div>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
        <br />
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ma: "&nbsp;&nbsp;&nbsp;&nbsp;",
      tipinfo: "",
      sicks: []
    };
  },
  methods: {
    toSickInfo(sid) {
      window.console.log(sid);
      sessionStorage.setItem("xid", sid);
      this.$router.push("/sickinfo");
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
            sessionStorage.setItem("xcode", res.data.code);
            this.$ajax
              .get("/api/v1/diagnose/recent", {
                headers: {
                  "X-CARD-CODE": res.data.code
                }
              })
              .then(res => {
                window.console.log(res);
                this.sicks = res.data;
              })
              .catch(res => {
                window.console.log(res);
              });
          })
          .catch(res => {
            window.console.log(res);
          });
      })
      .catch(res => {
        window.console.log(res);
      });
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
.sp1 {
  position: relative;
}
.sp2 {
  position: absolute;
  top: 0px;
  right: 0px;
}
.sp3 {
  position: absolute;
  bottom: 5px;
  right: 5px;
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
  height: 20px;
}
.sick_divh {
  height: 22px;
}
.sick_td1 {
  width: 20px;
}
.sick_td2 {
  width: 20px;
}
.card_h1 {
  width: 100vw;
  height: 128px;
  background: rgba(255, 255, 255, 1);
}
.card_i1 {
  width: 53px;
  height: 47px;
}
.card_m1 {
  width: 27px;
  height: 27px;
}
.card_m2 {
  width: 152px;
  height: 37px;
  font-size: 26px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 37px;
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
.sick_h1 {
  width: 607px;
  height: 198px;
  background: linear-gradient(
    90deg,
    rgba(114, 173, 251, 1) 0%,
    rgba(76, 128, 244, 1) 100%
  );
  border-radius: 21px;
}
.sick_h2 {
  width: 120px;
  height: 56px;
  font-size: 40px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 56px;
}
.sick_h3 {
  width: 290px;
  height: 42px;
  font-size: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 42px;
}
.sick_h4 {
  width: 660px;
  height: 160px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(153, 153, 153, 0.2);
  border-radius: 8px;
  text-align: left;
}
.sick_h5 {
  width: 17px;
  height: 160px;
  background: rgba(247, 181, 0, 1);
  border-radius: 8px 0px 0px 8px;
}
.sick_h51 {
  width: 17px;
  height: 160px;
  background: rgba(76, 217, 218, 1);
  border-radius: 8px 0px 0px 8px;
}
.sick_h52 {
  width: 17px;
  height: 160px;
  background: rgba(178, 220, 255, 1);
  border-radius: 8px 0px 0px 8px;
}
.sick_h6 {
  width: 168px;
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.sick_h7 {
  width: 137px;
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 30, 30, 1);
  line-height: 45px;
}
.sick_img {
  width: 607px;
  height: 198px;
  background: linear-gradient(
    90deg,
    rgba(114, 173, 251, 1) 0%,
    rgba(76, 128, 244, 1) 100%
  );
  border-radius: 21px;
  background-image: url(../assets/s1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
</style>
