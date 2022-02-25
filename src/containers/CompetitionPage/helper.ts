import {Person} from "../../types/person";
import {Vehicle} from "../../types/vehicle";
import {Race} from "../../types/race";

export const fullName = (person: Person.Data): string => {
	return `${person.name} ${person.surname}`
}

export const fullVehicle = (vehicle: Vehicle.Data): string => {
	return `${vehicle.brand} ${vehicle.model}\n${vehicle.horsepower} л/с`
}

export const fullRating = (rating: Race.Stage): string => {
	const {first, second, third} = rating;
	const isEmpty = !first || !second || !third;
	return isEmpty ? '-' : `${first} - ${second} - ${third}`;
}

export const totalRating = (stage_1: Race.Stage, stage_2: Race.Stage, stage_3: Race.Stage) => {
	const sum1 = Number(stage_1.first) + Number(stage_1.second) + Number(stage_1.third);
	const sum2 = Number(stage_2.first) + Number(stage_2.second) + Number(stage_2.third);
	const sum3 = Number(stage_3.first) + Number(stage_3.second) + Number(stage_3.third);
	return sum1 + sum2 + sum3;
}