import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getKakaoLoginLink } from "./kko/kkoapi";

const Login = () => {
  const kakaoLogin = getKakaoLoginLink();
  console.log(kakaoLogin);
  return (
    <div>
      <Link to={kakaoLogin}>카카오로그인</Link>
    </div>
  );
};

export default Login;
