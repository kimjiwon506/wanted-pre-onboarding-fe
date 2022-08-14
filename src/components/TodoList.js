import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle, onUpdate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
