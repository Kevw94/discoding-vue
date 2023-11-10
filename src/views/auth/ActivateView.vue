<template>
	<div
		class="activation-container flex w-screen h-screen items-center justify-center bg-gray-900"
	>
		<div class="bg-gray-800 p-8 rounded-lg shadow-md max-w-xs w-full text-center">
			<h2 class="text-3xl font-bold mb-8 text-white">Activate Your Account</h2>
			<input
				type="text"
				v-model="token"
				placeholder="Enter your activation token"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
			/>
			<button
				@click="activateAccount"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Activate
			</button>
			<p v-if="message" :class="{ 'text-green-500': success, 'text-red-500': !success }">
				{{ message }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { activate } from '@/api/auth-req'
import { useRouter } from 'vue-router'

const token = ref('')
const message = ref('')
const success = ref(false)
const router = useRouter()

const activateAccount = async () => {
	if (token.value) {
		try {
			await activate(token.value)
			success.value = true
			message.value = 'Your account has been successfully activated! Redirecting to login...'
			setTimeout(() => {
				router.push('/')
			}, 3000)
		} catch (err) {
			success.value = false
			message.value = 'Activation failed. Please ensure the token is correct.'
		}
	} else {
		success.value = false
		message.value = 'Please enter the activation token.'
	}
}
</script>
