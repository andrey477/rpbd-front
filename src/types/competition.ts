import {Racer} from "./racer";
import {Stage} from "../constants/stage";
import {Race} from "./race";
import {Total} from "./total";
import {Status} from "../constants/status";

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
		race_1: Race.Data[]; // информация о заездах участников 1 этапа
		race_2: Race.Data[]; // информация о заездах участников 1 этапа
		race_3: Race.Data[]; // информация о заездах участников 1 этапа
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
		racerId: string;
		competitionId: string;
		rating: number[];
	}

	interface FetchStatus {
		racerId: string;
		competitionId: string;
		status: Status;
	}

	interface NextStage {
		competitionId: string;
	}
}