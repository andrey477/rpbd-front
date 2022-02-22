import React from 'react';
import {Table} from "@material-ui/core";
import {TableHead} from "./TableHead";
import {Competition} from "../../../types/competition";
import {VariantTable} from "../../../constants/variantTable";
import {TableBody} from "./TableBody";

interface Props {
	 competition: Competition.BodyCompetition;
	 columns: Competition.Table.Column[];
	 variantTable?: VariantTable;
 }

 export const TableCompetition: React.FC<Props> = ({
	variantTable= VariantTable.STAGE,
	competition,
	columns
}) => {
   return (
		 <Table>
			 <TableHead columns={columns}/>
			 <TableBody
				 racers={competition.racers}
				 competitionId={competition.id}
				 variantTable={variantTable}
			 />
		 </Table>
   );
 }