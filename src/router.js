import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.VUE_APP_MODE === 'production' ? '/' : '/vue-crash-course/',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/todos',
			component: () => import('./views/Todos.vue')
		}
	]
})