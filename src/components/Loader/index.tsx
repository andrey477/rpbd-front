import React from 'react';
import block from "bem-cn";
import './style.scss';

interface Props {

}

const bem = block('loader');

export const Loader: React.FC<Props> = () => {
  return (
    <div className={bem()}>
			<div className="preloader-wrapper big active">
				<div className="spinner-layer spinner-blue-only">
					<div className="circle-clipper left">
						<div className="circle"/>
					</div>
					<div className="gap-patch">
						<div className="circle"/>
					</div>
					<div className="circle-clipper right">
						<div className="circle"/>
					</div>
				</div>
			</div>
		</div>
  );
}