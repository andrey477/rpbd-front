import React, {Dispatch, SetStateAction} from 'react';
import block from "bem-cn";
import {Competition as CompetitionType, Competition} from "../../../../types/competition";
import {columns} from "./columns";
import {TableCompetition} from "../../TableCompetition";
import {Stage as StageVariant} from "../../../../constants/stage";

interface Props {
	competition: Competition.BodyCompetition;
	currentStage: StageVariant;
	setCompetition: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
}

const bem = block('stage');

export const Stage: React.FC<Props> = ({
	competition,
	currentStage,
	setCompetition
}) => {
  return (
    <div className={bem()}>
			<TableCompetition
				competition={competition}
				columns={columns}
				currentStage={currentStage}
				setCompetition={setCompetition}
			/>
		</div>
  );
}