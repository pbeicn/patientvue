<template>
  <div id="main" class="main_mm">
    <div class="main_h1">
      <br />
      <br />
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="1"></a-col>
        <a-col :span="20" class="main_head_1">
          <span class="main_head_2">
            您好，{{ pname }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <font-awesome-icon icon="user-edit" class="main_head_2_1" />
          </span>
        </a-col>
        <a-col :span="3">
          <router-link to="/">
            <span class="main_head_3">退出</span>
          </router-link>
        </a-col>
      </a-row>
      <br />
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="1"></a-col>
        <a-col :span="20" class="main_head_1">
          <span class="main_head_5">欢迎使用就诊问诊</span>
        </a-col>
        <a-col :span="3"></a-col>
      </a-row>
    </div>
    <div class="main_h2">
      <br />
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="2"></a-col>
        <a-col :span="20" class="main_head_1">
          <span class="main_head_6">就诊服务</span>
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>
      <br />
      <br />
      <a-row type="flex" justify="center">
        <a-col :span="18" class="main_head_7">
          <div style="height:10px"></div>
          <table width="93%" align="center">
            <tr>
              <td align="left">
                <img src="@/assets/sys.png" class="main_head_10" />
              </td>
              <td align="right" @click="toGuaHao">
                <img src="@/assets/plus.png" class="main_head_11" />
              </td>
            </tr>
            <tr>
              <td align="left" class="main_head_12" colspan="2">
                <div style="height:7px"></div>扫码挂号
              </td>
            </tr>
            <tr>
              <td align="left" class="main_head_13" colspan="2">您可以通过扫码功能进行快速挂号</td>
            </tr>
          </table>
        </a-col>
      </a-row>
      <br />
      <br />
      <a-row type="flex" justify="center">
        <a-col :span="18" class="main_head_8">
          <div style="height:10px"></div>
          <table width="93%" align="center">
            <tr>
              <td align="left">
                <img src="@/assets/card.png" class="main_head_10" />
              </td>
              <td align="right" @click="toGetCard">
                <img src="@/assets/plus.png" class="main_head_11" />
              </td>
            </tr>
            <tr>
              <td align="left" class="main_head_12" colspan="2">
                <div style="height:7px"></div>就诊卡
              </td>
            </tr>
            <tr>
              <td align="left" class="main_head_13" colspan="2">医生通过您出示的就诊卡二维码，快速了解您的过往疾病</td>
            </tr>
          </table>
        </a-col>
      </a-row>
      <br />
      <br />
      <a-row type="flex" justify="center">
        <a-col :span="18" class="main_head_9">
          <div style="height:10px"></div>
          <table width="93%" align="center">
            <tr>
              <td align="left">
                <img src="@/assets/his.png" class="main_head_10" />
              </td>
              <td align="right" @click="toSickList">
                <img src="@/assets/plus.png" class="main_head_11" />
              </td>
            </tr>
            <tr>
              <td align="left" class="main_head_12" colspan="2">
                <div style="height:7px"></div>就诊记录
              </td>
            </tr>
            <tr>
              <td align="left" class="main_head_13" colspan="2">历史就诊记录一键查询</td>
            </tr>
          </table>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pname: ""
    };
  },
  methods: {
    getDocInfo(docid) {
      window.console.log(docid);
      sessionStorage.setItem("docinfouid", docid);
      this.$router.push("/docinfo");
    },
    toGuaHao() {
      this.$router.push("/saoma");
    },
    toGetCard() {
      this.$router.push("/card");
    },
    toSickList() {
      this.$router.push("/sicklist");
    }
  },
  mounted() {
    this.$ajax
      .get("/api/v1/pname")
      .then(res => {
        window.console.log(res);
        this.pname = res.data.name;
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
.main_mm {
  position: relative;
}
.main_h1 {
  width: 100vw;
  height: 344px;
  background-image: url(../assets/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.main_h2 {
  position: absolute;
  top: 300px;
  width: 750px;
  height: 1067px;
  background: rgba(255, 255, 255, 1);
  border-radius: 34px;
}
.main_head_1 {
  text-align: left;
}
.main_head_2 {
  width: 264px;
  height: 62px;
  font-size: 44px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 62px;
}
.main_head_2_1 {
  font-size: 34px;
}
.main_head_3 {
  width: 52px;
  height: 37px;
  font-size: 26px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 37px;
}
.main_head_4 {
  height: 100%;
}
.main_head_5 {
  width: 208px;
  height: 37px;
  font-size: 26px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 37px;
}
.main_head_6 {
  width: 160px;
  height: 56px;
  font-size: 40px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  line-height: 56px;
}
.main_head_7 {
  width: 657px;
  height: 200px;
  background: rgba(225, 105, 115, 1);
  border-radius: 17px;
}
.main_head_8 {
  width: 657px;
  height: 200px;
  background: rgba(105, 157, 225, 1);
  border-radius: 17px;
}
.main_head_9 {
  width: 657px;
  height: 200px;
  background: rgba(105, 203, 225, 1);
  border-radius: 17px;
}
.main_head_10 {
  height: 44px;
}
.main_head_11 {
  height: 25px;
}
.main_head_12 {
  width: 128px;
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 45px;
}
.main_head_13 {
  width: 360px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 33px;
}
</style>