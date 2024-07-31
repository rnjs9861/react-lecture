import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import After from "./pages/member/After";

const App = () => {
  return (
    <BrowserRouter>
      <Login />
      <Routes>
        <Route path="/member/kko" element={<After />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
