# axios

- [axios](https://axios-http.com/kr/docs/intro)

## 1. REST API 연동 기본

### 1.1. CRUD

- Create : post
- Read : get
- Update : put(전체 수정), patch(항목 중 일부 수정)
- Delete : delete

### 1.2. 연동 테스트

- Postman : 기본
- Swagger : 백엔드에서 구축을 해주어야 함.

### 1.3. Proxy 설정

- 서비스 하는 컴퓨터가 다를 때
- 백엔드에서 구축한 API 서버와 프론트엔드 서버가 다를 때 오류발생
  : CORS 에러(접근권한 없다는 에러)
  : 개발 중에 자주 발생
  : `npm run build` 후에 파일 전달시까지 테스트 곤란
- 개발 중에 하나의 컴퓨터에서 API 에 접근하는 것처럼 진행을 위해서 proxy 설정
- package.json 에 proxy 셋팅
  : `"proxy": "주소:port번호"`

## 2. axios 설치

- `npm i axios`

## 3. axios 구성 권장

- 폴더
  : `/src/apis` 폴더 생성
- axios 환경 설정 파일
  : `/src/apis/config.js` 파일 생성

## 4. axios 권장하는 코딩 자리 및 순서이해

- useEffect 에서 작성 및 호출
  : 화면을 보여줄 때 원하는 tag 에 보여주는 게 일반적
  : 화면이 완성되어 보여지는 시점이 useEffect 이므로

### 4.1. 기본 코드

: 아래 처럼해도 됩니다.
: 하지만, axios 호출 함수가 지역변수 이므로 재호출 곤란

```js
import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  getLists();

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get("주소");
        // data 속성은 axios 의 기본 객체 속성
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    // axios 호출
    getLists();
  }, []);
  return <div></div>;
};

export default App;
```

: 여러번 호출하기 위해서 외부로 이동
: 외부로 이동한 것은 잘했지만, 코드 대단히 복잡하다.
: 데이터를 보여주는 것이 컴포넌트인데,
: 데이터를 호출하는 것도 컴포넌트에서 관리?

- 웹 서비스가 간단한 결과물이면 이렇게 관리를 해도 괜찮을 것 같다.
- 하지만, 리액트를 도입하는 서비스는 실제로 대단히 복잡해집니다.
- 그래서, 아래 방식도 그렇게 권장하지는 않는다.
- 결론은 데이터 호출 코드는 외부 파일로 만드시길 권장합니다.

```js
import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  const getLists = async () => {
    try {
      const res = await axios.get("주소");
      // data 속성은 axios 의 기본 객체 속성
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // axios 호출
    getLists();
  }, []);
  return <div></div>;
};

export default App;
```

- /src/apis/기능별.js 를 만들기를 권장함
  : /src/apis/sampleApi.js

```js
import axios from "axios";

export const getLists = async () => {
  try {
    const res = await axios.get("주소");
    // data 속성은 axios 의 기본 객체 속성
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
```

- App.js

```js
import { useEffect } from "react";
import { getLists } from "./apis/sampleApi";

const App = () => {
  useEffect(() => {
    // axios 호출
    getLists();
  }, []);
  return <div></div>;
};

export default App;
```


## 5. 샘플 코드
- https://jsonplaceholder.typicode.com/
- API 문서를 보면
  : /posts   100 posts
  : /comments   500 comments
  : /albums   100 albums
  : /photos   5000 photos
  : /todos   200 todos
  : /users   10 users
- /src/apis/각 폴더 생성을 권장함.
- /src/apis/photos/apisphotos.js
- /src/apis/todos/apistodos.js




## 6. 파일업로드

### 6.1 JSX
: 12-file 브랜치 참조
```js
<input type="file" onChange={e=>{handleFileChange(e)}}>
```

```js
const handleFileChange = (e) => {
  const file = e.target.files
}
```