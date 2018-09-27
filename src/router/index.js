import Vue from 'vue'
import Router from 'vue-router'
import button from '@/views/button'
import notFound from '@/views/notFound'
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
			path: '*',
			component: notFound,
		}],
	mode: 'history'
})
