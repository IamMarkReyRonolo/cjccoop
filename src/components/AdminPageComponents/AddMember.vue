<template>
	<div class="addMemberCon">
		<div class="sectionTitle">Add Member</div>
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
					<v-text-field outlined label="Email" color="success"></v-text-field>
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false,
			};
		},
	};
</script>

<style scoped>
	.sectionTitle {
		font-weight: 500;
		font-size: 24px;
		padding: 20px 0px;
	}

	.formCon {
		width: 500px;
	}
</style>
