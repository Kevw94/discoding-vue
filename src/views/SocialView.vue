<template>
    <section class="socialContainer h-screen flex flex-grow flex-col text-white">
        <div class="socialTopNav w-full h-10 bg-red flex bg-gray-600">
            <div class="searchConvo w-[15%] h-full bg-gray-800"></div>
            <div class="socialTabs flex flex-grow items-center">
                <IconPerson class="ml-6" />
                <span class="friends border-r border-white mr-6 pr-6 pl-2">Friends</span>
                <SocialTabs @update:tab="handleTabSelection" />
            </div>
            <div class="socialActions w-[30%]"></div>
        </div>
        <div class="socialPage w-full flex-grow flex">
            <div class="privateMessages h-full bg-gray-800 w-[15%] p-5">
                <div class="pmList w-full h-full">
                    <span class="mb-5">Private messages</span>
                    <UserCard />
                </div>
            </div>
            <div class="socialCore flex-grow p-5 bg-gray-700 flex flex-col">

                <SearchBar placeholder="Rechercher..." @search-update="handleSearch" />
                <span class="mt-5 mb-5">{{ currentTab }} - {{ tabCount }}</span>
                <div class="friendsList w-full h-full overflow-y-scroll">
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                    <UserCardLarge />
                </div>
            </div>
            <div class="socialActivities bg-gray-700 h-full w-[30%] border-l border-gray-600"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import IconPerson from '../components/icons/IconPerson.vue'
import UserCard from '@/components/social/UserCard.vue';
import UserCardLarge from '@/components/social/UserCardLarge.vue';
import { ref } from 'vue';
import SocialTabs from '@/components/social/SocialTabs.vue';
import SearchBar from '@/components/utils/SearchBar.vue';

const currentTab = ref('All');
const tabCount = ref(0); // This will be dynamic based on the tab

function handleTabSelection(selectedTab: string) {
  currentTab.value = selectedTab;
  // Update tabCount here based on the selected tab
  // This will be replaced with actual data fetching logic
  tabCount.value = getTabCount(selectedTab);
}

function handleSearch(query: string) {
  // Handle the search logic
}

function getTabCount(tab: string): number {
  // Placeholder for actual data fetching logic
  const counts = {
    All: 42,
    Online: 12,
    Pending: 5,
    Blocked: 2,
  };
  return counts[tab];
}
</script>