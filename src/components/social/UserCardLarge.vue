<template>
	<div
		class="userCardLarge relative flex flex-col items-center w-full hover:bg-gray-600 p-2 rounded-lg"
	>
		<div class="divider absolute top-0 w-[98%] h-[1px] bg-gray-600"></div>
		<div class="userCard flex w-full justify-between items-center">
			<UserCard
				:hoverEffect="false"
				:username="props.friend.username"
				:bio="props.friend.bio"
			/>
			<div class="userCardButtons flex gap-2 items-center">
				<button class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
					<IconCall />
				</button>
				<button
					class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
					@click="deleteFriend(props.friend.id)"
				>
					<IconTrash />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import UserCard from './UserCard.vue'
import IconCall from '../icons/IconCall.vue'
import IconTrash from '../icons/IconTrash.vue'
import type { Friend } from '@/components/social/types/friend.type'

const props = defineProps<{ friend: Friend }>()
const emit = defineEmits(['delete-friend'])

const deleteFriend = (friendId: string) => {
	emit('delete-friend', friendId)
}
</script>
