import React, {ReactNode} from "react";

export const defaultCustomRender = <T extends Object>(item: string, parentObject?: T): ReactNode => {
	return (
		<span>{item}</span>
	)
}