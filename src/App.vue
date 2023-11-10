<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue'
import SideLayoutView from './views/SideLayoutView.vue'
import { RouterView } from 'vue-router'
import useUserStore from '@/stores/user'
import { useCookies } from 'vue3-cookies'
import { getMeInfos } from './api/auth-req'
import type { User } from './components/social/types/user.type'
import SideBar from '@/components/server/SideBar.vue'

const { cookies } = useCookies()

const userStore = useUserStore()

onBeforeMount(async () => {
	if (cookies.get('token') !== null) {
		const userResponse = await getMeInfos()
		// 		// Construire l'objet utilisateur
		const user: User = {
			id: userResponse.data.user.id.toString(),
			username: userResponse.data.user.profile.username,
			email: userResponse.data.user.profile.email,
			bio: userResponse.data.user.profile.bio,
			token: cookies.get('token'),
			friends: userResponse.data.user.friends,
			sended_request: userResponse.data.user.sended_request,
			received_requests: userResponse.data.user.received_requests,
			blocked: userResponse.data.user.blocked
		}

		userStore.setUser(user)
	}
})

onMounted(async () => {
	userStore.loadUser()
})
</script>

<template>
	<section class="app-layout flex flew-row w-screen">
		<SideBar v-if="userStore.state.user" />
		<RouterView />
	</section>
</template>
