import { useEffect } from "react";
import {
  deleteTodo,
  patchTodo,
  postTodo,
  putTodo,
} from "./apis/todos/apistodos";

const App = () => {
  useEffect(() => {
    const todo = {
      title: "안녕하세요. 오늘 할일입니다.",
      completed: false,
    };

    deleteTodo(5, todo);
  }, []);
  return <div></div>;
};

export default App;
