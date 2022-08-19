import axios from "axios";
import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle, onEdit, onSave }) => {

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
          onSave={onSave}
        />
      ))}
    </div>
  );
};

export default TodoList;
