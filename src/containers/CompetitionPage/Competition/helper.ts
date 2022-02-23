import {Stage} from "../../../constants/stage";

export const mapStageToNumber: Record<Stage, number> = {
	[Stage.RECORD]: 1,
	[Stage.stage_1]: 2,
	[Stage.stage_2]: 3,
	[Stage.stage_3]: 4,
	[Stage.total]: 5,
	[Stage.qualification]: 10
}

export const isDisable = (tab: number, stage: Stage): boolean => {
	return tab > mapStageToNumber[stage];
}