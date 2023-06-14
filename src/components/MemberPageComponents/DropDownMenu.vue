<template>
	<v-menu bottom min-width="225px" rounded offset-y>
		<template v-slot:activator="{ on }">
			<v-btn icon v-on="on" id="profileBtn" class="profileBtn">
				<v-btn fab small text><v-icon>mdi-menu-down</v-icon></v-btn>
			</v-btn>
		</template>
		<v-card>
			<v-list-item-content class="justify-center">
				<div class="mx-auto text-center">
					<v-btn
						depressed
						text
						id="editProfileBtn"
						small
						@click="$emit('clickedSettings')"
					>
						<span>Settings</span>
					</v-btn>
					<v-divider class="my-3"></v-divider>
					<v-btn
						depressed
						text
						id="logOutBtn"
						small
						@click="$emit('clickedLogOut')"
					>
						<span>Log Out</span>
					</v-btn>
				</div>
			</v-list-item-content>
		</v-card>
	</v-menu>
</template>

<script>
	import Settings from "./Settings";
	import LogOut from "./LogOut";
	export default {
		components: { LogOut, Settings },
		created() {},
		data: () => ({
			logOut: false,
			settings: false,
		}),
		methods: {},
	};
</script>

<style scoped></style>
