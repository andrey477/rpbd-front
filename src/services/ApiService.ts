import axios from "axios";
import {store} from "../store/store";

export const ApiService = () => {
	const {access_token} = store.getState().userReducer.data;
	return axios.create({
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	})
}