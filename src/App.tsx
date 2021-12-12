import React from "react";
import {Switch, Redirect} from 'react-router-dom';
import {routes} from "./constants/routes";
import {Page} from "./containers/Page";


interface Props {

}

export const App: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/main'}/>
      {routes.map(({exact, component, path, layout}) => (
        <Page
          path={path}
          exact={exact}
          component={component}
          layout={layout}
        />
      ))}
      <Redirect from={'*'} to={'/'}/>
    </Switch>
  );
};