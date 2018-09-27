
<template>
    <div  >
        <div class="comments" v-if="!haveImg" v-for="(item,index) in list" :key="index">
            <div class="contact" >
                <span>{{getPhone(item.user_mobile)}}</span>
                <span class="rt">
                    <cell>
                        <rater v-model="item.star - 0"  :max="5" :font-size="15" active-color="red" disabled></rater>
                    </cell>
                </span>
            </div>
            <p>{{item.comment ? item.comment : ''}}</p>
                <yd-lightbox v-if="item.images"  >
                    <yd-lightbox-img v-for="(index,image) in item.images.split(',')" :src="HTTP + index"  class="comment-img" :key="index"></yd-lightbox-img>
                </yd-lightbox>
                <yd-lightbox v-if="haveImg && item.images"  >
                    <yd-lightbox-img v-for="(index,image) in item.images.split(',')" :src="HTTP + index"  class="comment-img"  :key="index"></yd-lightbox-img>
                </yd-lightbox>
            <p>
                <span>{{getDate(item.created_at)}} </span>
                <!--<span> 机型:iphone6 Plus</span>-->
                <span>服务方式:{{item.service}}</span>
                
            </p>
        </div>
 
        <div class="comments" v-if="haveImg && item.images" v-for="(item,index) in list" :key="index">
            <div class="contact" >
                <span>{{getPhone(item.user_mobile)}}</span>
                <span class="rt">
                    <cell>
                        <rater v-model="item.star - 0"  :max="5" :font-size="15" active-color="red" disabled></rater>
                    </cell>
                </span>
            </div>
            <p>{{item.comment ? item.comment : ''}}</p>
                <yd-lightbox v-if="!haveImg && item.images"  >
                    <yd-lightbox-img v-for="(index,image) in item.images.split(',')" :src="HTTP + index"  class="comment-img" :key="index"></yd-lightbox-img>
                </yd-lightbox>
                <yd-lightbox v-if="haveImg && item.images"  >
                    <yd-lightbox-img v-for="(index,image) in item.images.split(',')" :src="HTTP + index"  class="comment-img" :key="index"></yd-lightbox-img>
                </yd-lightbox>
                
                <div style="width:100%;height:100%;margin:0px;" v-lazy:background-image="HTTP+item.images"></div>
            <p>
                <span>{{getDate(item.created_at)}} </span>
                <!--<span> 机型:iphone6 Plus</span>-->
                <span>服务方式:{{item.service}}</span>
                
            </p>
           

        </div>
    </div>
    </div>
</template>
<script>
// import { Rater, Cell } from 'vux'
import Rater from 'vux/src/components/rater/index.vue'
import Cell from 'vux/src/components/cell/index.vue'
import Vue from 'vue';
import {LightBox, LightBoxImg} from 'vue-ydui/dist/lib.rem/lightbox';
/* 使用px：import {Accordion, AccordionItem} from 'vue-ydui/dist/lib.px/accordion'; */

Vue.component(LightBox.name, LightBox);
Vue.component(LightBoxImg.name, LightBoxImg);
export default {
    mounted() {
        this.Init();
    },
    props: {
        list: {
            type: Array,
            default: [],
        },
        haveImg: {
            type: Boolean,
            default: false
        },
    },
    components: {
        Rater,
        Cell,
    },
    data() {
        return {
            data1: 5,
        }
    },
    methods: {
        Init(){
            
            
        },
        // 获取中间四位加密的电话号
        getPhone(phone) {
            if (!phone) {
                return '载入中'
            }else {
                return phone.substr(0,3) + '****' +  phone.substr(7)
            }
        },
        // 获取年月日的日期
        getDate: function (date) {
            if (!date) {
                return '载入中'
            } else {
                return date.split(' ')[0]
            }
        },
    }
}
</script>
<style scoped>

.comments {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 15px;
    border-bottom: 10px solid whitesmoke;
}

.comments p:nth-child(2) {
    font-size: 18px;
    padding:12px 0 9px;
}

.contact {
    display: flex;
    align-items: center;
}

.contact span {
    width: 50%;
    font-size:14px;
}

.rt {
    float: right;
}

.comment-img {
    width:70px;
    height:70px;
    display:inline-block;
    margin-right:10px;
    margin-bottom:10px;
}
</style>

