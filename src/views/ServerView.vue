<script setup lang="ts">
import MembersList from '@/components/server/MembersList.vue'
import Chat from '@/components/server/Chat.vue'
import ChannelsBar from '@/components/server/ChannelsBar.vue'
</script>

<template>
	<div class="flex h-screen basis-full grow">
		<ChannelsBar />
		<Chat />
		<MembersList />
	</div>
</template>

<style scoped></style>
