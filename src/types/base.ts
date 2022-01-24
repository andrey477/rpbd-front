import React from "react";
import { ThunkAction } from "redux-thunk";
import {RootState} from "../store/root";
import {AnyAction} from "@reduxjs/toolkit";

export interface BasePageProps {
  exact: boolean;
  component: React.FC;
  layout?: React.FC;
  path: string;
  secured: boolean;
}

export type Thunk<T = void> = (params: T) => ThunkAction<Promise<void> | void, RootState, {}, AnyAction> | void;