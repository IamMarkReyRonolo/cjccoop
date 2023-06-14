<template>
	<div class="settings">
		<div class="headerPageCon">
			<div class="sectionTitle">Members</div>
			<v-btn color="success" large @click="clickedAddMember = true">
				<span style="text-transform: capitalize">Add Member</span></v-btn
			>
		</div>

		<div class="accountSectionCon">
			<div class="sectionSubtitle">Admin Accounts</div>
			<div class="accountListCon">
				<div
					class="accountTile"
					v-for="index in 2"
					:key="index"
					@click="updateMember('admin')"
				>
					<div class="profilePicCon">
						<img src="../../assets/cor-jesu-college-logo.jpg" alt="" />
					</div>
					<div class="accountDetailsCon">
						<div class="accountName">Mark Rey Ronolo</div>
						<div class="accountRole">Administrator</div>
					</div>
					<!-- <div class="btnsController">
						<v-btn fab x-small color="success" dark
							><v-icon>mdi-pencil</v-icon></v-btn
						>
						<v-btn fab x-small color="error" dark
							><v-icon>mdi-trash-can</v-icon></v-btn
						>
					</div> -->
				</div>
			</div>
		</div>
		<div class="accountSectionCon">
			<div class="sectionSubtitle">Credit Committee Accounts</div>
			<div class="accountListCon">
				<div
					class="accountTile"
					v-for="index in 5"
					:key="index"
					@click="updateMember('creditcom')"
				>
					<div class="profilePicCon">
						<img src="../../assets/cor-jesu-college-logo.jpg" alt="" />
					</div>
					<div class="accountDetailsCon">
						<div class="accountName">Mark Rey Ronolo</div>
						<div class="accountRole">Credit Committee</div>
					</div>
					<!-- <div class="btnsController">
						<v-btn fab x-small color="success" dark
							><v-icon>mdi-pencil</v-icon></v-btn
						>
						<v-btn fab x-small color="error" dark
							><v-icon>mdi-trash-can</v-icon></v-btn
						>
					</div> -->
				</div>
			</div>
		</div>
		<div class="accountSectionCon">
			<div class="sectionSubtitle">Members</div>
			<div class="accountListCon">
				<div
					class="accountTile"
					v-for="index in 15"
					:key="index"
					@click="updateMember('member')"
				>
					<div class="profilePicCon">
						<img src="../../assets/cor-jesu-college-logo.jpg" alt="" />
					</div>
					<div class="accountDetailsCon">
						<div class="accountName">Mark Rey Ronolo</div>
						<div class="accountRole">Member</div>
					</div>
					<!-- <div class="btnsController">
						<v-btn fab x-small color="success" dark
							><v-icon>mdi-pencil</v-icon></v-btn
						>
						<v-btn fab x-small color="error" dark
							><v-icon>mdi-trash-can</v-icon></v-btn
						>
					</div> -->
				</div>
			</div>
		</div>

		<AddMember
			v-if="clickedAddMember == true"
			:clickedAddMember="clickedAddMember"
			@closeAddMember="clickedAddMember = false"
		/>
		<UpdateMember
			v-if="clickedUpdateMember == true"
			:clickedUpdateMember="clickedUpdateMember"
			@closeUpdateMember="clickedUpdateMember = false"
			:accountData="chosenAccount"
		/>
	</div>
</template>

<script>
	import AddMember from "./AddMember.vue";
	import UpdateMember from "./UpdateMember.vue";
	export default {
		components: { AddMember, UpdateMember },
		data() {
			return {
				clickedAddMember: false,
				clickedUpdateMember: false,
				assignee: "",
				chosenAccount: {},
			};
		},
		methods: {
			updateMember(role) {
				this.chosenAccount = {
					first_name: "Mark Rey",
					last_name: "Ronolo",
					username: "Iammark123",
					password: "Iammark123",
				};
				if (role == "admin") {
					this.chosenAccount.role = "Administrator";
				}

				if (role == "creditcom") {
					this.chosenAccount.role = "Credit Committee";
				}

				if (role == "member") {
					this.chosenAccount.role = "Member";
				}

				this.clickedUpdateMember = true;
			},
		},
	};
</script>

<style scoped>
	.headerPageCon {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.sectionTitle {
		font-weight: 500;
		font-size: 24px;
		padding: 20px 0px;
	}

	.sectionSubtitle {
		font-weight: 500;
		font-size: 18px;
	}

	.accountListCon {
		padding: 20px 0px;
		display: flex;
		flex-wrap: wrap;
	}

	.accountTile {
		border: 1px solid #d9d9db;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 15px;
		margin-right: 20px;
		margin-bottom: 20px;
		width: 250px;
		cursor: pointer;
	}

	.accountTile:hover {
		background-color: #5ab55e;
		transition: ease-in 0.2s;
		color: white;
	}

	.profilePicCon img {
		width: 50px;
		border-radius: 100%;
	}

	.accountDetailsCon {
		padding: 0px 10px;
	}

	.accountName {
		font-weight: 500;
	}

	.accountRole {
		font-size: 12px;
	}

	.btnsController {
		text-align: right;
	}

	.btnsController .v-btn {
		margin: 5px;
	}

	@media only screen and (max-width: 650px) {
		.accountTile {
			width: 100%;
		}
	}
</style>
