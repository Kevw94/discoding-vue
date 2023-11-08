<template>
	<div class="signup-container flex w-screen h-screen items-center justify-center bg-gray-900">
	  <form @submit.prevent="submitForm" class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xs">
		<h2 class="text-3xl font-bold mb-8 text-center text-white">Create an account</h2>
		<div class="mb-4">
		  <input
			type="text"
			id="username"
			v-model="form.username"
			class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="Username"
			required
		  />
		</div>
		<div class="mb-4">
		  <input
			type="email"
			id="email"
			v-model="form.email"
			class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="Email"
			required
		  />
		</div>
		<div class="mb-6">
		  <input
			type="password"
			id="password"
			v-model="form.password"
			class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			placeholder="Password"
			required
		  />
		</div>
		<div class="flex items-center justify-between">
		  <button
			type="submit"
			class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
		  >
			Register
		  </button>
		</div>
		<div class="mt-6 text-center">
		  <a href="#" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
			Already have an account? Login
		  </a>
		</div>
	  </form>
	</div>
  </template>
  
  <script setup lang="ts">
	import { ref } from 'vue';
	import { signup } from '@/api/auth-req'
	import useUserStore from '@/stores/user';
	import { useRouter } from 'vue-router';
  
	const { setUser } = useUserStore();
	const router = useRouter();
	const form = ref({
	  username: '',
	  email: '',
	  password: '',
	});
  
	const submitForm = async () => {
	  try {
		const response = await signup(form.value.username, form.value.email, form.value.password);
		console.log('Registration successful:', response.data);
		router.push('/activate');
  
		const accessToken = response.data.access_token;
		console.log('Registration successful, token:', accessToken);
	  } catch (error) {
		console.error('Registration error:', error);
	  }
	};
  </script>
  