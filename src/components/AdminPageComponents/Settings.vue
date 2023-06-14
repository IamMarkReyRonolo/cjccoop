<template>
	<div class="settings">
		<div class="sectionTitle">Settings</div>

		<div class="options">
			<v-btn text block class="option" large>
				<v-icon>mdi-face-recognition</v-icon>
				<div class="optionName">Change Profile Picture</div>
			</v-btn>

			<v-btn text block class="option" large>
				<v-icon>mdi-rename-box</v-icon>
				<div class="optionName">Change Username</div>
			</v-btn>

			<v-btn text block class="option" large>
				<v-icon>mdi-form-textbox-password</v-icon>
				<div class="optionName">Change Password</div>
			</v-btn>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				assignee: "",
			};
		},
	};
</script>

<style scoped>
	.sectionTitle {
		font-weight: 500;
		font-size: 24px;
		padding: 20px 0px;
	}

	.options {
		width: 500px;
	}

	.option {
		display: flex;
		justify-content: left;
		align-items: center;
		padding: 10px;
	}

	.optionName {
		padding: 0px 10px;
		text-transform: capitalize;
	}

	@media only screen and (max-width: 650px) {
		.options {
			width: 100%;
		}

		.options {
			padding-bottom: 15px;
		}
	}
</style>
