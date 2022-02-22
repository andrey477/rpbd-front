import React from 'react';
import {TableBody as MaterialTableBody} from "@material-ui/core";
import {Racer} from "../../../../types/racer";
import {TableRow} from "../TableRow";
import {VariantTable} from "../../../../constants/variantTable";
import {TableRowList} from "../TableRowList";
import {TableRowTotal} from "../TableRowTotal";

interface Props {
  racers: Racer.Data[];
  competitionId: string;
  variantTable?: VariantTable;
}

export const TableBody: React.FC<Props> = ({
  racers,
  competitionId,
  variantTable = VariantTable.STAGE,
}) => {
  return (
    <MaterialTableBody>
      {variantTable === VariantTable.STAGE && racers.map(racer => (
        <TableRow racer={racer} competitionId={competitionId}/>
      ))}
      {variantTable === VariantTable.LIST && racers.map(racer => (
        <TableRowList racer={racer} competitionId={competitionId} variantTable={variantTable}/>
      ))}
      {variantTable === VariantTable.TOTAL && racers.map(racer => (
        <TableRowTotal racer={racer}/>
      ))}
    </MaterialTableBody>
  );
}