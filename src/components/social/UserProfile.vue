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
    </div>
  </template>
  
  <script lang="ts" setup>
  import { type PropType } from 'vue';
  import type { User } from './types/user.type'

const props = defineProps({
  user: {
    type: Object as PropType<User | null>,
    default: null
  },
  visible: Boolean
});
  </script>