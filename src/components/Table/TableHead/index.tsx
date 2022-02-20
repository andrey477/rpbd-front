import React from 'react';
import {TableCell, TableHead as MaterialTableHead, TableRow} from "@material-ui/core";
import {TableType} from "../../../types/table";
import {columnsConfig} from "../../RacersPage/columnsConfig";

interface Props<T> {
  columnsConfig: TableType.Column<T>[];
}

export const TableHead = <T extends Object = {}>({

}: React.PropsWithChildren<Props<T>>) => {
  return (
    <MaterialTableHead>
      <TableRow>
        {columnsConfig.map(({title}) => (
          <TableCell>{title}</TableCell>
        ))}
      </TableRow>
    </MaterialTableHead>
  );
}