import React, {Dispatch, SetStateAction} from 'react';
import {Table} from "@material-ui/core";
import {TableHead} from "./TableHead";
import {Competition as CompetitionType, Competition} from "../../../types/competition";
import {VariantTable} from "../../../constants/variantTable";
import {TableBody} from "./TableBody";
import {Stage as StageVariant} from "../../../constants/stage";
import block from "bem-cn";

interface Props {
	 competition: Competition.BodyCompetition;
	 columns: Competition.Table.Column[];
	 variantTable?: VariantTable;
	 setCompetition?: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>;
	 currentStage?: StageVariant;
}

const bem = block('table-competition');

export const TableCompetition: React.FC<Props> = ({
	variantTable= VariantTable.STAGE,
	competition,
	columns,
	setCompetition,
	currentStage
}) => {
	console.log('!!!')
	console.log(competition.racers.length);
   return (
		 <Table>
			 <TableHead columns={columns}/>
			 {!competition.racers.length ? <div className={bem('empty')}/> :
				 <TableBody
					 racers={competition.racers}
					 competitionId={competition.id}
					 variantTable={variantTable}
					 setCompetition={setCompetition}
					 stage={competition.stage}
					 currentStage={currentStage}
				 />
			 }
		 </Table>
   );
 }