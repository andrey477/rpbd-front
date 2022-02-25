import {Competition} from "../types/competition";
import {ApiService} from "../services/ApiService";

export const createCompetition = async (body: Competition.Request): Promise<Competition.BodyCompetition[]> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.BodyCompetition[]>('/api/competition/create', body);

		return data.map(item => ({
			id: item.id,
			attempts: item.attempts,
			racers: item.racers ? item.racers : [],
			stage: item.stage,
			name: item.name,
			total: item.total ? item.total : [],
			isOpen: item.isOpen,
		}));
	}
	catch (err) {
		console.error(err);
	}

	return [];
}

export const competitions = async (): Promise<Competition.BodyCompetition[]> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.get<Competition.BodyCompetition[]>('/api/competitions');

		return data.map(item => ({
			id: item.id,
			attempts: item.attempts,
			racers: item.racers ? item.racers : [],
			stage: item.stage,
			name: item.name,
			total: item.total ? item.total : [],
			isOpen: item.isOpen,
		}));
	}
	catch (err) {
		console.error(err)
	}

	return [];
}

export const addRacer = async (body: Competition.AddRacer): Promise<Competition.BodyCompetition[]> => {
	try {
		const {race, ...rest} = body.racer;
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.BodyCompetition[]>('/api/competition/add-racer', body, {
			params: {
				competitionId: body.competitionId
			}
		});

		return data.map(item => ({
			id: item.id,
			attempts: item.attempts,
			racers: item.racers ? item.racers : [],
			stage: item.stage,
			name: item.name,
			total: item.total ? item.total : [],
			isOpen: item.isOpen,
		}));
	}
	catch (err) {
		console.error(err)
	}

	return [];
}

export const fetchRace = async (body: Competition.FetchRace): Promise<Competition.Response | null> => {
	try {
		const apiService = ApiService();
		const { data } = await apiService.post<Competition.Response>('/api/competitions/race', body);
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
		const { data } = await apiService.post<Competition.Response>('/api/competitions/status', body);
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
		const { data } = await apiService.post<Competition.Response>('/api/competitions/next', body);
		return data;
	}
	catch (err) {
		console.error(err);
	}

	return null;
}