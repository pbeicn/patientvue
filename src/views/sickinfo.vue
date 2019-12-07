<template>
  <div id="card" class="card_reg">
    <div class="so_1">
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
              <router-link to="/sicklist">
                <span class="card_h2">返回</span>
              </router-link>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="13">
          <span class="card_h3">就诊记录详情</span>
        </a-col>
        <a-col :span="5"></a-col>
      </a-row>
      <br />
      <a-row type="flex" justify="start" align="middle">
        <a-col :span="2"></a-col>
        <a-col :span="5" class="so_3">
          <span class="so_2">蒋圣蓉</span>
        </a-col>
        <a-col :span="13" class="so_3">
          <span class="so_2">呼吸内科丨副主任医师</span>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
      <a-row type="flex" justify="start" align="middle">
        <a-col :span="2"></a-col>
        <a-col :span="22" class="so_3">
          <span class="so_2">{{ endtime }}</span>
        </a-col>
      </a-row>
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="2"></a-col>
        <a-col :span="20">
          <div class="so_4">
            <a-row align="middle">
              <a-col :span="1"></a-col>
              <a-col :span="15" class="so_3">
                <div class="so_52"></div>
                <div class="so_5">诊断结果</div>
                <div class="so_51"></div>
                <div class="so_6">上呼吸道感染</div>
              </a-col>
              <a-col :span="8">
                <div class="so_51"></div>
                <div class="so_51"></div>
                <div class="so_51"></div>
                <div class="so_7" v-html="totalmoney">480.00￥</div>
              </a-col>
            </a-row>
          </div>
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="23">
          <div class="so_8">
            <table width="100%" class="so_tbh" border="0">
              <tr>
                <td class="so_tbw">
                  <div class="so_9"></div>
                </td>
                <td class="so_tbw1" align="left">
                  <div class="so_10">处方</div>
                </td>
                <td></td>
              </tr>
            </table>

            <hr class="so_11" />
            <table width="100%" class="so_tbh" border="0">
              <tr v-for="mi in medicines" :key="mi.id">
                <td class="so_tbw"></td>
                <td class="so_tbw1" align="left">
                  <div class="so_12" v-html="mi.medicinename">阿司匹林</div>
                </td>
                <td class="so_tbw1" align="left">
                  <div
                    class="so_12"
                    v-html="'x' + mi.medicinecnt + '(' + mi.medicinesize + ')'"
                  ></div>
                </td>
                <td align="right">
                  <div class="so_13" v-html="mi.money + '￥'"></div>
                </td>
                <td class="so_tbw"></td>
              </tr>
            </table>

            <div class="so_81 so_13">
              <span class="so_14">合计：</span>
              <span v-html="chumc"></span>￥
            </div>
          </div>
        </a-col>
      </a-row>
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="23">
          <div class="so_8">
            <table width="100%" class="so_tbh" border="0">
              <tr>
                <td class="so_tbw">
                  <div class="so_9"></div>
                </td>
                <td class="so_tbw1" align="left">
                  <div class="so_10">检查记录</div>
                </td>
                <td></td>
              </tr>
            </table>

            <hr class="so_11" />
            <table width="100%" class="so_tbh" border="0">
              <tr v-for="mi in checkDTOS" :key="mi.id">
                <td class="so_tbw"></td>
                <td align="left">
                  <div class="so_12" v-html="mi.description"></div>
                </td>
                <td class="so_tbw1" align="left">
                  <div class="so_12">x1</div>
                </td>
                <td align="right">
                  <div class="so_13" v-html="mi.money + '￥'"></div>
                </td>
                <td class="so_tbw"></td>
              </tr>
            </table>

            <div class="so_81 so_13">
              <span class="so_14">合计：</span>
              <span v-html="chumk"></span>￥
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ma: "&nbsp;&nbsp;&nbsp;&nbsp;",
      tipinfo: "",
      totalmoney: "",
      medicines: [],
      chum: "",
      checkDTOS: [],
      endtime: ""
    };
  },
  methods: {
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
  computed: {
    chumc: function() {
      let tmpM = 0;
      if (this.medicines) {
        for (let index = 0; index < this.medicines.length; index++) {
          const element = this.medicines[index];
          tmpM += parseFloat(element.money);
        }
      }
      return tmpM;
    },
    chumk: function() {
      let tmpM = 0;
      if (this.checkDTOS) {
        for (let index = 0; index < this.checkDTOS.length; index++) {
          const element = this.checkDTOS[index];
          tmpM += parseFloat(element.money);
        }
      }
      return tmpM;
    }
  },
  mounted() {
    let xid = sessionStorage.getItem("xid");
    let xcode = sessionStorage.getItem("xcode");
    let that = this;
    window.console.log(xid + "dfdfdf" + xcode);
    this.$ajax
      .get("/api/v1/diagnose/" + xid, {
        headers: {
          "X-CARD-CODE": xcode
        }
      })
      .then(res => {
        window.console.log(res);
        this.totalmoney = res.data.totalmoney + "￥";
        this.medicines = res.data.recipe.medicine;
        this.checkDTOS = res.data.checkDTOS;
        this.endtime = res.data.endtime;
        this.endtime = this.endtime.substring(0, 8);
      })
      .catch(function(error) {
        if (error.response) {
          window.console.log("AAA" + error.response.data.message);
          window.console.log("BBB" + error.response.status);
          if (
            error.response.status == "401" ||
            error.response.status == "406"
          ) {
            that.tipinfo = "登录超时,请重新登录";
            that.error();
            that.$router.push("/");
          }
          window.console.log("ACCCsAA" + error.response.headers);
        } else if (error.request) {
          window.console.log(error.request);
        } else {
          window.console.log("Error", error.message);
        }
        window.console.log(error.config);
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
.card_head {
  text-align: left;
}
.card_h1 {
  width: 100vw;
  height: 128px;
  background: rgba(16, 142, 233, 1);
}
.card_h2 {
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-cardular, PingFang SC;
  font-weight: 400;
  color: rgb(255, 255, 255);
  line-height: 45px;
}
.card_h3 {
  width: 390px;
  height: 50px;
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 800;
  color: rgb(255, 255, 255);
  line-height: 50px;
}
.so_1 {
  width: 750px;
  height: 346px;
  background: rgba(16, 142, 233, 1);
}
.so_2 {
  width: 102px;
  height: 48px;
  font-size: 34px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 48px;
}
.so_3 {
  text-align: left;
}
.so_4 {
  width: 622px;
  height: 152px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
}
.so_5 {
  height: 42px;
  font-size: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 42px;
}
.so_6 {
  height: 42px;
  font-size: 30px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 42px;
}
.so_7 {
  height: 56px;
  font-size: 40px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 30, 30, 1);
  line-height: 56px;
}
.so_8 {
  width: 710px;
  min-height: 323px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  position: relative;
}
.so_81 {
  position: absolute;
  right: 38px;
  bottom: 20px;
}
.so_9 {
  width: 10px;
  height: 29px;
  background: rgba(0, 144, 255, 1);
}
.so_10 {
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 144, 255, 1);
  line-height: 45px;
}
.so_11 {
  width: 713px;
  height: 1px;
  background: rgba(238, 238, 238, 1);
  border: 1px;
}
.so_12 {
  height: 40px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 40px;
}
.so_13 {
  height: 42px;
  font-size: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(242, 71, 36, 1);
  line-height: 42px;
}
.so_14 {
  height: 45px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.so_51 {
  height: 18px;
}
.so_52 {
  height: 20px;
}
.so_divh {
  height: 10px;
}
.so_tbh {
  height: 55px;
}
.so_tbw {
  width: 40px;
}
.so_tbw1 {
  width: 164px;
}
</style>
