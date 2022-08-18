import React, { useState, useRef, useCallback, useEffect } from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);

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

  const onEdit = (newValue, id) => {
    // setTodos(todos.map((todo)=>{}))
    const newTodoList = todos.map((item) => ({ ...item, text: item.id === id ? newValue : item.text }));
    setTodos(newTodoList);
  }

  return (
    <div>
      <h3>일정관리</h3>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
};

export default Todo;
