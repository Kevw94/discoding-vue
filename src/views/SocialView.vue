<template>
    <section class="socialContainer h-screen flex flex-grow flex-col text-white">
        <div class="socialTopNav w-full h-10 bg-red flex bg-gray-600">
            <div class="searchConvo w-[15%] h-full bg-gray-800"></div>
            <div class="socialTabs flex flex-grow items-center">
                <IconPerson class="ml-6" />
                <span class="friends border-r border-white mr-6 pr-6 pl-2">Friends</span>
                <SocialTabs @update:tab="handleTabSelection" />
                <button class="addFriendButton pl-3 pr-3 ml-6 bg-green-400 rounded cursor-pointer">Add</button>
            </div>
            <div class="socialActions w-[30%]"></div>
        </div>
        <div class="socialPage w-full flex-grow flex">
            <div class="privateMessages relative h-full bg-gray-800 w-[15%] p-5">
                <div class="pmList w-full h-full">
                    <span class="mb-5">Private messages</span>
                    <UserCard />
                    <UserMenu />
                    
                </div>
            </div>
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
import UserMenu from '@/components/utils/UserMenu.vue';
import IconPerson from '@/components/icons/IconPerson.vue';
import UserCard from '@/components/social/UserCard.vue';
import UserCardLarge from '@/components/social/UserCardLarge.vue';
import { computed, ref } from 'vue';
import SocialTabs from '@/components/social/SocialTabs.vue';
import SearchBar from '@/components/utils/SearchBar.vue';

const currentTab = ref('All');

const allFriends = ref([
  { id: 1, username: 'Kev', status: 'online', quote: 'guilhem fais une merge request stp' },
  { id: 2, username: 'John Cena', status: 'offline', quote: 'hahahaha' },
  { id: 3, username: 'Yujiro Hanma', status: 'offline', quote: "baki t'es dans la merde" },
  { id: 4, username: 'Demi Lovato', status: 'online', quote: "oyyyyyyyyy" },
  { id: 5, username: 'Swaggman', status: 'online', quote: "jsuis swaggman" },
]);

const filteredFriends = computed(() => {
  switch (currentTab.value) {
    case 'All':
      return allFriends.value;
    case 'Online':
      return allFriends.value.filter(friend => friend.status === 'online');
    case 'Pending':
      return [];
    case 'Blocked':
      return [];
    default:
      return allFriends.value;
  }
});

const handleDeleteFriend = (friendId: number) => {
  const index = allFriends.value.findIndex(friend => friend.id === friendId);
  if (index !== -1) {
    allFriends.value.splice(index, 1);
    console.log(allFriends)
  }
};

function handleTabSelection(selectedTab: string) {
  currentTab.value = selectedTab;
}

function handleSearch(query: string) {
  // Handle the search logic
}
</script>