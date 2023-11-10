<script setup lang="ts">
import { ref } from 'vue'
import { getServerChannels } from '@/api/channels'
import { useRoute } from 'vue-router'
import { useCookies } from 'vue3-cookies'

const channels = ref([])
const { cookies } = useCookies()
console.log(cookies)
const token = cookies.get('token')
const route = useRoute()
console.log(route.params.server)
console.log(token)

const getData = async () => {
	const { data = {} } = await getServerChannels(token, route.params.server as string)
	channels.value = data.newChannel
}
getData()
</script>

<template>
	<div class="p-1 overflow-y-scroll grow flex flex-col">
		<ul>
			<li class="my-1.5" v-for="channel in channels">
				<a href="" class="p-1 flex rounded-md w-full">
					<div class="p-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 256 256"
						>
							<path
								fill="currentColor"
								d="M224 90h-51l8.89-48.93a6 6 0 1 0-11.8-2.14L160.81 90H109l8.89-48.93a6 6 0 0 0-11.8-2.14L96.81 90H48a6 6 0 0 0 0 12h46.63l-9.46 52H32a6 6 0 0 0 0 12h51l-8.9 48.93a6 6 0 0 0 4.83 7A5.64 5.64 0 0 0 80 222a6 6 0 0 0 5.89-4.93l9.3-51.07H147l-8.89 48.93a6 6 0 0 0 4.83 7a5.64 5.64 0 0 0 1.08.1a6 6 0 0 0 5.89-4.93l9.28-51.1H208a6 6 0 0 0 0-12h-46.63l9.46-52H224a6 6 0 0 0 0-12Zm-74.83 64h-51.8l9.46-52h51.8Z"
							/>
						</svg>
					</div>
					<div class="m-0.5">
						{{ channel.name }}
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
