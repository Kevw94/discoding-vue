<template>
	<div
		class="password-reset-container flex w-screen h-screen items-center justify-center bg-gray-900"
	>
		<form
			@submit.prevent="submitResetPassword"
			class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xs"
		>
			<h2 class="text-3xl font-bold mb-8 text-center text-white">Reset Password</h2>

			<div class="mb-4">
				<input
					type="text"
					id="token"
					v-model="form.token"
					class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Reset Token"
					required
				/>
			</div>

			<div class="mb-4">
				<input
					type="password"
					id="password"
					v-model="form.password"
					class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="New Password"
					required
				/>
			</div>

			<div class="mb-4">
				<input
					type="password"
					id="confirmPassword"
					v-model="form.confirmPassword"
					class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Confirm New Password"
					required
				/>
			</div>

			<div class="flex items-center justify-between">
				<button
					type="submit"
					class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
				>
					Reset my password
				</button>
			</div>

			<div v-if="successMessage" class="bg-green-500 text-white p-3 rounded-md mt-4">
				{{ successMessage }}
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { passwordReset } from '@/api/auth-req'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
	token: '',
	password: '',
	confirmPassword: ''
})
const successMessage = ref('')

const submitResetPassword = async () => {
	if (form.value.password !== form.value.confirmPassword) {
		alert('The passwords do not match.')
		return
	}

	try {
		await passwordReset(form.value.password, form.value.confirmPassword, form.value.token)
		successMessage.value = 'Your password has been successfully reset.'
		form.value.password = ''
		form.value.confirmPassword = ''
		form.value.token = ''
		router.push('/')
	} catch (error) {
		console.error('Password reset error:', error)
	}
}
</script>
