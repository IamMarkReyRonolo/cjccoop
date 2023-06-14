<template>
	<div class="loanReleasesCon">
		<div class="loanReleasesSection">
			<div class="sectionTitleCon">Loan Releases</div>
			<div class="chart">
				<apexchart
					type="area"
					:options="chartOptions"
					:series="series"
					:height="260"
				></apexchart>
			</div>
		</div>
		<div class="releaseTransaction">
			<div class="sectionTitleCon">Release Transactions</div>
			<div class="tableCon">
				<v-data-table
					:headers="headers"
					:items="data"
					:items-per-page="5"
				></v-data-table>
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
					{ text: "Name", value: "name" },
					{ text: "Amount", value: "amount" },
					{ text: "Bank", value: "bank" },
				],

				data: [
					{
						date: "March 15, 2023",
						name: "Mark Rey Ronolo",
						amount: "₱ 50,000.00",
						bank: "Bank 1",
					},
					{
						date: "March 15, 2023",
						name: "Mark Rey Ronolo",
						amount: "₱ 50,000.00",
						bank: "Bank 2",
					},
					{
						date: "March 15, 2023",
						name: "Mark Rey Ronolo",
						amount: "₱ 50,000.00",
						bank: "Bank 3",
					},
					{
						date: "March 15, 2023",
						name: "Mark Rey Ronolo",
						amount: "₱ 50,000.00",
						bank: "Bank 1",
					},
					{
						date: "March 15, 2023",
						name: "Mark Rey Ronolo",
						amount: "₱ 50,000.00",
						bank: "Bank 2",
					},
				],

				chartOptions: {
					chart: {
						id: "vuechart-example",
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						curve: "smooth",
					},
					xaxis: {
						categories: [
							"June 1, 2023",
							"July 1, 2023",
							"August 1, 2023",
							"September 1, 2023",
							"October 1, 2023",
							"November 1, 2023",
							"December 1, 2023",
						],
					},
				},
				series: [
					{
						data: [30, 40, 35, 41, 32, 20, 50],
					},
				],
			};
		},
	};
</script>

<style scoped>
	.sectionTitleCon {
		font-weight: 500;
	}

	.chart {
		border: 1px solid #d9d9db;
		width: 100%;
		height: 275px;
		margin: 10px 0px;
	}

	.tableCon {
		margin: 10px 0px;
		border: 1px solid #d9d9db;
	}
</style>
