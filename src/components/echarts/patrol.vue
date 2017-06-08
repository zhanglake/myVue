<template>
    <div id="patrol" style="width: 100%;height: 150px;"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data () {
            return {
                map: {},
                option: {
                    title: {
                        text: '今日工单完成情况',
                        textStyle: {
                            fontWeight: 100,
                            fontSize: '8px'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        y: 'bottom',
                        padding: 0,
                        align: 'left',
                        itemWidth: 10,
                        itemHeight: 5,
                        data:[{
                            name: '未开始',
                            textStyle: {
                                fontSize: 2
                            }
                        }, {
                            name: '进行中',
                            textStyle: {
                                fontSize: 2
                            }
                        }, {
                            name: '已完成',
                            textStyle: {
                                fontSize: 2
                            }
                        }]
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['60%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    formatter: '{d}%\n{b}',
                                    textStyle: {
                                        fontSize: '16',
                                        fontWeight: '100'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'未开始'},
                                {value:310, name:'进行中'},
                                {value:234, name:'已完成'}
                            ]
                        }
                    ]
                }
            }
        },
        methods: {

        },
        mounted () {
            this.map = echarts.init(document.getElementById('patrol'));
            this.map.setOption(this.option);
        }
    }

</script>