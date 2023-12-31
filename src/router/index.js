import Vue from "vue";
import VueRouter from "vue-router";
import LogInPage from "../views/LogInPage.vue";
import MemberHome from "../views/MemberHome.vue";
import CreditCommittee from "../views/CreditCommittee.vue";
import AdminHomePage from "../views/AdminHomePage.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "LogInPage",
		component: LogInPage,
	},
	{
		path: "/member",
		name: "MemberHome",
		component: MemberHome,
	},
	{
		path: "/credit_committee",
		name: "CreditCommittee",
		component: CreditCommittee,
	},
	{
		path: "/admin",
		name: "AdminHomePage",
		component: AdminHomePage,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
