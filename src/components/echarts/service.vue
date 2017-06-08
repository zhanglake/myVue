<template>
    <div id="service" style="width: 100%;height: 150px;"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data () {
            return {
                map: {},
                option: {
                    color: ['#3398DB'],
                    title: {
                        text: '服务满意度',
                        textStyle: {
                            fontWeight: 100,
                            fontSize: '8px'
                        }
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '0%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis : [{
                        type : 'category',
                        data : ['市政总院', '工行数据中心', '烟草科教中心', '盛大网络', '半岛科技', '阿里巴巴', '腾讯'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }],
                    yAxis : [{
                        type : 'value'
                    }],
                    series : [{
                        name:'项目效率值',
                        type:'bar',
                        barWidth: '60%',
                        data:[80, 60, 90, 64, 70, 95, 90]
                    }]
                }
            }
        },
        methods: {

        },
        mounted () {
            this.map = echarts.init(document.getElementById('service'));
            this.map.setOption(this.option);
        }
    }

</script>