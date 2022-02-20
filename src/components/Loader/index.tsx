import React from 'react';
import block from "bem-cn";
import {CircularProgress} from "@material-ui/core";
import './style.scss';

interface Props {

}

const bem = block('loader');

export const Loader: React.FC<Props> = () => {
	return <CircularProgress disableShrink />;
}