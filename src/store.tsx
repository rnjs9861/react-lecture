import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import themeSlice from "./slices/themeSlice";
import langSlice from "./slices/langSlice";
const store = configureStore({
  reducer: {
    loginSlice,
    themeSlice,
    langSlice,
  },
});

// 현재 interface 만 기초이해함. 추후 type 으로도 데이터 형태를 정의할 수 있다.
// interface 와 type 의 기능이 같다.
// 하지만, 대다수는 interface 를 사용한다.
// type 에 의한 데이터 모양 만들기 보다 훨씬 interface 가 응용력 높음

// useSelector 타입
export type RootState = ReturnType<typeof store.getState>;
// useDispatch 에 타입
export type AppDispatch = typeof store.dispatch;

export default store;
