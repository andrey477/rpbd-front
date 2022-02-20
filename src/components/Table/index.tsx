import React from 'react';
import block from "bem-cn";
import {TableType} from "../../types/table";
import {Table as MaterialTable} from "@material-ui/core";
import {TableHead} from "./TableHead";
import {TableBody} from "./TableBody/TableBody";

interface Props<T> {
	data: T[];
	columnsConfig: TableType.Column<T>[];
}

const bem = block('table');

export const Table = <T extends Object = {}>({
	data,
	columnsConfig
}: React.PropsWithChildren<Props<T>>) => {
  return (
		<MaterialTable>
			<TableHead columnsConfig={columnsConfig}/>
			<TableBody data={data} columnsConfig={columnsConfig}/>
		</MaterialTable>
  );
}