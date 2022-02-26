import React, {Dispatch, SetStateAction} from 'react';
import {TableCell, TableRow as MaterialTableRow} from "@material-ui/core";
import {fullName, fullRating, fullVehicle} from "../../helper";
import {Racer} from "../../../../types/racer";
import {Actions} from "../../Actions";
import {VariantTable} from "../../../../constants/variantTable";
import {Stage as StageVariant, Stage} from "../../../../constants/stage";
import {Competition as CompetitionType} from "../../../../types/competition";

interface Props {
	racer: Racer.Data;
	competitionId: string;
	variantTable?: VariantTable;
	stage: Stage;
	currentStage?: StageVariant;
	setCompetition?: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
}

export const TableRow: React.FC<Props> = ({
	racer,
	competitionId,
	variantTable = VariantTable.STAGE,
	stage,
	currentStage,
	setCompetition,
}) => {
	const {person, vehicle, race} = racer;
	let attempts: number | undefined = 2;
	switch (stage) {
		case Stage.stage_1:
			attempts = race.ratingOneStage.attempts;
			break;
		case Stage.stage_2:
			attempts = race.ratingTwoStage.attempts;
			break;
		case Stage.stage_3:
			attempts = race.ratingThirdStage.attempts;
			break;
	}
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
					setCompetition={setCompetition}
				/>
			</TableCell>
		</MaterialTableRow>
  );
}