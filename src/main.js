// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios'
import App from './App';
import router from './router';
import 'vue-ydui/dist/ydui.base.css';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import * as vClickOutside from 'v-click-outside-x';

Vue.use(vClickOutside);
Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
};

/**
 * 封装axios请求
 */
Vue.prototype.$ajax = {
    get: function (url, params, success) {
        Loading.open(" ");
        axios.get(serverUrl + url, {
            params: params,
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
                "session-key": sessionStorage.user ? JSON.parse(sessionStorage.user).session_key : ''
            }
        }).then(res => {
            Loading.close();
            if (res.data.mes == "没有权限") {
                Toast({
                    mes: "账户过期，请重新登录",
                    timeout: 1400
                })
                router.push("/login")
            } else {
                success(res);
            }
        }).catch(error => {
            console.error(error);
            Toast({
                mes: '未知错误',
                timeout: 1300
            })
        })
    },
    post: function (url, params, success) {
        Loading.open(" ");
        axios.post(serverUrl + url, params, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
                "session-key": sessionStorage.user ? JSON.parse(sessionStorage.user).session_key : ''
            }
        }).then(res => {
            Loading.close();
            if (res.data.mes == "没有权限") {
                Toast({
                    mes: "账户过期，请重新登录",
                    timeout: 1400
                })
                router.push("/login");
            } else {
                success(res);
            }
        }).catch(error => {
            console.error(error);
            Toast({
                mes: '未知错误',
                timeout: 1300
            })
        })
    }
}
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    },
    watch: {
        '$route': function (to, from) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
})
