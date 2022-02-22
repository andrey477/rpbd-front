import {Person} from "../../types/person";
import {Vehicle} from "../../types/vehicle";

export const fullName = (person: Person.Data): string => {
	return `${person.name} ${person.surname}`
}

export const fullVehicle = (vehicle: Vehicle.Data): string => {
	return `${vehicle.brand} ${vehicle.model}\n${vehicle.horsepower} л/с`
}

export const fullRating = (rating: number[]): string => {
	return ``
}

export const totalRating = (stage_1: number[], stage_2: number[], stage_3: number[]) => {
	const sum1 = stage_1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
	const sum2 = stage_2.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
	const sum3 = stage_3.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
	return sum1 + sum2 + sum3;
}