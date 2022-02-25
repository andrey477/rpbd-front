import {Racer} from "./types/racer";

const getRandomNumber = (max: number): number => {
	return Math.floor(Math.random() * max);
}

export const getRating = (): number[] => {
	return [
		getRandomNumber(10),
		getRandomNumber(10),
		getRandomNumber(10)
	];
}

export const checkInCompetition = (id: string, racers: Racer.Data[]): boolean => {
	return racers.length ? Boolean(racers.find(racer => racer.person.id === id)) : false;
}