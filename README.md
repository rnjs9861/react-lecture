# axios TS버전

## 1. axios 설치(TS)

- `npm install axios`
- `npm install @types/axios`
  : ts 인 경우에는 axios 의 타입 정의된 내용이 필요하다.

## 2. JSX 를 리턴하지 않으므로 확장자가 ts 이다.

- 확장자 변경 (js ---> ts)
  : `/src/apis/todos/apistodos.js`
  : `/src/apis/todos/apistodos.ts`

```ts
import axios from "axios";
// import { ITodo } from "../../types/todotype";
const todoURL = "https://jsonplaceholder.typicode.com/todos/";

// 자주 활용되는 데이터 모양을 위해서
// api 호출 시 전달되는 매개변수 모양
// api 호출 이후  리턴되는 데이터의 모양
export interface ITodo {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

// 자료 1개 호출하기
const getTodo = async (id: number): Promise<ITodo> => {
  try {
    const res = await axios.get(`${todoURL}${id}`);
    console.log(res);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 여러개 호출하기
const getTodos = async (): Promise<ITodo[]> => {
  try {
    const res = await axios.get(todoURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 추가하기
const postTodo = async ({ title, completed }: ITodo): Promise<ITodo> => {
  try {
    const res = await axios.post(todoURL, { title, completed });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 전체 내용 업데이트 하기
// put 은 어떤 대상을 업데이트한다.
const putTodo = async (
  id: number,
  { title, completed }: ITodo,
): Promise<ITodo> => {
  try {
    const res = await axios.put(`${todoURL}${id}`, { title, completed });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 중 일부분 내용 업데이트 하기
// patch 은 어떤 대상을 일부분만 업데이트한다.
const patchTodo = async (id: number, { title }: ITodo): Promise<ITodo> => {
  try {
    const res = await axios.patch(`${todoURL}${id}`, { title });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 삭제하기
const deleteTodo = async (id: number): Promise<ITodo> => {
  try {
    const res = await axios.delete(`${todoURL}${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getTodo, getTodos, postTodo, putTodo, patchTodo, deleteTodo };
```

## 3. axios 에 정의한 매개변수 및 리턴 타입의 데이터 모양을 재활용

- `/src/types` 폴더 지정
  : axios 뿐만 아니라 여러 컴포넌트에 활용된 데이터 모양들을 정의함.
  : 컴포넌트에 전달하는 Props 등에 대한 데이터 모양들도 정의함.
  : 일반적으로 interface 정의 및 type 정의가 포함됩니다.
  : 참고로 interface 와 type은 용도가 똑같으므로 호환이 가능하다.
- `/src/types/todotype.ts`

```ts
export interface ITodo {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}
```

- `/src/apis/todos/apistodos.ts`

```ts
import axios from "axios";
import { ITodo } from "../../types/todotype";
const todoURL = "https://jsonplaceholder.typicode.com/todos/";

// 자료 1개 호출하기
const getTodo = async (id: number): Promise<ITodo> => {
  try {
    const res = await axios.get(`${todoURL}${id}`);
    console.log(res);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 여러개 호출하기
const getTodos = async (): Promise<ITodo[]> => {
  try {
    const res = await axios.get(todoURL);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 추가하기
const postTodo = async ({ title, completed }: ITodo): Promise<ITodo> => {
  try {
    const res = await axios.post(todoURL, { title, completed });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 전체 내용 업데이트 하기
// put 은 어떤 대상을 업데이트한다.
const putTodo = async (
  id: number,
  { title, completed }: ITodo,
): Promise<ITodo> => {
  try {
    const res = await axios.put(`${todoURL}${id}`, { title, completed });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 중 일부분 내용 업데이트 하기
// patch 은 어떤 대상을 일부분만 업데이트한다.
const patchTodo = async (id: number, { title }: ITodo): Promise<ITodo> => {
  try {
    const res = await axios.patch(`${todoURL}${id}`, { title });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// 자료 1개 삭제하기
const deleteTodo = async (id: number): Promise<ITodo> => {
  try {
    const res = await axios.delete(`${todoURL}${id}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getTodo, getTodos, postTodo, putTodo, patchTodo, deleteTodo };
```

## 4. axios 정의한 기능을 호출하기

- `/src/AppRoot.tsx`

```tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { getTodo } from "./apis/todos/apistodos";
import { getPhoto, getPhotos } from "./apis/photos/apisphotos";
// 정의해 둔 데이터 모양을 부른다.
import { ITodo } from "./types/todotype";
import { IPhoto } from "./types/phototype";

const AppRoot = () => {
  const getTodoOne = async () => {
    const result: ITodo = await getTodo(3);
    console.log(result);
  };

  const getPhotoOne = async () => {
    const result: IPhoto = await getPhoto(3);
    console.log(result);
  };
  const getPhotoAll = async () => {
    const result: IPhoto[] = await getPhotos();
  };

  useEffect(() => {
    getTodoOne();
  }, []);
  return <div></div>;
};

export default AppRoot;
```
