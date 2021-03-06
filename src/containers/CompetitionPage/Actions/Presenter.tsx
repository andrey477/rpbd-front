import React from 'react';
import block from "bem-cn";
import {Props} from "./index";
import {Roles} from "../../../constants/roles";
import {Button} from "../../../components/Button";
import {VariantTable} from "../../../constants/variantTable";
import {useStyle} from "./useStyle";
import {Status} from "../../../constants/status";
import {Competition} from "../../../types/competition";
import {getRating} from "../../../utils";
import {fetchRace, fetchStatus} from "../../../api/competitions";
import {Stage} from "../../../constants/stage";
import './style.scss';

const bem = block('action');

export const Presenter: React.FC<Props> = ({
	role	,
	attempts,
	competitionId,
	personId,
	variantTable = VariantTable.STAGE,
	setCompetition,
	stage,
	currentStage,
	status
}) => {
	const isRecord = variantTable === VariantTable.RECORD;
	const classes = useStyle();

	const handleRace = async () => {
		const body: Competition.FetchRace = {
			competitionId,
			personId,
			rating: getRating()
		};
		console.log(body);
		const response = await fetchRace(body);
		console.log(response)
		console.log(setCompetition)
		if (response.length && setCompetition) {
			setCompetition(response);
		}
	}

	const handleStatus = async (event: React.MouseEvent<HTMLButtonElement>) => {
		const body: Competition.FetchStatus = {
			competitionId,
			personId,
			status: event.currentTarget.value as Status
		};
		const response = await fetchStatus(body);
		console.log('---fetchStatusResponse')
		console.log(response);
		console.log(setCompetition)
		if (response.length && setCompetition) {
			setCompetition(response);
		}
	}
	return (
		<div className={bem()}>
			{role === Roles.ADMIN && !isRecord && currentStage === stage &&
				<div className={bem('actions')}>
					<Button
						disabled={!attempts}
						onClick={handleRace}
					>Заезд</Button>
					<span className={bem('attempts')}>Количество попыток: {attempts ?? 0}</span>
				</div>
			}
			{role === Roles.ADMIN && isRecord && stage === Stage.RECORD &&
				<div className={bem('buttons')}>
					<Button
						classes={classes}
						value={Status.APPROVED}
						onClick={handleStatus}
						disabled={status !== Status.SENT}
					>Принять</Button>
					<Button
						classes={classes}
						value={Status.REJECTED}
						onClick={handleStatus}
						disabled={status !== Status.SENT}
					>Отклонить</Button>
				</div>
			}
		</div>
	);
}