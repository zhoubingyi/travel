<template>
  <div class="home">
    <Header></Header>
    <el-row :gutter="20">
      <el-col :span="4" class="left">
        <div class='leftTop radius'><span class="tittle">5A级景区/景区 ///</span><HotAppBar></HotAppBar></div>
        <div class='leftCenter radius'><span class="tittle">热门APP ///</span><HotAppBar></HotAppBar></div>
        <div class='leftBottom radius'><span class="tittle">驻留天数 ///</span><StayDaysPie></StayDaysPie></div>
      </el-col>
      <el-col :span="14" class="center">
           <div class='centerTop mapRadius'><Map></Map></div>
           <div class='centerBottom radius'><span class="tittle">来源访客结构 ///</span>
           <el-row>
               <el-col :span="12">
                  <SourceVisitorBar></SourceVisitorBar>
               </el-col>
                <el-col :span="6">
                  <SourceVisitorPie></SourceVisitorPie>
                </el-col>
                </el-row>
           </div>
      </el-col>
      <el-col :span="4" class="right">
           <div class='rightTop radius'><span class="tittle">交通出行方式 ///</span><TrafficBar></TrafficBar></div>
           <div class='tightCenter radius'><span class="tittle">旅游热搜词 ///</span><TravelWordCloud></TravelWordCloud></div>
           <div class='rightBottom radius'><span class="tittle">访客画像 ///</span><VisitorPortraitPie></VisitorPortraitPie></div>
      </el-col>
    </el-row>
  </div>

</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/header.vue'; // @ is an alias to /src
import HotAppBar from '@/components/Bar/hotAppBar.vue';
import StayDaysPie from '@/components/Pie/stayDaysPie.vue';
import TrafficBar from '@/components/Bar/trafficBar.vue';
import TravelWordCloud from '@/components/WordCloud/travelWordCloud.vue';
import VisitorPortraitPie from '@/components/Pie/visitorPortraitPie.vue';
import SourceVisitorPie from '@/components/Pie/sourceVisitorPie.vue';
import SourceVisitorBar from '@/components/Bar/sourceVisitorBar.vue';

import Map from '@/components/Map/map.vue';
import { loginRequest } from '@/api/index'

@Component({
  components: {
      Header,
      HotAppBar,
      Map,
      StayDaysPie,
      TrafficBar,
      TravelWordCloud,
      VisitorPortraitPie,
      SourceVisitorPie,
      SourceVisitorBar,

  },
})
export default class Home extends Vue {

};
</script>

<style lang='scss' scoped>
  .home {
    background-color: #0e192d;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .radius{
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin-bottom: 10px;
    height: 220px;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#0c1c36), to(#162b5d));
  }
  .mapRadius{
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin-bottom: 10px;
    height: 450px;
  }
  .tittle{
    color: #00fbca;
    text-align: left;
  }
  .left{
    width: 25%;
  }

  .center{
    width: 48%;
  }

  .right{
    width: 25%;
  }

</style>





