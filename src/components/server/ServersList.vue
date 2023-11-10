<script setup lang="ts">
import { ref } from 'vue'
import { useCookies } from 'vue3-cookies'
import { getUserServers } from '@/api/servers'

const servers = ref([])
const { cookies } = useCookies()
console.log(cookies)
const token = cookies.get('token')

const getData = async () => {
	const { data = {} } = await getUserServers(token)
	servers.value = data.servers
}
getData()
console.log(servers);
</script>

<template>
	<div>
		<div class="grow">
			<ul>
				<li v-for="server in servers">
					<div class="h-16 w-16 p-2">
						<a :href="'/server/' + server._id">
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