import {Competition} from "../types/competition";
import {Stage} from "../constants/stage";

export const competitionMock: Competition.BodyCompetition[] = [
	{
		id: 'jfsdnjfnsjdfnjnfsjn',
		name: 'Тестовое соревнование',
		attempts: 2,
		isOpen: true,
		race_1: [],
		race_2: [],
		race_3: [],
		racers: [],
		stage: Stage.RECORD,
		total: [],
	}
]