import { useEffect, useState } from "react";
import { Gallery } from "../components/Gallery";
import { Info } from "../components/Info";
import { Notice } from "../components/Notice";
import { QuickLink } from "../components/QuickLink";
import { Slide } from "../components/Slide";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Main } from "../components/layout/Main";

export const Home = () => {
  let [login, setLogin] = useState(false);
  console.log("Home 이 새로고침 되니? login : ", login);

  let [count, setCount] = useState(0);

  const changeLogin = () => {
    // setLogin(!login);
    // useState는 비동기 방식
    setCount(prev => {
      const newCount = prev + 1;
      return newCount;
    });
    console.log("현재 count : ", count);
  };

  useEffect(() => {
    console.log("Home 이 새로고침 되니? USE-EFFECT ", count);
  }, [count]);

  useEffect(() => {
    // console.log("Home 이 새로고침 되니? USE-EFFECT", login);
  }, [login]);

  return (
    <>
      <button
        onClick={() => {
          changeLogin();
        }}
      >
        {count} 로그인버튼
      </button>
      <Header login={login} />
      <Main>
        <Slide />
        <Info>
          <Notice />
          <Gallery />
          <QuickLink />
        </Info>
      </Main>
      <Footer />
    </>
  );
};
