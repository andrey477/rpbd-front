import React, {ChangeEvent} from "react";
import block from "bem-cn";
import {BaseTextFieldProps, TextField} from "@material-ui/core";
import './style.scss';
import {useStyle} from "./useStyle";

interface Props extends BaseTextFieldProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const bem = block('input-block');

export const Input: React.FC<Props> = ({
  ...rest
}) => {
  const classes = useStyle();
  return (
    <TextField
      id="standard-basic"
      classes={classes}
      {...rest}
    />
  )
}