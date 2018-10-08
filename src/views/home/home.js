import Vue from 'vue'
import Card from '@/components/card';
import {routes} from '@/router';
Vue.component(Card.name,Card);
export default {
    name:"home",
    data(){
        return{
          routes
        }
    }
}
