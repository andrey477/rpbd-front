import {Route} from "../types/route";
import {MainPage} from "../components/MainPage";
import {LoginPage} from "../components/LoginPage";
import {RacersPage} from "../components/RacersPage";
import {CompetitionPage} from "../containers/CompetitionPage";
import {ErrorPage} from "../components/ErrorPage";
import {RegistrationPage} from "../components/RegistrationPage";

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
    path: '/competition',
    exact: true,
    component: CompetitionPage,
    secured: true,
  },
  {
    path: '/error-page',
    exact: true,
    component: ErrorPage,
    secured: false
  },
  {
    path: '/registration',
    exact: true,
    component: RegistrationPage,
    secured: false
  }
];