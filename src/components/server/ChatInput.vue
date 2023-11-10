<script setup lang="ts"></script>

<template>
	<div class="grow-0 shrink-0 basis-8 px-3 pb-3 flex">
		<input
			class="bg-gray-600 rounded-md h-10 p-1.5 grow mx-1"
			placeholder='Send a message in "chan name"'
		/>
		<div
			class="cursor-pointer flex items-center justify-center self-center bg-gray-800 rounded-full h-10 grow-0 shrink-0 basis-10 text-center mx-1 bg-gradient-to-r from-teal-900 to-teal-800 hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-700"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
				<path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z" />
			</svg>
		</div>
	</div>
</template>

<style scoped></style>
