import React from 'react';
import block from "bem-cn";
import logo from '../../images/logo.png';
import './style.scss';

interface Props {
  width?: number;
	height?: number;
	classes?: string;
}

const bem = block('logo');

export const Logo: React.FC<Props> = ({
	height = 100,
	width = 100,
	classes = ''
}) => {
  return (
    <div
			className={bem({}).mix(classes)}
		>
			<img
				src={logo}
				style={{width, height}}
				className={bem('img')}
			/>
		</div>
  );
}