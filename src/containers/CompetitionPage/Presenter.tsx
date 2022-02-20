import React from 'react';
import {Props} from "./index";
import block from "bem-cn";

const bem = block('competition-page');

export const Presenter: React.FC<Props> = ({ role  }) => {
  return (
    <div className={bem()}>
			competition-page
		</div>
  );
}