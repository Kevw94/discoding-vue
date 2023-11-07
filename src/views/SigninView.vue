<template>
	<div class="login-container flex items-center justify-center h-screen bg-gray-200">
	  <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-md">
		<h2 class="text-2xl font-bold mb-6 text-center">Connexion</h2>
		<div class="mb-4">
		  <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
		  <input
			type="email"
			id="email"
			v-model="form.email"
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			required
			autofocus
		  />
		</div>
		<div class="mb-6">
		  <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
		  <input
			type="password"
			id="password"
			v-model="form.password"
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
			required
		  />
		</div>
		<div class="flex items-center justify-between">
		  <button
			type="submit"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
		  >
			Se connecter
		  </button>
		</div>
	  </form>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const form = ref({
	email: '',
	password: '',
  });
  
  const submitForm = () => {
	console.log('Form submitted:', form.value);
	// Ici, vous pouvez implémenter la logique de connexion,
	// comme envoyer les données du formulaire à un serveur via une requête API.
  };
  </script>
  
  <style>
  /* Ajoutez ici des styles supplémentaires si nécessaire */
  </style>
  