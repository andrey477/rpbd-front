import React, {Dispatch, SetStateAction} from 'react';
import {MapDispatchToProps, connect, MapStateToProps} from "react-redux";
import {Presenter} from './Presenter';
import {RootState} from "../../../store/root";
import {Competition as CompetitionType} from "../../../types/competition";
import {Roles} from "../../../constants/roles";

interface OwnProps {
	competition: CompetitionType.BodyCompetition;
	setCompetition: Dispatch<SetStateAction<CompetitionType.BodyCompetition[]>>
}

interface StateProps {
	role: Roles;
}

interface DispatchProps {
}

export type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({userReducer}) => ({
	role: userReducer.data.user.role
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({  });

export const Competition = connect(mapStateToProps, mapDispatchToProps)(Presenter);