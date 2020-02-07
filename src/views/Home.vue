<template>
  <div class="home">
    <Header></Header>
    <el-row :gutter="20">
      <el-col :span="4" class="left">
        <div class='leftTop'><HotAppBar></HotAppBar></div>
        <div class='leftCenter'><HotAppBar></HotAppBar></div>
        <div class='leftBottom'><HotAppBar></HotAppBar></div>
      </el-col>
      <el-col :span="14" class="center">
           <div class='centerTop'><Map></Map></div>
           <div class='centerBottom'><HotAppBar></HotAppBar></div>
      </el-col>
      <el-col :span="4" class="right">
           <div class='rightTop'><HotAppBar></HotAppBar></div>
           <div class='tightCenter'><HotAppBar></HotAppBar></div>
           <div class='rightBottom'><HotAppBar></HotAppBar></div>
      </el-col>
    </el-row>
  </div>

</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header/header.vue'; // @ is an alias to /src
import HotAppBar from '@/components/Bar/hotAppBar.vue';
import Map from '@/components/Map/map.vue';
import { loginRequest } from '@/api/index'

@Component({
  components: {
      Header,
      HotAppBar,
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





