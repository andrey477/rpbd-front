import {useEffect, useState} from "react";
import {Users} from "../../types/users";
import {getAllRacers} from "../../api/racers";
import {prepareTableData} from "./helper";

export const useRacersPage = () => {
	const [data, setData] = useState<Users.All | null>(null);
	const [tableData, setTableData] = useState<Users.TableData[]>([])
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		getAllRacers()
			.then((response) => {
				setData(response);
				setTableData(prepareTableData(response))
			})
			.finally(() => setLoading(false));
	}, []);

	return {
		data,
		loading,
		tableData,
	};
}