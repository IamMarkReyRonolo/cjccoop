import axios from "axios";
const url = "http://localhost:8000/credit_committee";

export default class API {
	async login(credentials) {
		const user = await axios.post(url + "/login", credentials);
		console.log(user);
		return user;
	}
}
