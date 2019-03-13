<template>
<div>
  <el-table
    :data="tableData"
    height="200"
    border
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="代码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="规格">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {
        number: '',
        name: '',
        model: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王大虎',
        address: '上海市普陀区金沙江路 1518 弄sssssssssssssssssssssssssssssssssss海市普陀区金沙江路 1518 弄sssssssssssssssssssssssssssssssssss海市普陀区金沙江路 1518 弄sssssssssssssssssssssssssssssssssss海市普陀区金沙江路 1518 弄ssssssssssssssssssssssssssssssssssssssssssssssss'
      }, {
        date: '2016-05-02',
        name: '王中虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '黄小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style>

</style>
