import React, { useState, useRef, useCallback, useEffect } from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "투두리스트 만들기", isCompleted: false },
  ]);
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
    },
    [todos]
  );

  const onEdit = (newValue, id) => {
    const newTodoList = todos.map(
      (item) => (
        console.log(item.id, id),
        { ...item, text: item.id === id ? newValue : item.text }
      )
    );
    setTodos(newTodoList);
  };

  const onSave = () => {
    
  }

  return (
    <div>
      <h3>일정관리</h3>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onEdit={onEdit} onSave={onSave} />
    </div>
  );
};

export default Todo;
