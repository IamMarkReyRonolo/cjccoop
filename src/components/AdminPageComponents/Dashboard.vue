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
					<BankStatus v-if="tab == 0" />
					<LoanReleases v-if="tab == 1" />
				</v-tab-item>
			</v-tabs-items>
		</div>
	</div>
</template>

<script>
	import BankStatus from "./BankStatus.vue";
	import LoanReleases from "./LoanReleases.vue";
	export default {
		components: { BankStatus, LoanReleases },
		data: () => ({
			tab: null,
			items: ["Bank Status", "Loan Releases"],
		}),
	};
</script>

<style scoped>
	.tabsCon {
		border-bottom: 1px solid #d9d9db;
		margin: 10px 0px;
	}
</style>
