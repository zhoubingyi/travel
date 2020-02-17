<!--  -->
<template>
  <div class="table">
        <el-table
          :data="tableData"

          style="width: 100%;  margin:0px 0px 0px 0px"
          :cell-style="{padding:'10px'}"
        >
          <el-table-column prop="CREATETIME" align="center" label="拥堵排名" min-width="15%"></el-table-column>
          <el-table-column prop="ORGNAME" align="center" label="严重程度" min-width="15%"></el-table-column>
          <el-table-column prop="DOCKINGPEONAME" align="center" label="路线名称" min-width="35%"></el-table-column>
          <el-table-column prop="DOCKINGPEOPHONE" align="center" label="建议疏导方向" min-width="35%"></el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-size="pageSize"
          background
          layout="total, prev, pager, next, jumper"
          :total="totalCount"
        ></el-pagination>
  </div>
</template>

<script>

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
     //表格数据
      tableData: [{CREATETIME:1},{CREATETIME:2}],
       //分页
      pageNo: 1,
      pageSize: 10,
      nowPageNum: 1,

      totalCount: 0,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
    //分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageNo = val;
    },

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

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


</style>
<style>

el-tage {
  white-space: unset;
}
.el-table th.is-leaf{
  /* border-width:2px; */
    background-color:#043aa4;
    color: white;
}
.el-table th, .el-table tr{
    background-color:#082669;
    color: white;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #07346d;
}
</style>

