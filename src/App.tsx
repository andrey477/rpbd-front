import React from "react";
import {Router} from 'react-router-dom';
import {history} from "./history";


interface Props {

}

export const App: React.FC<Props> = () => {
  return (
    <Router history={history}>
      <div>
        <button className="waves-effect deep-purple lighten-4 btn-large">Button</button>
      </div>
    </Router>
  );
}