<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%;  margin:0px 0px 0px 0px"
      :cell-style="{padding:'10px'}"
      :row-class-name="tableRowClassName"
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
      tableData: [{ CREATETIME: 1 }, { CREATETIME: 2 }],
      //分页
      pageNo: 1,
      pageSize: 10,
      nowPageNum: 1,

      totalCount: 0
    };
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    //分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageNo = val;
    }
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>
<style>
el-tage {
  white-space: unset;
}
.el-table th.is-leaf {
  /* border-width:2px; */
  background-color: #043aa4;
  color: white;
  border: #043aa4;
}

.el-table th,
.el-table tr {
  color: white;
}
.el-table .el-table__body tr:hover td {
  background-color: transparent;
}

.el-table .success-row {
  background-color: #082669;
}
.el-table .warning-row {
  background-color: #07346d;
}
</style>

