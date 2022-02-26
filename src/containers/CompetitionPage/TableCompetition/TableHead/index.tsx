import React from 'react';
import {Competition} from "../../../../types/competition";
import {TableCell, TableHead as MaterialTableHead, TableRow} from "@material-ui/core";

interface Props {
  columns: Competition.Table.Column[];

}

export const TableHead: React.FC<Props> = ({columns}) => {
  return (
    <MaterialTableHead>
      <TableRow>
        {columns.map(({name}) => (
          <TableCell key={name}>{name}</TableCell>
        ))}
      </TableRow>
    </MaterialTableHead>
  );
}