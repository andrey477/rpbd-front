import React from 'react';
import {Racer} from "../../../../types/racer";
import {TableCell, TableRow as MaterialTableRow} from "@material-ui/core";
import {fullName, fullVehicle} from "../../helper";
import {Actions} from "../../Actions";
import {VariantTable} from "../../../../constants/variantTable";
import {Badge} from "../../../../components/Badge";

interface Props {
  racer: Racer.Data;
  competitionId: string;
  variantTable?: VariantTable;
}

export const TableRowList: React.FC<Props> = ({
  racer,
  variantTable = VariantTable.STAGE,
  competitionId
}) => {
  const {person, vehicle, race, status} = racer;
  const {attempts} = race;
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
        />
      </TableCell>
    </MaterialTableRow>
  );
}