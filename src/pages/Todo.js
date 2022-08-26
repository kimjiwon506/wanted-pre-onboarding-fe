import React, { useState, useRef, useCallback, useReducer, memo } from "react";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import axios from "axios";
import { TodoReducer, initialTodo } from "../reducer";

const Todo = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialTodo);

  const nextId = useRef(3);

  const onInsert = (text) => {
    dispatch({
      type: "INSERT",
      todo: {
        id: nextId.current,
        text: text,
        isCompleted: false,
      },
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
    //window.alert("해당 투두리스트가 삭제되었습니다.");
  };

  const onEdit = (newValue, id) => {
    dispatch({
      type: "EDIT",
      text: newValue,
      id: id
    })
  };

  const onSave = (id, text, todoCheck) => {
    dispatch({
      type: "SAVE",
      id: id,
      text: text,
      isCompleted: todoCheck
    })
  };

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
        onEdit={onEdit}
        onSave={onSave}
        // onCheck={onCheck}
      />
    </div>
  );
};

export default React.memo(Todo);
