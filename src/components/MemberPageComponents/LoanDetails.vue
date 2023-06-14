<template>
	<v-dialog
		v-model="clickedLoanDetails"
		width="1000"
		persistent
		:fullscreen="this.$vuetify.breakpoint.width <= 650"
	>
		<v-card>
			<div class="con">
				<div class="headerCon">
					<div class="headerTitle" id="modalTitle">Loan Details</div>
					<v-btn fab text small @click="$emit('closeLoanDetails')"
						><v-icon>mdi-close</v-icon></v-btn
					>
				</div>

				<div class="loanDetailsCon">
					<div class="sectionTitleCon">Loan Details</div>
					<div class="details">
						<div class="section">
							<div class="detailField">
								<div class="fieldTitle">Loan Type:</div>
								<div class="fieldValue">Regular</div>
							</div>
						</div>
						<div class="section">
							<div class="detailField">
								<div class="fieldTitle">Date Applied:</div>
								<div class="fieldValue">March 01, 2023</div>
							</div>
							<div class="detailField">
								<div class="fieldTitle">Date Approved:</div>
								<div class="fieldValue">March 02, 2023</div>
							</div>
						</div>
						<div class="section">
							<div class="detailField">
								<div class="fieldTitle">Amount Applied</div>
								<div class="fieldValue">₱ 50,000.00</div>
							</div>
							<div class="detailField">
								<div class="fieldTitle">Ammount Approved:</div>
								<div class="fieldValue">₱ 50,000.00</div>
							</div>
							<div class="detailField">
								<div class="fieldTitle">Released Date:</div>
								<div class="fieldValue">March 31, 2023</div>
							</div>
						</div>
					</div>
				</div>

				<div class="paymentHistoryCon">
					<div class="sectionTitleCon">Transaction History</div>
					<div class="paymentHistoryTable">
						<v-data-table
							:headers="headers"
							:items="transactionData"
							:items-per-page="5"
						></v-data-table>
					</div>
				</div>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: { clickedLoanDetails: Boolean },
		data() {
			return {
				assignee: "",
				headers: [
					{
						text: "Date",
						align: "start",
						sortable: false,
						value: "date",
					},
					{ text: "Debit", value: "debit", sortable: false },
					{ text: "Credit", sortable: false, value: "credit" },
					{ text: "Remarks", sortable: false, value: "remarks" },
					{ text: "Balance", sortable: false, value: "balance" },
				],
				transactionData: [],
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

	.sectionTitleCon {
		font-weight: 500;
	}

	.loanDetailsCon {
		padding: 10px 0px;
	}

	.details {
		padding: 5px 0px;
		padding-bottom: 10px;
	}

	.section {
		display: flex;
		justify-content: left;
		padding: 4px 0px;
	}

	.detailField {
		display: flex;
	}

	.fieldValue {
		font-weight: 500;
		padding: 0px 10px;
		padding-right: 20px;
	}

	@media only screen and (max-width: 870px) {
		.section {
			display: block;
			padding: 0px 0px;
		}
	}
	@media only screen and (max-width: 650px) {
		.con {
			padding: 20px 20px;
		}
		.headerTitle {
			font-size: 18px;
		}

		.section {
			display: block;
			padding: 0px 0px;
		}
	}
</style>
