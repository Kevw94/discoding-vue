<template>
	<UserProfile
		class="absolute bottom-12 mb-5 ml-5 left-0 w-[400px] bg-gray-900 rounded"
		:user="userState.user"
		:visible="isPopupVisible"
	/>
	<div class="z-1 userMenu flex fixed bottom-0" @click="togglePopup">
		<div class="userInfos">
			<UserCard
				:username="userState.user?.username"
				:bio="userState.user?.bio"
				:hoverEffect="true"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import UserCard from '../social/UserCard.vue'
import UserProfile from '@/components/social/UserProfile.vue'
import useUserStore from '@/stores/user'

const { state: userState } = useUserStore()
const isPopupVisible = ref(false)

const togglePopup = () => {
	isPopupVisible.value = !isPopupVisible.value
}
</script>
