<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/utils/SideBar.vue'
import useUserStore from '@/stores/user'

const { state } = useUserStore();
</script>

<template>
	<section class="app-layout flex flew-row">
		<SideBar v-if="state.user" />
		<RouterView />
	</section>
</template>