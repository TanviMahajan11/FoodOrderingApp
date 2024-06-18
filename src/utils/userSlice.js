// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loggedUser = action.payload.username;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.loggedUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
