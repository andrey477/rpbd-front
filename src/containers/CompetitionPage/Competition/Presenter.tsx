import React, {useState} from 'react';
import {Record} from "./Record";
import {Tab, Tabs} from "@material-ui/core";
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
import {isDisable, mapStageToNumber} from "./helper";
import {checkInCompetition} from "../../../utils";

const bem = block('competition');

export const Presenter: React.FC<Props> = ({competition, role, setCompetition, userId}) => {
	const {
		stage,
		attempts,
		name,
		id
	} = competition;

	const initValue = mapStageToNumber[stage];
	const [value, setValue] = useState<number>(initValue);

	const buttonText = stage === StageVariant.stage_3 ? 'Завершить соревнование' : 'Следующий этап';
	const inCompetition = checkInCompetition(userId, competition.racers);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const handleNextStage = async () => {
		const {id} = competition;
		console.log('handleNextStage:', {competitionId: id});
		const response = await nextStage({competitionId: id});
		if (response) {
			setCompetition(response);
			const tab = value + 1;
			setValue(tab);
		}
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
				<Tab
					label='Запись на участие'
					disabled={role === Roles.ADMIN || stage !== StageVariant.RECORD || inCompetition}/>
				<Tab label='Список заявок'/>
				<Tab label="1 ЭТАП" disabled={isDisable(2, stage)}/>
				<Tab label="2 ЭТАП" disabled={isDisable(3, stage)}/>
				<Tab label="3 ЭТАП" disabled={isDisable(4, stage)}/>
				<Tab label="ИТОГ" disabled={isDisable(5, stage)}/>
			</Tabs>
			<div className={bem('panels')}>
				<TabPanel index={0} value={value}>
					<Record
						title={name}
						competitionId={id}
						attempts={attempts}
						setCompetition={setCompetition}
						setValue={setValue}
					/>
				</TabPanel>
				<TabPanel index={1} value={value}>
					<TableCompetition
						competition={competition}
						columns={listColumns}
						variantTable={VariantTable.RECORD}
						setCompetition={setCompetition}
					/>
				</TabPanel>
				<TabPanel index={2} value={value}>
					<Stage
						competition={competition}
						currentStage={StageVariant.stage_1}
						setCompetition={setCompetition}
					/>
				</TabPanel>
				<TabPanel index={3} value={value}>
					<Stage
						competition={competition}
						currentStage={StageVariant.stage_2}
						setCompetition={setCompetition}
					/>
				</TabPanel>
				<TabPanel index={4} value={value}>
					<Stage
						competition={competition}
						currentStage={StageVariant.stage_3}
						setCompetition={setCompetition}
					/>
				</TabPanel>
				<TabPanel index={5} value={value}>
					<TableCompetition
						competition={competition}
						columns={totalColumns}
						variantTable={VariantTable.TOTAL}
						setCompetition={setCompetition}
					/>
				</TabPanel>
			</div>
			{role === Roles.ADMIN && stage !== StageVariant.total &&
				<div className={bem('admin-panel')}>
					<Button onClick={handleNextStage}>{buttonText}</Button>
				</div>
			}
		</div>
	);
}