<template>
	<div class="flex h-screen basis-full grow">
		<div
			class="bg-gray-800 flex flex-col grow-0 shrink-0 basis-full items-center justify-center"
		>
			<div>
				<h1 class="mb-4">Your Profile</h1>
			</div>
			<FormProfile></FormProfile>
		</div>
	</div>
</template>

<script lang="ts" setup>
import FormProfile from '@/components/user/FormProfile.vue'
</script>
