import React from 'react';
import block from "bem-cn";
import {Table} from "../Table";
import {PageWrapper} from "../PageWrapper";
import {useRacersPage} from "./useRacersPage";
import {columnsConfig} from "./columnsConfig";
import {Loader} from "../Loader";
import './style.scss';

interface Props {

}

const bem = block('racers-page');

export const RacersPage: React.FC<Props> = () => {
	const {tableData, loading} = useRacersPage()

  return (
		<PageWrapper>
			<div className={bem()}>
				{loading ? <Loader/> :
					<Table data={tableData} columnsConfig={columnsConfig}/>
				}
			</div>
		</PageWrapper>
  );
}