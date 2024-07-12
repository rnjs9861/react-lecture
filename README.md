# React Toolkit TS 적용

## 1. 파일명 변경

- index.js ===> index.tsx

```tsx
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import RTKSample from "./RTKSample";
import "./index.css";
import store from "./store";

const root = ReactDOM.createRoot(
  // as 는 내가 책임질께 VSCode 타입추론 하지마.
  document.getElementById("root") as HTMLElement,
);

// Redux Toolkit 저장소 공급
root.render(
  <Provider store={store}>
    <RTKSample />
  </Provider>,
);
```

- store.js ===> store.ts

```ts
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import themeSlice from "./slices/themeSlice";
import langSlice from "./slices/langSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    loginSlice,
    themeSlice,
    langSlice,
    userSlice,
  },
});
// state 를 외부 에서 참조하도록
export type RootState = ReturnType<typeof store.getState>;
// dispatch 외부에서 실행하도록
export type AppDispatch = typeof store.dispatch;
// 기본 내보내기
export default store;
```
- RTKSample.js ===> RTKSample.tsx


- userSlice.js ===> userSlice.ts
