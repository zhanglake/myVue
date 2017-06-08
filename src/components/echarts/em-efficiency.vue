<template>
    <div id="em-efficiency" style="width: 100%;height: 150px;"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data () {
            return {
                map: {},
                option: {
                    title: {
                        text: '人员效率值',
                        textStyle: {
                            fontWeight: 100,
                            fontSize: '8px'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    grid: {
                        left: '4%',
                        right: '0%',
                        bottom: '0%',
                        top: '30%',
                        containLabel: true
                    },
                    legend: {
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['市政总院', '工行数据中心', '烟草科教中心', '盛大网络', '半岛科技', '阿里巴巴', '腾讯'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '实际工时',
                        nameTextStyle: {
                            fontSize: '4px'
                        }
                    },{
                        type: 'value',
                        name: '饱和度(%)',
                        nameTextStyle: {
                            fontSize: '4px'
                        }
                    }],
                    series: [{
                        name:'实际工时',
                        type:'bar',
                        data:[7, 6.5, 4.8, 5.5, 8, 9.8, 9]
                    },{
                        name:'饱和度(%)',
                        type:'line',
                        yAxisIndex: 1,
                        data:[90, 87, 79, 93, 80, 88, 79]
                    }]
                }
            }
        },
        methods: {

        },
        mounted () {
            this.map = echarts.init(document.getElementById('em-efficiency'));
            this.map.setOption(this.option);
        }
    }

</script>