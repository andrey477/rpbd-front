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

export const competitions = async (): Promise<Competition.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.get<Competition.Response>('/competitions');
		return data;
	}
	catch (err) {
		console.error(err)
	}

	return null;
}

export const addRacer = async (body: Competition.AddRacer): Promise<void> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post('/competition/add-racer', body);
	}
	catch (err) {
		console.error(err)
	}
}

export const fetchRace = async (body: Competition.FetchRace): Promise<Competition.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.Response>('/competitions/race', body);
		return data;
	}
	catch (err) {
		console.error(err);
	}
	return null;
}

export const fetchStatus = async (body: Competition.FetchStatus): Promise<Competition.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.Response>('/competitions/status', body);
		return data;
	}
	catch (err) {
		console.log(err);
	}
	return null;
}