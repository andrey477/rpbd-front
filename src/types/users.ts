export declare namespace Users {
	interface UserData {
		id: string;
		person: {
			id: string;
			name: string;
			surname: string;
			city: string;
			email: string;
			age: number;
		},
		team: {
			id: string;
			name: string;
			city: string;
		},
		vehicle: {
			id: string;
			brand: string;
			model: string;
			horsepower: number;
		}
	}

	interface All {
		content: UserData[];
		totalElements: number;
		page: number;
	}

	interface TableData {
		id: string;
		name: string;
		surname: string;
		city: string;
		email: string;
		age: number;
		brand: string;
		model: string;
		horsepower: number;
		team_name: string;
	}
}