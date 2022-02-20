import React from "react";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {Presenter} from "./Presenter";
import {BasePageProps} from "../../types/base";
import {RootState} from "../../store/root";
import {Roles} from "../../constants/roles";

interface OwnProps extends BasePageProps{
  role: Roles | undefined,
}

interface StateProps {
  isAuth: boolean;
  userRole: Roles,
}

interface DispatchProps {

}

export type Props = OwnProps & StateProps & DispatchProps;

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState> = ({userReducer}) => ({
  isAuth: Boolean(userReducer.data.access_token),
  userRole: userReducer.data.user.role,
});
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({});

export const Page = connect(mapStateToProps, mapDispatchToProps)(Presenter);