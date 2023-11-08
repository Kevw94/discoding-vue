<script setup lang="ts">
const users: Array<{
	pseudo: string
	pp: string
}> = [
	{
		pseudo: 'user1',
		pp: 'https://images.unsplash.com/photo-1698932294556-a84318961dfa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		pseudo: 'User2',
		pp: 'https://images.unsplash.com/photo-1698658297450-a51022d1c951?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGR1Y2tzfGVufDB8fDJ8fHwy'
	}
]
</script>

<template>
	<div class="grow-0 overflow-y-scroll shrink-0 basis-64 bg-gray-800 px-2 pt-4">
		<div>
			<ul>
				<li class="" v-for="user in users">
					<a href="" class="flex p-2 rounded-md w-full">
						<div class="self-center h-10 w-10">
							<img
								class="h-full w-full object-cover rounded-full"
								:src="user.pp"
								alt=""
							/>
						</div>
						<div class="py-2 px-4 self-center">
							{{ user.pseudo }}
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped></style>
