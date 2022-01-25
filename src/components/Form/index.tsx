import React, {FormEventHandler} from "react";
import block from "bem-cn";
import './style.scss';

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  classes?: string;
}

const bem = block('form');

export const Form: React.FC<Props> = ({
  handleSubmit,
  classes = '',
  children
}) => {
  return (
    <form
      className={bem({}).mix(classes)}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}