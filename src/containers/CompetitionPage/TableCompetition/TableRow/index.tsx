import React from 'react';
import {TableCell, TableRow as MaterialTableRow} from "@material-ui/core";
import {fullName, fullRating, fullVehicle} from "../../helper";
import {Racer} from "../../../../types/racer";
import {Actions} from "../../Actions";
import {VariantTable} from "../../../../constants/variantTable";

interface Props {
	racer: Racer.Data;
	competitionId: string;
	variantTable?: VariantTable;
}

export const TableRow: React.FC<Props> = ({
	racer,
	competitionId,
	variantTable = VariantTable.STAGE
}) => {
	const {person, vehicle, race} = racer;
	const {attempts} = race;
	const {id} = person;
	const {stage_1, stage_2, stage_3} = race.rating;
  return (
    <MaterialTableRow>
			<TableCell>
				{fullName(person)}
			</TableCell>
			<TableCell>
				{fullVehicle(vehicle)}
			</TableCell>
			<TableCell>
				{fullRating(stage_1)}
			</TableCell>
			<TableCell>
				{fullRating(stage_2)}
			</TableCell>
			<TableCell>
				{fullRating(stage_3)}
			</TableCell>
			<TableCell>
				<Actions
					attempts={attempts}
					competitionId={competitionId}
					racerId={id}
					variantTable={variantTable}
				/>
			</TableCell>
		</MaterialTableRow>
  );
}