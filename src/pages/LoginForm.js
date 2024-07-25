import React from "react";
import { useRecoilState } from "recoil";
import {
  userEmailState,
  userNameState,
  userPasswordState,
} from "../atoms/formState";

const LoginForm = () => {
  //atoms 활용
  const [userName, setUserName] = useRecoilState(userNameState);
  const [userEmail, setUserEmail] = useRecoilState(userEmailState);

  const [userPass, setUserPass] = useRecoilState(userPasswordState);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("전송 : ", userName, userEmail, userPass);
  };
  return (
    <div>
      <h1>로그인입력폼</h1>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <div>
          <label>Name</label>
          <input
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={userPass}
            onChange={e => setUserPass(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
