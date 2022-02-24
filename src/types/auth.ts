import {Roles} from "../constants/roles";

export declare namespace Auth {
	namespace Login {
		interface Request {
			username: string;
			password: string;
		}

		interface Response {
			user: {
				id: string;
				username: string;
				password: string;
				role: Roles;
				person: {
					id: string;
					name: string;
					surname: string;
					city: string;
					email: string;
					age: number;
				}
			},
			access_token: string;
			refresh_token: string;
			token_type: string;
			expires_in: number;
		}
	}

	namespace Registration {
		interface Request {
			username: string;
			password: string;
			person: {
				name: string;
				surname: string;
				city: string;
				email: string;
				age: string;
			}
		}

		interface Form {
			username: string;
			password: string;
			name: string;
			surname: string;
			city: string;
			email: string;
			age: string;
		}
	}
}