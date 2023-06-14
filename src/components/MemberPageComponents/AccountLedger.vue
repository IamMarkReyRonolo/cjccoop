<template>
	<v-dialog
		v-model="clickedAccountLedger"
		width="700"
		persistent
		:fullscreen="this.$vuetify.breakpoint.width <= 650"
	>
		<v-card>
			<div class="con">
				<div class="headerCon">
					<div class="headerTitle" id="modalTitle">Account Ledger</div>
					<v-btn fab text small @click="$emit('closeLedger')"
						><v-icon>mdi-close</v-icon></v-btn
					>
				</div>
				<div class="currentDate">As of March 20, 2023</div>
				<div class="shareCapitalCon">
					<div class="sectionTitleCon">Share Capital</div>
					<div class="amountFieldCon">
						<div class="amount">₱ 50,000.00</div>
					</div>
				</div>

				<div class="transactionHistoryCon">
					<div class="sectionTitleCon">Transaction History</div>
					<div class="transactionTable">
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
		props: { clickedAccountLedger: Boolean },
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

	.currentDate {
		font-weight: 500;
		font-size: 12px;
		padding-bottom: 10px;
	}

	.shareCapitalCon {
		padding: 10px 0px;
	}

	.amountFieldCon {
		border: 1px solid black;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 10px;
		width: 225px;
		border-radius: 5px;
		margin: 5px 0px;
	}

	.sectionTitleCon {
		font-weight: 500;
	}

	@media only screen and (max-width: 650px) {
		.con {
			padding: 20px;
		}
		.headerTitle {
			font-size: 18px;
		}
	}
</style>
