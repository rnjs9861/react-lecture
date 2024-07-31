import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import After from "./pages/member/After";
import MyMap from "./kko/MyMap";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://example.com/external-script.js"; // 외부 스크립트 URL
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: 컴포넌트가 언마운트될 때 스크립트를 제거합니다.
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <MyMap />;
};

export default App;
