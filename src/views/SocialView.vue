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

                <SearchBar placeholder="Rechercher..." @search-update="handleSearch" />
                <span class="mt-5 mb-5">{{ currentTab }}</span>
                <div class="friendsList w-full h-full overflow-y-scroll">
                    <UserCardLarge
                        v-for="friend in filteredFriends"
                        :key="friend.id"
                        :username="friend.username"
                        :quote="friend.quote"
                        :friendId="friend.id"
                        :hoverEffect="true"
                        @delete-friend="handleDeleteFriend"
                    />
                </div>
            </div>
            <div class="socialActivities bg-gray-700 h-full w-[30%] border-l border-gray-600"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { User } from '@/components/social/types/user.type';
import IconPerson from '@/components/icons/IconPerson.vue';
import UserCardLarge from '@/components/social/UserCardLarge.vue';
import useUserStore from '@/stores/user';
import { computed, ref } from 'vue';
import SocialTabs from '@/components/social/SocialTabs.vue';
import SearchBar from '@/components/utils/SearchBar.vue';
import AddFriend from '@/components/social/AddFriend.vue'
import { displayUserInfos } from '@/api/friends-req';
import { useCookies } from 'vue3-cookies';

const currentTab = ref('All');
const userStore = useUserStore();
const showAddFriendPopup = ref(false);
const { cookies } = useCookies()
const token = cookies.get('token')

const allFriends = computed(() => {
  return userStore.state.user?.friends ?? [];
});

const allReceivedFriendRequests = computed(() => {
  return userStore.state.user?.received_requests ?? [];
});

const fetchUserInfos = (userId: string) => {
 return displayUserInfos(token, userId)
}

const filteredFriends = computed(() => {
  switch (currentTab.value) {
    case 'All':
      return allFriends.value;
    case 'Online':
      return allFriends.value.filter(friend => friend.status === 'online');
    case 'Pending':
      console.log( 'received requests : ' + allReceivedFriendRequests.value)
      return allReceivedFriendRequests.value;
    case 'Blocked':
      return [];
    default:
      return allFriends.value;
  }
});

const handleAddFriend = async (newFriendId: string) => {
  allFriends.value.push(newFriendId);
};

function handleTabSelection(selectedTab: string) {
  currentTab.value = selectedTab;
}


</script>