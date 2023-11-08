<script setup lang="ts">
import ChannelsList from '@/components/server/ChannelsList.vue'
import UserCard from '@/components/server/UserCard.vue'
</script>

<template>
	<div class="bg-gray-800 flex flex-col grow-0 shrink-0 basis-64">
		<div class="p-3.5 shadow-md grow-0 shrink-0 basis-6">
			<h3>Serveur Name</h3>
		</div>
		<ChannelsList />
		<UserCard />
	</div>
</template>

<style scoped></style>
