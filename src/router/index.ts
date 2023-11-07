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
	},
	{
		path: '/activate',
		name: 'activate',
		component: () => import('@/views/ActivateView.vue')
	},
	{
		path: '/server',
		name: 'server',
		component: () => import('@/views/ServerView.vue')
	},
	{
		path: '/social',
		name: 'social',
		component: () => import('@/views/SocialView.vue')
	},
	{
		path: '/params',
		name: 'params',
		component: () => import('@/views/ParamsView.vue')
	},
	{
		path: '/:catchAll(.*)*',
		component: () => import('@/views/ErrorNotFoundView.vue'),
	},

]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
