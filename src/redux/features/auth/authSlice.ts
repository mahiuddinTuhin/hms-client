import { createSlice } from "@reduxjs/toolkit";
export type TUser = {
  id: string;
  role: string;
  _id: string;
  email: string;
  iat: number;
  exp: number;
};
export type TAuthState = {
  user: null | TUser;
  userToken: string | null;
};

const initialState: TAuthState = {
  user: null,
  userToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, userToken } = action.payload;
      console.log(action.payload);

      state.user = user;
      state.userToken = userToken;
    },
    logout: (state) => {
      state.user = null;
      state.userToken = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
