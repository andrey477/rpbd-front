import React, {useState} from 'react';
import {Record} from "./Record";
import {Divider, Tab, Tabs} from "@material-ui/core";
import {TabPanel} from "../../../components/TabPanel";
import block from "bem-cn";
import {Stage} from "./Stage";
import {TableCompetition} from "../TableCompetition";
import {listColumns} from "./listColumns";
import {VariantTable} from "../../../constants/variantTable";
import {totalColumns} from "./totalColumns";
import {Props} from "./index";
import {Roles} from "../../../constants/roles";
import {Button} from "../../../components/Button";
import {Stage as StageVariant} from "../../../constants/stage";
import {nextStage} from "../../../api/competitions";
import './style.scss';

const bem = block('competition');

export const Presenter: React.FC<Props> = ({competition, role}) => {
	const initValue = role === Roles.ADMIN ? 1 : 0;
	const [value, setValue] = useState<number>(initValue);

	const {
		stage,
		attempts,
		name,
		id
	} = competition;

	const buttonText = stage === StageVariant.stage_3 ? 'Завершить соревнование' : 'Следующий этап';

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const handleNextStage = async () => {
		const {id} = competition;
		const response = await nextStage({competitionId: id});
	}

	return (
		<div className={bem()}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab label='Запись на участие' disabled={role === Roles.ADMIN}/>
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
			{role === Roles.ADMIN &&
				<div className={bem('admin-panel')}>
					<Button onClick={handleNextStage}>{buttonText}</Button>
				</div>
			}
		</div>
	);
}