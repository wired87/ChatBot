import { createSlice } from "@reduxjs/toolkit";
import {UserInterface} from "../../../../interfaces/userInterface";

interface log {
  user?: UserInterface | null;
}

const initialState: log = { user: null };

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    Login(state, action) {
      const { user } = action.payload;
      state.user = user;
    },
    Logout(state) {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const authActions = userSlice.actions;
