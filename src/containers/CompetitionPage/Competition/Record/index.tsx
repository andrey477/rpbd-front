import React from 'react';
import {MapDispatchToProps, connect, MapStateToProps} from "react-redux";
import {Presenter} from './Presenter';
import {RootState} from "../../../../store/root";
import {Person} from "../../../../types/person";

interface OwnProps {
	title: string;
	competitionId: string;
	attempts: number;
}

interface StateProps {
	person: Person.Data;
}

interface DispatchProps {
}

export type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({userReducer}) => ({
	person: userReducer.data.user.person
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({  });

export const Record = connect(mapStateToProps, mapDispatchToProps)(Presenter);