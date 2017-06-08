<template>
    <div id="emtype" style="width: 100%;height: 150px;"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data () {
            return {
                map: {},
                option: {
                    title: {
                        text: '人员类型分布',
                        textStyle: {
                            fontWeight: 100,
                            fontSize: '8px'
                        }
                    },
                    legend: {
                        orient : 'vertical',
                        x: 'right',
                        y: 'top',
                        itemWidth: 10,
                        itemHeight: 5,
                        itemGap: 2,
                        data: ['保安', '清洁工','维修人员']
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '3%',
                        top: '30%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '保安',
                        type: 'bar',
                        barWidth: '50%',
                        stack: '总量',
                        data: [320, 302, 301, 334, 390, 330, 320]
                    }, {
                        name: '清洁工',
                        type: 'bar',
                        barWidth: '50%',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    }, {
                        name: '维修人员',
                        type: 'bar',
                        barWidth: '50%',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    }]
                }
            }
        },
        methods: {

        },
        mounted () {
            this.map = echarts.init(document.getElementById('emtype'));
            this.map.setOption(this.option);
        }
    }

</script>