import {Auth} from "../types/auth";
import {ApiService} from "../services/ApiService";

export const login = async (body: Auth.Login.Request): Promise<Auth.Login.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post('/api/auth/login', body);
		return data;
	}
	catch (err) {
		console.error(err);
	}

	return null;
}