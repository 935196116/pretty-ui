import Vue from 'vue'
import Router from 'vue-router'
import button from '@/views/button'
import Modal from '@/views/Modal'
import notFound from '@/views/notFound'
import datepick from '@/views/datepick';

import home from '@/views/home'

Vue.use(Router);

//有label字段的将会在home中渲染
export const routes = [
    {
      path:'/',
      component:home
    },
    {
      path: '/button',
      component: button,
      label:"按钮"
    },
    {
      path:'/modal',
      component: Modal,
      label:"弹窗组件"
    },
    {
      path:'/datepicker',
      component: datepick,
      label:"日期选择组件"
    },
    {
      path: '*',
      component: notFound,
    }];

export default new Router({routes})
