<template>
    <div id="map" style="width: 100%;height: 320px;"></div>
</template>

<script>
    import echarts from 'echarts'
    import chinaJson from './china.json'

    // 使用中国地图
    echarts.registerMap('china', chinaJson);

    export default {
        data () {
            return {
                map: {},
                option: {
                    series: [{
                        name: '中国',
                        type: 'map',
                        mapType: 'china'
                    }]
                }
            }
        },
        methods: {

        },
        mounted () {
            this.map = echarts.init(document.getElementById('map'));
            this.map.setOption(this.option);
        }
    }

</script>