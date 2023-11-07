<template>
<div class="userMenu flex absolute bottom-0 left-0">
    <div class="userInfos">
        <UserCard :username="userState.user?.email" :hoverEffect="true" />
    </div>
</div>

</template>

<script lang="ts" setup>
  import UserCard from '../social/UserCard.vue';
  import useUserStore from '@/stores/user';

  const { state: userState } = useUserStore();
</script>