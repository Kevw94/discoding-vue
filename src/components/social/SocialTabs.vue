<!-- SocialTabs.vue -->
<template>
	<ul class="flex gap-6">
		<li
			v-for="tab in tabs"
			:key="tab"
			:class="{ 'bg-gray-500': currentTab === tab }"
			class="cursor-pointer px-2 py-1 rounded"
			@click="selectTab(tab)"
		>
			{{ tab }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['update:tab'])
const tabs = ['All', 'Online', 'Pending', 'Blocked']
const currentTab = ref(tabs[0])

function selectTab(tab: string) {
	currentTab.value = tab
	emit('update:tab', tab)
}
</script>
