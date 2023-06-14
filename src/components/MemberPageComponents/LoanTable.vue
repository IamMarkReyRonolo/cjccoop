<template>
	<div class="loanTableCon">
		<div class="tableHeader">
			<div class="tableTitle">Loans</div>
			<v-btn large color="success" dark @click="clickedLoanApplication = true"
				><span style="text-transform: capitalize">Loan Application</span></v-btn
			>
		</div>
		<v-tabs
			v-model="tab"
			background-color="transparent"
			slider-color="green"
			color="green"
			show-arrows
			left
			class="tabHeader"
		>
			<v-tab v-for="item in items" :key="item">
				{{ item }}
			</v-tab>
		</v-tabs>
		<div class="tableContents">
			<v-tabs-items v-model="tab">
				<v-tab-item v-for="item in items" :key="item">
					<v-data-table
						:headers="headers"
						:items="loan_data"
						class="elevation-1"
					>
						<template v-slot:item.status="{ item }">
							<v-chip :color="getColor(item.status)" dark>
								{{ item.status }}
							</v-chip>
						</template>

						<template v-slot:item.actions="{ item }">
							<v-icon class="mr-2" @click="viewLoanDetails(item)">
								mdi-dots-horizontal
							</v-icon>
						</template>
					</v-data-table>
				</v-tab-item>
			</v-tabs-items>
		</div>
		<LoanApplication
			v-if="clickedLoanApplication == true"
			:clickedLoanApplication="clickedLoanApplication"
			@closeApplication="clickedLoanApplication = false"
		/>
		<LoanDetails
			v-if="clickedLoanDetails == true"
			:clickedLoanDetails="clickedLoanDetails"
			@closeLoanDetails="clickedLoanDetails = false"
		/>
	</div>
</template>

<script>
	import LoanApplication from "./LoanApplication.vue";
	import LoanDetails from "./LoanDetails.vue";
	export default {
		components: { LoanApplication, LoanDetails },
		data: () => ({
			tab: null,
			clickedLoanApplication: false,
			clickedLoanDetails: false,
			items: ["Current Loans", "Pending Loans"],
			dialog: false,
			headers: [
				{
					text: "Date",
					align: "start",
					filterable: false,
					value: "name",
				},
				{ text: "Loan Type", value: "calories" },
				{ text: "Loan Amount", value: "fat" },
				{ text: "Term", value: "carbs" },
				{ text: "Balance", value: "protein" },
				{ text: "Arrears", value: "iron" },
				{ text: "Penalty", value: "last1" },
				{ text: "Status", value: "status" },
				{ text: "", value: "actions", sortable: false },
			],
			current_loans_header: [
				{
					text: "Date",
					align: "start",
					filterable: false,
					value: "date",
				},
				{ text: "Loan Type", value: "loan_type" },
				{ text: "Loan Amount", value: "loan_amount" },
				{ text: "Term", value: "term" },
				{ text: "Balance", value: "balance" },
				{ text: "Arrears", value: "arrears" },
				{ text: "Penalty", value: "penalty" },
				{ text: "Status", value: "status" },
				{ text: "", value: "actions", sortable: false },
			],
			pending_loans_header: [
				{
					text: "Date",
					align: "start",
					filterable: false,
					value: "date",
				},
				{ text: "Loan Type", value: "loan_type" },
				{ text: "Applied Amount", value: "applied_amount" },
				{ text: "Term", value: "term" },
				{ text: "Accepted Amount", value: "accepted_amount" },
				{ text: "Status", value: "status" },
				{ text: "", value: "actions", sortable: false },
			],
			loan_data: [
				{
					date: "March 15, 2023",
					loan_type: "Regular",
					loan_amount: "₱ 50,000.00",
					term: "6 mths",
					balance: "₱ 20,000.00",
					arrears: "₱ 10,000.00",
					penalty: "₱ 5,000.00",
					status: "Active",
				},
				{
					date: "March 15, 2023",
					loan_type: "Regular",
					loan_amount: "₱ 50,000.00",
					term: "6 mths",
					balance: "₱ 20,000.00",
					arrears: "₱ 10,000.00",
					penalty: "₱ 5,000.00",
					status: "Overdue",
				},
			],
		}),

		watch: {
			dialog(val) {
				val || this.close();
			},
			dialogDelete(val) {
				val || this.closeDelete();
			},

			tab() {
				if (this.tab == 0) {
					this.headers = this.current_loans_header;
				} else if (this.tab == 1) {
					this.headers = this.pending_loans_header;
				}
			},
		},

		created() {
			this.initialize_table_data();
		},

		methods: {
			initialize_table_data() {},
			viewLoanDetails(data) {
				this.clickedLoanDetails = true;
				console.log(data);
			},
			getColor(status) {
				if (status == "Active" || status == "Verified") {
					return "success";
				}

				if (status == "Overdue" || status == "Rejected") {
					return "red";
				}

				if (status == "Pending") {
					return "warning";
				}
			},
		},
	};
</script>

<style scoped>
	.loanTableCon {
		background-color: white;
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 15px 30px;
		border-radius: 10px;
	}

	.tableTitle {
		font-size: 22px;
		font-weight: 500;
	}

	.tableHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tableContents {
		padding: 10px 0px;
	}

	@media only screen and (max-width: 650px) {
		.loanTableCon {
			padding: 15px;
		}

		.tabHeader {
			padding: 10px 0px;
		}
	}
</style>
