import {createSlice} from "@reduxjs/toolkit";
import {User} from "./type";

const initialState: User.InitState = {
  accessToken: '',
  refreshToken: '',
  username: '',
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {

  }
});