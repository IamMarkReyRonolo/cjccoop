<template>
	<v-dialog v-model="clickedLogOut" persistent width="350">
		<v-card>
			<div class="con">
				<div class="headerCon">
					<div class="headerTitle" id="modalTitle">Log out</div>
					<v-btn fab text small @click="$emit('cancelLogOut')"
						><v-icon>mdi-close</v-icon></v-btn
					>
				</div>

				<div class="details">Are you sure you want to log out?</div>
				<div class="btnsCon">
					<v-btn
						color="success"
						dark
						@click="$emit('proceedLogOut')"
						id="proceedSubmitBtn"
					>
						<span style="text-transform: capitalize">Log out</span>
					</v-btn>
				</div>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: { clickedLogOut: Boolean },
		data() {
			return {
				assignee: "",
			};
		},
	};
</script>

<style scoped>
	.con {
		padding: 20px;
		text-align: left;
		/* color: #83ca77; */
	}

	.headerTitle {
		font-size: 24px;
		font-weight: bold;
	}

	.headerCon {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.details {
		padding: 10px 0px;
	}

	.btnsCon {
		display: flex;
		justify-content: flex-end;
	}

	@media only screen and (max-width: 650px) {
		.con {
			padding: 20px;
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
