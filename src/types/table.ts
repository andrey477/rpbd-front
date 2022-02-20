import React, {ReactNode} from "react";

export declare namespace TableType {
	interface Column<T> {
		id: string;
		code: keyof T;
		title: string;
		customRender?: (item: string, parentObject?: T) => ReactNode;
	}
}