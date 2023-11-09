<template>
	<div class="login-container flex w-screen h-screen items-center justify-center bg-gray-900">
	  <form @submit.prevent="submitForm" class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xs">
		<h2 class="text-3xl font-bold mb-8 text-center text-white">Welcome back!</h2>
		<div class="mb-4">
		  <input
			type="email"
			id="email"
			v-model="form.email"
			class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="Email"
			required
			autofocus
		  />
		</div>
		<div class="mb-6">
		  <input
			type="password"
			id="password"
			v-model="form.password"
			class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="Password"
			required
		  />
		  <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" style="margin-top: -8px;"
		  @click.prevent="navigateToPasswordReset">
			Forgot your password?
		  </a>
		</div>
		<div class="flex items-center justify-between">
		  <button
			type="submit"
			class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
		  >
			Login
		  </button>
		</div>
		<div class="mt-6 text-center">
		  <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
		  @click.prevent="navigateToSignUp">
			Need an account? Register
		  </a>
		</div>
		<div class="mt-6 bg-gray-700 p-4 rounded-lg text-center">
		  <p class="text-gray-400 text-sm mb-2">Log in with QR Code</p>
		  <!-- Here you would insert the actual QR code image -->
		  <div class="bg-white p-2 rounded-lg">
			<!-- Placeholder for QR Code -->
			<img src="path_to_your_qr_code_image" alt="QR Code" class="mx-auto">
		  </div>
		</div>
	  </form>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { signin, userInfos } from '@/api/auth-req';
  import useUserStore from '@/stores/user';
  import { useRouter } from 'vue-router';
  import { useCookies } from 'vue3-cookies'

  const { setUser } = useUserStore();
  const router = useRouter();
  const form = ref({
    email: '',
    password: '',
  });
  const {cookies} = useCookies()

  	const submitForm = async () => {
  		try {
			const signinResponse = await signin(form.value.email, form.value.password);
			console.log('Signin response:', signinResponse);

			const userInfoResponse = await userInfos(signinResponse.data.access_token);
			console.log('User info response:', userInfoResponse.data.user);

			setUser(
				userInfoResponse.data.user.id.toString(), 
				userInfoResponse.data.user.profile.username,
				userInfoResponse.data.user.profile.email, 
				signinResponse.data.access_token, 
				userInfoResponse.data.user.profile.bio, 
				userInfoResponse.data.user.friends, 
				userInfoResponse.data.user.sended_request,
				userInfoResponse.data.user.received_requests,
				userInfoResponse.data.user.blocked
			);
			console.log('ici received requests : ' + userInfoResponse.data.user.received_requests[0].userId )

			cookies.set('token', signinResponse.data.access_token)
			router.push('/social');
  		} catch (error) {
			console.error('Login error:', error);
  		}
	};

  	const navigateToSignUp = () => {
    	router.push('/signup');
	};

  	const navigateToPasswordReset = () => {
		router.push('/ask-reset-password');
	}
</script>