<template>
    <div class="divider w-full h-[0.5px] bg-white"></div>
    <div class="userCardLarge w-full flex justify-between items-center hover:bg-gray-600 p-2">
      <UserCard />
      <div class="userCardButtons flex gap-2">
        <button class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <IconCall />
        </button>
        <button class="w-8 h-8 bg-gray-800 rounded-full"></button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import UserCard from './UserCard.vue';
  import IconCall from '../icons/IconCall.vue';
  </script>
  



