<template>
	<div class="appliedLoans">
		<div class="sectionTitle">Transactions</div>
		<div class="tableCon">
			<v-data-table :headers="headers" :items="loan_data" class="elevation-1">
				<template v-slot:item.actions="{ item }">
					<v-btn
						small
						rounded
						color="success"
						@click="clickedLoanApplication = true"
						><span style="text-transform: capitalize">Process</span></v-btn
					>
				</template>
			</v-data-table>
		</div>
		<Process
			:clickedLoanApplication="clickedLoanApplication"
			v-if="clickedLoanApplication == true"
			@closeApplication="clickedLoanApplication = false"
		/>
	</div>
</template>

<script>
	import Process from "./Process";
	export default {
		components: { Process },
		data() {
			return {
				assignee: "",
				clickedLoanApplication: false,
				headers: [
					{
						text: "Date",
						align: "start",
						filterable: false,
						value: "date",
					},
					{ text: "Loan Type", value: "loan_type" },
					{ text: "Maker", value: "maker" },
					{ text: "", value: "actions", sortable: false },
				],
				loan_data: [
					{
						date: "March 15, 2023",
						loan_type: "Regular",
						maker: "Mark Rey Ronolo",
					},
					{
						date: "March 15, 2023",
						loan_type: "Regular",
						maker: "Mark Rey Ronolo",
					},
				],
			};
		},

		methods: {
			viewLoanDetails(data) {
				this.clickedLoanDetails = true;
				console.log(data);
			},
		},
	};
</script>

<style scoped>
	.sectionTitle {
		font-weight: 500;
		padding: 15px 0px;
	}

	.tableCon {
		width: 1000px;
		border: 1px solid #d9d9db;
	}

	@media only screen and (max-width: 650px) {
		.tableCon {
			width: 100%;
		}
	}
</style>
