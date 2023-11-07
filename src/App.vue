<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/utils/SideBar.vue'
</script>

<template>
	<section class="app-layout flex flew-row">
		<SideBar />
		<RouterView />
	</section>
</template>