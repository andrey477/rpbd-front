import React from "react";

export interface BasePageProps {
  exact: boolean;
  component: React.FC;
  layout?: React.FC;
  path: string;
  secured: boolean;
}