import React from "react";
import {Roles} from "../constants/roles";

export interface Route {
  exact: boolean;
  path: string;
  component: React.FC;
  secured: boolean;
  layout?: React.FC;
  role?: Roles;
}