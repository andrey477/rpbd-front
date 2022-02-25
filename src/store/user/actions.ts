import {createAsyncThunk} from "@reduxjs/toolkit";
import {Auth} from "../../types/auth";
import {ApiService} from "../../services/ApiService";
import {history} from "../../history";

export const registration = createAsyncThunk(
	'users/registration',
	async (body: Auth.Registration.Request): Promise<Auth.Login.Response | null> => {
		try {
			const apiService = ApiService();
			const { data } = await apiService.post<Auth.Login.Response>('/api/registration', body);
			return data;
		}
		catch (err) {
			console.error(err);
		}

		return null;
	}
)

export const loginUser = createAsyncThunk(
	'users/loginUser',
	async (body: Auth.Login.Request): Promise<Auth.Login.Response | null> => {
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
);

export const logoutUser = createAsyncThunk(
	'users/logoutUser',
	async (): Promise<void> => {
		try {
			const apiService = ApiService();
			await apiService.post('/api/auth/logout');
		}
		catch (err) {
			console.error(err)
		}
	}
)