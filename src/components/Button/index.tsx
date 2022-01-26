import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: string;
}

export const Button: React.FC<Props> = ({
  children,
  color = 'blue darken-1',
  ...rest
}) => {
  const classes = `btn waves-effect ${color}`;
  return (
    <button
      {...rest}
      className={classes}
    >
      {children}
    </button>
  )
}