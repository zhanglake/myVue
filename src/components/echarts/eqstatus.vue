<template>
    <div id="eqstatus" style="width: 100%;height: 150px;"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data () {
            return {
                map: {},
                option: {
                    title: {
                        text: '设备状态分布',
                        textStyle: {
                            fontWeight: 100,
                            fontSize: '8px'
                        }
                    },
                    tooltip : {
                        show: true,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        align: 'right',
                        x : '30%',
                        y : 7,
                        itemWidth: 0,
                        itemHeight: 0,
                        itemGap: -1,
                        data:['正常','维修中','停用','闲置','报废']
                    },
                    series : [{
                        name:'正常',
                        type:'pie',
                        clockWise: true,
                        radius : ['70%', '85%'],
                        itemStyle : {
                            normal: {
                                label: {show:false},
                                labelLine: {show:false}
                            }
                        },
                        data:[{
                            value:80,
                            name:'正常'
                        }, {
                            value: 50,
                            name:'invisible',
                            itemStyle : {
                                normal : {
                                    color: 'rgba(0,0,0,0)',
                                    label: {show:false},
                                    labelLine: {show:false}
                                },
                                emphasis : {
                                    color: 'rgba(0,0,0,0)'
                                }
                            }
                        }]
                    }, {
                        name:'维修中',
                        type:'pie',
                        clockWise: true,
                        radius : ['55%', '70%'],
                        itemStyle : {
                            normal: {
                                label: {show:false},
                                labelLine: {show:false}
                            }
                        },
                        data:[{
                            value:25, 
                            name:'维修中'
                        }, {
                            value: 50,
                            name:'invisible',
                            itemStyle : {
                                normal : {
                                    color: 'rgba(0,0,0,0)',
                                    label: {show:false},
                                    labelLine: {show:false}
                                },
                                emphasis : {
                                    color: 'rgba(0,0,0,0)'
                                }
                            }
                        }]
                    }, {
                        name:'停用',
                        type:'pie',
                        clockWise: true,
                        radius : ['40%', '55%'],
                        itemStyle : {
                            normal: {
                                label: {show:false},
                                labelLine: {show:false}
                            }
                        },
                        data:[{
                            value: 33, 
                            name:'停用'
                        }, {
                            value: 50,
                            name:'invisible',
                            itemStyle : {
                                normal : {
                                    color: 'rgba(0,0,0,0)',
                                    label: {show:false},
                                    labelLine: {show:false}
                                },
                                emphasis : {
                                    color: 'rgba(0,0,0,0)'
                                }
                            }
                        }]
                    }, {
                        name:'闲置',
                        type:'pie',
                        clockWise: true,
                        radius : ['25%', '40%'],
                        itemStyle : {
                            normal: {
                                label: {show:false},
                                labelLine: {show:false}
                            }
                        },
                        data:[{
                            value:16, 
                            name:'闲置'
                        }, {
                            value: 50,
                            name:'invisible',
                            itemStyle : {
                                normal : {
                                    color: 'rgba(0,0,0,0)',
                                    label: {show:false},
                                    labelLine: {show:false}
                                },
                                emphasis : {
                                    color: 'rgba(0,0,0,0)'
                                }
                            }
                        }]
                    }, {
                        name:'报废',
                        type:'pie',
                        clockWise: true,
                        radius : ['10%', '25%'],
                        itemStyle : {
                            normal: {
                                label: {show:false},
                                labelLine: {show:false}
                            }
                        },
                        data:[{
                            value:5, 
                            name:'报废'
                        }, {
                            value: 50,
                            name:'invisible',
                            itemStyle : {
                                normal : {
                                    color: 'rgba(0,0,0,0)',
                                    label: {show:false},
                                    labelLine: {show:false}
                                },
                                emphasis : {
                                    color: 'rgba(0,0,0,0)'
                                }
                            }
                        }]
                    }]
                }
            }
        },
        methods: {

        },
        mounted () {
            this.map = echarts.init(document.getElementById('eqstatus'));
            this.map.setOption(this.option);
        }
    }

</script>