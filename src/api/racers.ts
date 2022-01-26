import {Racers} from "../types/racers";
import {ApiService} from "../services/ApiService";

export const getAllRacers = async (): Promise<Racers.All | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.get('/api/racers?page=0&pageSize=10&sortProperty=id&sortOrder=ASC');
		return data;
	}
	catch (err) {
		console.error(err);
	}

	return null
}