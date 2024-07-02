# Session Storage TS 버전

## 1. cookie 에 정보 저장 라이브러리

- https://www.npmjs.com/package/react-cookie
- `npm i react-cookie`
- https://velog.io/@defaultkyle/react-cookie
- /src/utils/cookie.js

## 2. utils/cookie.js

```js
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = name => {
  return cookies.get(name);
};

export const removeCookie = name => {
  return cookies.removeCookie(name, { path: "/" });
};
```

## 3. Cookie 에 정보 저장

- `/src/pages/member/LoginCookie.js`

```js
import React, { useEffect, useState } from "react";
import { getCookie, removeCookie, setCookie } from "../../utils/cookie";

const LoginCookie = () => {
  // Cookie 에서 가져오므로 null 을 기본값셋팅
  const [userId, setUserId] = useState(null);

  // 1. Cookie 읽기
  useEffect(() => {
    const userLS = getCookie("userId");
    if (userId) {
      setUserId(userLS);
    }
  }, []);

  // 3. Cookie 삭제하기
  const handleLogout = e => {
    console.log("로그아웃");
    const userTyping = "";
    setUserId(userTyping);
    removeCookie("userId");
  };

  // 2. Cookie 업데이트하기
  const handleLogIn = e => {
    console.log("로그인 시도");
    const userTyping = "abc1234";
    setUserId(userTyping);
    setCookie("userid", userTyping, {
      path: "/",
      expire: new Date(Date.now() + 86400e3), // 1일 후 만료시간 설정
      maxAge: 86400, // 1일 동안 유효
    });
  };

  return (
    <div>
      <h1>Login Local Storage</h1>
      {userId ? (
        <div>
          <p>로그인됨 : {userId}</p>
          <button onClick={e => handleLogout(e)}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인시도</p>
          <button onClick={e => handleLogIn(e)}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default LoginCookie;
```

-`/src/pages/member/LoginCookieTs.tsx`

```ts
import React, { MouseEvent, useEffect, useState } from "react";
import { getCookie, removeCookie, setCookie } from "../../utils/cookie";

const LoginCookieTs: React.FC = () => {
  // Cookie 에서 가져오므로 null 을 기본값셋팅
  const [userId, setUserId] = useState<string | null>(null);

  // 1. Cookie 읽기
  useEffect(() => {
    const userLS = getCookie("userId");
    if (userId) {
      setUserId(userLS);
    }
  }, []);

  // 3. Cookie 삭제하기
  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("로그아웃");
    const userTyping = "";
    setUserId(userTyping);
    removeCookie("userId");
  };

  // 2. Cookie 업데이트하기
  const handleLogIn = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("로그인 시도");
    const userTyping = "abc1234";
    setUserId(userTyping);
    setCookie("userid", userTyping, {
      path: "/",
      expire: new Date(Date.now() + 86400e3), // 1일 후 만료시간 설정
      maxAge: 86400, // 1일 동안 유효
    });
  };
  return (
    <div>
      <h1>Login Local Storage</h1>
      {userId ? (
        <div>
          <p>로그인됨 : {userId}</p>
          <button onClick={e => handleLogout(e)}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인시도</p>
          <button onClick={e => handleLogIn(e)}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default LoginCookieTs;

```

## 4. utils/cookie.js ===> ts

- `/src/utils/cookiets.ts`
  : 반드시 js 를 ts 변환할 이유가 없다.

```ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cookies } from "react-cookie";

const cookies: Cookies = new Cookies();
interface CookieSetOptions {
  path?: string;
  expire?: Date;
  maxAge?: number;
  [key: string]: any;
}
export const setCookie = (
  name: string,
  value: any,
  options?: CookieSetOptions,
) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string): any => {
  return cookies.get(name);
};

export const removeCookie = (name: string): void => {
  return cookies.remove(name, { path: "/" });
};
```
