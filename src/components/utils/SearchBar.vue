<template>
    <div class="search-bar w-full h-10 bg-gray-800 rounded-lg flex items-center pl-2">
      <input
        class="w-full h-full bg-transparent text-white placeholder-gray-400 outline-none px-4 rounded-lg"
        type="search"
        :placeholder="placeholder"
        v-model="searchQuery"
        @input="updateSearch"
      />
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, ref, watch, toRefs } from 'vue';
    
    export default defineComponent({
      name: 'SearchBar',
      props: {
        placeholder: {
          type: String,
          default: 'Search...'
        }
      },
      setup(props, { emit }) {
        const { placeholder } = toRefs(props);
        const searchQuery = ref('');
    
        watch(searchQuery, (newValue) => {
          emit('search-update', newValue);
        });
    
        const updateSearch = () => {
          emit('search-update', searchQuery.value);
        };
    
        return { placeholder, searchQuery, updateSearch };
      }
  });
  </script>
  