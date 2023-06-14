<template>
	<v-dialog
		v-model="clickedSettings"
		width="400"
		persistent
		:fullscreen="this.$vuetify.breakpoint.width <= 650"
	>
		<v-card>
			<div class="con">
				<div class="headerTitle" id="modalTitle">Settings</div>
				<v-btn fab text small @click="$emit('closeSettings')"
					><v-icon>mdi-close</v-icon></v-btn
				>
			</div>
			<div class="options">
				<v-btn text block class="option">
					<v-icon>mdi-face-recognition</v-icon>
					<div class="optionName">Change Profile Picture</div>
				</v-btn>

				<v-btn text block class="option">
					<v-icon>mdi-rename-box</v-icon>
					<div class="optionName">Change Username</div>
				</v-btn>

				<v-btn text block class="option">
					<v-icon>mdi-form-textbox-password</v-icon>
					<div class="optionName">Change Password</div>
				</v-btn>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: { clickedSettings: Boolean },
		data() {
			return {
				assignee: "",
			};
		},
	};
</script>

<style scoped>
	.con {
		padding: 10px 40px;
		padding-top: 30px;
		text-align: left;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* color: #83ca77; */
	}

	.options {
		padding: 10px 40px;
		padding-bottom: 30px;
	}

	.headerTitle {
		font-size: 24px;
		font-weight: bold;
	}

	.details {
		padding: 10px 0px;
	}

	.btnsCon {
		display: flex;
		justify-content: flex-end;
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
		.con,
		.options {
			padding: 10px 20px;
		}

		.con {
			padding-top: 15px;
		}

		.options {
			padding-bottom: 15px;
		}

		.headerTitle {
			font-size: 18px;
		}

		.details {
			font-size: 14px;
			padding: 10px 0px;
		}

		.btnsCon .v-btn {
			font-size: 14px;
			height: 30px;
		}
	}
</style>
