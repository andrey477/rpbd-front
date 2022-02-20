import {Competition} from "../types/competition";
import {ApiService} from "../services/ApiService";

export const createCompetition = async (body: Competition.Request): Promise<void> => {
	try {
		const apiService = ApiService();
		await apiService.post('/competition/create', body);
	}
	catch (err) {
		console.error(err);
	}
}