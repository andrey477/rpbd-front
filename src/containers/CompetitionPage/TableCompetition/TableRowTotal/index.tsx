import React from 'react';
import {TableCell, TableRow as MaterialTableRow} from "@material-ui/core";
import {fullName, fullRating, fullVehicle, totalRating} from "../../helper";
import {Racer} from "../../../../types/racer";

interface Props {
	racer: Racer.Data;
}

export const TableRowTotal: React.FC<Props> = ({
	racer,
}) => {
	const {person, vehicle, race} = racer;
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
				{totalRating(stage_1, stage_2, stage_3)}
			</TableCell>
		</MaterialTableRow>
  );
}