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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },

        // legend: {
        //     data: ['蒸发量', '降水量'],
        //     textStyle:{//图例文字的样式
        //         color:'#ffffff',
        //         // fontSize:16
        //     }
        // },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            },
            axisLabel: {
              textStyle: {
                color: "#ffffff"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
              textStyle: {
                color: "#ffffff"
              }
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#05e0f8" }, //柱图渐变色
                  { offset: 0.5, color: "#058ef9" }, //柱图渐变色
                  { offset: 1, color: "#0551f8" } //柱图渐变色
                ])
              }
            }
          },
          {
            name: "降水量",
            type: "line",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            color: ["#00fffe"]
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
