<template>
  <waike>
    <template>
      <div class="mainCon">
        <div class="logo">
          <img src="../../assets/img/logo.png" alt />
          <p class="mainTitle">北京环球度假区</p>
          <p>非凡之旅  立即开启</p>
        </div>
        <!-- <echarts></echarts> -->
        <common-app></common-app>
        <!-- <nav-table></nav-table> -->
      </div>
    </template>
  </waike>
</template>

<script>
import Waike from '../Waike.vue'
import NavTable from "./NavTable.vue";
import Echarts from "./Echarts.vue";
import CommonApp from "./CommonApp.vue";

export default {
  components: {
    Waike,
    NavTable,
    Echarts,
    CommonApp
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
.mainCon {
  width: 100%;
  .logo {
    margin-bottom: 40px;
    img {
      width: 150px;
    }
    .mainTitle{
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: bold;
      margin: 10px 0;
    }
    p{
      margin: 6px 0;
      font-size: 14px;
    }
  }
}
</style>