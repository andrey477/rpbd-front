import React from "react";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {Presenter} from "./Presenter";
import {BasePageProps} from "../../types/base";

interface OwnProps extends BasePageProps{

}

interface StateProps {

}

interface DispatchProps {

}

export type Props = OwnProps & StateProps & DispatchProps;

// const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = () => ({})
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({})

export const Page = connect(null, mapDispatchToProps)(Presenter);