import React, { useReducer } from "react";

const initialTodo = [
  { id: 1, text: "투두리스트 할일만들기", isCompleted: false },
  { id: 2, text: "투두리스트 할일만들기", isCompleted: false },
];

const TodoReducer = (state, action) => {
  //console.log('리듀서 클릭', state, action)
  switch (action.type) {
    case "INSERT":
      return state.concat(action.todo);
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT":
      return state.map((item) => ({
        ...item,
        text: item.id === action.id ? action.text : item.text,
      }));
  }
};

export { TodoReducer, initialTodo };
