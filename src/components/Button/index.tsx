import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export const Button: React.FC<Props> = ({
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className="btn waves-effect waves-light"
    >
      {children}
    </button>
  )
}