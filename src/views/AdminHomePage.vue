<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<div class="sideBar">
				<div class="topSection">
					<div class="adminProfile">
						<v-avatar size="60">
							<img src="../assets/cor-jesu-college-logo.jpg" alt="" />
						</v-avatar>
						<div class="nameCon">
							<div class="name">Mark Rey Ronolo</div>
							<div class="role">Administrator</div>
						</div>
					</div>
					<div class="navigations">
						<div class="btnCon">
							<v-btn
								:color="current_route == 'dashboard' ? 'success' : 'black'"
								:dark="current_route != 'dashboard'"
								:text="current_route != 'dashboard'"
								block
								large
								depressed
								@click="navigate('dashboard')"
								><span style="text-transform: capitalize"
									>Dashboard
								</span></v-btn
							>
						</div>
						<div class="btnCon">
							<v-btn
								:color="current_route == 'members' ? 'success' : 'black'"
								:dark="current_route != 'members'"
								:text="current_route != 'members'"
								block
								large
								@click="navigate('members')"
								><span style="text-transform: capitalize">Members </span></v-btn
							>
						</div>
						<div class="btnCon">
							<v-btn
								:color="current_route == 'settings' ? 'success' : 'black'"
								:dark="current_route != 'settings'"
								:text="current_route != 'settings'"
								block
								large
								@click="navigate('settings')"
								><span style="text-transform: capitalize"
									>Settings
								</span></v-btn
							>
						</div>
					</div>
				</div>

				<v-btn text @click="clickedLogOut = true">
					<v-icon>mdi-exit-to-app</v-icon>
					<span style="text-transform: capitalize">Log out </span>
				</v-btn>
			</div>
		</v-navigation-drawer>

		<div class="mainContent">
			<div class="logoCon">
				<div class="imgCon" @click="drawer = !drawer">
					<img src="../assets/cor-jesu-college-logo.jpg" alt="" />
				</div>
				<div class="logoTitleCon">CJC - Multipurpose Cooperative</div>
			</div>

			<Dashboard v-if="current_route == 'dashboard'" />
			<Members v-if="current_route == 'members'" />
			<Settings v-if="current_route == 'settings'" />
		</div>

		<LogOut
			v-if="clickedLogOut"
			:clickedLogOut="clickedLogOut"
			@cancelLogOut="clickedLogOut = false"
			@proceedLogOut="proceedLogOut()"
		/>
	</v-app>
</template>

<script>
	import Dashboard from "../components/AdminPageComponents/Dashboard.vue";
	import Members from "../components/AdminPageComponents/Members.vue";
	import Settings from "../components/AdminPageComponents/Settings.vue";
	import LogOut from "../components/AdminPageComponents/LogOut.vue";
	export default {
		components: { LogOut, Dashboard, Members, Settings },
		data: () => ({
			drawer: null,
			clickedLogOut: false,
			current_route: "dashboard",
		}),

		created() {
			try {
				const token = JSON.parse(localStorage.getItem("token"));
				const role = JSON.parse(localStorage.getItem("role"));
				if (token != "" && role != "") {
					if (role == "Member") {
						this.$router.push("/member");
					}

					if (role == "Credit Committee") {
						this.$router.push("/credit_committee");
					}
				} else {
					localStorage.removeItem("token");
					localStorage.removeItem("role");
					this.$router.push("/");
				}
			} catch (error) {
				localStorage.removeItem("token");
				localStorage.removeItem("role");
				this.$router.push("/");
			}
		},

		methods: {
			navigate(route) {
				this.current_route = route;
			},

			proceedLogOut() {
				localStorage.removeItem("token");
				localStorage.removeItem("role");
				this.$router.push("/");
			},
		},
	};
</script>

<style scoped>
	.sideBar {
		padding: 40px 0px;
		min-height: 100vh;

		border-right: 1px solid #d9d9db;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.adminProfile {
		padding: 0px 0px;
		padding-bottom: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nameCon {
		text-align: left;
		padding: 0px 20px;
	}

	.name {
		font-weight: bold;
	}

	.role {
		font-size: 12px;
	}

	.mainContent {
		padding: 20px 40px;
	}

	.logoCon {
		display: flex;
		align-items: center;
	}

	.imgCon img {
		cursor: pointer;
		width: 40px;
	}

	.logoTitleCon {
		padding: 0px 10px;
		font-size: 14px;
	}

	@media only screen and (max-width: 600px) {
		.mainContent {
			padding: 20px 20px;
		}
	}
</style>
