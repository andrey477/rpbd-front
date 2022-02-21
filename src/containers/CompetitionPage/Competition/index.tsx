import React from 'react';
import {Stage} from "../../../constants/stage";
import {Record} from "./Record";
import {Competition as CompetitionType} from "../../../types/competition";

interface Props {
	competition: CompetitionType.BodyCompetition;
}

export const Competition: React.FC<Props> = ({competition}) => {
	const {
		stage,
		attempts,
		name,
		id
	} = competition;
  return (
    <div>
			{stage === Stage.RECORD &&
				<Record
					title={name}
					attempts={attempts}
					competitionId={id}
				/>
			}
		</div>
  );
}