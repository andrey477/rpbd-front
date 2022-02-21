import {Person} from "./person";
import {Vehicle} from "./vehicle";
import {Race} from "./race";
import {Status} from "../constants/status";

export declare namespace Racer {
	interface Data {
		person: Person.Data;
		vehicle: Vehicle.Data;
		status: Status;
		number: string; // номер участника
		race: Race.Data;
	}
}