import {Competition} from "../types/competition";
import {Stage} from "../constants/stage";
import {Status} from "../constants/status";

export const competitionMock: Competition.BodyCompetition[] = [
	{
		id: 'jfsdnjfnsjdfnjnfsjn',
		name: 'Тестовое соревнование',
		attempts: 2,
		isOpen: true,
		race_1: [],
		race_2: [],
		race_3: [],
		racers: [
			{
				number: '17',
				person: {
					id: "419439f1-8a70-45f8-adf7-e9194c8ab52c",
					name: "Иван",
					surname: "Иванов",
					city: "Рязань",
					email: "iivanov@mail.com",
					age: 31,
				},
				status: Status.APPROVED,
				race: {
					attempts: 2,
					rating: {
						stage_1: [1, 2, 3],
						stage_2: [1, 2, 3],
						stage_3: [1, 2, 3],
					}
				},
				vehicle: {
					id: 'gfgfd',
					horsepower: 2000,
					brand: 'bmw',
					model: '5 series'
				}
			},
			{
				number: '22',
				person: {
					id: "419439f1-8a70-45f8-adf7-e9194c8ab52c",
					name: "Иван",
					surname: "Иванов",
					city: "Рязань",
					email: "iivanov@mail.com",
					age: 31,
				},
				status: Status.REJECTED,
				race: {
					attempts: 2,
					rating: {
						stage_1: [1, 2, 3],
						stage_2: [1, 2, 3],
						stage_3: [1, 2, 3],
					}
				},
				vehicle: {
					id: 'gfgfd',
					horsepower: 2000,
					brand: 'bmw',
					model: '5 series'
				}
			},
			{
				number: '23',
				person: {
					id: "419439f1-8a70-45f8-adf7-e9194c8ab52c",
					name: "Иван",
					surname: "Иванов",
					city: "Рязань",
					email: "iivanov@mail.com",
					age: 31,
				},
				status: Status.SENT,
				race: {
					attempts: 2,
					rating: {
						stage_1: [1, 2, 3],
						stage_2: [1, 2, 3],
						stage_3: [1, 2, 3],
					}
				},
				vehicle: {
					id: 'gfgfd',
					horsepower: 2000,
					brand: 'bmw',
					model: '5 series'
				}
			},
		],
		stage: Stage.RECORD,
		total: [],
	},
	{
		id: 'jfsdnjfnsjdfnjnfsjn',
		name: 'Тестовое соревнование',
		attempts: 2,
		isOpen: true,
		race_1: [],
		race_2: [],
		race_3: [],
		racers: [
			{
				number: '17',
				person: {
					id: "419439f1-8a70-45f8-adf7-e9194c8ab52c",
					name: "Иван",
					surname: "Иванов",
					city: "Рязань",
					email: "iivanov@mail.com",
					age: 31,
				},
				status: Status.APPROVED,
				race: {
					attempts: 2,
					rating: {
						stage_1: [1, 2, 3],
						stage_2: [1, 2, 3],
						stage_3: [1, 2, 3],
					}
				},
				vehicle: {
					id: 'gfgfd',
					horsepower: 2000,
					brand: 'bmw',
					model: '5 series'
				}
			},
			{
				number: '22',
				person: {
					id: "419439f1-8a70-45f8-adf7-e9194c8ab52c",
					name: "Иван",
					surname: "Иванов",
					city: "Рязань",
					email: "iivanov@mail.com",
					age: 31,
				},
				status: Status.REJECTED,
				race: {
					attempts: 2,
					rating: {
						stage_1: [1, 2, 3],
						stage_2: [],
						stage_3: [],
					}
				},
				vehicle: {
					id: 'gfgfd',
					horsepower: 2000,
					brand: 'bmw',
					model: '5 series'
				}
			},
			{
				number: '23',
				person: {
					id: "419439f1-8a70-45f8-adf7-e9194c8ab52c",
					name: "Иван",
					surname: "Иванов",
					city: "Рязань",
					email: "iivanov@mail.com",
					age: 31,
				},
				status: Status.SENT,
				race: {
					attempts: 2,
					rating: {
						stage_1: [1, 2, 3],
						stage_2: [1, 2, 3],
						stage_3: [],
					}
				},
				vehicle: {
					id: 'gfgfd',
					horsepower: 2000,
					brand: 'bmw',
					model: '5 series'
				}
			},
		],
		stage: Stage.stage_2,
		total: [],
	}
]