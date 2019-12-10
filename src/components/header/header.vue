<template>
  <a-row type="flex" justify="space-around" class="reg_h1" align="middle">
    <a-col :span="6">
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="2"></a-col>
        <a-col :span="2">
          <router-link to="main">
            <font-awesome-icon icon="angle-left" class="reg_h2" />
          </router-link>
        </a-col>
        <a-col :span="20" class="reg_head">
          <router-link to="main">
            <span class="reg_h2" style="cursor: pointer;">返回</span>
          </router-link>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="13">
      <span class="reg_h3">{{ title }}</span>
    </a-col>
    <a-col :span="5"></a-col>
  </a-row>
</template>
<script>
export default {
  props: { title: String }
};
</script>
<style lang="less" scoped>
.reg_head {
  text-align: left;
  cursor: pointer;
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
