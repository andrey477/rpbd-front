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
	const {ratingOneStage, ratingTwoStage, ratingThirdStage} = race;
  return (
		<MaterialTableRow hover>
			<TableCell>
				{fullName(person)}
			</TableCell>
			<TableCell>
				{fullVehicle(vehicle)}
			</TableCell>
			<TableCell>
				{fullRating(ratingOneStage)}
			</TableCell>
			<TableCell>
				{fullRating(ratingTwoStage)}
			</TableCell>
			<TableCell>
				{fullRating(ratingThirdStage)}
			</TableCell>
			<TableCell>
				{totalRating(ratingOneStage, ratingTwoStage, ratingThirdStage)}
			</TableCell>
		</MaterialTableRow>
  );
}