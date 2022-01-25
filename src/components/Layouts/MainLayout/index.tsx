import React from "react";
import block from "bem-cn";
import {Header} from "../../Header";
import './style.scss';

interface Props {

}

const bem = block('main-layout');

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={bem()}>
      <Header/>
      <main className={bem('container')}>
        {children}
      </main>
    </div>
  )
}