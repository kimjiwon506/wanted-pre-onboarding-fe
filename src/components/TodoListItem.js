import React from "react";
import { FiXCircle, FiEdit3, FiArrowUpCircle } from "react-icons/fi";
import styled from "styled-components";

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <TodoListItemStyle>
      <div className="todoTitle">{text}</div>
      <div className="icons">
        <FiEdit3 />
        {checked ? (
          <FiArrowUpCircle className="FiArrowUpCircle checked" />
        ) : (
          <FiArrowUpCircle className="FiArrowUpCircle unChecked" />
        )}
        <FiXCircle />
      </div>
    </TodoListItemStyle>
  );
};

const TodoListItemStyle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;

  border-radius: 6px;

  & + & {
    border-top: 1px solid #cccccc;
  }

  .todoTitle {
    flex: 1;
  }
  .icons {
    display: flex;
    width: 95px;
    justify-content: space-between;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .FiArrowUpCircle {
    &.checked {
      color: #cccccc;
    }
    &.unChecked {
    }
  }
`;

export default TodoListItem;
