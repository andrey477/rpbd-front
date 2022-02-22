import React from 'react';
import {Status} from "../../../constants/status";

interface Props {
  status: Status;
}

export const StatusBadge: React.FC<Props> = ({status}) => {
  return (
    <div>
			{status}
		</div>
  );
}