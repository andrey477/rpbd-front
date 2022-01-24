import {createSlice} from "@reduxjs/toolkit";
import {User} from "./type";
import {loginUser} from "./actions";
import {history} from "../../history";

const initialState: User.InitState = {
  data: {
    user: {
      id: '',
      username: '',
      password: '',
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
      }
    });
  },
});