<template>
	<div class="bankStatusCon">
		<div class="upperSection">
			<div class="bankStatusSection">
				<div class="sectionTitleCon">Bank Status</div>
				<div class="chart">
					<apexchart
						type="bar"
						:options="chartOptions"
						:series="series"
						:height="260"
					></apexchart>
				</div>
			</div>
			<div class="bankBalanceSection">
				<div class="sectionTitleCon">Bank Balance</div>
				<div class="chart">
					<apexchart
						type="pie"
						:options="chartOptions2"
						:series="series2"
						:height="260"
					></apexchart>
				</div>
			</div>
		</div>
		<div class="lowerSection">
			<div class="bankTransactionsSection">
				<div class="sectionTitleCon">Bank Transactions</div>
				<div class="tableCon">
					<v-data-table
						:headers="headers"
						:items="data"
						:items-per-page="5"
					></v-data-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VueApexCharts from "vue-apexcharts";
	export default {
		components: {
			apexchart: VueApexCharts,
		},
		data() {
			return {
				assignee: "",
				headers: [
					{
						text: "Date",
						align: "start",
						value: "date",
					},
					{ text: "Type", value: "type" },
					{ text: "Amount", value: "amount" },
					{ text: "Bank", value: "bank" },
				],

				data: [
					{
						date: "March 15, 2023",
						type: "Deposit",
						amount: "₱ 50,000.00",
						bank: "Bank 1",
					},
					{
						date: "March 15, 2023",
						type: "Deposit",
						amount: "₱ 50,000.00",
						bank: "Bank 2",
					},
					{
						date: "March 15, 2023",
						type: "Deposit",
						amount: "₱ 50,000.00",
						bank: "Bank 3",
					},
					{
						date: "March 15, 2023",
						type: "Deposit",
						amount: "₱ 50,000.00",
						bank: "Bank 1",
					},
					{
						date: "March 15, 2023",
						type: "Deposit",
						amount: "₱ 50,000.00",
						bank: "Bank 2",
					},
				],

				chartOptions: {
					chart: {
						id: "vuechart-example",
					},
					xaxis: {
						categories: ["Bank 1", "Bank 2", "Bank 3", "Bank 4"],
					},
				},
				chartOptions2: {
					chart: {
						type: "pie",
					},
					labels: ["Bank 1", "Bank 2", "Bank 3", "Bank 4"],
				},
				series: [
					{
						name: "Debit",
						data: [30, 40, 35, 41],
					},
					{
						name: "Credit",
						data: [32, 45, 30, 20],
					},
				],
				series2: [44, 55, 13, 43],
			};
		},
	};
</script>

<style scoped>
	.upperSection {
		display: flex;
		justify-content: space-between;
		padding: 10px 0px;
	}

	.bankStatusSection {
		width: 59%;
	}
	.bankBalanceSection {
		width: 39%;
	}

	.sectionTitleCon {
		font-weight: 500;
	}

	.chart {
		border: 1px solid #d9d9db;
		width: 100%;
		height: 275px;
		margin: 10px 0px;
	}

	.lowerSection {
		padding: 10px 0px;
	}

	.tableCon {
		margin: 10px 0px;
		border: 1px solid #d9d9db;
	}

	@media only screen and (max-width: 650px) {
		.upperSection {
			display: block;
		}

		.bankStatusSection {
			width: 100%;
		}
		.bankBalanceSection {
			width: 100%;
		}

		.sectionTitleCon {
			padding: 10px 0px;
		}
	}
</style>
