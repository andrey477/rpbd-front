import {Racers} from "../../types/racers";

export const prepareTableData = (data: Racers.All | null): Racers.TableData[] => {
	const tableData: Racers.TableData[] = [];
	data && data.content.forEach(({person, team, vehicle}) => {
		const item: Racers.TableData = {
			id: person.id,
			age: person.age,
			brand: vehicle.brand,
			city: person.city,
			email: person.email,
			horsepower: vehicle.horsepower,
			model: vehicle.model,
			name: person.name,
			surname: person.surname,
			team_name: team.name,
		};
		tableData.push(item);
	});
	return tableData;
}