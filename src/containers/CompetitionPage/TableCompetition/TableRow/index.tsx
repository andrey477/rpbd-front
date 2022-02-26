import React from 'react';
import {TableCell, TableRow as MaterialTableRow} from "@material-ui/core";
import {fullName, fullRating, fullVehicle} from "../../helper";
import {Racer} from "../../../../types/racer";
import {Actions} from "../../Actions";
import {VariantTable} from "../../../../constants/variantTable";
import {Stage as StageVariant, Stage} from "../../../../constants/stage";

interface Props {
	racer: Racer.Data;
	competitionId: string;
	variantTable?: VariantTable;
	stage: Stage;
	currentStage?: StageVariant;
}

export const TableRow: React.FC<Props> = ({
	racer,
	competitionId,
	variantTable = VariantTable.STAGE,
	stage,
	currentStage,
}) => {
	const {person, vehicle, race} = racer;
	const {attempts} = race;
	const {id} = person;
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
				<Actions
					attempts={attempts}
					competitionId={competitionId}
					personId={id}
					variantTable={variantTable}
					stage={stage}
					currentStage={currentStage}
				/>
			</TableCell>
		</MaterialTableRow>
  );
}