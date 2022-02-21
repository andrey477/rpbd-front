import React, {useState} from 'react';
import {Record} from "./Record";
import {Competition as CompetitionType} from "../../../types/competition";
import {Tab, Tabs} from "@material-ui/core";
import {TabPanel} from "../../../components/TabPanel";
import block from "bem-cn";
import './style.scss';

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
    <div>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab label='Запись на участие'/>
				<Tab label="Квалификация"/>
				<Tab label="1 ЭТАП"/>
				<Tab label="2 ЭТАП"/>
				<Tab label="3 ЭТАП"/>
				<Tab label="ИТОГ"/>
			</Tabs>
			<div className={bem('panels')}>
				<TabPanel value={value} index={0}>
					<Record
						title={name}
						competitionId={id}
						attempts={attempts}
					/>
				</TabPanel>
			</div>
		</div>
  );
}