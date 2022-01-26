import React from 'react';
import './style.scss';
import block from "bem-cn";
import {Table} from "../Table";
import {data, racerColumn} from "./mock";

interface Props {

}

const bem = block('racers-page');

export const RacersPage: React.FC<Props> = () => {
  return (
    <div>
			<Table data={data} columnsConfig={racerColumn}/>
		</div>
  );
}