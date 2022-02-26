import React, {Dispatch, SetStateAction} from 'react';
import {Table, TableBody as MaterialTableBody, TableCell, TableRow} from "@material-ui/core";
import {TableHead} from "./TableHead";
import {Competition as CompetitionType, Competition} from "../../../types/competition";
import {VariantTable} from "../../../constants/variantTable";
import {TableBody} from "./TableBody";
import {Stage as StageVariant} from "../../../constants/stage";
import block from "bem-cn";
import './style.scss';

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
	const text = 'Список участников пуст'
	const colSpan = variantTable === VariantTable.RECORD ? 4 : 6
   return (
		 <Table>
			 <TableHead columns={columns}/>
			 {!competition.racers.length ?
				 <MaterialTableBody>
					 <TableRow>
						 <TableCell colSpan={colSpan} align={"center"}>{text}</TableCell>
					 </TableRow>
				 </MaterialTableBody>
				 :
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