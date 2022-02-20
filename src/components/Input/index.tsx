import React, {ChangeEvent} from "react";
import block from "bem-cn";
import {BaseTextFieldProps, TextField} from "@material-ui/core";
import './style.scss';

interface Props extends BaseTextFieldProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const bem = block('input-block');

export const Input: React.FC<Props> = ({
  ...rest
}) => {

  return (
    <TextField
      id="standard-basic"
      {...rest}
    />
  )
}