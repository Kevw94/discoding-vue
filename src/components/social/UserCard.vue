<template>
     <div class="userCard flex items-center p-1 rounded-lg hover:bg-gray-700 cursor-pointer">
        <div class="userPicture w-10 h-10 bg-gray-500 rounded-full overflow-hidden mr-4">
            <img src="path_to_profile_picture.jpg" alt="User profile" class="w-full h-full object-cover">
        </div>
        <div>
            <div class="userName text-white font-medium">Username</div>
            <div class="userQuote text-gray-400 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">Hello world</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'UserCard'
});
</script>