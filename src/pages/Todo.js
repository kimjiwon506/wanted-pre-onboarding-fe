import React, { useState, useRef, useCallback, useReducer } from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import axios from "axios";
import { TodoReducer, initialTodo } from "../reducer";

const Todo = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialTodo);

  // const [todos, setTodos] = useState([
  //   { id: 1, text: "투두리스트 아이템", isCompleted: false, userId: 1 },
  // ]);
  const nextId = useRef(14);

  const onInsert = useCallback((text) => {
    dispatch({
      type: "INSERT",
      todo: {
        id: nextId.current,
        text: text,
        isCompleted: false,
      },
    });
  }, [todos]);

  const onRemove = useCallback((id)=>{
    dispatch({
      type: "REMOVE",
      id
    })
  },[todos])

  // const onRemove = useCallback(
  //   (id) => {
  //     const removeItem = todos.filter((todo) => todo.id !== id);
  //     setTodos(removeItem);
  //     window.alert("해당 투두리스트가 삭제되었습니다.");
  //   },
  //   [todos]
  // );

  // const onEdit = (newValue, id) => {
  //   const newTodoList = todos.map((item) => ({
  //     ...item,
  //     text: item.id === id ? newValue : item.text,
  //   }));
  //   setTodos(newTodoList);
  // };

  // const onSave = (id, text, todoCheck) => {
  //   axios.post("/todos",{
  //     id: id,
  //     todo: text,
  //     isCompleted: todoCheck
  //   },
  //   {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('loginKey')}`,
  //       "Content-Type": "application/json",
  //     },
  //   }
  //   ).then((response)=>{console.log(response)})
  //   window.alert("전송이 완료되었습니다!");
  // };

  // const onCheck = (todoCheck) => {
  //   const newChecked = todos.map((item) => ({
  //     ...item,
  //     isCompleted: todoCheck,
  //   }));
  //   setTodos(newChecked);
  // };

  return (
    <div>
      <h3>일정관리</h3>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        // onEdit={onEdit}
        // onSave={onSave}
        // onCheck={onCheck}
      />
    </div>
  );
};

export default Todo;
