<template>
	<v-dialog
		v-model="clickedAddMember"
		width="500"
		persistent
		:fullscreen="this.$vuetify.breakpoint.width <= 650"
	>
		<v-card>
			<div class="con">
				<div class="headerTitle" id="modalTitle">Add Member</div>
				<v-btn fab text small @click="$emit('closeAddMember')"
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
						></v-text-field>
					</div>
				</div>
				<div class="fieldCon">
					<div class="label"></div>
					<div class="field">
						<v-text-field
							:append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
							:type="show2 ? 'text' : 'password'"
							label="Repeat Password"
							counter
							@click:append="show2 = !show2"
							outlined
							color="success"
						></v-text-field>
					</div>
				</div>
				<br />
				<v-btn large color="success"
					><span style="text-transform: capitalize">Add Member</span></v-btn
				>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: { clickedAddMember: Boolean },
		data() {
			return {
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

	@media only screen and (max-width: 650px) {
		.con {
			padding: 10px 20px;
			padding-top: 20px;
		}
	}
</style>
