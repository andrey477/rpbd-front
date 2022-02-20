import {Route} from "../types/route";
import {MainPage} from "../components/MainPage";
import {LoginPage} from "../components/LoginPage";
import {RacersPage} from "../components/RacersPage";
import {CompetitionPage} from "../containers/CompetitionPage";
import {JudgeRegistrationPage} from "../components/JudgeRegistrationPage/JudgeRegistrationPage";
import {Roles} from "./roles";
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
    path: '/racers',
    exact: true,
    component: RacersPage,
    secured: true,
  },
  {
    path: '/competition',
    exact: true,
    component: CompetitionPage,
    secured: true,
  },
  {
    path: '/judge-registration',
    exact: true,
    component: JudgeRegistrationPage,
    secured: true,
    role: Roles.ADMIN,
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