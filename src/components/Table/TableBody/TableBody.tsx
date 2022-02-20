import {TableType} from "../../../types/table";
import block from "bem-cn";
import React from "react";
import {TableBody as MaterialTableBody, TableRow} from "@material-ui/core";
import {TableCell} from "../TableCell";


interface Props<T> {
	data: T[];
	columnsConfig: TableType.Column<T>[];
}

const bem = block('table-body');

export const TableBody = <T extends Object = {}>({
	data,
	columnsConfig
}: React.PropsWithChildren<Props<T>>) => {
	return (
		<MaterialTableBody>
			{data.map(item => (
				<TableRow>
					{columnsConfig.map(({code, customRender}) => (
						<TableCell item={String(item[code])} parentObject={item}/>
					))}
				</TableRow>
			))}
		</MaterialTableBody>
	);
}