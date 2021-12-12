import React from "react";
import block from "bem-cn";

interface Props {

}

const bem = block('auth-page');

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={bem()}>AuthPage</div>
  )
}