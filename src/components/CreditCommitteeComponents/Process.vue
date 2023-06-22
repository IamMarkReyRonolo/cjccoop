<template>
	<v-dialog
		v-model="clickedLoanApplication"
		width="500"
		persistent
		:fullscreen="this.$vuetify.breakpoint.width <= 650"
	>
		<v-card>
			<div class="con">
				<div class="headerCon">
					<div class="headerTitle" id="modalTitle">Loan Application</div>
					<v-btn fab text small @click="$emit('closeApplication')"
						><v-icon>mdi-close</v-icon></v-btn
					>
				</div>
				<div class="formCon">
					<v-text-field
						label="Maker"
						placeholder="Maker"
						outlined
						color="green"
						v-model="application.maker"
					></v-text-field>
					<v-select
						:items="loan_types"
						label="Loan Type"
						outlined
						color="green"
						v-model="application.loan_type"
					></v-select>
					<v-text-field
						label="Term (in months)"
						placeholder="Term (in months)"
						outlined
						number
						color="green"
						v-model="application.term"
					></v-text-field>
					<v-text-field
						label="Applied Amount"
						placeholder="Applied Amount"
						outlined
						number
						color="green"
						v-model="application.applied_amount"
					></v-text-field>
					<v-text-field
						label="Reason"
						placeholder="Reason"
						outlined
						color="green"
						v-model="application.reason"
					></v-text-field>

					<div class="formButton">
						<v-btn large color="green" dark
							><span style="text-transform: capitalize"
								>Approve Application</span
							></v-btn
						>
					</div>
				</div>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: { clickedLoanApplication: Boolean },
		data() {
			return {
				assignee: "",
				items: [],
				loan_types: ["Regular"],
				application: {
					maker: "Mark Rey Ronolo",
					loan_type: "Regular",
					term: 12,
					applied_amount: 50000,
					reason: "Reasons here",
				},
			};
		},
	};
</script>

<style scoped>
	.con {
		padding: 30px 40px;
	}
	.headerCon {
		text-align: left;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* color: #83ca77; */
	}

	.headerTitle {
		font-size: 24px;
		font-weight: bold;
	}

	.formCon {
		padding: 40px 5px;
	}

	.formButton {
		text-align: center;
	}

	@media only screen and (max-width: 650px) {
		.con {
			padding: 20px 20px;
		}
		.headerTitle {
			font-size: 18px;
		}
	}
</style>
