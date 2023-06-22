<template>
	<div class="logInPageCon">
		<div class="headerPageCon">
			<div class="logoCon">
				<img src="../assets/cor-jesu-college-logo.jpg" alt="" />
			</div>
			<div class="titleCon">CJC - Multipurpose Cooperative</div>
		</div>
		<div class="logInFormContainer">
			<div class="containerHeader">
				<h1>Login</h1>
				<v-select
					:items="roles"
					label="Login as"
					filled
					color="#78C66B"
					dense
					v-model="role"
				></v-select>
			</div>

			<div class="formFields">
				<v-text-field
					label="Username"
					outlined
					color="#78C66B"
					v-model="username"
					:rules="usernameRules"
				></v-text-field>
				<v-text-field
					label="Password"
					outlined
					color="#78C66B"
					:rules="passwordRules"
					:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
					:type="show ? 'text' : 'password'"
					v-model="password"
					@click:append="show = !show"
				></v-text-field>
				<v-btn
					:disabled="!validated"
					color="success"
					:dark="validated"
					large
					block
					@click="login()"
					:loading="loading"
					>Log in</v-btn
				>
			</div>
		</div>
	</div>
</template>

<script>
	import AdminAPI from "../apis/AdminAPI";
	import CreditComAPI from "../apis/CreditComAPI";
	import MemberAPI from "../apis/MemberAPI";
	export default {
		name: "Home",
		components: {},
		data: () => ({
			loading: false,
			fetched: false,
			error: false,
			show: false,
			username: "",
			password: "",
			role: "",
			roles: ["Member", "Admin", "Credit Committee"],
			usernameRules: [(v) => !!v.trim() || "This field is required"],
			passwordRules: [(v) => !!v || "This field is required"],
		}),

		created() {
			try {
				const token = JSON.parse(localStorage.getItem("token"));
				const role = JSON.parse(localStorage.getItem("role"));
				if (token != "" && role != "") {
					if (role == "Admin") {
						this.$router.push("/admin");
					}

					if (role == "Member") {
						this.$router.push("/member");
					}

					if (role == "Credit Committee") {
						this.$router.push("/credit_committeess");
					}
				}
			} catch (error) {
				localStorage.removeItem("token");
				localStorage.removeItem("role");
			}
		},

		methods: {
			async login() {
				const credentials = {
					username: this.username,
					password: this.password,
				};
				this.loading = true;
				try {
					if (this.role == "Admin") {
						const result = await AdminAPI.prototype.login(credentials);
						localStorage.setItem(
							"token",
							JSON.stringify(result.data.access_token)
						);
						localStorage.setItem("role", JSON.stringify(this.role));
						try {
							const token = JSON.parse(localStorage.getItem("token"));
							if (token) {
								this.$router.push("/admin");
							}
						} catch (error) {
							localStorage.removeItem("token");
						}
					}
					if (this.role == "Member") {
						const result = await MemberAPI.prototype.login(credentials);
						localStorage.setItem(
							"token",
							JSON.stringify(result.data.access_token)
						);
						localStorage.setItem("role", JSON.stringify(this.role));
						try {
							const token = JSON.parse(localStorage.getItem("token"));
							if (token) {
								this.$router.push("/member");
							}
						} catch (error) {
							localStorage.removeItem("token");
						}
					}
					if (this.role == "Credit Committee") {
						const result = await CreditComAPI.prototype.login(credentials);
						localStorage.setItem(
							"token",
							JSON.stringify(result.data.access_token)
						);
						localStorage.setItem("role", JSON.stringify(this.role));
						try {
							const token = JSON.parse(localStorage.getItem("token"));
							if (token) {
								this.$router.push("/credit_committee");
							}
						} catch (error) {
							localStorage.removeItem("token");
						}
					}
				} catch (error) {
					this.error = true;
					this.loading = false;
				}
			},
		},
		computed: {
			validated: function () {
				if (
					this.role != "" &&
					this.username.trim() != "" &&
					this.password != ""
				) {
					return true;
				}
				return false;
			},
		},
	};
</script>

<style scoped>
	.headerPageCon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40px 0px;
		margin-top: 50px;
	}
	.logoCon,
	.logoCon img {
		width: 80px;
	}

	.titleCon {
		padding: 10px;
		font-size: 20px;
		font-weight: 500;
	}
	.logInFormContainer {
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 400px;
		padding: 40px 48px;
		border: 1px solid #dadce0;
		border-radius: 8px;
		background-color: white;
		/* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
	}

	h1 {
		margin-bottom: 20px;
		text-align: center;
		font-weight: 500;
		font-size: 24px;
	}

	@media only screen and (max-width: 500px) {
		.headerPageCon {
			flex-direction: column;
			margin: 20px;
			padding-top: 40px;
		}

		.titleCon {
			font-size: 16px;
		}
		.logInFormContainer {
			position: relative;
			border: none;
			top: 0%;
			left: 0%;
			transform: translate(0%, 0%);
			max-width: 360px;
			padding: 0px 20px;
			margin: auto;
			margin-top: 0px;
		}
	}
</style>
