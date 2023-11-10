<template>
    <div class="flex">
        <SideBar />
    </div>
    <div class="side-layout relative h-full flex flex-col bg-gray-800 w-[15%] p-5">
        <ChannelsBar v-if="isServerView" />
        <UserMenu />
    </div>
</template>

<script lang="ts" setup>
import UserMenu from '@/components/utils/UserMenu.vue'
import SideBar from '@/components/server/SideBar.vue'
import ChannelsList from '@/components/server/ChannelsList.vue';

import { useRoute } from 'vue-router';

const route = useRoute();

import { computed } from 'vue';
import ChannelsBar from '@/components/server/ChannelsBar.vue';

const isServerView = computed(() => {
  return route.path.startsWith('/server/')
});
</script>
