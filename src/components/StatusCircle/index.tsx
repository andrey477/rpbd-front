import React from 'react';
import block from "bem-cn";
import './style.scss';

interface Props {
  type: 'active' | 'closed';
}

const bem = block('status-circle');

export const StatusCircle: React.FC<Props> = ({type}) => {
  return (
    <div className={bem({type})}/>
  );
}