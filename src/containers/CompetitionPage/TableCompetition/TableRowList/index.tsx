import React, {Dispatch, SetStateAction} from 'react';
import {Racer} from "../../../../types/racer";
import {TableCell, TableRow as MaterialTableRow} from "@material-ui/core";
import {fullName, fullVehicle} from "../../helper";
import {Actions} from "../../Actions";
import {VariantTable} from "../../../../constants/variantTable";
import {Badge} from "../../../../components/Badge";
import {Competition as CompetitionType} from "../../../../types/competition";
import {Stage} from "../../../../constants/stage";

interface Props {
  racer: Racer.Data;
  competitionId: string;
  variantTable?: VariantTable;
  setCompetition?: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
  stage: Stage;
}

export const TableRowList: React.FC<Props> = ({
  racer,
  variantTable = VariantTable.STAGE,
  competitionId,
  setCompetition,
  stage,
}) => {
  const {person, vehicle, race, status} = racer;
  const attempts = !!race ? race.attempts : 2;
  const {id} = person;
  return (
    <MaterialTableRow>
      <TableCell>
        {fullName(person)}
      </TableCell>
      <TableCell>
        {fullVehicle(vehicle)}
      </TableCell>
      <TableCell>
	      <Badge status={status}/>
      </TableCell>
      <TableCell>
        <Actions
          attempts={attempts}
          competitionId={competitionId}
          racerId={id}
          variantTable={variantTable}
          setCompetition={setCompetition}
          stage={stage}
        />
      </TableCell>
    </MaterialTableRow>
  );
}