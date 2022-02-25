import {Competition} from "../../../../types/competition";
import {Status} from "../../../../constants/status";
import {Person} from "../../../../types/person";

interface Form {
	number: string,
	brand: string,
	horsepower: number,
	model: string,
}

export const createBody = (values: Form, id: string, person: Person.Data, attempts: number): Competition.AddRacer => ({
	competitionId: id,
	racer: {
		number: values.number,
		race: {
			attempts,
			rating: {
				stage_1: {
					first: null,
					second: null,
					third: null,
				},
				stage_2: {
					first: null,
					second: null,
					third: null,
				},
				stage_3: {
					first: null,
					second: null,
					third: null,
				}
			},
		},
		person,
		status: Status.SENT,
		vehicle: {
			brand: values.brand,
			model: values.model,
			horsepower: values.horsepower
		}
	}
})