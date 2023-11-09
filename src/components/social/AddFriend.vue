<template>
  <div class="addFriendPopup text-black absolute z-50 top-0 left-0 h-screen w-screen inset-0 bg-black bg-opacity-70 flex justify-center items-center">
    <div class="bg-white p-4 rounded">
      <div class="close text-black" @click="closePopup">X</div>
      <h3>Add a Friend</h3>
      <input type="text" v-model="friendId" placeholder="Enter user ID">
      <button @click="submitAddFriend">Search and Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { addFriends } from '@/api/friends-req';
import { useCookies } from 'vue3-cookies'

const emit = defineEmits(['close', 'friend-added']);
const friendId = ref('');
const { cookies } = useCookies();
const token = cookies.get('token')


const submitAddFriend = async () => {
  try {
    const response = await addFriends(token, friendId.value);
    console.log('réponse addfriend : ' + response);
    
    if (response.status === 201) {
      emit('friend-added', friendId.value);
      friendId.value = '';
      closePopup();
    } else {
      console.log('failure')
    }
  } catch (error) {
    console.error(error);
  }
};

const closePopup = () => {
  emit('close');
};
</script>
