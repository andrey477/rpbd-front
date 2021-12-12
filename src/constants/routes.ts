import {Route} from "../types/route";
import {AuthPage} from "../components/AuthPage";
import {MainPage} from "../components/MainPage";

export const routes: Route[] = [
  {
    path: '/main',
    exact: true,
    component: MainPage,
  },
  {
    path: '/auth',
    exact: true,
    component: AuthPage,
  },
];