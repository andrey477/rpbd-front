import React from "react";
import block from "bem-cn";

interface Props {

}

const bem = block('main-page');

export const MainPage: React.FC<Props> = () => {
  return (
    <div className={bem()}>MainPage</div>
  )
}