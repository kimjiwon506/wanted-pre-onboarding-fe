import React, { useState, useRef, useCallback, useEffect } from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "투두리스트 만들기 테스트", isCompleted: false },
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        isCompleted: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
      // axios.delete(`/todos/:${id}`).then((response) => {
      //   console.log(setTodos(response))
      // }).catch((response) => {
      //   console.log(response)
      // })
    },
    [todos]
  );

  return (
    <div>
      <h3>일정관리</h3>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </div>
  );
};

export default Todo;
