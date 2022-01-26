import {useEffect, useState} from "react";
import {Racers} from "../../types/racers";
import {getAllRacers} from "../../api/racers";
import {prepareTableData} from "./helper";

export const useRacersPage = () => {
	const [data, setData] = useState<Racers.All | null>(null);
	const [tableData, setTableData] = useState<Racers.TableData[]>([])
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