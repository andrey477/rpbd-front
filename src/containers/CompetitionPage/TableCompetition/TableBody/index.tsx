import React, {Dispatch, SetStateAction} from 'react';
import {TableBody as MaterialTableBody} from "@material-ui/core";
import {Racer} from "../../../../types/racer";
import {TableRow} from "../TableRow";
import {VariantTable} from "../../../../constants/variantTable";
import {TableRowList} from "../TableRowList";
import {TableRowTotal} from "../TableRowTotal";
import {Competition as CompetitionType} from "../../../../types/competition";

interface Props {
  racers: Racer.Data[];
  competitionId: string;
  variantTable?: VariantTable;
  setCompetition?: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
}

export const TableBody: React.FC<Props> = ({
  racers,
  competitionId,
  variantTable = VariantTable.STAGE,
  setCompetition,
}) => {
  return (
    <MaterialTableBody>
      {variantTable === VariantTable.STAGE && racers.map(racer => (
        <TableRow racer={racer} competitionId={competitionId}/>
      ))}
      {variantTable === VariantTable.LIST && racers.map(racer => (
        <TableRowList
          racer={racer}
          competitionId={competitionId}
          variantTable={variantTable}
          setCompetition={setCompetition}
        />
      ))}
      {variantTable === VariantTable.TOTAL && racers.map(racer => (
        <TableRowTotal racer={racer}/>
      ))}
    </MaterialTableBody>
  );
}