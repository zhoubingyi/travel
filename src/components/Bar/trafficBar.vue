<!--  -->
<template>
  <div class="charts_bar_horizontal" ref="barHorizontalEle"></div>
</template>

<script>
let echarts = require("echarts");
require("echarts/lib/chart/bar"); //柱状图
require("echarts/lib/component/tooltip"); //提示框

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      dataName: [],
      dataNum: []
    };
  },

  methods: {
    drawBarHorizontal() {
      let barHorizontal = echarts.init(this.$refs.barHorizontalEle);

      barHorizontal.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            color: ["#2ea8fb"]
          }
        ]
      });
    }
  },

  mounted() {
    this.drawBarHorizontal();
  }
};
</script>
<style lang='scss' scoped>
.charts_bar_horizontal {
  width: 320px;
  height: 220px;
}
</style>
