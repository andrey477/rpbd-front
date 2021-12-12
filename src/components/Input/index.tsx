import React, {DetailedHTMLProps, InputHTMLAttributes, useEffect} from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

export const Input: React.FC<Props> = ({
  id,
  label,
  ...rest
}) => {

  return (
    <div className="input-field col s6">
      <input
        id={id}
        className="validate"
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}