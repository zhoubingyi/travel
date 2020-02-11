<template>

    <div ref="map" id="map" ></div>

</template>

<script>
import AMap from 'AMap' // 引入高德地图
    export default {
         data() {
            return {
                map: undefined,
                value: "",

            }
        },
        components: {},
        methods: {
           initMap: function () {
                // this.satellite = new AMap.TileLayer.Satellite();
                // this.roadNet = new AMap.TileLayer.RoadNet();
                this.map = new AMap.Map('map', {
                    resizeEnable: true,

                    center: [106.709177, 26.629907],
                    zoom: 10,
                    mapStyle:"amap://styles/darkblue",
                    // layers: [
                    //     // this.satellite,//卫星云图
                    //     this.roadNet   //平面图
                    // ],
                    // keyboardEnable: false
                });

           },

        },
        mounted() {
            this.initMap();

        }
    }
</script>
<style lang="scss" scoped>
    html,body {
        width: 100%;
        height: 100%;
    }
    #map{
      width: 100%;
      height: 100%;
    //   min-height: 400px;
     }
     .tool{
         position: absolute;
         padding: 20px 0 0 20px;
         z-index: 1000;

     }
     .re{
       color: #2795f5;
     }


</style>
