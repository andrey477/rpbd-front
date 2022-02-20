import {Users} from "../../types/users";

export const prepareTableData = (data: Users.All | null): Users.TableData[] => {
	const tableData: Users.TableData[] = [];
	data && data.content.forEach(({person, team, vehicle}) => {
		const item: Users.TableData = {
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