import React from 'react';
import block from "bem-cn";
import {Competition} from "../../../../types/competition";
import {columns} from "./columns";
import {TableCompetition} from "../../TableCompetition";
import {Stage as StageVariant} from "../../../../constants/stage";

interface Props {
	competition: Competition.BodyCompetition;
	currentStage: StageVariant;
}

const bem = block('stage');

export const Stage: React.FC<Props> = ({
	competition,
	currentStage
}) => {
  return (
    <div className={bem()}>
			<TableCompetition
				competition={competition}
				columns={columns}
				currentStage={currentStage}
			/>
		</div>
  );
}