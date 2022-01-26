import React from 'react';
import block from "bem-cn";
import './style.scss';

interface Props {

}

const bem = block('page-wrapper');

export const PageWrapper: React.FC<Props> = ({children}) => {
  return (
    <div className={bem()}>
			{children}
		</div>
  );
}