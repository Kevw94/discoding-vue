<template>
    <div class="serverCard w-full flex items-center justify-center relative">
        <!-- serverHighlight is hidden by default and only shown on hover -->
        <div class="serverHighlight absolute h-0 w-1 left-0 bg-white transition-all duration-300 ease-in-out rounded-r hover:h-8 hover:rounded-l-lg"></div>
        <div class="server w-14 h-14 bg-gray-700 rounded-[50%] flex items-center justify-center transition-all duration-300 ease-in-out hover:rounded-2xl">
            <img src="path_to_server_icon.svg" alt="" class="w-full h-full rounded-full">
        </div>
    </div>
</template>

<script setup>
// Your script here if necessary
</script>

<style>
/* Add custom styles if needed */
.serverCard:hover .serverHighlight {
    height: 3rem; /* h-8 in Tailwind */
}
</style>
    