import React from 'react';
import {Status} from "../../constants/status";
import {getBadgeText} from "./helper";
import block from "bem-cn";
import './style.scss';

interface Props {
  status: Status;
	title?: string;
}

const bem = block('badge');

export const Badge: React.FC<Props> = ({ status, title }) => {
	const text = title ? title : getBadgeText(status);
  return (
    <div className={bem(status)}>
			{text}
		</div>
  );
}