import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import themeSlice from "./slices/themeSlice";
import langSlice from "./slices/langSlice";
import userSlice from "./slices/userSlice";
export default configureStore({
  reducer: {
    loginSlice,
    themeSlice,
    langSlice,
    userSlice,
  },
});
