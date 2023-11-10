<template>
	<nav
		class="sidebar w-20 h-screen bg-gray-900 text-white flex flex-col items-center py-3 space-y-4"
	>
		<!-- Social Tab -->
		<div
			class="social w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center mb-2"
		>
			<img src="path_to_social_icon.svg" alt="" class="w-10 h-10 rounded-full" />
		</div>
		<div class="serverList flex-1 w-full flex flex-col items-center space-y-2 overflow-y-auto">
			<ServerCard />
		</div>
	</nav>
</template>

<script setup>
import ServerCard from './ServerCard.vue'
</script>
