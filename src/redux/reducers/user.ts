
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../stateManagement/types";
import { initialState } from "../stateManagement/initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    },
    logOutUser: (state) => {
      state = initialState.user
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;