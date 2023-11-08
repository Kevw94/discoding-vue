<template>
    <div class="addFriendPopup absolute z-50 top-0 left-0 h-screen w-screen inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div class="bg-white p-4 rounded">
        <div class="close text-black" @click="$emit('close')">X</div>
        <h3>Add a Friend</h3>
        <input type="text" v-model="friendInfo" placeholder="Email or Username">
        <button @click="submitAddFriend">Search and Add</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const emit = defineEmits(['close', 'add']);
  const friendInfo = ref('');
  
  const submitAddFriend = () => {
    
    emit('add', friendInfo.value);
  };
  </script>
  