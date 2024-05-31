import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// Index 라는 이름 충돌로 변경함
import Company from "./pages/company/Index";
import Home from "./pages/Index";
import GoodDetail from "./pages/goods/Detail";

function App() {
  return (
    <BrowserRouter>
      {/* 공통 레이아웃 적용 */}
      <div className="wrap">
        <Header />
        <Routes>
          {/* 루트 경로 */}
          <Route path="/" element={<Home />}></Route>

          <Route path="/company">
            {/* path상 기본페이지 */}
            <Route index element={<Company />}></Route>
            <Route path="ceo" element={<h1>대표소개</h1>}></Route>
            <Route path="history" element={<h1>회사연역</h1>}></Route>
            <Route path="partner" element={<h1>파트너소개</h1>}></Route>
            <Route path="location" element={<h1>회사위치</h1>}></Route>
          </Route>

          <Route path="/good">
            {/* path상 기본페이지 */}
            <Route index element={<h1>제품소개</h1>}></Route>
            <Route
              path=":id"
              element={<GoodDetail title={"좋은 회사"}></GoodDetail>}
            ></Route>
            <Route path="delete/:id" element={<h1>제품삭제</h1>}></Route>
            <Route path="modify/:id" element={<h1>제품수정</h1>}></Route>
          </Route>
          {/* 잘못된 경로 */}
          <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
