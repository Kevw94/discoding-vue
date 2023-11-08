<template>
<div class="userProfile absolute bottom-100 left-0 bg-gray-400 p-4">
    <div class="userInfos">
        <span>{{ username }}</span>
        <span>{{ id }}</span>
        <span>{{ email }}</span>
        <span>{{ quote }}</span>
    </div>
</div>
</template>

<script lang="ts" setup>
    interface User {
        id: string,
        username: string,
        email: string,
        quote: string,
    }
    
    const props = defineProps<User>()
</script>