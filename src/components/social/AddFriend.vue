<template>
  <div v-if="show" class="addFriendPopup fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
    <div class="popup-inner bg-white p-4 rounded-lg">
      <h2 class="text-xl mb-4">Ajouter un ami</h2>
      <input type="text" placeholder="Enter user ID'" class="border p-2 rounded w-full mb-4" />
      <button class="bg-blue-500 text-white p-2 rounded" @click="addFriend">Ajouter</button>
      <button class="bg-red-500 text-white p-2 rounded ml-2" @click="closePopup">Fermer</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean
});

const emit = defineEmits(['add', 'close']);

const closePopup = () => {
  emit('close');
};
</script>

<style scoped>
.addFriendPopup {
  position: fixed;
  z-index: 10; /* Assurez-vous que le z-index est suffisamment élevé pour se superposer aux autres éléments */
}
.popup-inner {
  /* Styles pour le contenu intérieur du popup */
}
</style>
