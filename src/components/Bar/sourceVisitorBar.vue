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
        legend: {
          textStyle: {
            //图例文字的样式
            color: "#ffffff"
            // fontSize:16
          }
        },
        tooltip: {},
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1]
          ]
        },
        xAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: "bar", color: ["#e54421"] },
          { type: "bar", color: ["#348bf5"] },
          { type: "bar", color: ["#00f3c3"] }
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
//@import url(); 引入公共css类
.charts_bar_horizontal {
  width: 320px;
  height: 220px;
}
</style>
