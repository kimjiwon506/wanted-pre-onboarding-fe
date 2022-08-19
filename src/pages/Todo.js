import React, { useState, useRef, useCallback, useEffect } from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "투두리스트 아이템", isCompleted: false },
  ]);
  const nextId = useRef(2);

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
      const removeItem = todos.filter((todo)=>todo.id !== id)
      // setTodos(todos.filter((todo) => todo.id !== id));
      setTodos(removeItem)
      window.alert('해당 투두리스트가 삭제되었습니다.')
    },
    [todos]
  );

  const onEdit = (newValue, id) => {
    const newTodoList = todos.map(
      (item) => (
        { ...item, text: item.id === id ? newValue : item.text }
      )
    );
    setTodos(newTodoList);
  };

  const onSave = () => {
    window.alert('전송이 완료되었습니다!')
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
