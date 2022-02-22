import React, {useState} from 'react';
import {Record} from "./Record";
import {Competition as CompetitionType} from "../../../types/competition";
import {Tab, Tabs} from "@material-ui/core";
import {TabPanel} from "../../../components/TabPanel";
import block from "bem-cn";
import {Stage} from "./Stage";
import './style.scss';
import {TableCompetition} from "../TableCompetition";
import {listColumns} from "./listColumns";
import {VariantTable} from "../../../constants/variantTable";
import {totalColumns} from "./totalColumns";

interface Props {
	competition: CompetitionType.BodyCompetition;
}

const bem = block('competition');

export const Competition: React.FC<Props> = ({competition}) => {
	const [value, setValue] = useState<number>(0);

	const {
		stage,
		attempts,
		name,
		id
	} = competition;

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

  return (
    <div className={bem()}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab label='Запись на участие'/>
				<Tab label='Список заявок'/>
				{/*<Tab label="Квалификация"/>*/}
				<Tab label="1 ЭТАП"/>
				<Tab label="2 ЭТАП"/>
				<Tab label="3 ЭТАП"/>
				<Tab label="ИТОГ"/>
			</Tabs>
			<div className={bem('panels')}>
				<TabPanel index={0} value={value}>
					<Record
						title={name}
						competitionId={id}
						attempts={attempts}
					/>
				</TabPanel>
				<TabPanel index={1} value={value}>
					<TableCompetition
						competition={competition}
						columns={listColumns}
						variantTable={VariantTable.LIST}
					/>
				</TabPanel>
				<TabPanel index={2} value={value}>
					<Stage
						competition={competition}
					/>
				</TabPanel>
				<TabPanel index={3} value={value}>
					<Stage
						competition={competition}
					/>
				</TabPanel>
				<TabPanel index={4} value={value}>
					<Stage
						competition={competition}
					/>
				</TabPanel>
				<TabPanel index={5} value={value}>
					<TableCompetition
						competition={competition}
						columns={totalColumns}
						variantTable={VariantTable.TOTAL}
					/>
				</TabPanel>
			</div>
		</div>
  );
}