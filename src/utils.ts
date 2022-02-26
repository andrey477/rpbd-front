import {Racer} from "./types/racer";
import {Race} from "./types/race";

const getRandomNumber = (max: number): number => {
	return Math.floor(Math.random() * max);
}

export const getRating = (): Race.Stage => {
	return {
		first: getRandomNumber(10),
		second: getRandomNumber(10),
		third: getRandomNumber(10)
	}
}

export const checkInCompetition = (id: string, racers: Racer.Data[]): boolean => {
	return racers.length ? Boolean(racers.find(racer => racer.person.id === id)) : false;
}