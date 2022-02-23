import {competitions} from "../../api/competitions";
import {useEffect, useState} from "react";
import {Competition} from "../../types/competition";
import {competitionMock} from "../../mock/competitionMock";

export const useCompetitionPage = () => {
	const [data, setData] = useState<Competition.BodyCompetition[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setData(competitionMock);
		// setLoading(true);
		// competitions()
		// 	.then(response => setData(response ? response.content : []))
		// 	.finally(() => setLoading(false));
	}, []);

	return {
		data,
		setData
	}
}