<template>
    <div class="amap-page-container">
        <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :events="events">
        </el-amap>
        <div style="position:relative;">
            <div class="locationCheck"  @click="checkLocation=1">
                <b>定位位置</b>
                <br/>
                <span v-if="loaded">{{address | formateAddress}}</span>
                <span v-else>正在定位</span>
            </div><!--
                <--><img src="../../../static/imgs/images/dddw.png" icon-class="map" class="location-color" v-if="checkLocation==1" >
                <!--<icon-svg icon-class="map" class="location-color" v-if="checkLocation==1"></icon-svg>-->
        </div>
        <div style="position:relative;">
            <div class="locationCheck" @click="ifCheckLocation2">
                <b>选择位置</b>
                <br/>
                <span v-if="checkMap">{{address1 | formateAddress}}</span>
                <span v-else>请选择位置</span>
            </div>
                <img src="../../../static/imgs/images/dddw.png"  @click="checkLocation=2"  v-if="checkLocation==2" class="location-color" >
                <!--<icon-svg icon-class="map" class="location-color" v-if="checkLocation==2" @click="checkLocation=2"></icon-svg>-->
        </div>
        <div id="locationReturn">
            <a @click="locationReturn()">确定</a>
        </div>
    </div>
</template>

  <style>
.amap-demo {
    height: 300px;
}
</style>

<script>
import { Toast } from 'vue-ydui/dist/lib.px/dialog'
import myLocation from './Location'
export default{
    data() {
        let self = this;
        return {
            center: [121.59996, 31.197646],
            lng: 0,
            lat: 0,
            address: {
                province: '',
                city: '',
                district: '',
                street: '',
                streetNumber: '',
                township: ''
            },
            address1: {
                province: '',
                city: '',
                district: '',
                street: '',
                streetNumber: '',
                township: ''
            },
            loaded: false,
            checkMap: false,
            checkLocation:1,
            events: {
                click(e) {
                    let { lng, lat } = e.lnglat;
                    self.lng = lng;
                    self.lat = lat;

                    // 这里通过高德 SDK 完成。
                    var geocoder = new AMap.Geocoder({
                        radius: 1000,
                        extensions: "all"
                    });
                    geocoder.getAddress([lng, lat], function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            if (result && result.regeocode) {
                                // self.address1 = result.regeocode.formattedAddress;
                                console.log(result);
                                self.address1.province = result.regeocode.addressComponent.province;
                                self.address1.city = result.regeocode.addressComponent.city;
                                self.address1.district = result.regeocode.addressComponent.district;
                                self.address1.street = result.regeocode.addressComponent.street;
                                self.address1.streetNumber = result.regeocode.addressComponent.streetNumber;
                                self.address1.township = result.regeocode.addressComponent.township;
                                self.checkMap = true;
                                self.$nextTick();
                            }
                        }
                    });
                }
            },
            plugin: [{
                pName: 'Geolocation',
                events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        o.getCurrentPosition((status, result) => {
                            if (result && result.position) {
                                self.lng = result.position.lng;
                                self.lat = result.position.lat;
                                self.center = [self.lng, self.lat];
                                self.loaded = true;
                                self.$nextTick();
                                // 这里通过高德 SDK 完成。
                                var geocoder = new AMap.Geocoder({
                                    radius: 1000,
                                    extensions: "all"
                                });
                                geocoder.getAddress([self.lng, self.lat], function (status, result) {
                                    if (status === 'complete' && result.info === 'OK') {
                                        if (result && result.regeocode) {

                                            // self.address = result.regeocode.formattedAddress;
                                            self.address.province = result.regeocode.addressComponent.province;
                                            self.address.city = result.regeocode.addressComponent.city;
                                            self.address.district = result.regeocode.addressComponent.district;
                                            self.address.street = result.regeocode.addressComponent.street;
                                            self.address.streetNumber = result.regeocode.addressComponent.streetNumber;
                                            self.address.township = result.regeocode.addressComponent.township;
                                            self.$nextTick();
                                        }
                                    }
                                });
                            }
                        });
                    },
                }
            }]
        };
    },
    filters: {
        formateAddress: function (value) {
            // if (value.street == '') {
            //     return '' + value.province + value.city + value.district + value.township;
            // } else {
                return '' + value.province + value.city + value.district + value.township + value.street + value.streetNumber;
            // }
        }
    },
    methods:{
        ifCheckLocation2:function(){
            console.log('ifCheckLocation2')
            console.log(this.checkLocation)
            if(!this.checkMap){
                Toast({
                    mes: '请选择位置',
                    timeout: 1000
                });
            }else{
                this.checkLocation = 2;
            }
        },
        locationReturn:function(){
            var temp = '';
            console.log('checkLocation')
            console.log(this.checkLocation)
            if(this.checkLocation == 1){
                temp = this.address;
            }else{
                temp = this.address1;
            }
            console.log('temp')
            console.log(temp)
            var addressMessage = temp.province + ' ' + temp.city + ' ' + temp.district ;
            var addressMessageDetails = temp.township + temp.street + temp.streetNumber ;
            var _coverChecked = false;
            console.log('addressMessage','addressMessageDetails','_coverChecked')
            console.log([addressMessage,addressMessageDetails,_coverChecked]);
            this.$emit('child-say', [addressMessage,addressMessageDetails,_coverChecked]);
        }
    },
    created() {
        this.$emit('close');
    }
};
</script>
<style scoped>

.amap-page-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 14px;
    line-height: 1.4286;
    background-color: #f7f7f7;
    color: black;
}

.amap-demo {
    height: 300px;
}            

.locationCheck {
    display: inline-block;
    width: 100%;
    line-height: 25px;
    background-color: #fff;
    border-bottom: 1px solid rgb(209, 219, 229);
}

.locationCheck b {
    font-size: 16px;
}

.locationCheck span {
    color: #999;
}

.location-color {
    color: #f44;
    position: absolute;
    top: 6px;
    font-size: 20px;
    width: 20px;
    height: 20px;
    right: 10px;
}

#locationReturn{
    margin:8px 5px;   
}

#locationReturn a{
    display:block;
    width:100%;
    line-height: 40px;
    font-size: 16px;
    border: 0;
    color: #fff;
    background-color: coral;
    border-radius: 2px;
    text-align:center;
}

</style>

