import React from "react";
import {Props} from "./index";
import {MainLayout} from "../../components/Layouts/MainLayout";
import {Route} from "react-router-dom";

export const Presenter: React.FC<Props> = ({
  component: Component,
  layout: Layout = MainLayout,
  path,
  exact,
}) => {
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