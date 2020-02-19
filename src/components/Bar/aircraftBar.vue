<!--  -->
<template>
    <div class="charts_bar_horizontal" ref="barHorizontalEle"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
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
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        drawBarHorizontal() {
          let barHorizontal = echarts.init(this.$refs.barHorizontalEle);
          barHorizontal.setOption({
             tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
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
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                                color: '#ffffff'
                            }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml',
                textStyle: {
                                color: '#ffffff'
                            }
            }

        },

    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#f24dc3'},                   //柱图渐变色
                            {offset: 0.5, color: '#9d25e0'},                 //柱图渐变色
                            {offset: 1, color: '#5d06f9'},                   //柱图渐变色
                        ]
                    )
                },
            },
        },
        {
            name: '降水量',
            type: 'line',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            color: ['#f24fc4']
        },

    ]

          });
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.drawBarHorizontal();
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.charts_bar_horizontal {
    width: 320px;
    height: 220px;
}
</style>
