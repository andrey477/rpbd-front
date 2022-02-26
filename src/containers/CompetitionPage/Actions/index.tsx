import React, {Dispatch, SetStateAction} from 'react';
import {MapDispatchToProps, connect, MapStateToProps} from "react-redux";
import {Presenter} from './Presenter';
import {RootState} from "../../../store/root";
import {Roles} from "../../../constants/roles";
import {VariantTable} from "../../../constants/variantTable";
import {Competition as CompetitionType} from "../../../types/competition";
import {Stage} from "../../../constants/stage";
import {Status} from "../../../constants/status";

interface OwnProps {
	attempts?: number;
	competitionId: string;
	personId: string;
	variantTable: VariantTable;
	setCompetition?: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
	stage: Stage;
	currentStage?: Stage;
	status?: Status;
}

interface StateProps {
	role: Roles;
}

interface DispatchProps {
}

export type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({ userReducer }) => ({
	role: userReducer.data.user.role
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({  });

export const Actions = connect(mapStateToProps, mapDispatchToProps)(Presenter);