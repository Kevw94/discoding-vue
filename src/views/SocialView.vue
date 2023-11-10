<template>
  <section class="socialContainer relative h-screen flex flex-grow flex-col text-white">
    <AddFriend
      v-if="showAddFriendPopup"
      @close="showAddFriendPopup = false"
      @friend-added="handleAddFriend"
    />
    <div class="socialTopNav w-full h-10 bg-red flex bg-gray-600">
      <div class="socialTabs flex flex-grow items-center">
        <IconPerson class="ml-6" />
        <span class="friends border-r border-white mr-6 pr-6 pl-2">Friends</span>
        <SocialTabs @update:tab="handleTabSelection" />
        <button @click="showAddFriendPopup = true" class="addFriendButton pl-3 pr-3 ml-6 bg-green-400 rounded cursor-pointer">
          Add
        </button>
      </div>
      <div class="socialActions w-[30%]"></div>
    </div>
    <div class="socialPage w-full flex-grow flex">
      <div class="socialCore flex-grow p-5 bg-gray-700 flex flex-col">
        <SearchBar placeholder="Rechercher..." @search-update="" />
        <span class="mt-5 mb-5">{{ currentTab }}</span>
        <div class="friendsList w-full h-full overflow-y-scroll">
          <UserCardLarge
            v-for="friend in currentTabContent"
            :key="friend.id"
            :friend="friend"
          />
        </div>
      </div>
      <div class="socialActivities bg-gray-700 h-full w-[30%] border-l border-gray-600"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import useUserStore from '@/stores/user';
import SocialTabs from '@/components/social/SocialTabs.vue';
import UserCardLarge from '@/components/social/UserCardLarge.vue';
import AddFriend from '@/components/social/AddFriend.vue';
import SearchBar from '@/components/utils/SearchBar.vue';
import { useCookies } from 'vue3-cookies';
import { getUserInfos } from '@/api/friends-req';
import type { Friend } from '@/components/social/types/friend.type';

// state
const userStore = useUserStore();
const currentTab = ref('All');
const currentTabContent = ref([]);
const showAddFriendPopup = ref(false);

// cookies
const { cookies } = useCookies();
const token = cookies.get('token');

// computed properties
const allFriends = computed(() => userStore.state.user?.friends ?? []);

// functions
const fetchAllFriendsInfos = async () => {
  try {
    const friendsInfosResponses = await Promise.all(
      allFriends.value.map(userId => getUserInfos(token, userId))
    );

    const userProfiles: Friend[] = friendsInfosResponses.map(response => {
      const friendData = response.data.user; 
      return {
        id: friendData._id,
        username: friendData.profile.username,
        email: friendData.profile.email,
        bio: friendData.profile.bio,
        friends: friendData.friends,
      };
    });

    currentTabContent.value = userProfiles;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations des amis :', error);
  }
};

const handleAddFriend = async (newFriendId: string) => {
  allFriends.value.push(newFriendId);
};

const handleTabSelection = (tab: string) => {
  currentTab.value = tab;
  switch (tab) {
    case 'All':
      fetchAllFriendsInfos();
      break;
    case 'Online':
      // Implémentez la logique pour les amis en ligne
      break;
    case 'Pending':
      // Implémentez la logique pour les demandes d'amis en attente
      break;
    case 'Blocked':
      // Implémentez la logique pour les amis bloqués
      break;
  }
};

// Initial fetch
onMounted(fetchAllFriendsInfos);
</script>
