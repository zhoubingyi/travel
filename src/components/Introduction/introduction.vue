<template>
  <div class="introduction">
    <el-row :gutter="20">
    <el-col :span="8"><div></div></el-col>
    <el-col :span="16">
        <div><p>黄果树瀑布</p></div>
        <div></div>
    </el-col>
    </el-row>
  </div>
</template>


<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

export default {
    data(){
        return{

        }
    },

  methods: {

    getNowTime() {

    },
   },

    mounted () {

    },

   created() {

   },
   destroyed () {

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


</style>
