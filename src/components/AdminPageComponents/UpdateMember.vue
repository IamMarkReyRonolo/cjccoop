<template>
	<v-dialog
		v-model="clickedUpdateMember"
		width="500"
		persistent
		:fullscreen="this.$vuetify.breakpoint.width <= 650"
	>
		<v-card>
			<div class="con">
				<div class="headerTitle" id="modalTitle">Update Account</div>
				<v-btn fab text small @click="$emit('closeUpdateMember')"
					><v-icon>mdi-close</v-icon></v-btn
				>
			</div>
			<div class="formCon">
				<div class="fieldCon">
					<div class="label"></div>
					<div class="field">
						<v-text-field
							outlined
							label="First Name"
							color="success"
							v-model="memberData.first_name"
						></v-text-field>
					</div>
				</div>
				<div class="fieldCon">
					<div class="label"></div>
					<div class="field">
						<v-text-field
							outlined
							label="Last Name"
							color="success"
							v-model="memberData.last_name"
						></v-text-field>
					</div>
				</div>
				<div class="fieldCon">
					<div class="label"></div>
					<div class="field">
						<v-select
							:items="roles"
							outlined
							label="Role"
							color="success"
							v-model="memberData.role"
						></v-select>
					</div>
				</div>
				<div class="fieldCon">
					<div class="label"></div>
					<div class="field">
						<v-text-field
							outlined
							label="Username"
							color="success"
							v-model="memberData.username"
						></v-text-field>
					</div>
				</div>
				<div class="fieldCon">
					<div class="label"></div>
					<div class="field">
						<v-text-field
							:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							:type="show1 ? 'text' : 'password'"
							label="Password"
							hint="At least 8 characters"
							counter
							@click:append="show1 = !show1"
							outlined
							color="success"
							v-model="memberData.password"
						></v-text-field>
					</div>
				</div>

				<br />
				<div class="btnsCon">
					<v-btn large color="success"
						><span style="text-transform: capitalize"
							>Update Account</span
						></v-btn
					>
					or
					<v-btn large color="error" outlined
						><span style="text-transform: capitalize"
							>Delete Account</span
						></v-btn
					>
				</div>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: { clickedUpdateMember: Boolean, accountData: Object },
		created() {
			this.memberData = Object.assign({}, this.accountData);
		},
		data() {
			return {
				memberData: {},
				show1: false,
				show2: false,
				roles: ["Administrator", "Credit Committee", "Member"],
			};
		},
	};
</script>

<style scoped>
	.con {
		padding: 10px 40px;
		padding-top: 30px;
		text-align: left;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* color: #83ca77; */
	}

	.formCon {
		padding: 10px 40px;
		padding-bottom: 20px;
		text-align: center;
	}

	.headerTitle {
		font-size: 24px;
		font-weight: bold;
	}

	.btnsCon {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btnsCon .v-btn {
		margin: 10px;
	}

	@media only screen and (max-width: 650px) {
		.con {
			padding: 10px 20px;
			padding-top: 20px;
		}

		.btnsCon {
			flex-direction: column;
		}
	}
</style>
