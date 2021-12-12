import React from "react";
import {Router} from 'react-router-dom';
import {history} from "./history";
import {Provider} from "react-redux";
import {store} from "./store/store";


interface Props {

}

export const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <button className="waves-effect deep-purple lighten-4 btn-large">Button</button>
        </div>
      </Router>
    </Provider>
  );
};