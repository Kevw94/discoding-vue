<template>
    <div class="friendCardLarge relative flex flex-col items-center w-full hover:bg-gray-600 p-2 rounded-lg">
      <div class="divider absolute top-0 w-[98%] h-[1px] bg-gray-600"></div>
      <div class="userCard flex w-full justify-between items-center">
        <UserCard :hoverEffect="false" :username="friend.username" :bio="friend.bio" />
        <div class="friendCardButtons flex gap-2 items-center">
          <button class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
          @click="handleAcceptFriend(props.friend.id)">
            <IconAccept />
          </button>
          <button class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
          @click="handleDeclineFriend(props.friend.id)">
            <IconTrash />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import UserCard from '@/components/social/UserCard.vue';
    import IconTrash from '@/components/icons/IconTrash.vue';
    import type { Friend } from '@/components/social/types/friend.type';
    import IconAccept from '@/components/icons/IconAccept.vue';
    import { acceptFriend, declineFriend } from '@/api/friends-req';
    import { useCookies } from 'vue3-cookies';

    const { cookies } = useCookies();
    const token = cookies.get('token');
  
    const handleAcceptFriend = async (friendId: string) => {
      try {
        await acceptFriend(token, props.friend.id);
        emit('accept-friend', props.friend.id);
      } catch (error) {
        console.error("Erreur lors de l'acceptation de la demande d\'ami :", error);
      }
    };

    const handleDeclineFriend = async (friendId: string) => {
      try {
        await declineFriend(token, props.friend.id);
        emit('decline-friend', props.friend.id);
      } catch (error) {
        console.error('Erreur lors du refus de la demande d\'ami :', error);
      }
    };
  
    const props = defineProps<{ friend: Friend }>()
    const emit = defineEmits(['decline-friend', 'accept-friend']);
  
  </script>
  