import Vue from 'vue'
import Router from 'vue-router'
import button from '@/views/button'
import Modal from '@/views/Modal'
import notFound from '@/views/notFound'
import datepick from '@/views/datepick';
import textarea from '@/views/textarea'
import home from '@/views/home';
import collapse from '@/views/collapse';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/button',
			component: button
		},
		{
			path: '/modal',
			component: Modal
		},
		{
			path: '/textarea',
			component: textarea
		},
		{
			path: '/collapse',
			component: collapse
		},
		{
			path: '/datepicker',
			component: datepick
		},
		{
			path: '*',
			component: notFound,
		},],
	// mode: 'history'
})
