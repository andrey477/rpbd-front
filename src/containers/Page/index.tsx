import React from "react";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {Presenter} from "./Presenter";
import {BasePageProps} from "../../types/base";
import {RootState} from "../../store/root";

interface OwnProps extends BasePageProps{

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
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({});

export const Page = connect(mapStateToProps, mapDispatchToProps)(Presenter);