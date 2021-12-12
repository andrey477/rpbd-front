import React, {FormEventHandler} from "react";
import block from "bem-cn";
import './style.scss';

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const bem = block('form');

export const Form: React.FC<Props> = ({ handleSubmit, children }) => {
  return (
    <form
      className={bem()}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}