<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/server/SideBar.vue'
</script>

<template>
	<section class="app-layout flex flew-row w-screen">
		<SideBar />
		<RouterView />
	</section>
</template>