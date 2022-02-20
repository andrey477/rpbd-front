import React from 'react';
import {MapDispatchToProps, connect, MapStateToProps} from "react-redux";
import {Presenter} from './Presenter';
import {RootState} from "../../store/root";
import {Roles} from "../../constants/roles";

interface OwnProps {
}

interface StateProps {
  isAuth: boolean;
  role: Roles;
}

interface DispatchProps {
}

export type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({userReducer}) => ({
  isAuth: Boolean(userReducer.data.access_token),
  role: userReducer.data.user.role,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({  });

export const Header = connect(mapStateToProps, mapDispatchToProps)(Presenter);