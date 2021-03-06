import React from "react";
import {Switch, Redirect} from 'react-router-dom';
import {routes} from "./constants/routes";
import {Page} from "./containers/Page";
import './assets/base.scss';
import './assets/colors.scss';


interface Props {

}

export const App: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/main'}/>
      {routes.map((props, index) => (
        <Page
          key={`${index}${props.path}`}
          {...props}
          role={props.role}
        />
      ))}
      <Redirect from={'*'} to={'/error-page'}/>
    </Switch>
  );
};