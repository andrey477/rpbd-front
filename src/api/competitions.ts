import {Competition} from "../types/competition";
import {ApiService} from "../services/ApiService";

export const createCompetition = async (body: Competition.Request): Promise<Competition.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.Response>('/competition/create', body);
		return data;
	}
	catch (err) {
		console.error(err);
	}

	return null;
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

export const addRacer = async (body: Competition.AddRacer): Promise<Competition.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.Response>('/competition/add-racer', body);
		return data;
	}
	catch (err) {
		console.error(err)
	}

	return null;
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

export const nextStage = async (body: Competition.NextStage): Promise<Competition.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.Response>('/competitions/next', body);
		return data;
	}
	catch (err) {
		console.error(err);
	}

	return null;
}