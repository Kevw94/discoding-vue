<template>
	<div
		class="password-reset-container flex w-screen h-screen items-center justify-center bg-gray-900"
	>
		<form
			@submit.prevent="submitResetRequest"
			class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xs"
		>
			<h2 class="text-3xl font-bold mb-8 text-center text-white">Forgot Password?</h2>
			<div class="mb-4">
				<input
					type="email"
					id="email"
					v-model="resetForm.email"
					class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter your email"
					required
					autofocus
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					type="submit"
					class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
				>
					Send Reset Link
				</button>
			</div>
			<div class="mt-6 text-center">
				<a
					class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					@click.prevent="navigateToLogin"
				>
					Remembered your password? Login
				</a>
			</div>
			<div v-if="successMessage" class="bg-green-500 text-white p-3 rounded-md">
				{{ successMessage }}
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { requestPasswordReset } from '@/api/auth-req'
import { useRouter } from 'vue-router'

const router = useRouter()
const resetForm = ref({
	email: ''
})
const successMessage = ref('')

const submitResetRequest = async () => {
	try {
		await requestPasswordReset(resetForm.value.email)
		console.log('Reset link sent to:', resetForm.value.email)
		successMessage.value = 'A password reset link has been sent to your email address.'
		setTimeout(() => {
			router.push('/reset-password')
		}, 3000)
	} catch (error) {
		console.error('Password reset error:', error)
	}
}

const navigateToLogin = () => {
	router.push('/')
}
</script>
