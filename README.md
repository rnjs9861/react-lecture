# Component state

- 기본형

```js
const AppRoot: React.FC<AppRootProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
```

## 1. state 에 데이터 종류명시하기 (TS)

- 마우스 커서를 state 변수에 올려본다.
  : 타입 추론을 보고 결정한다.
  : `const count: number`
  : `useState<>(0)`
  : ` const [count, setCount] = useState<number>(0);`
- 활용예

```ts
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>("");
const [login, setLogin] = useState<boolean>(false);
const [todos, setTodos] = useState<[]>([]);
const [info, setInfo] = useState<null>(null);
```

## 2. state 에 객체 데이터 명시하기

- `const [user, setUser] = useState(member);`

```ts
const member = {
  pk: 1,
  id: "hong",
  level: 10,
};
const [user, setUser] = useState<{
  pk: number;
  id: string;
  level: number;
}>(member);
```

- interfac 로 업데이트 하기

```ts
// 사용자 데이터 정의
interface IUser {
  pk: number;
  id: string;
  level: number;
  login?: boolean;
}
// 객체 데이터 정의하기
const member = {
  pk: 1,
  id: "hong",
  level: 10,
};
const [user, setUser] = useState<IUser>(member);
```

## 3. state 에 여러 종류 데이터 명시하기

```ts
// 여러가지 종류의 데이터를 기본 값으로 설정
const [userValue, setUserValue] = useState<number | string>(0);
setUserValue("A");
const [userPoint, setUserPoint] = useState<boolean | null | undefined | string>(
  false,
);
setUserPoint(null);
setUserPoint(undefined);
setUserPoint(true);
setUserPoint(0);
setUserPoint("1200");
```

## 4. state 에 배열에 데이터 명시하기

```ts
// 학생정보 데이터모양
interface IStudent {
  pk: number;
  name: string;
  hobby: string;
}

// 배열에 데이터 명시하기
const [tourList, setTourList] = useState<string[]>(["대구", "광주", "경주"]);
const [priceList, setPriceList] = useState<number[]>([1000, 2000, 3000]);
const [good, setGoood] = useState<(string | number | boolean)[]>([
  "수박",
  5000,
  0.5,
  true,
]);
const students = [
  { pk: 1, name: "홍길동", hobby: "축구" },
  { pk: 2, name: "고길동", hobby: "등산" },
  { pk: 3, name: "박길동", hobby: "산책" },
];
const [studentList, setStudentList] = useState<IStudent[]>(students);
```

### 1.1. 일반 변수일 경우

- 일반변수가 값이 변경이 되면 해당 컴포넌트에 값은 바뀐다.
- 하지만 하위 즉, 포함된 자식 컴포넌트는 값이 변한지 모른다.
- 그래서, 출력 결과가 변하지 않는다.
- 그렇다면, 자식 컴포넌트는 새로 반영을 하는 조건이 있지 않을까?
- 자식 컴포넌트에 새로운 값을 반영하려면 아래의 2가지 조건 중 만족이 되어야 함.
  : 엄마 즉, 자식을 가지고 있는 컴포넌트가 새로 고침이 되어야 한다.
  : 자식 컴포넌트에 상태가 변경되었다고 알려야 한다.
- 일반 변수는 컴포넌트가 새로고침이 되는 조건에 부합하지 않기때문에 갱신안됨

### 1.2. useState 변수일 경우

- 새로 랜더링 되므로 자식도 같이 새로 고침이 된다.
- 화면이 변경된다.
- 참고 사항
  : JS 가 새로 실행되지만 값은 보관(클로저)하고 있다.
  : 클로저는 함수가 종료되어도 함수 내부의 값을 유지하는 것을 말한다.
- 개선 사항
  : 리랜더링 되지 않아도 되는 컴포넌트 조차 새로 그려지는 단점.
  : 성능 이슈가 발생한다.

## 2. 컴포넌트용 state 사용시 어려운점

- setState(새로운값) 을 진행하고, 같은 블록에서 참조하면 예전값이 보인다.
- 이유는 state 가 함수가 종료되면 값이 변하는 Closer 라서

```js
const changeLogin = () => {
  setLogin(!login);
  console.log("현재 login : ", login);
};
```

- 값이 정상적으로 변경되었는지 꼭 디버깅을 해보시길 추천합니다.

```js
useEffect(() => {
  console.log("Home 이 새로고침 되니? USE-EFFECT", login);
}, [login]);
```

## 3. 연속으로 set을 진행하는 경우는 주의

- 연속으로 여러번 동시에 set으로 업데이트하는 경우
- useState 는 비동기이므로 원하지 않는 결과가 나온다.
- 전제 조건은 연속으로 set 을 실행할 경우.
- 시나리오
  : 사용자가 만약 상품 1개가 아닌 4개를 선택했다.
  : 우리는 상품개수를 1개씩 처리할거라 예상했다.
  : 그래서, const [count, setCount] = useState(0);
  : 사용자가 장바구니에 담을 때 setCount를 실행한다.
  : 담은 개수를 {count} 를 출력했다. 그런데?

```js
const changeLogin = () => {
  // setLogin(!login);
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  console.log("현재 count : ", count);
};

useEffect(() => {
  console.log("Home 이 새로고침 되니? USE-EFFECT ", count);
}, [count]);
```

- 연속으로 set 을 실행하는 경우 업데이트 함수를 활용한다.

```js
const changeLogin = () => {
  // setLogin(!login);
  // useState 는 비동기 방식으로 처리된다.
  // 업데이트 함수 활용
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);

  console.log("현재 count : ", count);
};
```
