<template>
  <div class="search-bar w-full h-10 bg-gray-800 rounded-lg flex items-center pl-2">
    <input
      class="w-full h-full bg-transparent text-white placeholder-gray-400 outline-none px-4 rounded-lg"
      type="search"
      :placeholder="placeholder"
      v-model="searchQuery"
      @input="emitUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Define the props with a default value
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search...'
  }
});

// Use ref to make the search query reactive
const searchQuery = ref('');

// Define the emits
const emit = defineEmits(['search-update']);

// Watch for changes on searchQuery and emit the 'search-update' event
watch(searchQuery, (newValue) => {
  emit('search-update', newValue);
});

// Function to emit updates
const emitUpdate = () => {
  emit('search-update', searchQuery.value);
};
</script>
