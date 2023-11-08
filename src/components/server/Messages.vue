<script setup lang="ts">
const MESSAGES: Array<{
	pseudo: string
	url: string
	time: string
	date: string
	modified: boolean
	message: string
}> = [
	{
		pseudo: 'Cinnamon',
		url: 'https://images.unsplash.com/photo-1501721857084-6b993d35774a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGR1Y2t8ZW58MHx8MHx8fDA%3D',
		time: '12:47',
		date: '2022-11-08 10:40:34',
		modified: false,
		message: 'Hey, have you guys ever taken a bath in a lake before?'
	},
	{
		pseudo: 'Chestnut',
		url: 'https://images.unsplash.com/photo-1526642295339-99f8b88a241b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGR1Y2t8ZW58MHx8MHx8fDA%3D',
		time: '12:56',
		date: '2022-11-08 10:40:34',
		modified: true,
		message:
			'Yeah, I actually did it last summer when I went on vacation to Greece. The crystal clear waters of the Mediterranean were too tempting to resist!'
	}
]
</script>

<template>
	<div class="grow overflow-y-scroll">
		<ul>
			<li class="hover:bg-gray-700 rounded-md p-2 m-2" v-for="message in MESSAGES">
				<div class="flex">
					<div class="grow-0 shrink-0 basis-16 h-16 p-2">
						<img
							class="h-full w-full object-cover rounded-full"
							:src="message.url"
							alt="Server profile pic"
						/>
					</div>
					<div class="flex flex-col">
						<div class="flex">
							<div class="p-1">{{ message.pseudo }}</div>
							<div class="p-1">{{ message.date }} - {{ message.time }}</div>
						</div>
						<div class="flex">
							<div class="p-2">{{ message.message }}</div>
							<div
								class="grow-0 shrink-0 basis-6 p-2 text-gray-600"
								v-if="message.modified"
							>
								(modifié)
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
