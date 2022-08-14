import React, { useState, useRef, useCallback } from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "투두리스트 만들기 테스트", checked: false },
  ]);

  const nextId = useRef(4);
  const editId = useRef("");

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
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
