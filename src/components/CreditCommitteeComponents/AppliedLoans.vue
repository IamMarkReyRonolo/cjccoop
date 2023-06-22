<template>
	<div class="appliedLoans">
		<div class="sectionTitle">Applied Loans</div>
		<div class="tilesCon">
			<div class="tile" v-for="index in 5" :key="index">
				<div class="tileSubTitle">Total</div>
				<div class="tileValue">10</div>
				<div class="tileTitle">Regular</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				assignee: "",
			};
		},
	};
</script>

<style scoped>
	.sectionTitle {
		font-weight: 500;
		padding: 15px 0px;
	}

	.tilesCon {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.tile {
		padding: 15px;
		border: 1px solid #d9d9db;
		border-radius: 5px;
		width: 175px;
		height: 150px;
		margin-right: 15px;
		margin-bottom: 15px;
		text-align: center;
		cursor: pointer;
	}

	.tileValue {
		font-weight: 500;
		font-size: 28px;
		padding: 10px 0px;
	}

	.tileTitle {
		font-weight: 500;
	}

	.tile:hover {
		background-color: #5ab55e;
		color: white;
		transition: 0.2s ease-in;
	}

	@media only screen and (max-width: 650px) {
		.tile {
			width: 90px;
			height: 100px;
		}

		.tileSubTitle {
			font-size: 12px;
		}

		.tileValue {
			font-weight: 500;
			font-size: 18px;
			padding: 0px 0px;
		}

		.tileTitle {
			font-weight: 500;
			font-size: 12px;
		}
	}
</style>
