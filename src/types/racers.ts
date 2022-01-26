export declare namespace Racers {
	interface RacerData {
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
		content: RacerData[];
		totalElements: number;
		page: number;
	}
}