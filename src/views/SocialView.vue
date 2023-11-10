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
		<div class="ml-6">
	  	<RouterLink to="params"><Edit></Edit></RouterLink>
		</div>
      </div>

      <div class="socialActions w-[30%]"></div>
    </div>
    <div class="socialPage w-full flex-grow flex">
      <div class="socialCore flex-grow p-5 bg-gray-700 flex flex-col">
        <SearchBar placeholder="Rechercher..." @search-update="" />
        <span class="mt-5 mb-5">{{ currentTab }}</span>
        <div class="friendsList w-full h-full overflow-y-scroll">
          <FriendCard v-if="currentTab === 'All'" v-for="friend in friendProfiles" :friend="friend" :key="friend.id" />
          <PendingRequest v-if="currentTab === 'Pending'" v-for="friend in pendingProfiles" :friend="friend" @decline-friend="handleDeclineFriend" @accept-friend="handleAcceptFriend"/>
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
import FriendCard from './FriendCard.vue';
import PendingRequest from './PendingRequest.vue';
import AddFriend from '@/components/social/AddFriend.vue';
import SearchBar from '@/components/utils/SearchBar.vue';
import { useCookies } from 'vue3-cookies';
import { getUserInfos } from '@/api/friends-req';
import type { Friend } from '@/components/social/types/friend.type';
import Edit from '@/components/icons/Edit.vue';

// state
const userStore = useUserStore();
const currentTab = ref('All');
const showAddFriendPopup = ref(false);
const friendProfiles = ref<Friend[]>([]);
const pendingProfiles = ref<Friend[]>([]);

// cookies
const { cookies } = useCookies();
const token = cookies.get('token');

// computed propertiesl
const allFriends = computed(() => userStore.state.user?.friends ?? []);
const allPendingRequestsId = computed(() => userStore.state.user?.received_requests)

// functions
const fetchAllFriendsInfos = async () => {
  try {
    const friendsInfosResponses = await Promise.all(
      allFriends.value.map(userId => getUserInfos(token, userId))
    );

    friendProfiles.value = friendsInfosResponses.map(response => {
      const friendData = response.data.user;
      return {
        id: friendData._id,
        username: friendData.profile.username,
        email: friendData.profile.email,
        bio: friendData.profile.bio,
        friends: friendData.friends,
      };
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des informations des amis :', error);
  }
};

const fetchAllPendingRequests = async () => {
  try {
    const pendingRequestsResponses = await Promise.all(
      allPendingRequestsId.value.map(pendingReq => getUserInfos(token, pendingReq.userId))
    );

    pendingProfiles.value = pendingRequestsResponses.map(response => {
      const userData = response.data.user;
      return {
        id: userData._id,
        username: userData.profile.username,
        email: userData.profile.email,
        bio: userData.profile.bio,
      };
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des informations des demandes en attente :', error);
  }
};

const handleAddFriend = async (newFriendId: string) => {
  allFriends.value.push(newFriendId);
};

const handleAcceptFriend = () => {

}

const handleDeclineFriend = () => {

}

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
      fetchAllPendingRequests();
      break;
    case 'Blocked':
      // Implémentez la logique pour les amis bloqués
      break;
  }
};

// Initial fetch
onMounted(fetchAllFriendsInfos);
</script>
