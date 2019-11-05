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
              <router-link to="/main">
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
          <span class="so_2">2019-09-23 15:00:00</span>
        </a-col>
      </a-row>
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="2"></a-col>
        <a-col :span="20">
          <div class="so_4"></div>
        </a-col>
        <a-col :span="2"></a-col>
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
      sicks: []
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
  mounted() {
    let xid = sessionStorage.getItem("xid");
    let xcode = sessionStorage.getItem("xcode");
    window.console.log(xid + "dfdfdf" + xcode);
    this.$ajax
      .get("/api/v1/diagnose/" + xid, {
        headers: {
          "X-CARD-CODE": xcode
        }
      })
      .then(res => {
        window.console.log(res);
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
</style>
