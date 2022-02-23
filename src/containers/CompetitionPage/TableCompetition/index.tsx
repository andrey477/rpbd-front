import React, {Dispatch, SetStateAction} from 'react';
import {Table} from "@material-ui/core";
import {TableHead} from "./TableHead";
import {Competition as CompetitionType, Competition} from "../../../types/competition";
import {VariantTable} from "../../../constants/variantTable";
import {TableBody} from "./TableBody";

interface Props {
	 competition: Competition.BodyCompetition;
	 columns: Competition.Table.Column[];
	 variantTable?: VariantTable;
	 setCompetition?: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
}

 export const TableCompetition: React.FC<Props> = ({
	variantTable= VariantTable.STAGE,
	competition,
	columns,
	setCompetition
}) => {
   return (
		 <Table>
			 <TableHead columns={columns}/>
			 <TableBody
				 racers={competition.racers}
				 competitionId={competition.id}
				 variantTable={variantTable}
				 setCompetition={setCompetition}
			 />
		 </Table>
   );
 }