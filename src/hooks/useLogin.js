import axios from "axios";
import { useState } from "react";

// 로그인에 필요로한 기능을 모아서 제공한다.
// const {data, loading, error, login} = useLogin()
// const {isLogin} = useLogin()
const useLogin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const login = async (_id, _pass) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/login", { id: _id, pass: _pass });
      setData(response.data);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLogin(false);
    }
    setLoading(false);
  };

  return { data, loading, error, login, isLogin };
};
export default useLogin;
