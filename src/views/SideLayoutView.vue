<template>
    <SideBar v-if="state.user" />
    <div class="side-layout relative h-full bg-gray-800 w-[15%] p-5">
        <div class="content w-full h-full">
        </div>
        <UserMenu />
    </div>
</template>

<script lang="ts" setup>
import UserMenu from '@/components/utils/UserMenu.vue';
import SideBar from '@/components/server/SideBar.vue';

import useUserStore from '@/stores/user'
const { state } = useUserStore();
</script>