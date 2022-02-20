import React from 'react';
import {useStyle} from "./useStyle";

interface Props {

}

export const Accordion: React.FC<Props> = ({children}) => {
  const {root} = useStyle();

  return (
    <div className={root}>
      {children}
    </div>
  );
}