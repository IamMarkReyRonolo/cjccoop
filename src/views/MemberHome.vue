<template>
	<div class="memberHomeCon">
		<div class="headerPageCon">
			<div class="navlineCon">
				<div class="logoCon">
					<div class="imgCon">
						<img src="../assets/cor-jesu-college-logo.jpg" alt="" />
					</div>
					<div class="logoTitleCon">CJC - Multipurpose Cooperative</div>
				</div>
				<div class="navCon">
					<v-btn small text @click="clickedSettings = true">Settings</v-btn>
					<v-btn small text @click="clickedLogOut = true">Log out</v-btn>
				</div>
				<div class="dropDown">
					<DropDown
						@clickedSettings="clickedSettings = true"
						@clickedLogOut="clickedLogOut = true"
					/>
				</div>
			</div>
			<div class="userDetailsCon">
				<div class="userProfileCon">
					<div class="profilePicCon">
						<img src="../assets/avatarprofilefemale.png" alt="" />
					</div>
					<div class="nameCon">JESSICA DOE</div>
				</div>

				<div class="shareCapitalCon">
					<div class="sectionTitleCon">Share Capital</div>
					<div class="amountFieldCon">
						<div class="amount">₱ 50,000.00</div>
						<v-btn text fab @click="clickedAccountLedger = true"
							><v-icon>mdi-dots-horizontal</v-icon></v-btn
						>
					</div>
				</div>
			</div>
		</div>
		<div class="mainContentCon">
			<LoanTable />
		</div>
		<LogOut
			v-if="clickedLogOut"
			:clickedLogOut="clickedLogOut"
			@cancelLogOut="clickedLogOut = false"
		/>

		<Settings
			v-if="clickedSettings"
			:clickedSettings="clickedSettings"
			@closeSettings="clickedSettings = false"
		/>

		<AccountLedger
			v-if="clickedAccountLedger == true"
			:clickedAccountLedger="clickedAccountLedger"
			@closeLedger="clickedAccountLedger = false"
		/>
	</div>
</template>

<script>
	import LoanTable from "../components/MemberPageComponents/LoanTable";
	import DropDown from "../components/MemberPageComponents/DropDownMenu";
	import Settings from "../components/MemberPageComponents/Settings";
	import LogOut from "../components/MemberPageComponents/LogOut";
	import AccountLedger from "../components/MemberPageComponents/AccountLedger";
	export default {
		components: { LoanTable, LogOut, DropDown, Settings, AccountLedger },
		data: () => ({
			clickedLogOut: false,
			clickedSettings: false,
			clickedAccountLedger: false,
		}),
	};
</script>

<style scoped>
	.headerPageCon {
		padding: 20px 50px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	.navlineCon {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logoCon {
		display: flex;
		align-items: center;
	}

	.imgCon img {
		width: 40px;
	}

	.logoTitleCon {
		padding: 0px 10px;
		font-size: 14px;
	}

	.userDetailsCon {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0px;
	}

	.userProfileCon {
		display: flex;
		align-items: center;
	}

	.profilePicCon img {
		width: 90px;
		border-radius: 100%;
	}

	.nameCon {
		padding: 0px 20px;
		font-weight: 500;
		font-size: 18px;
	}

	.amountFieldCon {
		border: 1px solid black;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 10px;
		width: 225px;
		border-radius: 5px;
		margin: 5px 0px;
	}

	.sectionTitleCon {
		font-weight: 500;
	}

	.mainContentCon {
		padding: 20px 50px;
		/* background-color: #f7f7f7; */
	}

	.dropDown {
		display: none;
	}

	@media only screen and (max-width: 900px) {
		.headerPageCon {
			padding: 20px 20px;
		}
		.mainContentCon {
			padding: 20px 10px;
			/* background-color: #f7f7f7; */
		}
	}

	@media only screen and (max-width: 600px) {
		.headerPageCon {
			padding: 20px 20px;
		}

		.mainContentCon {
			padding: 20px 10px;
			/* background-color: #f7f7f7; */
		}
		.navCon {
			display: none;
		}

		.userDetailsCon {
			display: block;
		}

		.profilePicCon img {
			width: 100px;
		}

		.nameCon {
			font-size: 20px;
		}

		.amountFieldCon {
			width: 275px;
			padding: 5px 10px;
		}

		.userProfileCon {
			padding-bottom: 20px;
		}

		.dropDown {
			display: block;
		}
	}
</style>
