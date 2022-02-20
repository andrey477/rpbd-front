import React from "react";
import {Button as MaterialButton, ButtonProps} from "@material-ui/core";

interface Props extends ButtonProps {
}

export const Button: React.FC<Props> = ({
  children,
  variant="contained",
  color="primary",
  ...rest
}) => {
  return (
    <MaterialButton
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </MaterialButton>
  )
}