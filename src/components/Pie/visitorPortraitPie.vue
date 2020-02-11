<!--  -->
<template>
  <div class="charts_pie" ref="pieCharts"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let echarts = require("echarts");

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
        drawPieCharts() {
          let pieCharts = echarts.init(this.$refs.pieCharts);
          pieCharts.setOption({
    // title: {
    //     text: '某站点用户访问来源',
    //     subtext: '纯属虚构',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    // },
      grid: {
        right: '10%',
        left:'10%',
        top:'20%',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]


    })

    },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.drawPieCharts();
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
.charts_pie {
left: -15px;
top: -30px;

  width: 320px;
  height: 220px;
}
</style>
