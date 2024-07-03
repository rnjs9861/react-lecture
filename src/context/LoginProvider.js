import React, { createContext, useEffect, useState } from "react";

//createContext 는 저장할 장소(공간)를 말함
export const LoginContext = createContext();
// 생성된 Context 를 어디에다가 적용할지 스코프(범위) 지정

const LoginProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userLang, setUserLang] = useState("ko");

  useEffect(() => {
    // 이자리에서 cookie 를 읽거나 localStorage, sessionStorage 읽기
    setUserLang("ko");
  }, []);

  return (
    <LoginContext.Provider
      value={{ userInfo, userLang, setUserInfo, setUserLang }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
