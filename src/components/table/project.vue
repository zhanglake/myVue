<template>
  <el-table :data="tableData" height="150">
      <el-table-column prop="name" label="项目" style="width: 40%;">
      </el-table-column>
      <el-table-column prop="location" label="位置">
      </el-table-column>
      <el-table-column prop="area" label="面积">
      </el-table-column>
    </el-table>
</template>

<script>
    import element from 'element-ui'

    export default {
        data () {
            return {
                tableData: [{
                    name: '市政总院',
                    location: '上海',
                    area: '3400平方米'
                },{
                    name: '工行数据中心',
                    location: '上海',
                    area: '3400平方米'
                },{
                    name: '烟草科教中心',
                    location: '上海',
                    area: '3400平方米'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
<style>
    .el-table {
        font-size: 8px;
    }
    table {
        width: auto !important;
    }
</style>