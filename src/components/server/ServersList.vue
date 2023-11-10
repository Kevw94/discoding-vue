<script setup lang="ts">
import { reactive, ref } from "vue";
import { useCookies } from 'vue3-cookies'
import { getUserServers } from '@/api/servers'
import { getAllChannels } from "@/api/channels";
import { useRoute } from "vue-router";

const servers = ref([])
const state = reactive({ channels: [] }) // Très bien ça

const { cookies } = useCookies()
console.log(cookies)
const token = cookies.get('token')
const route = useRoute()
console.log(route.params.server)
const getData = async () => {
  const { data = {} } = await getUserServers(token)
  servers.value = data.servers
}

const getAllChans = async () => {
  console.log("??");
  const { data = {} } = await getAllChannels(token)
  state.channels = data.users // Ici
}

getData()
getAllChans()

console.log(state.channels); // Et console.log modifié

</script>

<template>
  <div>
    <div class="grow">
      <ul>
        <li v-for="server in servers">
          <div class="h-16 w-16 p-2">
            <a :href="'/server/' + server._id + '/'" >
              <!--              <a>-->
              <img
                class="h-full w-full object-cover rounded-[50px] transition-all duration-300 delay-0 ease-in-out hover:rounded-[15px]"
                :src="server.profile_pic"
                alt="Server profile pic"
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>