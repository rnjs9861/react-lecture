# Router

- 라우터는 URI 경로를 동기화 하여 화면의 전환, 흐름을 제어한다.
- URI 구성
  : Protocol (http, https, ftp, smtp)
  : URL (도메인)
  : Port (3000 번 리액트, 3306 번 데이터베이스, 8080 번 웹서버)
  : Path (파일의 경로)
  : Query String (?쿼리명=값&쿼리명=값)
- 예) http://localhost:3000/todo/login?id=hong&pass=1234

## 1. 라우터를 먼저 고려해야 함.

- 일반적으로 웹서비스 기획이후에 화면구성을 도출
- 화면 구성에 맞게 화면흐름이 정의
- 화면 흐름에 맞는 경로를 작성

## 2. 라우터 구조 샘플.

- e.g. 회사 웹사이트 제작
  : 회사소개(대표님, 연혁, 파트너, 위치)
  : 제품소개(제품분류, 분류상 제품목록, 제품 상세내용, 제품 등록, 제품 수정, 제품 삭제)

- 라우터의 Path를 고민한다.
  : /company
  : /company/ceo
  : /company/history
  : /company/partner
  : /company/location

  : /good
  : /good/detail/번호
  : /good/delete/번호
  : /good/modify/번호

## 3. 프로젝트 소스 폴더 및 파일 구조

- src/pages/company/Index.js /company 라고 적으면 나오는 기본 페이지를 위한 파일은 주로 index라고 한다.
- src/pages/company/Ceo.js
- src/pages/company/History.js
- src/pages/company/Partner.js
- src/pages/company/Location.js

- src/pages/good/Index.js
- src/pages/good/Detail.js
- src/pages/good/Modify.js
- src/pages/good/Delete.js

## 4. react-router-dom 활용

### 4.1. 적용 단계

- Router > Routes > Route
  : Router 는 BrowserRouter 사용하면 됨

### 4.2. BrowserRouter 적용

- 기준은 App.js 에 적용

```js
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return <BrowserRouter>...</BrowserRouter>;
}

export default App;
```

### 4.3. Routes 적용

```js
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 4.4. Route 들 작성

```js
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/company"></Route>
        <Route path="/company/ceo"></Route>
        <Route path="/company/history"></Route>
        <Route path="/company/partner"></Route>
        <Route path="/company/location"></Route>
        <Route path="/good"></Route>
        <Route path="/good/번호"></Route>
        <Route path="/good/delete/번호"></Route>
        <Route path="/good/modify/번호"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 4.5. 보여줄 컴포넌트 또는 JSX 배치

```JS
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/company" element={<h1>회사첫 페이지</h1>}></Route>
        <Route path="/company/ceo" element={<h1>대표 페이지</h1>}></Route>
        <Route path="/company/history" element={<h1>연혁 페이지</h1>}></Route>
        <Route path="/company/partner" element={<h1>파트너 페이지</h1>}></Route>
        <Route path="/company/location" element={<h1>위치 페이지</h1>}></Route>
        <Route path="/good" element={<h1>제품첫 페이지</h1>}></Route>
        <Route path="/good/번호" element={<h1>각제품 페이지</h1>}></Route>
        <Route
          path="/good/delete/번호"
          element={<h1>제품삭제 페이지</h1>}
        ></Route>
        <Route
          path="/good/modify/번호"
          element={<h1>제품수정 페이지</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

### 4.6 Nested(중첩) Route 활용

- 아주 중요한 사항으로 중첩된 라우터는 반드시 `상대경로` 설정

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/comapny">
          <Route path="ceo"></Route>
          <Route path="history"></Route>
          <Route path="partner"></Route>
          <Route path="location"></Route>
        </Route>

        <Route path="/good">
          <Route path="번호"></Route>
          <Route path="delete/번호"></Route>
          <Route path="modify/번호"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 4.7 없는 path로 접근한 경우 Route 활용

^^
NotFound는 무조건 젤 아래로!!!!!!!!!!

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/comapny">
          <Route path="ceo"></Route>
          <Route path="history"></Route>
          <Route path="partner"></Route>
          <Route path="location"></Route>
        </Route>

        <Route path="/good">
          <Route path="번호"></Route>
          <Route path="delete/번호"></Route>
          <Route path="modify/번호"></Route>
        </Route>
        {/* 잘못된 경로 */}
        <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 4.8 기본 주소 즉 / 경로 Route 활용

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 루트 경로 */}
        <Route path="/"></Route>
        <Route path="/comapny">
          <Route path="ceo"></Route>
          <Route path="history"></Route>
          <Route path="partner"></Route>
          <Route path="location"></Route>
        </Route>

        <Route path="/good">
          <Route path="번호"></Route>
          <Route path="delete/번호"></Route>
          <Route path="modify/번호"></Route>
        </Route>
        {/* 잘못된 경로 */}
        <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 4.9 중첩 Router의 기본 페이지 출력 활용

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 루트 경로 */}
        <Route path="/"></Route>

        <Route path="/comapny">
          {/* path상 기본페이지 */}
          <Route index></Route>
          <Route path="ceo"></Route>
          <Route path="history"></Route>
          <Route path="partner"></Route>
          <Route path="location"></Route>
        </Route>

        <Route path="/good">
          {/* path상 기본페이지 */}
          <Route index></Route>
          <Route path="번호"></Route>
          <Route path="delete/번호"></Route>
          <Route path="modify/번호"></Route>
        </Route>
        {/* 잘못된 경로 */}
        <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 4.10 공통 레이아웃 적용하기 (선택)

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* 공통 레이아웃 적용 */}
      <div className="wrap">
        <header className="header"></header>
        <Routes>
          {/* 루트 경로 */}
          <Route path="/"></Route>

          <Route path="/comapny">
            {/* path상 기본페이지 Nested 안에는 / Nope */}
            <Route index></Route>
            <Route path="ceo"></Route>
            <Route path="history"></Route>
            <Route path="partner"></Route>
            <Route path="location"></Route>
          </Route>

          <Route path="/good">
            {/* path상 기본페이지 */}
            <Route index></Route>
            <Route path="번호"></Route>
            <Route path="delete/번호"></Route>
            <Route path="modify/번호"></Route>
          </Route>
          {/* 잘못된 경로 */}
          <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
        </Routes>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### 4.11. 라우터에 변수(파라메터) 전달하기

- /good/번호
  : 여기서 번호는 수시로 달라요.
  : `/good/:id`
  : http://localhost:3000/good/1
  : http://localhost:3000/good/152
  : http://localhost:3000/good/578

- /good/delete/번호
  : 여기서 번호는 수시로 달라요.
  :`/good/delete/:id`
  : http://localhost:3000/good/delete/1
  : http://localhost:3000/good/delete/152
  : http://localhost:3000/good/delete/578

- /good/modify/번호
  : 여기서 번호는 수시로 달라요.
  :`/good/modify/:id`
  : http://localhost:3000/good/modify/1
  : http://localhost:3000/good/modify/152
  : http://localhost:3000/good/modify/578

### 4.12. 라우터에 따라서 보여줄 JSX 작성

- `<Route path="경로" element={JSX}></Route>`

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* 공통 레이아웃 적용 */}
      <div className="wrap">
        <header className="header"></header>
        <Routes>
          {/* 루트 경로 */}
          <Route path="/" element={<h1>홈페이지</h1>}></Route>

          <Route path="/company">
            {/* path상 기본페이지 */}
            <Route index element={<h1>회사소개</h1>}></Route>
            <Route path="ceo" element={<h1>대표소개</h1>}></Route>
            <Route path="history" element={<h1>회사연역</h1>}></Route>
            <Route path="partner" element={<h1>파트너소개</h1>}></Route>
            <Route path="location" element={<h1>회사위치</h1>}></Route>
          </Route>

          <Route path="/good">
            {/* path상 기본페이지 */}
            <Route index element={<h1>제품소개</h1>}></Route>
            <Route path=":id" element={<h1>제품상세</h1>}></Route>
            <Route path="delete/:id" element={<h1>제품삭제</h1>}></Route>
            <Route path="modify/:id" element={<h1>제품수정</h1>}></Route>
          </Route>
          {/* 잘못된 경로 */}
          <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
        </Routes>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### 4.13. 라우터를 이동하기

- html 태그에서는 `<a href="패스">메뉴명</a>` 작성
  : 웹브라우저에서 모든 소스를 다시 불러들임

- Link 는 리액트에서 새로고침 방지역할
  : `import { Link } from "react-router-dom";`
  : `<Link to="패스">메뉴명</Link>` 으로 작성

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 공통 레이아웃 적용 */}
      <div className="wrap">
        <header className="header">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/company">회사소개</Link>
              <ul>
                <li>
                  <Link to="/company/ceo">대표소개</Link>
                </li>
                <li>
                  <Link to="/company/history">회사연역</Link>
                </li>
                <li>
                  <Link to="/company/partner">파트너소개</Link>
                </li>
                <li>
                  <Link to="/company/location">회사위치</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/good">제품소개</Link>
              <ul>
                <li>
                  <Link to="/good/1">제품상세</Link>
                </li>
                <li>
                  <Link to="/good/delete/2">제품삭제</Link>
                </li>
                <li>
                  <Link to="/good/modify/3">제품수정</Link>
                </li>
              </ul>
            </li>
          </ul>
        </header>
        <Routes>
          {/* 루트 경로 */}
          <Route path="/" element={<h1>홈페이지</h1>}></Route>

          <Route path="/company">
            {/* path상 기본페이지 */}
            <Route index element={<h1>회사소개</h1>}></Route>
            <Route path="ceo" element={<h1>대표소개</h1>}></Route>
            <Route path="history" element={<h1>회사연역</h1>}></Route>
            <Route path="partner" element={<h1>파트너소개</h1>}></Route>
            <Route path="location" element={<h1>회사위치</h1>}></Route>
          </Route>

          <Route path="/good">
            {/* path상 기본페이지 */}
            <Route index element={<h1>제품소개</h1>}></Route>
            <Route path=":id" element={<h1>제품상세</h1>}></Route>
            <Route path="delete/:id" element={<h1>제품삭제</h1>}></Route>
            <Route path="modify/:id" element={<h1>제품수정</h1>}></Route>
          </Route>
          {/* 잘못된 경로 */}
          <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
        </Routes>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### 4.14. 컴포넌트 만들기

- 컴포넌트는 JSX 를 모아두고 다양한 React 기능을 사용함.

### 4.14.1. 폴더 구조 만들기

- 화면을 만들기 위해서 사용되는 컴포넌트는 /src/components 폴더에 보관
  : /src/components/ui
  : /src/components/buttons
  : /src/components/popup

- 한장의 화면을 만드는 컴포넌트는 /src/pages 폴더에 보관
  : pages 폴더는 하위 폴더로 각 주메뉴의 폴더들이 있으면 좋음.
  : 예) /src/pages/company
  : 예) /src/pages/good

### 4.14.2. 컴포넌트 만들기

- /src/components/layout/Header.js

```js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/company">회사소개</Link>
          <ul>
            <li>
              <Link to="/company/ceo">대표소개</Link>
            </li>
            <li>
              <Link to="/company/history">회사연역</Link>
            </li>
            <li>
              <Link to="/company/partner">파트너소개</Link>
            </li>
            <li>
              <Link to="/company/location">회사위치</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/good">제품소개</Link>
          <ul>
            <li>
              <Link to="/good/1">제품상세</Link>
            </li>
            <li>
              <Link to="/good/delete/2">제품삭제</Link>
            </li>
            <li>
              <Link to="/good/modify/3">제품수정</Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
```

- /src/components/layout/Footer.js

```js
import React from "react";

const Footer = () => {
  return <footer className="footer"></footer>;
};

export default Footer;
```

- 주메뉴 라우터 path 에 연결하는 페이지 컴포넌트는 Index.js 추천
  : http://localhost:3000/company
  : /src/pages/company/Index.js

```js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// Index 라는 이름 충돌로 변경함
import Company from "./pages/company/Index";
import Home from "./pages/Index";

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
            <Route path=":id" element={<h1>제품상세</h1>}></Route>
            <Route path="delete/:id" element={<h1>제품삭제</h1>}></Route>
            <Route path="modify/:id" element={<h1>제품수정</h1>}></Route>
          </Route>
          {/* 잘못된 경로 */}
          <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

#### 4.14.3. 페이지 컴포넌트에 라우터 매개변수 보여주기

- 예)
  : 라우터의 매개변수(parameter)가 변했다. (설명글)
  : 라우터의 params 전달(리액트 표현) ft. components에선 props
  : http://localhost:3000/good/딸기
  : http://localhost:3000/good/사과
  : http://localhost:3000/good/수박
  : `<Route path=":과일" element={}></Route>`
  : `<Route path=":id" element={}></Route>`
- 페이지 컴포넌트
  : /src/pages/good/Detail.js
  :`import GoodDetail from "./pages/goods/Detail";`
  :`<Route path=":id" element={<GoodDetail></GoodDetail>}></Route>`

- params 전달 값 출력 하기
  : 단계 1

  ```js
  const Detail = () => {
    return <h1>제품상세</h1>;
  };
  export default Detail;
  ```

  : 단계 2

```js
import { useParams } from "react-router-dom";

const Detail = () => {
  // js 자리
  // path 로 전달된 params 출력해 보기
  // 예) /company/사과
  // 예) /company/딸기
  const params = useParams();
  console.log(params);
  // {id: 1}
  return <h1>{params.id} 제품 상세</h1>;
};

export default Detail;
```

- 단계 3 - 완성

```js
import { useParams } from "react-router-dom";

const Detail = () => {
  // js 자리
  // path 로 전달된 params 출력해 보기
  // 예) /company/사과
  // 예) /company/딸기
  // const params = useParams();
  // console.log(params);
  // {id: 1}
  // 객체 구조 분해 할당을 권장
  const { id } = useParams();

  return <h1> {id} 제품 상세</h1>;
};

export default Detail;
```
