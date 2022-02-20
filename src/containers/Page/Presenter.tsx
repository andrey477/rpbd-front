import React, {useEffect} from "react";
import {Props} from "./index";
import {MainLayout} from "../../components/Layouts/MainLayout";
import {Route} from "react-router-dom";
import {history} from "../../history";

export const Presenter: React.FC<Props> = ({
  component: Component,
  layout: Layout = MainLayout,
  path,
  exact,
  isAuth,
  secured,
  userRole ,
  role,
}) => {
  useEffect(() => {
    if (!isAuth && secured) {
      history.push('/login');
    }

    if (role && userRole !== role) {
      history.push('/error-page');
    }
  }, [isAuth]);

  return (
    <Route
      exact={exact}
      path={path}
    >
      <Layout>
        <Component/>
      </Layout>
    </Route>
  );
};