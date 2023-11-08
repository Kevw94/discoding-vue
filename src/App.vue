<script setup lang="ts">
import SideLayoutView from './views/SideLayoutView.vue';
import { RouterView } from 'vue-router'
</script>

<template>
	<section class="app-layout flex flew-row w-screen">
		<SideLayoutView />
		<RouterView />
	</section>
</template>