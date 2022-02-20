import {Person} from "./person";
import {Vehicle} from "./vehicle";

export declare namespace Racer {
	interface Data {
		person: Person.Data;
		vehicle: Vehicle.Data;
		approved: boolean; // статус заявки. При старте этапа квалификации участники с approved = false удаляются
		number: number; // номер участника
	}
}