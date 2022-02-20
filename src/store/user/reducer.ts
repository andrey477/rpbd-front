import {createSlice} from "@reduxjs/toolkit";
import {User} from "./type";
import {loginUser, logoutUser, registration} from "./actions";
import {Roles} from "../../constants/roles";

const initialState: User.InitState = {
  data: {
    user: {
      id: '',
      username: '',
      password: '',
      role: Roles.ADMIN,
      person: {
        id: '',
        name: '',
        surname: '',
        city: '',
        email: '',
        age: 0,
      }
    },
    access_token: '',
    refresh_token: '',
    token_type: '',
    expires_in: 0,
  }
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
        state.data.user.role = Roles.ADMIN;
      }
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.data = initialState.data;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    });
  },
});