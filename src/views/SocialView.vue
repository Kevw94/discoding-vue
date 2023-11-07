<template>
    <section class="socialContainer h-screen w-screen flex flex-col text-white">
        <div class="socialTopNav w-full h-10 bg-red flex bg-gray-600">
            <div class="searchConvo w-[15%] h-full bg-gray-800"></div>
            <div class="socialTabs flex flex-grow items-center">
                <span class="friends border-r border-white mr-6 pr-6 pl-2">Friends</span>
                <SocialTabs />
            </div>
            <div class="socialActions w-[30%]"></div>
        </div>
        <div class="socialPage w-full flex-grow flex">
            <div class="privateMessages h-full bg-gray-800 w-[15%] p-5">
                <div class="pmList w-full h-full">
                    <span class="mb-5">Private messages</span>
                    <userCard />
                </div>
            </div>
            <div class="socialCore flex-grow p-5 bg-gray-700 flex flex-col">

                <SearchBar placeholder="Rechercher..." @search-update="handleSearch" />
                <div class="friendsList w-full mt-6">
                    <UserCardLarge />
                </div>
            </div>
            <div class="socialActivities bg-gray-600 h-full w-[30%] border-l border-white"></div>
        </div>
    </section>
</template>

<script lang="ts">
import UserCard from '@/components/social/UserCard.vue'
import SocialTabs from '@/components/social/SocialTabs.vue';
import UserCardLarge from '@/components/social/UserCardLarge.vue';
import SearchBar from '@/components/utils/SearchBar.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialView',
  components: {
    UserCard,
    UserCardLarge,
    SocialTabs,
    SearchBar
  },
  methods: {
    handleSearch(query: string) {
      console.log('Search query:', query);
    }
  }
});
</script>