import Vue from 'vue'
import Router from 'vue-router'
import button from '@/views/button'
import Modal from '@/views/Modal'
import notFound from '@/views/notFound'
import datepick from '@/views/datepick';

import home from '@/views/home'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/',
			component:home
		},
		{
			path: '/button',
			component: button
		},
    {
      path:'/modal',
      component: Modal
    },
    {
      path:'/datepicker',
      component: datepick
    },
		{
			path: '*',
			component: notFound,
		},],
	// mode: 'history'
})
