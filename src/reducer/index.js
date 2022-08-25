import React, { useReducer } from "react";

const initialTodo = [
  { id: 1, text: "투두리스트 할일만들기", isCompleted: false },
];

const TodoReducer = (state, action) => {
  //console.log('리듀서 클릭', state, action)
  switch(action.type){
    case "INSERT":
      return state.concat(action.todo)
    case "REMOVE":
      return state.filter((id)=> id !== action.id);
  }
  
  // switch (action.type) {
  //   case "INSERT":
  //     return state.concat(action.todo);
  //   case "REMOVE":
  //     return;
  //   case "EDIT":
  //     return;
  //   case "SAVE":
  //     return;
  //   case "CHECKED":
  //     return;
  // }
};

export { TodoReducer, initialTodo };
