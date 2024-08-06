# Firebase 인증

- [인증도움말](https://firebase.google.com/docs/auth/web/start?authuser=0&hl=ko&_gl=1*1feq5n7*_up*MQ..*_ga*MjA5MTY0NzU2Mi4xNzIyODE5NzQw*_ga_CW55HF8NVT*MTcyMjgyNjg0OC4zLjEuMTcyMjgyNjg3My4zNS4wLjA.)

## 1. 인증의 구조 만들기

- 인증을 한번 하고 나면 사용자 정보를 전체 컴포넌트에서 수시로 활용
- 로그인 정보를 hook을 이용해서 수시로 사용하는 구조 구성

## 2. 로그인 정보를 위한 hook 작업

- /src/hooks/useAuth.js

```js
import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  return { user };
};
export default useAuth;
```

## 3. 로그인 안되면 Navbar 안보이기

- /src/App.js

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Todo from "./components/Todo";
import useAuth from "./hooks/useAuth";

const App = () => {
  // 커스텀 훅에서 user State 가져와서 활용
  const { user } = useAuth();
  return (
    <BrowserRouter>
    
      // 사용자 정보가 있으면 메뉴 보여주기
      {user && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="*" element={<h1>경로가 잘못되었습니다.</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

## 4. 로그인 된 경우에만 출력할 컴포넌트처리
- user 라는 State 가 있다면, 메뉴 보임
```js
{
  user && <Navbar />
}
```
- user 라는 state 가 있다면, 패스에 따라서
  : Profile, EditProfile, Todo 컴포넌트를 보여줌.
  : user 정보가 있느냐 없느냐에 따라서 children 으로 보여줄 처리 진행
  : ProtectedRoute 컴포넌트를 이용하고, children 으로 처리한다.
- /src/components/ProtectedRoute.js
```js
import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

```

## 5. 로그인 및 회원가입 구성하기