import React from 'react';
import block from "bem-cn";
import {Competition} from "../../../../types/competition";
import {columns} from "./columns";
import {TableCompetition} from "../../TableCompetition";

interface Props {
	competition: Competition.BodyCompetition;
}

const bem = block('stage');

export const Stage: React.FC<Props> = ({
	competition,
}) => {
  return (
    <div className={bem()}>
			<TableCompetition
				competition={competition}
				columns={columns}
			/>
		</div>
  );
}