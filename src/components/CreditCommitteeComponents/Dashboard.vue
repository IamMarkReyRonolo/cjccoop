<template>
	<div class="dashboard">
		<div class="tabsCon">
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
		</div>
		<div class="tableContents">
			<v-tabs-items v-model="tab">
				<v-tab-item v-for="item in items" :key="item">
					<AppliedLoans />
					<Transactions />
				</v-tab-item>
			</v-tabs-items>
		</div>
	</div>
</template>

<script>
	import AppliedLoans from "./AppliedLoans.vue";
	import Transactions from "./Transactions.vue";
	export default {
		components: { AppliedLoans, Transactions },
		data: () => ({
			tab: null,
			items: ["Applied Loans"],
		}),
	};
</script>

<style scoped>
	.tabsCon {
		border-bottom: 1px solid #d9d9db;
		margin: 10px 0px;
	}
</style>
