<template>
    <div v-if="visible" class="userProfilePopup p-4 text-white">
      <div class="userProfileInfos flex justify-between">
        <div class="">
          <p class="font-bold">{{ user!.username }}</p>
          <p>{{ user!.email }}</p>
        </div>
        <div class="userPicture w-10 h-10 bg-gray-500 rounded-full overflow-hidden mr-4">
          <img src="" alt="User profile" class="w-full h-full object-cover">
        </div>
      </div>
      <p class="font-light text-gray-400 mt-5">"{{ user!.bio }}"</p>
      <p>{{ user!.id }}</p>
      <button @click="logout" class="logoutButton mt-5 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded">
      Logout
    </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { type PropType } from 'vue';
  import type { User } from './types/user.type'
  import { useRouter } from 'vue-router';
  import useUserStore from '@/stores/user';

const props = defineProps({
  user: {
    type: Object as PropType<User | null>,
    default: null
  },
  visible: Boolean
});

const router = useRouter();
const { clearUser } = useUserStore();

const logout = () => {
  clearUser();
  router.push('/');
};
  </script>