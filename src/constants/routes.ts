import {Route} from "../types/route";
import {MainPage} from "../components/MainPage";
import {LoginPage} from "../components/LoginPage";
import {RacersPage} from "../components/RacersPage";

export const routes: Route[] = [
  {
    path: '/main',
    exact: true,
    component: MainPage,
    secured: true,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    secured: false,
  },
  {
    path: '/racers',
    exact: true,
    component: RacersPage,
    secured: true,
  }
];