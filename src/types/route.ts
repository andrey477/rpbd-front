import React from "react";

export interface Route {
  exact: boolean;
  path: string;
  component: React.FC;
  secured: boolean;
  layout?: React.FC;
}