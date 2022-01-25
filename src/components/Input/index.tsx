import React, {DetailedHTMLProps, InputHTMLAttributes, useEffect} from "react";
import block from "bem-cn";
import './style.scss';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  classes?: string;
}

const bem = block('input-block');

export const Input: React.FC<Props> = ({
  id,
  label,
  classes = '',
  ...rest
}) => {

  return (
    <div className={bem({}).mix('input-field col s6').mix(classes)}>
      <input
        id={id}
        className={bem('input').mix('validate')}
        {...rest}
      />
      <label htmlFor={id} style={{color: 'var(--blue-darken-3)'}}>{label}</label>
    </div>
  )
}