import {createAsyncThunk} from "@reduxjs/toolkit";
import {Auth} from "../../types/auth";
import {ApiService} from "../../services/ApiService";
import {history} from "../../history";

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