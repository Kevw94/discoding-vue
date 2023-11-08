<template>
    <div v-if="visible" class="userProfilePopup p-4 text-white">
      <div class="userProfileInfos flex justify-between">
        <div class="">
          <p class="font-bold">{{ user.username }}</p>
          <p>{{ user.email }}</p>
        </div>
        <div class="userPicture w-10 h-10 bg-gray-500 rounded-full overflow-hidden mr-4">
          <img src="" alt="User profile" class="w-full h-full object-cover">
        </div>
      </div>
      <p class="font-light text-gray-400 mt-5">"{{ user.bio }}"</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps({
    user: Object,
    visible: Boolean
  });
  </script>