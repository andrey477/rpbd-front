import {TableType} from "../../types/table";
import {Users} from "../../types/users";

export const columnsConfig: TableType.Column<Users.TableData>[] = [
	{
		id: 'name',
		code: 'name',
		title: 'Имя',
	},
	{
		id: 'surname',
		code: 'surname',
		title: 'Фамилия',
	},
	{
		id: 'age',
		code: 'age',
		title: 'Возраст',
	},
	{
		id: 'city',
		code: 'city',
		title: 'Город',
	},
	{
		id: 'email',
		code: 'email',
		title: 'email',
	},
	{
		id: 'team_name',
		code: 'team_name',
		title: 'Название команды',
	},
	{
		id: 'brand',
		code: 'brand',
		title: 'Бренд',
	},
	{
		id: 'model',
		code: 'model',
		title: 'Модель',
	},
	{
		id: 'horsepower',
		code: 'horsepower',
		title: 'Мощность',
	},
];