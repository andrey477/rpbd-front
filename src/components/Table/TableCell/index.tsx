import block from "bem-cn";
import React, {ReactNode} from "react";
import {defaultCustomRender} from "../helper";
import {TableCell as MaterialTableCell} from "@material-ui/core";

interface Props<T> {
	customRender?: (item: string, parentObject?: T) => ReactNode;
	item: string;
	parentObject: T;
}

const bem = block('table-cell');

export const TableCell = <T extends Object = {}>({
	customRender = defaultCustomRender,
	parentObject,
	item
}: React.PropsWithChildren<Props<T>>) => {
	return (
		<MaterialTableCell>
			{customRender(item, parentObject)}
		</MaterialTableCell>
	);
}