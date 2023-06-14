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
				></v-select>
			</div>

			<div class="formFields">
				<v-text-field
					label="Email"
					outlined
					color="#78C66B"
					:rules="usernameRules"
				></v-text-field>
				<v-text-field
					label="Password"
					outlined
					color="#78C66B"
					:rules="passwordRules"
					:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
					:type="show ? 'text' : 'password'"
					@click:append="show = !show"
				></v-text-field>
				<v-btn color="success" dark large block>Log in</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		components: {},
		data: () => ({
			show: false,
			roles: ["User", "Admin", "Credit Committee"],
			usernameRules: [
				(v) => !!v.trim() || "This field is required",
				(v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Email must be valid",
			],
			passwordRules: [(v) => !!v || "This field is required"],
		}),
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
