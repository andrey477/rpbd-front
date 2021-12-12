import React from "react";
import block from "bem-cn";
import './style.scss';

interface Props {
  title: string;
  classes?: string;
}

const bem = block('card');

export const Card: React.FC<Props> = ({
  title,
  classes = '',
  children
}) => {
  return (
    <div className={bem({}).mix(classes)}>
      <div className={bem('title')}>
        <h4>{title}</h4>
      </div>
      <div className={bem('content')}>{children}</div>
    </div>
  )
}