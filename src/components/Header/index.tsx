import React from 'react';
import {MapDispatchToProps, connect, MapStateToProps} from "react-redux";
import {Presenter} from './Presenter';
import {RootState} from "../../store/root";

interface OwnProps {
}

interface StateProps {
  isAuth: boolean;
}

interface DispatchProps {
}

export type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({userReducer}) => ({
  isAuth: Boolean(userReducer.data.access_token)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({  });

export const Header = connect(mapStateToProps, mapDispatchToProps)(Presenter);