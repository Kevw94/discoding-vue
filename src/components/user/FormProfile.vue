<template>
	<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-10/12">
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
				Username
			</label>
			<input
				v-model="form.username"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username" type="text" placeholder="Username">
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
				Email
			</label>
			<input
			v-model="form.email"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username" type="text" placeholder="email@email.com">
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
				Bio
			</label>
			<textarea v-model="form.bio" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 resize-none rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
				Profile picture
			</label>
			<input
				v-model="form.profile_picture"
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username" type="text" placeholder="http://My-Profile-Picture">
		</div>
		<div class="flex items-center justify-center">
			<button
				@click.prevent="submitHandler"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button">
				Save Your profile
			</button>
		</div>
	</form>
</template>

<script lang="ts" setup>
import { editProfile } from '@/api/user-req';
import useUserStore from '@/stores/user';
import { onMounted, reactive, ref } from 'vue';
const userStore = useUserStore();


const form = reactive({
	username: userStore.state.user?.username,
	email: userStore.state.user?.email,
	bio: userStore.state.user?.bio,
	profile_picture: userStore.state.user?.profile_picture
})

const submitHandler = async () => {
	await editProfile(form.username!, form.email!, form.bio!, form.profile_picture!)

}

</script>