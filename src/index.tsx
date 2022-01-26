import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {Router} from "react-router-dom";
import {history} from "./history";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);
