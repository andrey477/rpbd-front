import React, {DetailedHTMLProps, InputHTMLAttributes, useEffect} from "react";
import block from "bem-cn";
import './style.scss';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

const bem = block('input');

export const Input: React.FC<Props> = ({
  id,
  label,
  ...rest
}) => {

  return (
    <div className="input-field col s6">
      <input
        id={id}
        className={'validate'}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}