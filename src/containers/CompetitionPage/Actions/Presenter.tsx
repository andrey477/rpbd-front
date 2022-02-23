import React from 'react';
import block from "bem-cn";
import {Props} from "./index";
import {Roles} from "../../../constants/roles";
import {Button} from "../../../components/Button";
import {VariantTable} from "../../../constants/variantTable";
import './style.scss';
import {useStyle} from "./useStyle";
import {Status} from "../../../constants/status";
import {Competition} from "../../../types/competition";
import {getRating} from "../../../utils";
import {fetchRace, fetchStatus} from "../../../api/competitions";
import {competitionMock1} from "../../../mock/testMock";
import {Stage} from "../../../constants/stage";

const bem = block('action');

export const Presenter: React.FC<Props> = ({
	role	,
	attempts,
	competitionId,
	racerId,
	variantTable = VariantTable.STAGE,
	setCompetition,
	stage
}) => {
	const isList = variantTable === VariantTable.LIST;
	const classes = useStyle();

	const handleRace = async () => {
		const body: Competition.FetchRace = {
			competitionId,
			racerId,
			rating: getRating()
		};
		console.log(body);
		const response = await fetchRace(body);
	}

	const handleStatus = async (event: React.MouseEvent<HTMLButtonElement>) => {
		const body: Competition.FetchStatus = {
			competitionId,
			racerId,
			status: event.currentTarget.value as Status
		};
		console.log(body);
		const response = await fetchStatus(body);
		if (setCompetition) {
			setCompetition(competitionMock1);
		}
		// if (response && setCompetition) {
		// 	setCompetition(competitionMock1);
		// }
	}

	return (
		<div className={bem()}>
			{role === Roles.ADMIN && !isList &&
				<div className={bem('actions')}>
					<Button
						disabled={!attempts}
						onClick={handleRace}
					>Заезд</Button>
					<span className={bem('attempts')}>Количество попыток: {attempts}</span>
				</div>
			}
			{role === Roles.ADMIN && isList && stage === Stage.RECORD &&
				<div className={bem('buttons')}>
					<Button
						classes={classes}
						value={Status.APPROVED}
						onClick={handleStatus}
					>Принять</Button>
					<Button
						classes={classes}
						value={Status.REJECTED}
						onClick={handleStatus}
					>Отклонить</Button>
				</div>
			}
		</div>
	);
}