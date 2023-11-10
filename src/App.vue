<script setup lang="ts">
import { onMounted } from 'vue';
import SideLayoutView from './views/SideLayoutView.vue';
import { RouterView } from 'vue-router';
import useUserStore from '@/stores/user';

const userStore = useUserStore();

onMounted(() => {
  userStore.loadUser();
});
</script>

<template>
  <section class="app-layout flex flew-row w-screen">
    <SideLayoutView v-if="userStore.state.user" />
    <RouterView />
  </section>
</template>
