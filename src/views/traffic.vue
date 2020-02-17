<template>
  <div class="trafficPage">
    <Header tittle="某某旅游旅游大屏"></Header>
    <el-row :gutter="20">

      <el-col :span="14" class="left">
           <div class='centerTop mapRadius'><Map></Map></div>
           <div class='centerBottom radius'>
           <el-row>
             <TrafficTable></TrafficTable>
                </el-row>
           </div>
      </el-col>
       <el-col :span="4" class="center">
        <div class='leftTop radius'><span class="tittle">乘飞机到达客流趋势 ///</span><AircraftLine></AircraftLine></div>
        <div class='leftCenter radius'><span class="tittle">乘火车到达客流趋势 ///</span><TrainLine></TrainLine></div>
        <div class='leftBottom radius'><span class="tittle">乘汽车到达客流趋势 ///</span><CarLine></CarLine></div>
      </el-col>
      <el-col :span="4" class="right">
           <div class='rightTop radius'><span class="tittle"></span><AircraftBar></AircraftBar></div>
           <div class='tightCenter radius'><span class="tittle"></span><TrainBar></TrainBar></div>
           <div class='rightBottom radius'><span class="tittle"></span><CarBar></CarBar></div>
      </el-col>
    </el-row>
  </div>

</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/header.vue';
import TrafficTable from '@/components/Table/trafficTable.vue';

import AircraftLine from '@/components/Line/aircraftLine.vue';
import TrainLine from '@/components/Line/trainLine.vue';
import CarLine from '@/components/Line/carLine.vue';

import AircraftBar from '@/components/Bar/aircraftBar.vue';
import TrainBar from '@/components/Bar/trainBar.vue';
import CarBar from '@/components/Bar/carBar.vue';


import Map from '@/components/Map/map.vue';

@Component({
  components: {
      Header,
      TrafficTable,

      AircraftLine,
      TrainLine,
      CarLine,

    AircraftBar,
      TrainBar,
      CarBar,

      Map,
  },
})
export default class Home extends Vue {

};
</script>

<style lang='scss' scoped>
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
    width: 49%;
  }

  .center{
    width: 25%;
  }

  .right{
    width: 25%;
  }

</style>





