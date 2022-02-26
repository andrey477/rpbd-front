import {Racer} from "./racer";
import {Stage} from "../constants/stage";
import {Total} from "./total";
import {Status} from "../constants/status";
import {Race} from "./race";

export declare namespace Competition {
	interface Request {
		name: string;
		attempts: number;
	}

	interface BodyCompetition {
		id: string;
		name: string;
		racers: Racer.Data[];
		stage: Stage;
		isOpen: boolean;
		total: Total.Data[]; // итоги участников
		attempts: number; // сколько позволено попыток в данном соревновании
	}

	interface Response {
		content: BodyCompetition[];
	}

	namespace Table {
		interface Column {
			name: string;
			code: string;
			isSort: boolean;
		}
	}

	interface AddRacer {
		competitionId: string;
		racer: Racer.Data;
	}

	interface FetchRace {
		personId: string;
		competitionId: string;
		rating: Race.Stage;
	}

	interface FetchStatus {
		personId: string;
		competitionId: string;
		status: Status;
	}

	interface NextStage {
		competitionId: string;
	}
}