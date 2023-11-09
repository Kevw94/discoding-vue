<script setup lang="ts">
import { ref } from 'vue'

const imageData = ref()
const fileInput = ref(null)
console.log(fileInput)
const emit = defineEmits(['input', 'close'])
const chooseImage = () => {
	fileInput._value.click()
}
const onSelectFile = () => {
	const files = fileInput._value.files
	if (!files || files[0] === undefined) return
	const [file] = files
	const reader = new FileReader()
	reader.onload = (e) => {
		imageData.value = e?.target?.result || null
	}
	reader.readAsDataURL(file)
}

const isHidden: Ref<UnwrapRef<boolean>> = ref(true)
</script>

<template>
	<div class="grow-0 items-center bg-gray-900 text-white p-1.5">
		<div
			v-on:click="isHidden = false"
			class="cursor-pointer w-12 h-12 rounded-full bg-gray-700 mb-2 p-2"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z" />
			</svg>
		</div>
	</div>
	<div v-if="!isHidden">
		<div class="backdrop-blur-sm bg-gray-800 bg-opacity-70 fixed inset-0 z-[60]" v-on:click="isHidden = true" />
		<div
			tabindex="-1"
			class="fixed w-80 h-96 bg-gray-700 inset-0 m-auto z-[60] p-2 rounded-xl"
		>
			<div class="flex h-full w-full justify-between items-center flex-col p-2">
			<h1 class="p-2 text-xl text-center">Create a new server!</h1>
				<input class="rounded-md p-2 text-gray-950" type="text" placeholder="Server Name" />
				<!--				<input @change="chooseImage" ref="fileInput" type="file" id="file" class="opacity-0" />-->
				<div
					class="relative block h-32 w-32 bg-teal-800 bg-cover bg-center rounded-full cursor-pointer"
					:style="{ 'background-image': `url(${imageData})` }"
					@click="chooseImage"
				>
					<span
						v-if="!imageData"
						class="absolute flex items-center justify-center text-5xl font-bold w-full h-full"
					>
						+
					</span>
					<input
						@input="onSelectFile"
						ref="fileInput"
						type="file"
						id="file"
						class="hidden"
					/>
					<!--				<label @click="chooseImage"
            class="w-32 h-8 rounded-md bg-gradient-to-r from-blue-700 to-teal-700 hover:from-blue-600 hover:to-teal-600 block relative flex justify-center items-center cursor-pointer text-white"
            for="file"
            >Add Profile pic</label
          >-->
					<!--				<div class="w-32 h-32 p-2">
            <img
              class="h-full w-full object-cover rounded-full"
              :src="imageData"
              alt="Server profile pic"
            />
          </div>-->
				</div>
			<button class=" self-end bg-gradient-to-r from-teal-900 to-teal-800 hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-700 py-2 rounded-md px-4" v-on:click="isHidden = true">Create</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>