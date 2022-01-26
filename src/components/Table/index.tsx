import React from 'react';
import block from "bem-cn";
import {TableType} from "../../types/table";

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
		<table className="highlight">
			<thead>
			<tr>
				{columnsConfig.map(({title}) => (
					<th>{title}</th>
				))}
			</tr>
			</thead>
			<tbody>
			{data.map(item => (
				<tr>
					{columnsConfig.map(({code}) => (
						<td>{item[code]}</td>
					))}
				</tr>
			))}
			</tbody>
		</table>
  );
}