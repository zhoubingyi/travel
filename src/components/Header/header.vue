<template>
  <div class="header">
    <el-row :gutter="20">
        <el-col :span="4"><span>中国移动 {{nowTime}}</span></el-col>
        <el-col :span="16"><span>贵州移动某某旅游大屏</span></el-col>
        <el-col :span="4"><span>天气情况</span></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default {
    data(){
        return{
            nowTime:'',
            timer:'',
        }
    },
  methods: {

    getNowTime() {
        var obj=new Date();
        var hour=obj.getHours();
        var minute=obj.getMinutes();
        var second=obj.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute
        second = second < 10 ? ('0' + second) : second
        this.nowTime = hour+":"+minute+":"+second
    },
   },

    mounted () {
        // 定时刷新时间
        let _this = this
        // 定时器
        this.timer = setInterval(function () {
            _this.getNowTime() // 修改数据date
        }, 1000)
    },

   created() {

   },
   destroyed () {
    if (this.timer) {
        clearInterval(this.timer)
    }
}

}
</script>

<style scoped>
 .el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .header {
    text-align: center;
    color:white;
  }

</style>
