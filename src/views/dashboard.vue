<template>
    <el-row>
        <!-- 第一，二层 -->
        <el-col :span="6">
            <el-col :span="24">
                <div>
                    <my-map></my-map>
                </div>
            </el-col>
        </el-col>
        <el-col :span="6">
            <el-col :span="12">
                <div class="grid-content">
                    <project-table></project-table>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content">
                    <project-efficiency></project-efficiency>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content">
                    <em-efficiency></em-efficiency>
                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-col>
        <el-col :span="9">
            <el-col :span="24"><div class="grid-content bg-purple" style="height: 320px;"></div></el-col>
        </el-col>
        <el-col :span="3">
            <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-col>
        <!-- 第三层 -->
        <el-col :span="3" style="position: relative;">
            <div class="wo-count">工单数 233</div>
            <div class="grid-content">
                <workorder></workorder>
            </div>
        </el-col>
        <el-col :span="3" style="position: relative;">
            <div class="patrol-count">异常 2%</div>
            <div class="grid-content">
                <patrol></patrol>
            </div>
        </el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 150px;
    margin: 10px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .wo-count {
    float: right;
    position: absolute;
    font-size: 8px;
    right: 0;
    margin-top: 10px;
    color: #fff;
    background: #2e94ca;
    padding: 5px;
    width: 60px;
  }
  .patrol-count {
    float: right;
    position: absolute;
    font-size: 8px;
    right: 0;
    margin-top: 10px;
    color: #fff;
    background: #f19718;
    padding: 5px;
    width: 50px;
    border-radius: 25px;
  }
</style>

<script>
    import Map from '../components/echarts/map.vue'
    import projectefficiency from '../components/echarts/project-efficiency.vue'
    import emefficiency from '../components/echarts/em-efficiency.vue'
    import workorder from '../components/echarts/workorder.vue'
    import patrol from '../components/echarts/patrol.vue'
    import myproject from '../components/table/project.vue'

    export default {
        data () {
            return {}
        },
        methods: {},
        mounted () {},
        components: {
            'my-map': Map,
            'project-table': myproject,
            'project-efficiency': projectefficiency,
            'em-efficiency': emefficiency,
            'workorder': workorder,
            'patrol': patrol
        }
    }
</script>