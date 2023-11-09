<script setup lang="ts">
import SideLayoutView from './views/SideLayoutView.vue';
import { RouterView } from 'vue-router'

import useUserStore from '@/stores/user'
const { state } = useUserStore();
</script>

<template>
	<section class="app-layout flex flew-row w-screen">
		<SideLayoutView v-if="state.user" />
		<RouterView />
	</section>
</template>