import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slices/authSlice";

const rootReducers = combineReducers({
  userSlice,
});

export default rootReducers;
