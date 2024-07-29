import React from "react";
import Counter from "./pages/Counter";
import LoginForm from "./pages/LoginForm";
import Join from "./pages/Join";

const App = () => {
  return (
    <div>
      <h1>APP 컴포넌트</h1>
      <Join />
      <Counter />
      <LoginForm />
    </div>
  );
};

export default App;
