import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'signin',
		component: () => import('@/views/SigninView.vue')
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('@/views/SignupView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
